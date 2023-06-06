 import React, {useEffect, useState, useContext} from 'react'
import Day from './Day'
import Contex from '../contex/Contex';
import { getMonth } from '../main';
import EventModal from './EventModal';
 
 const Month = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const contex = useContext(Contex)
  const { showEventModal, monthIndex,state}= contex 
  useEffect(() => {
      setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  console.log("monthis",currenMonth)
  
   return (
    <>
   {showEventModal &&  <EventModal/>}
     <div  className="  mx-auto my-auto  grid grid-cols-7 grid-rows-5">
      {
       currenMonth && currenMonth.map((week,weekId)=>(
          // console.log("row id is :", weekId)
          // console.log("Row :", week)
          week.map((days, dayId)=>(
            // console.log("dayId id is :", dayId)
            // console.log("days :", days)

            
              <Day days = {days} weekId ={weekId} dayId={dayId}/>

           

          ))
        ))
      }
     </div>
     </>

   )
 }
 
 export default Month



