import React, {useState,useEffect, useContext} from 'react'
import "./DayView.scss"
import dayjs from 'dayjs'
import { useParams } from "react-router-dom";
import Contex from '../../contex/Contex';
const DayView = () => {
   const contex =  useContext(Contex)
   const {selectedDate, setSelectedDate, setView} = contex
   
    const d = new Date()

    console.log("d:", d)
    const [currentDayEvents, setCurrentDayEvents] = useState([])
    console.log("Selected date is ", selectedDate)
    const routeParams = useParams();
    console.log("routeParams:", routeParams)
const {date} = routeParams
console.log("date from useParamas:", date)
const category = date.split("$")
console.log("catrgory :", category[0])
const dat =  category[0]
const view = category[1]
setView(view)
    useEffect(() => {
        let isValidDate = dayjs(dat).isValid()
        console.log("isValidDate is :", isValidDate)
        if(isValidDate && dat){
            // let d = new Date(date)
            setSelectedDate(dat)
        } else {
            // let now = dayjs()
            // let currentDate = date || now.date()
            // setSelectedDate(dayjs(new Date(now.year(), monthIndex, currentDate)))
        }
    }, [ date])
const dd = dayjs().format("DD-MM-YYYY")
console.log("dd:", dd)
console.log("date is:", date)
// console.log("date formtt:", date.format("DD-MM-YY"))

    const getCurrentDayClass = ()=>{
        return dat === dayjs().format("MM-DD-YYYY")
        ? "bg-blue-600 text-white rounded-full w-10 h-10"
        : "";
      }
    function getStatus(hour) {
        if (hour === 0) {
            return "AM"
        } else if (hour > 12) {
            return "PM"
        } else {
            return "AM"
        }
    }

  


    function renderHour(hour) {
        return hour > 12 ? Math.floor(hour - 12) : hour
    }

   
    // function renderEvent(hour) {
        
    //     return currentDayEvents.map(event => {
    //         const startDateTime = new Date(event.start)
    //         return (
    //             <div className={`day-events`}>
    //                 {startDateTime.getHours() === hour && (
    //                     <div className="px-2 day-event ">
    //                         <div onClick={(e) => withStopPropagation(e, handleClickOnEventName(event, monthIndex))}
    //                              className="ml-6 day-event-item " style={{background:  colors[event.eventColor]|| statusColors[event.status]}}>
    //                             <h4>{event.title || "Untitled"}</h4>
    //                         </div>
    //                     </div>
    //                 )}
    //             </div>
    //         )
    //     })
    // }


  return (
    <div className='mb-10'>

    <div className="col-span-10 flex items-center ml-10 gap-x-4 ">

        {/***** selected date *****/}
        <div className="ml-12 relative top-0 my-4 flex flex-col items-center ">
            <span className="font-normal text-sm text-primary">
                {dayjs(selectedDate).format(
                    "dddd"
                )}
            </span>
            <h4 className={`font-medium text-xl p-2 flex justify-center items-center ${getCurrentDayClass()}  `}>
                { dayjs(selectedDate).format(
                    "DD"
                )}
            </h4>
        </div>
    </div>

    <div className="hour-list-wrapper">
        <div className="hour-list">
            {Array.from({length: 24}).map((ele, index) => {

                let hour = index

                return (
                    <div className="each-hour"
                        >

                        {hour >= 0 && (
                            <>
                                <h4 className="hour-label">{hour > 0
                                    ? renderHour(hour)
                                    : "12"
                                }
                                    <span className="ml-1">{getStatus(hour)}</span>
                                </h4>
                                <div className="row ">
                                    <div>
                                    {/* {renderEvent(hour)} */}
                                    </div>
                                </div>
                            </>
                        )}
                    </div>
                )
            })}
        </div>
    </div>
</div>
  )
}

export default DayView