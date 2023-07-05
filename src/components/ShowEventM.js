import React from 'react'
import { useContext } from 'react';
import Contex from '../contex/Contex';
import dayjs from 'dayjs';
const ShowEventM = () => {
  const {selectedEvent, setShowEventDataModal, dispatchCalEvent} =   useContext(Contex)
  console.log("selectedEvent is :", selectedEvent)
const {auditNo, location, customerName,end,industCode, label,standaradTyp,start,user} = selectedEvent
const admin = localStorage.getItem('admin')
const loggedAdmin = admin && JSON.parse(localStorage.getItem('admin'))
const loggedAdminName = loggedAdmin && loggedAdmin.name
const user1 = localStorage.getItem('loggedUser')
const loggedUser = user1 && JSON.parse(localStorage.getItem('loggedUser'))
const loggedUserName = loggedUser && loggedUser.name

  return (
    <div className={`h-screen w-full fixed left-0 top-0 flex justify-center items-center   z-10`}>
     
    <form className=" bg-white rounded-lg shadow-2xl mx-9 px-4  pb-24 pt-10 w-full md:w-96 ">
      <header className="bg-gray-100 px-4 xl:py-2  flex">

<div className='flex justify-start items-start'>
        {/* <span className="material-icons-outlined text-gray-400 ">
          drag_handle
        </span> */}
        <span>{user}</span>
      
        </div>

        <div className='flex justify-end items-end ml-auto'>
        <div>

{(loggedUserName === 'Arisha' || loggedAdmin)  && <>
<span className="material-icons-outlined text-gray-400 cursor-pointer mx-2">
edit
</span>
          {selectedEvent && (
            <span
              onClick={() => {
                dispatchCalEvent({
                  type: "delete",
                  payload: selectedEvent,
                });
                setShowEventDataModal(false);
              }}
              className="material-icons-outlined text-gray-400 cursor-pointer mx-2"
            >
              delete
            </span>
          )}</>  }
        

          <button onClick={() => setShowEventDataModal(false)} className='mx-2'>
            <span className="material-icons-outlined text-gray-400">
              close
            </span>
          </button>
        </div>
        <div>
        
        </div>
        </div>

      </header>
      <section className="text-gray-600 body-font">
  <div className="container  mx-auto">
    <div className="text-center mb-4">
      <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
        {auditNo}
      </h1>
      <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
        {standaradTyp}
      </p>
    </div>
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
      <div className="p-2   w-full">
        <div className="bg-gray-100 rounded gap-x-2 flex p-4 h-full items-center">
          {/* <svg
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={3}
            className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
            viewBox="0 0 24 24"
          >
            <path d="M22 11.08V12a10 10 0 11-5.93-9.14" />
            <path d="M22 4L12 14.01l-3-3" />
          </svg> */}
            <span className="material-icons-outlined">
          person
</span>
          <span className="title-font font-medium">
           {customerName}
          </span>
        </div>
      </div>
      <div className="p-2   w-full">
        <div className="bg-gray-100 rounded flex gap-x-2 p-4 h-full items-center">
        <span className="material-icons-outlined">
fiber_pin
</span>
          <span className="title-font font-medium">
           {industCode}
          </span>
        </div>
      </div>
      <div className="p-2   w-full">
        <div className="bg-gray-100 rounded gap-x-2 flex p-4 h-full items-center">
        <span className="material-icons-outlined">
                add_location
              </span>
          <span className="title-font font-medium">{location}</span>
        </div>
      </div>
      <div className="p-2   w-full">
        <div className="bg-gray-100 rounded flex gap-x-2 p-4 h-full items-center">
        <span class="material-icons-outlined">
date_range
</span>
          <span className="title-font font-medium">
          {dayjs(start).format("MMMM DD YYYY HH:mm a")  } -   {dayjs(end).format("MMMM DD YYYY HH:mm a")  }
          </span>
        </div>
      </div>
      
    </div>
     
  </div>
</section>

      </form>
      </div>
  )
}

export default ShowEventM