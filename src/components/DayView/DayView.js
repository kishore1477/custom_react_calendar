import React, {useState,useEffect, useContext} from 'react'
import "./DayView.scss"
import dayjs from 'dayjs'
import { useParams } from "react-router-dom";
import Contex from '../../contex/Contex';
import EventModal from '../EventModal';
const DayView = () => {
   const contex =  useContext(Contex)
   const {selectedDate, setSelectedDate, setView, savedEvents, setShowEventModal, showEventModal} = contex
   const [currentDayEvents, setCurrentDayEvents] = useState([])
   console.log("Current day events is :", currentDayEvents)
   console.log("Selected date inside dayview is :", selectedDate)
   const routeParams = useParams();
   // console.log("routeParams:", routeParams)
const {date} = routeParams
// console.log("date from useParamas:", date)
const category = date.split("$")
// console.log("catrgory :", category[0])
const dat =  category[0]
// setSelectedDate(dat)
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
}, [dat])

//    useEffect(() => {
//     if (savedEvents) {
//         console.log("Saved Events inside dayView is :", savedEvents)
//         let currentEvts = savedEvents.filter(event => {
              
//                 let startDate = new Date(event.start)
//                 // console.log(startDate.getDate(), selectedDate.date())
//                 if (startDate.toDateString() === selectedDate.toDateString()) {
//                     return event;
//                 }
             
//         })
//         setCurrentDayEvents(currentEvts)
//     }

// }, [savedEvents, selectedDate])
useEffect(() => {
    // console.log("Filtered events is :", filteredEvents)
    // console.log(" savedEvents events is :", savedEvents)
          const events = savedEvents.filter(
            (evt) =>
            // console.log( "evt.day format",dayjs(evt.day).format("MM-DD-YYYY"))
              dayjs(evt.day).format("MM-DD-YYYY") === selectedDate
          );
          console.log("Events is :", events)
          setCurrentDayEvents(events);
        }, [savedEvents, selectedDate]);

    const d = new Date()

    // console.log("d:", d)
    // console.log("Selected date is ", selectedDate)
   

const dd = dayjs().format("MM-DD-YYYY")
// console.log("dd:", dd)
// console.log("dat is : ", dat)
// console.log("selectedDate is:", selectedDate)
// console.log("date formtt:", date.format("DD-MM-YY"))

    const getCurrentDayClass = ()=>{
        return  selectedDate === dayjs().format("MM-DD-YYYY")
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

   
    function renderEvent(hour) {
        
        return currentDayEvents.map(event => {
            // const startDateTime = new Date(event.startTimeIS)
            const startDateTime = dayjs(event.start).hour()

            console.log("StartDateTime is  :", startDateTime)
            console.log("StartDateTime is type is  :", typeof(startDateTime))
            console.log("hour is type is  :", typeof(hour))
            console.log("hour is in render event  :", hour)

            return (
                <div className={`day-events`}>
                    {startDateTime === hour && (
                        <div className=" day-event ">
                            <div 
                                 className={` text-black day-event-item bg-${event.label}-500`}>
                                <h4 className='text-black'>{event.title || "Untitled"}</h4>
                            </div>
                        </div>
                    )}
                </div>
            )
        })
    }
const handleEventClick = () =>{
    setShowEventModal(true)
}

  return (
    <div className={`${showEventModal && 'bg-red-100'} mb-10 z-0`}>
 {showEventModal &&  <EventModal/>}
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
console.log("hour is :", hour)
                return (
                    <div className="each-hour w-full" onClick={handleEventClick}
                        >

                        {hour >= 0 && (
                            <>
                                <h4 className="hour-label border-r-2  border-slate-200 pr-2 ">{hour > 0
                                    ? renderHour(hour)
                                    : "12"
                                }
                                    <span className="ml-1">{getStatus(hour)}</span>
                                </h4>
                                <div className="row">
                                    <div className='border-t-2 w-full border-slate-200'>
                                    {renderEvent(hour)}
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