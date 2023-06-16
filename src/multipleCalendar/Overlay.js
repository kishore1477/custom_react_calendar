import React, { useContext , useState, useEffect } from 'react'
import Contex from '../contex/Contex'
import { getMonth } from '../main';
import dayjs from 'dayjs';
const Overlay = () => {
//    const {selectedUserEventArray} =  useContext(Contex)
   const [currenMonth, setCurrentMonth] = useState(getMonth());
   const contex = useContext(Contex)
   const { showEventModal, monthIndex,state,selectedUserEvent, selectedUserEventArray, dispatch}= contex 
   useEffect(() => {
       setCurrentMonth(getMonth(monthIndex));
   }, [monthIndex]);

//    useEffect(() => {
   
        //   const events = filteredEvents.filter(
//             (evt) =>
//               dayjs(evt.day).format("DD-MM-YY") === days.format("DD-MM-YY")
//           );
//           setDayEvents(events);
//         }, [filteredEvents, days]);


   console.log("monthis",currenMonth)
   console.log("selectedUserEventArray inside overlay is:", selectedUserEventArray)
   const getCurrentDayClass = (days)=>{
    return days.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
    ? "bg-blue-600 text-white rounded-full w-7 h-7"
    : "";
  }
  return (
    <div>
        <div className='flex'>
      {selectedUserEventArray && selectedUserEventArray.map((evt,i)=>{
        return   <div  className={`bg-${evt.color}-500 mx-4 rounded px-2`}>
        {/* <button className=''  */}
                        
                    {/* > */}
                       <span className='mr-8 mb-8'> {evt.user}</span> 
                    <span className={`material-icons-outlined  cursor-pointer`} onClick={() => {
                  dispatch({
                    type: "delete",
                    payload: evt,
                  });
                  
                }}>
                      close
                    </span>
                   
                  {/* </button> */}
        </div>
      })}   
      </div>
    <div  className=" m-4  mt-0    grid grid-cols-7 grid-rows-5">
    {/* {item.title} */}
  {
   currenMonth && currenMonth.map((week,weekId)=>(
      
      week.map((days, dayId)=>(
        // console.log("dayId id is :", dayId)
        // console.log("days :", days)
  
        // DAy file
        
        <div className={`border  border-gray-300 flex flex-col `}>
        <div className='h-24 md:h-32 flex flex-col  items-center' >
         <header className="flex flex-col  items-center">
          { weekId === 0 &&  (
            <p className="text-sm mt-1">
              {days.format("ddd").toUpperCase()}
            </p>
          )}
         <p
            className={`text-sm  cursor-pointer    text-center px-2  ${getCurrentDayClass(days)}`}
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
                {selectedUserEventArray && selectedUserEventArray.map((item,i)=>{
                  if(item.assigned_date === days.format("DD-MM-YY")){
                    return ( <p className={`bg-${item.color}-500`}>{item.title}</p>)
                  }
                })}

              
            </div>
   
            
        </div>
        </div>
      </div>
  
       
  
      ))
    ))
  }
  </div>
  </div>
  )
}

export default Overlay