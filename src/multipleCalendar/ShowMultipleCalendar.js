import React, { useContext ,useState,useEffect} from 'react'
import Contex from '../contex/Contex'
import { getMonth } from '../main';
 
import Days from './Days';
import MyCalendar from './MyCalendar';

const ShowMultipleCalendar = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const contex = useContext(Contex)
  const { showEventModal, monthIndex,state,selectedUserEvent}= contex 
  useEffect(() => {
      setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  console.log("monthis",currenMonth)
 
  console.log("Selected events is :", selectedUserEvent)
  return (
    <div className='flex'>
<div className='w-1/2'>Admin Calendar</div>

           {/* <div  className="w-1/2 m-4     grid grid-cols-7 grid-rows-5">
      {
       currenMonth && currenMonth.map((week,weekId)=>(
          // console.log("row id is :", weekId)
          // console.log("Row :", week)
          week.map((days, dayId)=>(
            // console.log("dayId id is :", dayId)
            // console.log("days :", days)

            
              <Days days = {days} weekId ={weekId} dayId={dayId}/>

           

          ))
        ))
      }
     </div> */}
     <MyCalendar/>
    </div>
  )
}

export default ShowMultipleCalendar