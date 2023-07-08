 import React, {useEffect, useState, useContext} from 'react'
import Day from './Day'
import Contex from '../contex/Contex';
import { getMonth } from '../main';
import EventModal from './EventModal';
import Labels from './Labels';
import CalendarHeader from './CalendarHeader';
import ShowEventM from './ShowEventM';
 
 const Month = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const contex = useContext(Contex)
  const { showEventModal, monthIndex,state,showEventDataModal,showMoreOpen}= contex 
  useEffect(() => {
      setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  console.log("monthis",currenMonth)
  
   return (

    <div >
      {/* <CalendarHeader/> */}
     
    <div className='flex'>
    
    <aside className={`border p-5 w-1/4 ${(showEventModal || showEventDataModal || showMoreOpen) && 'bg-red-100'}`}>
    <Labels/>
    </aside>
    <div className=' w-full h-screen'>
   {showEventModal &&  <EventModal/>}
   {showEventDataModal &&  <ShowEventM/>}
     <div  className={` mx-auto my-auto z-0 grid grid-cols-7 grid-rows-5 ${(showEventModal || showMoreOpen || showEventDataModal) && 'bg-red-100'}`}>
      {
       currenMonth && currenMonth.map((week,weekId)=>(
          // console.log("row id is :", weekId)
          // console.log("Row :", week)
          week.map((days, dayId)=>(
            // console.log("dayId id is :", dayId)
            // console.log("days :", days)

            
              <Day week ={week} days = {days} weekId ={weekId} dayId={dayId}/>

           

          ))
        ))
      }
     </div>
     </div>
     </div>
     </div>
   )
 }
 
 export default Month



