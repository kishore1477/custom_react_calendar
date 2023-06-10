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
const [selectedUserEvent, setSelectedUserEvent] = useState(null)

const [savedEvents, dispatchCalEvent] = useReducer(
    savedEventsReducer,
[],
    initEvents
  );

  const filteredEvents = useMemo(() => {
    console.log("Labels is in filteredevents is ", labels)
    return savedEvents.filter((evt) =>{
     // Get the list of checked labels
     const checkedLabels = labels.filter((lbl) => lbl.checked)
console.log("CheckedLabels is :",checkedLabels)
     // Get the list of labels in the checkedLabels array
     const labelNames = checkedLabels.map((lbl) => lbl.label)
     console.log("LabelNames is :", labelNames)
 
     // Return true if the event's label is in the list of label names
     return labelNames.includes(evt.label)
  });
  }, [savedEvents, labels]);
  console.log("filtered events inside contex wrapper is :", filteredEvents)
  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);
  
  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
    const events =  JSON.parse(localStorage.getItem('savedEvents'))
    // console.log("Events inside local in wrapper:", events)
  }, [savedEvents]);

useEffect(() => {
  setLabels((prevLabels) => {
    const  x =  [...new Set(savedEvents.map((evt) => evt.label))]
    console.log("x is:", x)
    return x.map(
      (label) => {
        const currentLabel = prevLabels.find(
          (lbl) => lbl.label === label
        );
        const  createdlabel =[]
        savedEvents && savedEvents.map((evt,i) =>{
if(evt.label === label){
  console.log("evt is :", evt)
  createdlabel.push(evt.createdLabel)
}
        } )
        // console.log("Created label is :", createdlabel)
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
          Createdlabel: createdlabel,
        };
      }
    );
  });
}, [savedEvents]);
function updateLabel(label) {
  console.log("Label in updt:", label)
  console.log("Labels is in upd:", labels)
  setLabels(
    labels.map((lbl,i) => {
      console.log("Labelk inside map is :", lbl)
  return  (

      lbl.label === label.label ? label : lbl
  )
}
  ))
}
return (
    <div>
   
<Contex.Provider  value = {{showEventModal,setShowEventModal, count, setCount,  monthIndex, setMonthIndex , setDaySelected,daySelected,selectedEvent,setSelectedEvent,savedEvents,dispatchCalEvent,filteredEvents , setLabels,
        labels,
        updateLabel,setSelectedUserEvent, selectedUserEvent}}>
        {props.children}
       {/* <App/> */}
    </Contex.Provider>
    </div>
)
    
}

export default ContexWrapper