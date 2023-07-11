import React, { useContext, useState } from 'react'
import Contex from '../contex/Contex'
import dayjs from 'dayjs'
const ShowMoreEventModal2 = () => {
  const { handleShowMoreOpen, handleShowMoreClose, setSelectedEvent, setShowEventDataModal, DateOfShowMore, showMoreOpen, setShowMoreOpen, allEventOfday ,selectedEvent,setShowEventDataModal2,selectedEventOfShowMoreM} = useContext(Contex)
  const [EventsOfTheClickedItem, setEventsOfTheClickedItem] = useState([])

  
 console.log("selectedEventOfShowMoreM", selectedEventOfShowMoreM)
  const handleEventClick = (e, evt) => {
    setSelectedEvent([])
    e.stopPropagation();
    setShowEventDataModal(true)
    console.log("evt in m2 is :", evt)
    setSelectedEvent([evt])
    
    
  

  }
  return (
    <div className={`h-screen w-full fixed left-0 top-0 flex justify-center items-center   z-10`}>

      <form className=" bg-white  rounded-lg  mx-9 px-4  h-96 pb-24  w-full md:w-96  ">
        <header className="bg-gray-100 px-4 xl:py-2  flex justify-end items-end">
          <button onClick={()=>setShowEventDataModal2(false)} className='mx-2'>
            <span className="material-icons-outlined text-gray-400">
              close
            </span>
          </button>
        </header>
        <div className='flex justify-center items-center'>


          <section className=''>
            <span>Events of the <b> {dayjs(DateOfShowMore).format('MMMM DD YYYY')}</b> </span>

          
            {/* {
              x.map((ele) => {
                return (
                  <div className='text-blue' onClick={() => getByAuditId(ele)}>
                    {ele}
                  </div>

                )
              })
            } */}
            {selectedEventOfShowMoreM.map((evt, i) => {

              return (
                <div className=''>
                  <ul className=' pl-5 list-disc list-inside '>

                    <li className='text-blue-300 cursor-pointer my-4' onClick={(e) => handleEventClick(e, evt)} >{evt.auditNo}/{evt.user}</li>
                  </ul>
                </div>
              )
            })}
          </section>
        </div>
      </form>
    </div>
  )
}

export default ShowMoreEventModal2