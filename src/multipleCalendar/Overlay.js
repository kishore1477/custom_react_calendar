import React, { useContext , useState, useEffect } from 'react'
import Contex from '../contex/Contex'
import { getMonth } from '../main';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { colorList } from '../components/Colorpicker';
import { useLocation } from 'react-router-dom'
const Overlay = () => {
  const location = useLocation();
  console.log("path is :",location.pathname);
//    const {selectedUserEventArray} =  useContext(Contex)
   const [currenMonth, setCurrentMonth] = useState(getMonth());
   const contex = useContext(Contex)
   const { showEventModal, monthIndex,state,selectedUserEvent, selectedUserEventArray, dispatch,setChecked}= contex 
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
  console.log("selectedUserEventArray length :", selectedUserEventArray.length)
// if(selectedUserEventArray.length ===  0){
//   setChecked(false)

// }
// const handleHere = () =>{
//   setChecked((prev)=>{
//     if(prev===false){
//       true
//     }
//   })
// }

  return (
    <div>
        {selectedUserEventArray.length ===  0  &&  <span className='flex items-center justify-center'>Please select users calendars from <Link  to = '/main' className='text-red-500 ml-2' >here</Link></span>}
        <div className='flex'>
      {selectedUserEventArray && selectedUserEventArray.map((evt,i)=>{
        return   <div  className={`${colorList[evt.color]} mx-4 rounded px-2`}>
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
                    return ( <p className={`${colorList[item.color]}`}>{item.title}</p>)
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