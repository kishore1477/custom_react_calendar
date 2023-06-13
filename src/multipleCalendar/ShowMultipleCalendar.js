import React, { useContext ,useState,useEffect} from 'react'
import Contex from '../contex/Contex'
import { getMonth } from '../main';
 
import Days from './Days';
import MyCalendar from './MyCalendar';
import ReactCalendar from './ReactCalendar';

const ShowMultipleCalendar = () => {
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const contex = useContext(Contex)
  const { showEventModal, monthIndex,state,selectedUserEvent, selectedUserEventArray, dispatch}= contex 
  useEffect(() => {
      setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  console.log("monthis",currenMonth)
 
  // console.log("Selected events is :", selectedUserEvent)
  return (
    <div className='flex'>
<div className=''>Admin Calendar</div>
{selectedUserEventArray.map((item,i)=>{
return  <div>
<span className='flex justify-center items-center' >{item.user}</span>
  <div className='flex justify-end items-end'>
  <button className='' onClick={() => {
                  dispatch({
                    type: "delete",
                    payload: item,
                  });
                  
                }}>
              <span className={`material-icons-outlined text-${item.color}-400`}>
                close
              </span>
            </button>
  </div>

   <div  className=" m-4  mt-0    grid grid-cols-7 grid-rows-5">
  {/* {item.title} */}
{
 currenMonth && currenMonth.map((week,weekId)=>(
    
    week.map((days, dayId)=>(
      // console.log("dayId id is :", dayId)
      // console.log("days :", days)

      
        <Days days = {days} weekId ={weekId} item ={item} dayId={dayId}/>

     

    ))
  ))
}
</div>
</div>  
})}
     
     {/* <MyCalendar/> */}
     {/* <ReactCalendar/> */}
    </div>
  )
}

export default ShowMultipleCalendar