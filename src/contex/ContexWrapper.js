import App from "../App"
import Contex from "./Contex"
import { useState,useEffect,useReducer, useMemo } from "react"
import dayjs from "dayjs";
function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      console.log("State is :", state)
      console.log("payload is:", payload)
      console.log("type is:", type)
      return [...state, payload];
    case "update":
      return state.map((evt) =>
        evt.id === payload.id ? payload : evt
      );
    case "delete":
      return state.filter((evt) => evt.id !== payload.id);
    default:
      throw new Error();
  }
}
function initEvents() {
  const storageEvents = localStorage.getItem("savedEvents");
  const parsedEvents = storageEvents ? JSON.parse(storageEvents) : [];
  return parsedEvents;
}
 const  ContexWrapper = (props)=>{
     const [monthIndex, setMonthIndex] = useState(dayjs().month())
const [showEventModal , setShowEventModal] = useState(false)
const [count, setCount] = useState(10)
const [daySelected, setDaySelected] = useState(dayjs());
const [selectedEvent, setSelectedEvent] = useState(null)
const [labels, setLabels] = useState([]);

const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
[],
    initEvents
  );

  const filteredEvents = useMemo(() => {
    return savedEvents.filter((evt) =>
      labels
        .filter((lbl) => lbl.checked)
        .map((lbl) => lbl.label)
        .includes(evt.label)
    );
  }, [savedEvents, labels]);
  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);
  
  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
    const events =  JSON.parse(localStorage.getItem('savedEvents'))
    console.log("Events inside local in wrapper:", events)
  }, [savedEvents]);

console.log("Count is in  :", count)
function updateLabel(label) {
  setLabels(
    labels.map((lbl) => (lbl.label === label.label ? label : lbl))
  );
}
return (
    <div>
   
<Contex.Provider  value = {{showEventModal,setShowEventModal, count, setCount,  monthIndex, setMonthIndex , setDaySelected,daySelected,selectedEvent,setSelectedEvent,savedEvents,dispatchCalEvent,filteredEvents , setLabels,
        labels,
        updateLabel,}}>
        {props.children}
       {/* <App/> */}
    </Contex.Provider>
    </div>
)
    
}

export default ContexWrapper