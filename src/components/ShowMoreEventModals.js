import React, {useContext} from 'react'
import Contex from '../contex/Contex'
import dayjs from 'dayjs'
const ShowMoreEventModals = () => {
  const {handleShowMoreOpen,handleShowMoreClose,setSelectedEvent,setShowEventDataModal,DateOfShowMore, showMoreOpen,setShowMoreOpen,allEventOfday} = useContext(Contex)
  const handleEventClick = (e,evt)=>{
    console.log("clicked")
    e.stopPropagation();
    setShowEventDataModal(true)
    setSelectedEvent(evt)
    // if(loggedAdmin){
    //   setShowEventDataModal(true)
    //   setSelectedEvent(evt)
     
    // }else if(loggedUser.name === 'Arisha'){
    //   setShowEventDataModal(true)
    //   setSelectedEvent(evt)
    // }
  
  }
  return (
    <div className={`h-screen w-full fixed left-0 top-0 flex justify-center items-center   z-0`}>
     
    <form className=" bg-white  rounded-lg  mx-9 px-4  pb-24  w-full md:w-96  ">
      <header className="bg-gray-100 px-4 xl:py-2  flex justify-end items-end">
      <button onClick={handleShowMoreClose} className='mx-2'>
            <span className="material-icons-outlined text-gray-400">
              close
            </span>
          </button>
        </header>
        <div className='flex justify-center items-center'>

      
        <section className=''>
        <span>Events of the <b> {dayjs(DateOfShowMore).format('MMMM DD YYYY')}</b> </span>
        {allEventOfday.map((evt,i)=>{
        return (
          <div className=''>
            <ul  className=' pl-5 list-disc list-inside '>
          
              <li className='text-blue-300 cursor-pointer my-4' onClick={(e)=>handleEventClick(e,evt)} >{evt.auditNo.substring(0, 3)}../{evt.user}</li>
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

export default ShowMoreEventModals