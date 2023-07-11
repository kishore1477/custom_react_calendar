import App from "../App"
import Contex from "./Contex"
import { useState,useEffect,useReducer, useMemo,useRef } from "react"
import dayjs from "dayjs";
function savedEventsReducer(state, { type, payload }) {
  switch (type) {
    case "push":
      // console.log("State is :", state)
      // console.log("payload is:", payload)
      // console.log("type is:", type)
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
const reducer =(state, {type, payload})=>{
  switch (type) {
    case "push":
      // console.log("State is :", state)
      // console.log("payload is:", payload)
      // console.log("type is:", type)
      return [...state, payload];
    
    case "delete":
      return state.filter((evt) => evt.name !== payload.name);
      // return state.filter((evt) => evt.user !== payload.user);
    default:
      throw new Error();
  }

}
const reducerUsersEvent =(state, {type, payload})=>{
  switch (type) {
    case "push":
      // console.log("State is :", state)
      // console.log("payload is:", payload)
      // console.log("type is:", type)
      return [...state, payload];
    
    case "delete":
      return state.filter((evt) => evt.user !== payload.user);
      // return state.filter((evt) => evt.user !== payload.user);
    default:
      throw new Error();
  }

}
const reducerMCEM =(state, {type, payload})=>{
  switch (type) {
    case "push":
      // console.log("State is :", state)
      // console.log("payload is:", payload)
      // console.log("type is:", type)
      return [...state, payload];
    
    case "delete":
      return state.filter((evt) => evt.user !== payload.user);
    default:
      throw new Error();
  }

}


 const  ContexWrapper = (props)=>{
     const [monthIndex, setMonthIndex] = useState(dayjs().month())
const [showEventModal , setShowEventModal] = useState(false)
const [showMultiCalEventModal , setShowMultiCalEventModal] = useState(false)
const [count, setCount] = useState(10)
const [daySelected, setDaySelected] = useState(dayjs());
const [selectedEvent, setSelectedEvent] = useState(null)
const [selectedEventOfShowMoreM, setSelectedEventOfShowMoreM] = useState([])
const [labels, setLabels] = useState([]);
const [selectedUserEvent, setSelectedUserEvent] = useState(null)
const [selectedDate, setSelectedDate] = useState(dayjs())
const [view, setView] = useState('month')
const [checked, setChecked] = useState(true)
const [showSmallCal, setShowSmallCal] = useState(false)
const [loggedAdmin, setLoggedAdmin] = useState('')
const [loggedUser, setLoggedUser] = useState('')
const [userNameAddEvent, setUserNameAddEvent] = useState('')
const [adminNameAddEvent, setAdminNameAddEvent] = useState('')
const [selectedOffDay, setSelectedOffDay] = useState(["Saturday","Sunday"])
const [showEventDataModal, setShowEventDataModal] = useState(false)
const [showEventDataModal2, setShowEventDataModal2] = useState(false)
const [showMoreOpen, setShowMoreOpen] = useState(false)
const [allEventOfday, setAllEventOfday] = useState([]);
const [DateOfShowMore, setDateOfShowMore] = useState([]);
// useReducer hook is :-
const [savedEvents, dispatchCalEvent] = useReducer(savedEventsReducer,[],initEvents);
const [selectedUsers, dispatch] = useReducer(reducer, []);
const [selectedUsersEventFromLs, dispatchUsersEvent] = useReducer(reducerUsersEvent, []);
const [multipleCalendarEventModalArray, dispatchMultiCalEventModal] = useReducer(reducerMCEM, []);


 const  handleShowMoreOpen=(e,days,evt)=>{
  e.stopPropagation();
  console.log("evt is inside handleShowMoreOpen ..", evt)
    setShowMoreOpen(true)
    setAllEventOfday(evt)
    setDateOfShowMore(days)
  }
 const  handleShowMoreClose=()=>{
    setShowMoreOpen(false)


  }
 
  const admin = localStorage.getItem('admin')
  const loggedAdmin1 = admin && JSON.parse(localStorage.getItem('admin'))
  const loggedAdminName = loggedAdmin1 && loggedAdmin1.name
  const user = localStorage.getItem('loggedUser')
  const loggedUser1 = user && JSON.parse(localStorage.getItem('loggedUser'))
  const loggedUserName = loggedUser1 && loggedUser1.name
  // console.log("loggedUserName in wrapper is :", loggedUserName)

  const filteredEvents = useMemo(() => {
    // console.log("Labels is in filteredevents is ", labels)
    return savedEvents.filter((evt) =>{
     // Get the list of checked labels
     const checkedLabels = labels.filter((lbl) => lbl.checked)
// console.log("CheckedLabels is :",checkedLabels)
     // Get the list of labels in the checkedLabels array
     const labelNames = checkedLabels.map((lbl) => lbl.label)
    //  console.log("LabelNames is :", labelNames)
 
     // Return true if the event's label is in the list of label names
     return labelNames.includes(evt.label)
  });
  }, [savedEvents, labels]);
  // console.log("filtered events inside contex wrapper is :", filteredEvents)
  useEffect(() => {
    if (!showEventModal) {
      setSelectedEvent(null);
    }
  }, [showEventModal]);
  useEffect(() => {
    if (!showEventDataModal2) {
      setSelectedEventOfShowMoreM([]);
    }
  }, [showEventDataModal2]);
  
  useEffect(() => {
    localStorage.setItem("savedEvents", JSON.stringify(savedEvents));
    const events =  JSON.parse(localStorage.getItem('savedEvents'))
    // console.log("Events inside local in wrapper:", events)
  }, [savedEvents]);

useEffect(() => {
  setLabels((prevLabels) => {
    const  x =  [...new Set(savedEvents.map((evt) => evt.label))]
    // console.log("x is:", x)
    return x.map(
      (label) => {
        const currentLabel = prevLabels.find(
          (lbl) => lbl.label === label
        );
        const  createdlabel =[]
        const  users =[]

        savedEvents && savedEvents.map((evt,i) =>{
if(evt.label === label){
  // console.log("evt is :", evt)
  // alert("ok1")
  if(evt.user === loggedUserName || evt.user === loggedAdminName){
    // alert("ok2")
    users.push(evt.user)
    createdlabel.push(evt.createdLabel)
  }
}
        } )
        // console.log("Created label is :", createdlabel)
        return {
          label,
          checked: currentLabel ? currentLabel.checked : true,
          Createdlabel: createdlabel,
          user:users
        };
      }
    );
  });
}, [savedEvents,localStorage.getItem('loggedUser'),loggedAdminName]);
function updateLabel(label) {
  // console.log("Label in updt:", label)
  // console.log("Labels is in upd:", labels)
  setLabels(
    labels.map((lbl,i) => {
      // console.log("Labelk inside map is :", lbl)
  return  (

      lbl.label === label.label ? label : lbl
  )
}
  ))
}
// console.log("Saved events is :", savedEvents)
// console.log("selectedUsers:", selectedUsers)
return (
    <div>
   
<Contex.Provider  value = {{showEventModal,setShowEventModal, count, setCount,  monthIndex, setMonthIndex , setDaySelected,daySelected,selectedEvent,setSelectedEvent,savedEvents,dispatchCalEvent,filteredEvents , setLabels,
        labels, updateLabel,setSelectedUserEvent, selectedUserEvent, selectedUsers, dispatch , selectedDate, setSelectedDate, view, setView, checked, setChecked, multipleCalendarEventModalArray, dispatchMultiCalEventModal,showMultiCalEventModal, setShowMultiCalEventModal, setShowSmallCal, showSmallCal, loggedAdmin, loggedUser, setLoggedAdmin, setLoggedUser, setSelectedOffDay, selectedOffDay, userNameAddEvent, setUserNameAddEvent, adminNameAddEvent, setAdminNameAddEvent, selectedUsersEventFromLs,dispatchUsersEvent,loggedUserName, showEventDataModal, setShowEventDataModal,showEventDataModal2, setShowEventDataModal2, handleShowMoreOpen,handleShowMoreClose, showMoreOpen,setShowMoreOpen,allEventOfday, DateOfShowMore,setSelectedEventOfShowMoreM,selectedEventOfShowMoreM}}>
        {props.children}
       {/* <App/> */}
    </Contex.Provider>
    </div>
)
    
}

export default ContexWrapper