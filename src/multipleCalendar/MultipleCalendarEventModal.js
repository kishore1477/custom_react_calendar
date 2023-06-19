import React, { useContext, useState } from 'react'
import Contex from '../contex/Contex'
import { useRef } from "react";
// import styles from "./Modal.module.css";
const MultipleCalendarEventModal = (props) => {
    const modalRef = useRef(null)
    const {user} = props
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (event) => {
        console.log("modalRef.current is:",modalRef.current)
        console.log("event.target is:",event.target)
        if (event.target === modalRef.current) {
          setIsOpen(false);
        }
      };
  
   
    console.log(" selected user is :", user)
     const {multipleCalendarEventModalArray} = useContext(Contex)
     console.log("Multiple Calendar event array is :", multipleCalendarEventModalArray)
  return (
    <>
     <button
      
        onClick={() => setIsOpen(true)}
      >
        Open Modal
      </button>
      {isOpen && (
        <div
          ref={modalRef}
        
          onMouseDown={handleClick}
        >
        
          <button
            
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>
      )}
     

   {multipleCalendarEventModalArray.map((evt,i)=>{
    if(evt.user === user){
        return  <div   className={`h-96   flex justify-center items-center z-10 `}>
        <form className=" bg-white rounded-lg shadow-2xl mx-9 w-full md:w-96 ">
          <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
            <span className="material-icons-outlined text-gray-400 ">
              drag_handle
            </span>
            <span>Add New Event</span>
          
          </header>
           <p>{evt.title}</p>
         
        </form>
      </div>
    }
  
   })} 
  </>
  )
}

export default MultipleCalendarEventModal