import React , {useContext, useState,useEffect} from 'react'
import dayjs from 'dayjs'
import Contex from '../contex/Contex'
import moment from 'moment';

import { useNavigate } from "react-router-dom";
import { colorList } from './Colorpicker';
import ShowMoreEventModals from './ShowMoreEventModals';
// import 'dayjs/locale/en'; // Import the desired locale
const Day = (props) => {
  const admin = localStorage.getItem('admin')
  const loggedAdmin = admin && JSON.parse(localStorage.getItem('admin'))
  const loggedAdminName = loggedAdmin && loggedAdmin.name
  const user = localStorage.getItem('loggedUser')
  const loggedUser = user && JSON.parse(localStorage.getItem('loggedUser'))
  const loggedUserName = loggedUser && loggedUser.name
  // console.log("Logged username is :", loggedUserName)
  dayjs().format()
const navigate = useNavigate()

  const contex = useContext(Contex)
  const  {setShowEventModal, monthIndex,setDaySelected ,savedEvents,setSelectedEvent,filteredEvents, selectedOffDay, setUserNameAddEvent, setAdminNameAddEvent,setShowEventDataModal,handleShowMoreOpen,showMoreOpen} = contex
  const [dayEvents, setDayEvents] = useState([]);


    const  { days, weekId, dayId, week} = props


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

    useEffect(() => {
// console.log("Filtered events is :", filteredEvents)
// console.log(" savedEvents events is :", savedEvents)
      const events =  filteredEvents && filteredEvents.filter(
        (evt) =>
          dayjs(evt.day).format("DD-MM-YY") === days.format("DD-MM-YY")
      );
      setDayEvents(events);
      // console.log("events is :", events)
      // console.log("dayEvents Events is:", dayEvents)
    }, [filteredEvents, days]);

const getCurrentDayClass = ()=>{
  return days.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
  ? "bg-blue-600 text-white rounded-full w-7 h-7"
  : "";
}

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

const handleDivOnClick = () =>{
  if(loggedAdmin){
  
      setDaySelected(days)
      setShowEventModal(true)
      setUserNameAddEvent(loggedAdmin.name)
   
  }else if(loggedUser.name === 'Arisha'){
    setDaySelected(days)
      setShowEventModal(true)
      setUserNameAddEvent(loggedUser.name)
  }
}
const handleEventClick = (e,evt)=>{
  console.log("clicked")
  e.stopPropagation();
  if(loggedAdmin){
    setShowEventDataModal(true)
    setSelectedEvent(evt)
   
  }else if(loggedUser.name === 'Arisha'){
    setShowEventDataModal(true)
    setSelectedEvent(evt)
  }

}
var count = 0
const totalShowMoreOption = []
// console.log("totalShowMoreOption is :", totalShowMoreOption)


  return (
    <div className='border  border-gray-200 flex flex-col '>
{showMoreOpen && <ShowMoreEventModals/>}
      {/* { selectedOffDay && selectedOffDay.map((offDay, i)=>{ */}
      {selectedOffDay && (days.format("dddd") === selectedOffDay[0] || days.format("dddd") ===  selectedOffDay[1] ||  days.format("dddd") ===  selectedOffDay[2]) ?  
      <div className='h-24  z-0 w-full md:h-32 flex flex-col  overflow-hidden  items-center' >
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
  

 {filteredEvents &&  filteredEvents.toReversed().map((evt,i)=>{
  //  console.log("i:",i)
   // console.log("Evt start is :", evt.start)
//  const start = evt.start && dayjs(evt.start).format('DD')
 const fullStart = evt.start && dayjs(evt.start)

//  const end =evt.end && dayjs(evt.end).format('DD')
 const fullend =evt.end && dayjs(evt.end)

 let currentDate = fullStart;
while (dayjs(currentDate).isBefore(fullend) || dayjs(currentDate).isSame(fullend, 'day')) {
//  console.log("i is :", i)
if(days.format('DD-MM-YY') ===( currentDate && currentDate.format('DD-MM-YY'))){
  
  // user logim
  if(evt.user === loggedUserName  ){
    
if(days.format('DD-MM-YY') === fullStart.format('DD-MM-YY')){

  return (
    <div onClick={(e) => handleEventClick(e,evt)} className={`${colorList[evt.label]} cursor-pointer flex items-center justify-center border-none w-24 md:w-96  m-1  z-10 border-gray-50`}>{evt.auditNo}</div>
  )
// }

}else if (days.format('DD-MM-YY') !== fullStart.format('DD-MM-YY')){
  
  // if(evt.user === loggedUserName || (evt.admin && (evt.admin === loggedAdminName))){
    return (
      <div onClick={(e) => handleEventClick(e,evt)} className={`${colorList[evt.label]} cursor-pointer flex items-center justify-center border-none w-24 md:w-96 m-1 z-10 border-gray-50 `}>
         {days.format("ddd") === 'Mon'? <span className=''>{evt.auditNo}</span>: <span className='invisible'>,</span>}
         <span className='invisible'>,</span></div>
     )
  // }

}
}
//  admin login  ❤
else{
  if(days.format('DD-MM-YY') === fullStart.format('DD-MM-YY')){
    totalShowMoreOption.push(evt)
// count++ 
// if(count >2){
//   return <div>Show more</div>
// }
// totalShowMoreOption.push(evt)
count++ 
console.log("count inside !== is :", count)
if(count >3){
// return <span className='text-black cursor-pointer flex items-center justify-center'>{evt.auditNo.substring(0, 3)}../{evt.user}</span>
return <span className='text-blue-500 cursor-pointer text-xs flex items-center justify-center' onClick={(e)=>handleShowMoreOpen(e,days,totalShowMoreOption)} >{count===4 && 'show more'}</span>
}
    return (
      <div onClick={(e) => handleEventClick(e,evt)} className={`${colorList[evt.label]} cursor-pointer h-4 flex text-xs items-center justify-center border-none w-24 md:w-96  m-1  z-10 border-gray-50`}>{evt.auditNo.substring(0, 3)}../{evt.user}</div>
    )
  // }
  
  }else if (days.format('DD-MM-YY') !== fullStart.format('DD-MM-YY')){
    totalShowMoreOption.push(evt)
    // console.log("totalShowMoreOption inside if is:", totalShowMoreOption)
    // console.log("evt inside if is :", evt)
      count++ 
      // console.log("count inside !== is :", count)
  if(count >3){
    // return <div>Show more</div>
return <span className='text-blue-500 cursor-pointer flex items-center text-xs justify-center' onClick={(e)=>handleShowMoreOpen(e,days,totalShowMoreOption)}>{count===4 && 'show more'}</span>

  }else{
    return (
      <div onClick={(e) => handleEventClick(e,evt)} className={`${colorList[evt.label]} text-xs h-4 cursor-pointer flex items-center justify-center border-none w-24 md:w-96 m-1 z-10 border-gray-50 `}>
         {days.format("ddd") === 'Mon'? <span className=''> {evt.auditNo.substring(0, 3)}../{evt.user}</span>: <span className='invisible'>,</span>}
         <span className='invisible'>,</span></div>
     )
  }
      
    // }
  
  }
}
}

currentDate = dayjs(currentDate).add(1, 'day');


}

  
   

 // console.log("Start date is the: ", start)
 // console.log("Sstart date is the: ", sstart)
 // console.log("End date is the: ", end)

 })

}
   
 </div>
 </div>
//  {setAllEventOfday()}
 } 

    
    </div>
  )
}

export default Day