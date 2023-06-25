import React , {useContext, useState,useEffect} from 'react'
import dayjs from 'dayjs'
import Contex from '../contex/Contex'
import moment from 'moment';

import { useNavigate } from "react-router-dom";
import { colorList } from './Colorpicker';
// import 'dayjs/locale/en'; // Import the desired locale
const Day = (props) => {
  const admin = localStorage.getItem('admin')
  const loggedAdmin = admin && JSON.parse(localStorage.getItem('admin'))
  const user = localStorage.getItem('loggedUser')
  const loggedUser = user && JSON.parse(localStorage.getItem('loggedUser'))
  dayjs().format()
const navigate = useNavigate()

  const contex = useContext(Contex)
  const  {setShowEventModal, monthIndex,setDaySelected ,savedEvents,setSelectedEvent,filteredEvents} = contex
  const [dayEvents, setDayEvents] = useState([]);
    const  { days, weekId, dayId, week} = props
    console.log("Week daya is :", week[0])

console.log("Filtered Events is:", filteredEvents)
console.log("filteredEvents.toReversed()Events is:", filteredEvents.toReversed())

  // jump to day view...
const  handleClickOnDate =(e,date)=> {
  e.preventDefault()
  e.stopPropagation();
    // let d = date
    let d = date.format("MM-DD-YYYY") + '$day'
     
    const dat = {
      view :'day',
       da : date.format("MM-DD-YYYY")
    }
    navigate(`/day/${d}`)
}
// const withStopPropagation =(e, cb) =>{
//   e.preventDefault()
//   e.stopPropagation();
//   return cb
// }

    useEffect(() => {
// console.log("Filtered events is :", filteredEvents)
// console.log(" savedEvents events is :", savedEvents)
      const events = filteredEvents.filter(
        (evt) =>
          dayjs(evt.day).format("DD-MM-YY") === days.format("DD-MM-YY")
      );
      setDayEvents(events);
      console.log("events is :", events)
      console.log("dayEvents Events is:", dayEvents)
    }, [filteredEvents, days]);

const getCurrentDayClass = ()=>{
  return days.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
  ? "bg-blue-600 text-white rounded-full w-7 h-7"
  : "";
}
// const loggedUser = localStorage.getItem('user')
// const loggedUser = ""
// const loggedUser = "Kishore Kumar"
// const loggedAdmin = localStorage.getItem('admin')
// const loggedAdmin = "admin"
// const loggedAdmin = ""
const events = [
  {
    user:"Kishore Kumar",
    title:"Complete Calendar",
    desc:"This is important task please complete it before given deadline so that we can review your work.",
    assigned_date:"02-06-23",
    location:'Lahore',
    start:"06-17-23",
    end:"06-29-23",
    color:"red",
  },
  {
    user:"Kishore Kumar",
    title:"Complete Calendar",
    desc:"This is important task please complete it before given deadline so that we can review your work.",
    assigned_date:"26-06-23",
    location:'Islamabad',
    color:"blue",
    start:"06-17-23",
    end:"06-20-23",
  },
  {
    user:"Kishore Kumar1",
    title:"Complete Calendar1",
    desc:"This is important task please complete it before given deadline so that we can review your work.",
    assigned_date:"06-06-23",
    location:'Karachi',
    color:"green", 
  },
  {
    user:"Kishore Kumar2",
    title:"Complete Calendar2",
    desc:"This is important task please complete it before given deadline so that we can review your work.",
    assigned_date:"03-06-23",
    location:'Hyderabad',
    color:"indigo",
  },
  {
    user:"Kishore Kumar3",
    title:"Complete Calendar3",
    desc:"This is important task please complete it before given deadline so that we can review your work.",
    assigned_date:"04-06-23",
    location:'Thar Coal',
    color:"purple",
  },
]


localStorage.setItem('events',  JSON.stringify(events))
const eventInLS = JSON.parse(localStorage.getItem('events'))
// console.log("event in Local storage", eventInLS)
// const loggedUserEvents = []

// eventInLS.map((evt, i)=>{
//   // console.log("Events.user is :", evt.user)
//   if(evt.user === loggedUser){
//     loggedUserEvents.push(evt)
//   }
// })

// console.log("Logged user events is :", loggedUserEvents)
const handleDivOnClick = () =>{
  if(loggedAdmin){
    // if( || loggedAdmin){
      setDaySelected(days)
      setShowEventModal(true)
    // }
   
  }else if(loggedUser.name === 'Arisha'){
    setDaySelected(days)
      setShowEventModal(true)
  }
}
  return (
    <div className='border  border-gray-100 flex flex-col '>
      {days.format("ddd") === 'Sun' || days.format("ddd") === 'Sat'? 
      <div className='h-24 z-0 w-full md:h-32 flex flex-col  overflow-hidden  items-center' >
       <header className="flex flex-col  items-center">
        { weekId === 0 &&  (
        <>
      
         <p className="text-sm  text-red-400 mt-1">
            {days.format("ddd").toUpperCase()}
          </p> 
         
          </>
        )}
          <p
          className={`text-sm   text-red-400  hover:rounded-full  w-7 h-7  flex justify-center items-center   text-center px-2  ${getCurrentDayClass()}`}
       >
          {days.format("DD")}
        </p> 
      
        
      </header>

      
      
      </div>: 
      <div className='h-24 z-0 w-full md:h-32 flex flex-col  overflow-hidden  items-center'  onClick={handleDivOnClick}>
       <header className="flex flex-col  items-center">
        { weekId === 0 &&  (
     
      
         <p className="text-sm mt-1">
            {days.format("ddd").toUpperCase()}
          </p>
         
         
        )}
       <p
          className={`text-sm  cursor-pointer hover:rounded-full hover:bg-blue-300 w-7 h-7  flex justify-center items-center   text-center px-2  ${getCurrentDayClass()}`} onClick={(e) =>  handleClickOnDate(e,days)}
       >
          {days.format("DD")}
          

          
        </p>
      
        
      </header>

      
      <div
        className="flex-1 "
       
      >
       
      {/* {eventInLS.map((evt,i)=>{
        
        // console.log("Evt start is :", evt.start)
      const start = evt.start && dayjs(evt.start).format('DD')
      const fullStart = evt.start && dayjs(evt.start)
      // console.log("Fullstart is :", fullStart)
      // const sstart =  start.format('DD')
      const end =evt.end && dayjs(evt.end).format('DD')
      const fullend =evt.end && dayjs(evt.end)
      // console.log("fullend is :", fullend)
      // console.log("(end-start) is:", (end-start))
      // console.log("days.format", days.format("DD-MM-YY"))
      let currentDate = fullStart;
while (dayjs(currentDate).isBefore(fullend) || dayjs(currentDate).isSame(fullend, 'day')) {
  // currentDate = dayjs(currentDate).add(1, 'day');

  // console.log("Insie while")
  // if(currentDate >= )
  // console.log("Current date iss :", currentDate)
  // console.log("Current date iss :", currentDate.format('D'))
  // console.log("days date iss :", days)
  // console.log("days date iss :", days.format('D'))
  // currentDate ?<></>
  if(days.format('DD-MM-YY') ===( currentDate && currentDate.format('DD-MM-YY'))){
    if(days.format('DD-MM-YY') === fullStart.format('DD-MM-YY')){
      return (
        <div onClick={()=>{setShowEventModal(true)}} className={`bg-${evt.color}-400 cursor-pointer flex items-center justify-center border-none w-24 md:w-96  z-10 border-gray-50`}>{ evt.title}</div>
      )
    }else if (days.format('DD-MM-YY') !== fullStart.format('DD-MM-YY')){
      return (
        <div onClick={()=>{setShowEventModal(true)}}  className={`bg-${evt.color}-400 cursor-pointer flex items-center justify-center border-none w-24 md:w-96  z-10 border-gray-50 `}><span className='invisible'>,</span></div>
      )
    }
 
  }
  
  currentDate = dayjs(currentDate).add(1, 'day');


}
     
       

        
     
      // console.log("Start date is the: ", start)
      // console.log("Sstart date is the: ", sstart)
      // console.log("End date is the: ", end)
    
      })} */}
      {filteredEvents.toReversed().map((evt,i)=>{
        console.log("i:",i)
        // console.log("Evt start is :", evt.start)
      const start = evt.start && dayjs(evt.start).format('DD')
      const fullStart = evt.start && dayjs(evt.start)
      // console.log("Fullstart is :", fullStart)
      // const sstart =  start.format('DD')
      const end =evt.end && dayjs(evt.end).format('DD')
      const fullend =evt.end && dayjs(evt.end)
      // console.log("fullend is :", fullend)
      // console.log("(end-start) is:", (end-start))
      // console.log("days.format", days.format("DD-MM-YY"))
      let currentDate = fullStart;
while (dayjs(currentDate).isBefore(fullend) || dayjs(currentDate).isSame(fullend, 'day')) {
  // currentDate = dayjs(currentDate).add(1, 'day');

  // console.log("Insie while")
  // if(currentDate >= )
  // console.log("Current date iss :", currentDate)
  // console.log("Current date iss :", currentDate.format('D'))
  // console.log("days date iss :", days)
  // console.log("days date iss :", days.format('D'))
  // currentDate ?<></>
  if(days.format('DD-MM-YY') ===( currentDate && currentDate.format('DD-MM-YY'))){
    if(days.format('DD-MM-YY') === fullStart.format('DD-MM-YY')){
      return (
        <div onClick={() => setSelectedEvent(evt)} className={`${colorList[evt.label]} cursor-pointer flex items-center justify-center border-none w-24 md:w-96  m-1  z-10 border-gray-50`}>{ evt.title}</div>
      )
    }else if (days.format('DD-MM-YY') !== fullStart.format('DD-MM-YY')){
      return (
       <div onClick={() => setSelectedEvent(evt)} className={`${colorList[evt.label]} cursor-pointer flex items-center justify-center border-none w-24 md:w-96 m-1 z-10 border-gray-50 `}>
          {days.format("ddd") === 'Mon'? <span className=''>{evt.title}</span>: <span className='invisible'>,</span>}
          <span className='invisible'>,</span></div>
      )
    }
 
  }
  
  currentDate = dayjs(currentDate).add(1, 'day');


}
     
       

        
     
      // console.log("Start date is the: ", start)
      // console.log("Sstart date is the: ", sstart)
      // console.log("End date is the: ", end)
    
      })}
        {/* {dayEvents.map((evt, idx) => {
          
       return (   <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={` ${colorList[evt.label]} p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate cursor-pointer`}
          >

            {dayjs(evt.day).format("DD-MM-YY") === days.format("DD-MM-YY") ?evt.title:<></>}
          </div>)
})} */}
         {/* {!loggedAdmin? <>{loggedUser && loggedUserEvents.map((event,i)=>{
if(event.assigned_date === days.format("DD-MM-YY")){
 return ( <p className=' '>{event.title}</p>)
}
         })}</>:<>{eventInLS.map((evt,i)=>{
          if(evt.assigned_date === days.format("DD-MM-YY")){
            return ( <p onClick={() => setSelectedEvent(evt)} className='flex items-center justify-center'>{evt.user}</p>)
           }
         })}</>} */}
      </div>
      </div>}
     
    </div>
  )
}

export default Day