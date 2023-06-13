import React , {useContext, useState,useEffect} from 'react'
import dayjs from 'dayjs'
import Contex from '../contex/Contex'
import moment from 'moment';

import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';
// import advancedFormat from 'dayjs/plugin/advancedFormat';
// 
// Import the plugin
// dayjs.extend(advancedFormat);
// Import the plugin
dayjs.extend(isSameOrBefore);
// import 'dayjs/locale/en'; // Import the desired locale
const Day = (props) => {
  dayjs().format()
//   const   renderLongEvent = (date, eventName) =>{
//     return (
//       <div className="long-event">
//         <span className="long-event-date">{date.format('MMM D, YYYY')}</span>
//         <span className="long-event-name">{eventName}</span>
//       </div>
//     );
//   }
//   const startDate = dayjs('2023-06-15');
//   const endDate = dayjs('2023-06-30');
//   const eventName = 'Long Event';

//   const calendar = [];
//   let currentDate = startDate;
//   while (currentDate.isBefore(endDate) || currentDate.isSame(endDate, 'day')) {
//     calendar.push(renderLongEvent(startDate, eventName));
//     startDate.add(1, 'day');
//   }
// console.log("Calendar is:", calendar)

  const contex = useContext(Contex)
  const  {setShowEventModal, monthIndex,setDaySelected ,savedEvents,setSelectedEvent,filteredEvents} = contex
  const [dayEvents, setDayEvents] = useState([]);
    const  { days, weekId, dayId} = props
 
    useEffect(() => {
// console.log("Filtered events is :", filteredEvents)
// console.log(" savedEvents events is :", savedEvents)
      const events = filteredEvents.filter(
        (evt) =>
          dayjs(evt.day).format("DD-MM-YY") === days.format("DD-MM-YY")
      );
      setDayEvents(events);
    }, [filteredEvents, days]);

const getCurrentDayClass = ()=>{
  return days.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
  ? "bg-blue-600 text-white rounded-full w-7 h-7"
  : "";
}
// const loggedUser = localStorage.getItem('user')
const loggedUser = ""
// const loggedAdmin = localStorage.getItem('admin')
const loggedAdmin = "admin"
const events = [
  {
    user:"Kishore Kumar",
    title:"Complete Calendarbbtrhtr",
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
console.log("event in Local storage", eventInLS)
const loggedUserEvents = []

eventInLS.map((evt, i)=>{
  // console.log("Events.user is :", evt.user)
  if(evt.user === loggedUser){
    loggedUserEvents.push(evt)
  }
})

// console.log("Logged user events is :", loggedUserEvents)

  return (
    <div className='border border-gray-300 flex flex-col '>
      <div className='h-24 md:h-32 flex flex-col  items-center'  onClick={() => {
           setDaySelected(days);
          setShowEventModal(true);
        }}>
       <header className="flex flex-col  items-center">
        { weekId === 0 &&  (
          <p className="text-sm mt-1">
            {days.format("ddd").toUpperCase()}
          </p>
        )}
       <p
          className={`text-sm  cursor-pointer    text-center px-2  ${getCurrentDayClass()}`}
       >
          {days.format("DD")}
          

          
        </p>
        
      </header>

      
      <div
        className="flex-1 "
       
      >
       
      {eventInLS.map((evt,i)=>{
        
        console.log("Evt start is :", evt.start)
      const start = evt.start && dayjs(evt.start).format('DD')
      const fullStart = evt.start && dayjs(evt.start)
      console.log("Fullstart is :", fullStart)
      // const sstart =  start.format('DD')
      const end =evt.end && dayjs(evt.end).format('DD')
      const fullend =evt.end && dayjs(evt.end)
      console.log("fullend is :", fullend)
      console.log("(end-start) is:", (end-start))
      console.log("days.format", days.format("DD-MM-YY"))
      let currentDate = fullStart;
while (dayjs(currentDate).isBefore(fullend) || dayjs(currentDate).isSame(fullend, 'day')) {
  currentDate = dayjs(currentDate).add(1, 'day');

  console.log("Insie while")
  // if(currentDate >= )
  console.log("Current date iss :", currentDate)
  console.log("Current date iss :", currentDate.format('D'))
  // console.log("days date iss :", days)
  console.log("days date iss :", days.format('D'))
  if(days.format('DD-MM-YY') === currentDate.format('DD-MM-YY')){
    return (
    <div className='bg-gray-400  border-gray-50'>{evt.title}</div>
  )
  }
  // currentDate = dayjs(currentDate).add(1, 'day');

}
      // if((end-start) >1){

      //   for (let i = start; i <end; i++) {
      //      if(fullStart ===  days.format("DD-MM-YY")){
            
      //      }else if(fullend === days.format("DD-MM-YY")){

      //      }
          
      //   }
       

        
      // }
      console.log("Start date is the: ", start)
      // console.log("Sstart date is the: ", sstart)
      console.log("End date is the: ", end)
    
      })}
        {dayEvents.map((evt, idx) => {
          
       return (   <div
            key={idx}
            onClick={() => setSelectedEvent(evt)}
            className={`bg-${evt.label && evt.label}-200 p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate cursor-pointer`}
          >
            {evt.title}
          </div>)
})}
         {!loggedAdmin? <>{loggedUser && loggedUserEvents.map((event,i)=>{
if(event.assigned_date === days.format("DD-MM-YY")){
 return ( <p className=' '>{event.title}</p>)
}
         })}</>:<>{eventInLS.map((evt,i)=>{
          if(evt.assigned_date === days.format("DD-MM-YY")){
            return ( <p onClick={() => setSelectedEvent(evt)}>{evt.user}</p>)
           }
         })}</>}
      </div>
      </div>
    </div>
  )
}

export default Day