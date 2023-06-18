import React, { useContext ,useState,useEffect} from 'react'
import Contex from '../contex/Contex'
import { getMonth } from '../main';
 
import Days from './Days';
import MyCalendar from './MyCalendar';
import ReactCalendar from './ReactCalendar';
import { colorList, sideBarlabelColorList } from '../components/Colorpicker';

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
  <div className='flex justify-end items-end'>
<span className={`mr-12 ${sideBarlabelColorList[item.color]}`} >{item.user}</span>

              <span className={`material-icons-outlined cursor-pointer ${colorList[item.color]}`} onClick={() => {
                  dispatch({
                    type: "delete",
                    payload: item,
                  });
                  
                }}>
                close
              </span>
             
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