import React , {useContext, useState,useEffect} from 'react'
import dayjs from 'dayjs'
import Contex from '../contex/Contex'
import { useNavigate } from "react-router-dom";
import { colorList, multipleCalendarBorderList } from '../components/Colorpicker'
const Days = (props) => {
  const admin = localStorage.getItem('admin')
  const loggedAdmin = admin && JSON.parse(localStorage.getItem('admin'))
  const user = localStorage.getItem('loggedUser')
  const loggedUser = user && JSON.parse(localStorage.getItem('loggedUser'))
  const contex = useContext(Contex)
  const  {setShowEventModal, monthIndex,setDaySelected, selectedUserEvent ,savedEvents,setSelectedEvent,filteredEvents,dispatchMultiCalEventModal, multipleCalendarEventModalArray,setShowMultiCalEventModal, selectedOffDay, setUserNameAddEvent} = contex
  const [dayEvents, setDayEvents] = useState([]);
    const  { days, weekId, dayId, item, userName} = props
    const navigate = useNavigate()
    // console.log("Item color i s:", item.color)
//  console.log("selectedUserEvent is :", selectedUserEvent)
    useEffect(() => {
// console.log("Filtered events is :", filteredEvents)
console.log(" savedEvents events inside days.js is :", savedEvents)
console.log("userNameis :", userName)
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
 
const handleEventClick = (e, item) =>{
  e.preventDefault()
  e.stopPropagation();
  // console.log("e.target is:" , e.target)
  // console.log("modalRef.current is:" , modalRef.current)
//   if (e.target === modalRef.current) {
// alert("hi")
//     dispatchMultiCalEventModal({ type: "push", payload: item });
//     setShowMultiCalEventModal(true)
//   }
  dispatchMultiCalEventModal({ type: "push", payload: item });
    setShowMultiCalEventModal(true)
    setSelectedEvent(item)
  
  
}
 
 
const handleDivOnClick = () =>{

  if(loggedAdmin){
    // if( || loggedAdmin){
      setDaySelected(days)
      setShowEventModal(true)
      setUserNameAddEvent(userName)
    
    // }
   
  }else if(loggedUser.name === 'Arisha'){
    setDaySelected(days)
      setShowEventModal(true)
      setUserNameAddEvent(userName)
  }
}
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
// console.log("Logged user events is :", loggedUserEvents)

  return (
    <div>


    <div className={` border ${multipleCalendarBorderList[item.color]}  flex flex-col `}>
    {selectedOffDay && (days.format("dddd") === selectedOffDay[0] || days.format("dddd") ===  selectedOffDay[1] ||  days.format("dddd") ===  selectedOffDay[2])? 
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
 
  if(days.format('DD-MM-YY') ===( currentDate && currentDate.format('DD-MM-YY'))){
    if(days.format('DD-MM-YY') === fullStart.format('DD-MM-YY')){
      // savedEvents && savedEvents.map((sevt,i)=>{
        if(evt.user === userName){
          return (
            <div onClick={(e) => handleEventClick(e,evt)} className={`${colorList[evt.label]} cursor-pointer flex items-center justify-center border-none w-24 md:w-96  m-1  z-10 border-gray-50`}>
         
              { evt.auditNo}</div>
          )
        }else{
          return (<div  className={` cursor-pointer flex items-center justify-center border-none w-24 md:w-96  m-1  z-10 border-gray-50 invisible`}>
         
          </div>)  
        }
       
     
      // })
    
    }else if (days.format('DD-MM-YY') !== fullStart.format('DD-MM-YY')){
      
        if(evt.user === userName){
          return (
            <div onClick={(e) => handleEventClick(e,evt)} className={`${colorList[evt.label]} cursor-pointer flex items-center justify-center border-none w-24 md:w-96 m-1 z-10 border-gray-50 `}>
               {days.format("ddd") === 'Mon'? <span className=''>{evt.auditNo}</span>: <span className='invisible'>,</span>}
              </div>
           )
        }else{
          return (<div  className={` cursor-pointer flex items-center justify-center border-none w-24 md:w-96  m-1  z-10 border-gray-50 invisible`}>
         
          </div>)  
        }
     
      

    
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
    </div>
  )
}

export default Days