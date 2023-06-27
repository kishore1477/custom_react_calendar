import React, { useContext ,useState,useEffect,useRef} from 'react'
import Contex from '../contex/Contex'
import { getMonth } from '../main';
import { useLocation } from 'react-router-dom'
import Days from './Days';
import MyCalendar from './MyCalendar';
import ReactCalendar from './ReactCalendar';
import { colorList, sideBarlabelColorList } from '../components/Colorpicker';
import MultipleCalendarEventModal from './MultipleCalendarEventModal';
import EventModal from '../components/EventModal';

const ShowMultipleCalendar = () => {
  const modalRef = useRef(null);
  console.log("ModalREf is :", modalRef)
  const location = useLocation();
  console.log("path is :",location.pathname);
  const path = location.pathname
  const [currenMonth, setCurrentMonth] = useState(getMonth());
  const contex = useContext(Contex)
  const { showEventModal, monthIndex,state,selectedUserEvent, selectedUserEventArray, dispatch, setChecked,multipleCalendarEventModalArray, showMultiCalEventModal}= contex 
//   if(path === '/main' && selectedUserEventArray.length === 0){
// setChecked(false)
//   }
  useEffect(() => {
      setCurrentMonth(getMonth(monthIndex));
  }, [monthIndex]);
  console.log("monthis",currenMonth)
 
  // console.log("Selected events is :", selectedUserEvent)
  return (
    <div className={` ${showEventModal && 'bg-red-100'} flex` }>
        {showEventModal &&  <EventModal/>}
{/* <div className=''>Admin Calendar</div> */}
{selectedUserEventArray.map((item,i)=>{


return <div>  
    {/* modal  */}
{/* <div className='z-10 '>{multipleCalendarEventModalArray.map((evtt,i)=>{
  return <p>{evtt.title}</p>
})}</div> */}
  {showMultiCalEventModal &&   <MultipleCalendarEventModal  user = {item.name}/>}
    <div className=''>

<div className='flex justify-end items-end'>
<span className={`mr-12 ${sideBarlabelColorList[item.color]}`} >{item.name}</span>

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

    
      <Days days = {days} weekId ={weekId} item ={item} dayId={dayId} userName = {item.name} />

   

  ))
))
}
</div>
</div> 


</div>
})}
     
     {/* <MyCalendar/> */}
     {/* <ReactCalendar/> */}
    </div>
  )
}

export default ShowMultipleCalendar