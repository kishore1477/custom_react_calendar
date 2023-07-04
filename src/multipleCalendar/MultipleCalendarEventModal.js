import React, { useContext, useState } from 'react'
import Contex from '../contex/Contex'
import { useRef } from "react";
import { colorList } from '../components/Colorpicker';
import dayjs from 'dayjs';
// import styles from "./Modal.module.css";
const MultipleCalendarEventModal = (props) => {
    const modalRef = useRef(null)
    const {user, color} = props
    const [isOpen, setIsOpen] = useState(false);
    const handleClick = (event) => {
        console.log("modalRef.current is:",modalRef.current)
        console.log("event.target is:",event.target)
        if (event.target === modalRef.current) {
          setIsOpen(false);
        }
      };
  
   
    console.log(" selected user is :", user)
     const {multipleCalendarEventModalArray,dispatchMultiCalEventModal,setShowMultiCalEventModal, setShowEventModal,selectedEvent,dispatchCalEvent} = useContext(Contex)
     console.log("Multiple Calendar event array is :", multipleCalendarEventModalArray)

     const handleMultiEventClose = (evt) =>{
      dispatchMultiCalEventModal({
        type: "delete",
        payload: evt,
      });
      // setShowMultiCalEventModal(false);

     }
  return (
    <>
     {/* <button
      
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
      )} */}
     

   {multipleCalendarEventModalArray.map((evt,i)=>{
    if(evt.user === user){
        return  <div   className={`absolute top-96  flex justify-center items-center z-10 `}>
        <form className=" bg-white rounded-lg shadow-2xl mx-9  ">
          {/* <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
            <span className="material-icons-outlined text-gray-400 ">
              drag_handle
            </span>
            <span>Add New Event</span>
          
          </header>
           <p>{evt.title}</p> */}


{/* <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -mx-4 -my-8">
  
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
              Jul
            </span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">
              18
            </span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
              Shooting Stars
            </h1>
            <p className="leading-relaxed mb-5">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <a className="inline-flex items-center">
              <img
                alt="blog"
                src="https://dummyimage.com/102x102"
                className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">
                  Holden Caulfield
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="py-8 px-4 lg:w-1/3">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
              Jul
            </span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">
              18
            </span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
              CATEGORY
            </h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">
              Neptune
            </h1>
            <p className="leading-relaxed mb-5">
              Photo booth fam kinfolk cold-pressed sriracha leggings jianbing
              microdosing tousled waistcoat.
            </p>
            <a className="inline-flex items-center">
              <img
                alt="blog"
                src="https://dummyimage.com/101x101"
                className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">
                  Henry Letham
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</section> */}



<div className={`pb-8 pt-4 px-2 w-60 ${colorList[color]} h-80`}>
  <div className='flex justify-end items-end'>

            
            {/* <div> */}
           
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: evt,
                  });
                  dispatchMultiCalEventModal({
                    type: "delete",
                    payload: evt,
                  })
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-black cursor-pointer"
              >
                delete
              </span>
            )}

<button onClick={()=>handleMultiEventClose(evt)} >
              <span className="material-icons-outlined text-black cursor-pointer">
                close
              </span>
            </button>




            </div>
        <div className="h-full flex items-start p-4">
          {/* <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none"> */}
            {/* <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">
              Jul
            </span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">
              18
            </span> */}
          {/* </div> */}
          <div className="flex-grow ">
            {/* <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
             {evt.user}
            </h2> */}
          
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3 pl-3">
            {evt.auditNo}
            </h1>
            <p className="leading-relaxed mb-5 flex text-justify pl-3" >
            {/* <b>Customer Name :</b>  <br/> */}
            {dayjs(evt.start).format("MMMM DD YYYY HH:mm")  } -   {dayjs(evt.end).format("MMMM DD YYYY HH:mm")  }
            </p>
            <p className="leading-relaxed mb-5 flex text-justify pl-3" >
            {/* <b>Customer Name :</b>  <br/> */}
            {evt.customerName}
            </p>
            <a className="inline-flex items-center">
              <img
                alt="blog"
                src="https://dummyimage.com/103x103"
                className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"
              />
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">
                {evt.user}
                </span>
              </span>
            
            
            </a>
          </div>
        </div>
      </div>

{/* </div> */}



         
        </form>
      </div>
    }
  
   })} 
  </>
  )
}

export default MultipleCalendarEventModal