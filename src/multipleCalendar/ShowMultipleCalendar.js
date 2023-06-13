import React, { useContext ,useState,useEffect} from 'react'
import Contex from '../contex/Contex'
import { getMonth } from '../main';
 
import Days from './Days';
import MyCalendar from './MyCalendar';
import ReactCalendar from './ReactCalendar';

const ShowMultipleCalendar = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const contex = useContext(Contex)
  const { showEventModal, monthIndex,state,selectedUserEvent, selectedUserEventArray}= contex 
  useEffect(() => {
      setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  console.log("monthis",currenMonth)
 
  // console.log("Selected events is :", selectedUserEvent)
  console.log("selectedUserEventArray is :", selectedUserEventArray)
  return (
    <div className='flex'>
<div className=''>Admin Calendar</div>
{selectedUserEventArray.map((item,i)=>{
return       <div  className="w-1/2 m-4     grid grid-cols-7 grid-rows-5">
  {/* {item.title} */}
{
 currenMonth && currenMonth.map((week,weekId)=>(
    
    week.map((days, dayId)=>(
      // console.log("dayId id is :", dayId)
      // console.log("days :", days)

      
        <Days days = {days} weekId ={weekId} dayId={dayId}/>

     

    ))
  ))
}
</div>
})}
     
     {/* <MyCalendar/> */}
     {/* <ReactCalendar/> */}
    </div>
  )
}

export default ShowMultipleCalendar