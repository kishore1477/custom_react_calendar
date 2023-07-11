import React, { useContext, useState } from 'react'
import Contex from '../contex/Contex'
import dayjs from 'dayjs'
const ShowMoreEventModals = () => {
  const { handleShowMoreOpen, handleShowMoreClose, setSelectedEvent, setShowEventDataModal, DateOfShowMore, showMoreOpen, setShowMoreOpen, allEventOfday,setShowEventDataModal2,selectedEvent,setSelectedEventOfShowMoreM } = useContext(Contex)
  const [EventsOfTheClickedItem, setEventsOfTheClickedItem] = useState([])

  const x = [...new Set(allEventOfday.map((evt1) => evt1.auditNo))]
  const xyz = allEventOfday.map((items, i) => {
    return {
      // ...items,
      auditNo:items.auditNo,
      customerName : items.customerName ,
      rowId: i + 1 
    }
  })
  // console.log("xyz" , xyz);
  // console.log("x is the unique events :", x)
  // x.forEach((auditNo)=>{
  //   if( allEventOfday.includes(auditNo)){
  //     teamMembersEvent.push(allEventOfday)
  //   }
  const teamMembersEvent = []

  for (let index = 0; index < x.length; index++) {
    const refByAuditId = allEventOfday.filter(({ auditNo }, i) => xyz.auditNo == x[index])
    // console.log("refByAuditId" , refByAuditId  );
    teamMembersEvent.push(refByAuditId)
  }

  // const getByAuditId = (id) => {
  //   const refByAuditId = allEventOfday.filter(({ auditNo }, i) => auditNo == id)
  //   if(refByAuditId.length ===1){
  //     setShowEventDataModal(true)
  //     // setSelectedEvent(evt)
  //   }else{

  //   }
  //   console.log(" refByAuditId this", refByAuditId);
  //   return refByAuditId
  //   // alert("id " + id )
  // }
  
 
  const handleEventClick = (e, id) => {
    e.stopPropagation();
    const refByAuditId = allEventOfday.filter(({ auditNo }, i) => auditNo == id)
console.log("refByAuditId", refByAuditId)
console.log("refByAuditId length is :", refByAuditId.length)
    if(refByAuditId.length ===1){
      setShowEventDataModal(true)
      setSelectedEvent(refByAuditId)
    }else{
      // setEventsOfTheClickedItem(refByAuditId)
      // const close = handleShowMoreClose()
    // const open =   handleShowMoreOpen(e,DateOfShowMore,refByAuditId)
    setShowEventDataModal2(true)
   
    setSelectedEventOfShowMoreM(refByAuditId)

    }
  
    // setShowEventDataModal(true)
    // setSelectedEvent(evt)

    // if(loggedAdmin){
    //   setShowEventDataModal(true)
    //   setSelectedEvent(evt)

    // }else if(loggedUser.name === 'Arisha'){
    //   setShowEventDataModal(true)
    //   setSelectedEvent(evt)
    // }

  }
  return (
    <div className={`h-screen w-full fixed left-0 top-0 flex justify-center items-center   z-10`}>

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

          
            {/* {
              x.map((ele) => {
                return (
                  <div className='text-blue' onClick={() => getByAuditId(ele)}>
                    {ele}
                  </div>

                )
              })
            } */}
            {x.map((evt, i) => {

              return (
                <div className=''>
                  <ul className=' pl-5 list-disc list-inside '>

                    <li className='text-blue-300 cursor-pointer my-4' onClick={(e) => handleEventClick(e, evt)} >{evt}</li>
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