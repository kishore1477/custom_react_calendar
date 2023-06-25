import React , {useContext, useState,useEffect} from 'react'
import dayjs from 'dayjs'
import Contex from '../contex/Contex'
import { colorList, multipleCalendarBorderList } from '../components/Colorpicker'
const Days = (props) => {
  const contex = useContext(Contex)
  const  {setShowEventModal, monthIndex,setDaySelected, selectedUserEvent ,savedEvents,setSelectedEvent,filteredEvents,dispatchMultiCalEventModal, multipleCalendarEventModalArray,setShowMultiCalEventModal} = contex
  const [dayEvents, setDayEvents] = useState([]);
    const  { days, weekId, dayId, item} = props

    // console.log("Item color i s:", item.color)
//  console.log("selectedUserEvent is :", selectedUserEvent)
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
 
const handleEventClick = (e, item) =>{
  console.log("e.target is:" , e.target)
  // console.log("modalRef.current is:" , modalRef.current)
//   if (e.target === modalRef.current) {
// alert("hi")
//     dispatchMultiCalEventModal({ type: "push", payload: item });
//     setShowMultiCalEventModal(true)
//   }
  dispatchMultiCalEventModal({ type: "push", payload: item });
    setShowMultiCalEventModal(true)
  
  
}
 
 

// console.log("Logged user events is :", loggedUserEvents)

  return (
    <div>


    <div className={` border ${multipleCalendarBorderList[item.color]}  flex flex-col `}>
      <div className='h-16 md:h-32 flex flex-col  '  onClick={() => {
           setDaySelected(days);
          
        }}>
       <header className="flex flex-col  items-center">
        { weekId === 0 &&  (
          <p className="text-sm mx-2 mt-1">
            {days.format("ddd")}
          </p>
        )}
       <p
          className={`text-sm    text-center px-2  ${getCurrentDayClass()}`}
       >
          {days.format("DD")}
          

          
        </p>
        
      </header>
      <div
        className="flex-1 "
       
      >
        
          
      <div
           
            
            className={` text-gray-600 text-sm rounded truncate cursor-pointer`}
          >
          {item.assigned_date === days.format("DD-MM-YY")?
  <p className={`${colorList[item.color]} text-sm `} onClick={(e)=>handleEventClick(e,item)}>{item.title.length > 3
    ? `${item.title
      .toLowerCase()
      .substring(0, 3)
    }..`
    : item.title.charAt(0).toUpperCase() +
    item.title.slice(1).toLowerCase()}{" "}</p>:<></>
}
            
          </div>
 
          
      </div>
      </div>
    </div>
    </div>
  )
}

export default Days