import React , {useContext, useState,useEffect} from 'react'
import dayjs from 'dayjs'
import Contex from '../contex/Contex'
import { multipleCalendarBorderList } from '../components/Colorpicker'
const Days = (props) => {
  const contex = useContext(Contex)
  const  {setShowEventModal, monthIndex,setDaySelected, selectedUserEvent ,savedEvents,setSelectedEvent,filteredEvents} = contex
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
 
 
 

// console.log("Logged user events is :", loggedUserEvents)

  return (
    <div className={`border ${multipleCalendarBorderList[item.color]} flex flex-col `}>
      <div className='h-24 md:h-32 flex flex-col  items-center'  onClick={() => {
           setDaySelected(days);
          setShowEventModal(true);
        }}>
       <header className="flex flex-col  items-center">
        { weekId === 0 &&  (
          <p className="text-sm mt-1">
            {days.format("ddd").toUpperCase()}
          </p>
        )}
       <p
          className={`text-sm  cursor-pointer    text-center px-2  ${getCurrentDayClass()}`}
       >
          {days.format("DD")}
          

          
        </p>
        
      </header>
      <div
        className="flex-1 "
       
      >
        
          
      <div
           
            
            className={`p-1 mr-3 text-gray-600 text-sm rounded mb-1 truncate cursor-pointer`}
          >
          {item.assigned_date === days.format("DD-MM-YY")?
  <p className='bg-yellow-200  '>{item.title}</p>:<></>
}
            
          </div>
 
          
      </div>
      </div>
    </div>
  )
}

export default Days