import React, { useContext , useState, useEffect } from 'react'
import Contex from '../contex/Contex'
import { getMonth } from '../main';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import { colorList } from '../components/Colorpicker';
import { useLocation } from 'react-router-dom'
import EventModal from '../components/EventModal';
import { useNavigate } from "react-router-dom";
import ShowEventM from '../components/ShowEventM';
import ShowMoreEventModals from '../components/ShowMoreEventModals';
import ShowMoreEventModal2 from '../components/ShowMoreEventModal2';
const Overlay = () => {
  const navigate = useNavigate()
  const location = useLocation();
  console.log("path is :",location.pathname);
//    const {selectedUsers} =  useContext(Contex)
   const [currenMonth, setCurrentMonth] = useState(getMonth());
   const contex = useContext(Contex)
   const { showEventModal,setShowEventModal, setDaySelected ,savedEvents,handleShowMoreOpen,setSelectedEvent, monthIndex,state,selectedUserEvent, selectedUsers, dispatch,setChecked,filteredEvents, selectedOffDay,selectedUsersEventFromLs,dispatchUsersEvent,setShowEventDataModal,showEventDataModal,showMoreOpen,showEventDataModal2}= contex 
   const admin = localStorage.getItem('admin')
   const loggedAdmin = admin && JSON.parse(localStorage.getItem('admin'))
   const user = localStorage.getItem('loggedUser')
   const loggedUser = user && JSON.parse(localStorage.getItem('loggedUser'))
   useEffect(() => {
       setCurrentMonth(getMonth(monthIndex));
   }, [monthIndex]);
//  console.log("selectedUsersEventFromLs in overlay is :", selectedUsersEventFromLs)



  //  console.log("monthis",currenMonth)
  //  console.log("selectedUsers inside overlay is:", selectedUsers)
   const getCurrentDayClass = (days)=>{
    return days.format("DD-MM-YY") === dayjs().format("DD-MM-YY")
    ? "bg-blue-600 text-white rounded-full w-7 h-7"
    : "";
  }
  // console.log("selectedUsers length :", selectedUsers.length)

const  handleClickOnDate =(e,date)=> {
  e.preventDefault()
  e.stopPropagation();
    // let d = date
    let d = date.format("MM-DD-YYYY") + '$day'
     
    const dat = {
      view :'day',
       da : date.format("MM-DD-YYYY")
    }
    navigate(`/overlayday/${d}`)
}
const handleRemoveEvents = (user) =>{
  dispatch({
    type: "delete",
    payload: user,
  });
  selectedUsersEventFromLs.map((evt,i)=>{
if(evt.user === user.name){
  dispatchUsersEvent({
    type: "delete",
    payload:evt,
  });
}
  })

}
const handleEventClick = (e,evt)=>{
  // console.log("clicked")

  e.stopPropagation();
  setShowEventDataModal(true)
    setSelectedEvent([evt])
   

  // if(loggedAdmin){
   
  // }else if(loggedUser.name === 'Arisha'){
  //   setShowEventDataModal(true)
  //   setSelectedEvent(evt)
  // }

}
const handleDivOnClick = () =>{
  if(loggedAdmin){
  
      // setDaySelected(days)
      setShowEventModal(true)
      // setUserNameAddEvent(loggedAdmin.name)
   
  }else if(loggedUser.name === 'Arisha'){
    // setDaySelected(days)
      setShowEventModal(true)
      // setUserNameAddEvent(loggedUser.name)
  }
}
// var count =0
// const totalShowMoreOption =[]
var countN =0
const totalShowMoreOptionNot =[]
  return (
    <div className={`${(showEventModal || showEventDataModal || showMoreOpen) && 'bg-red-100'}`}>
      <div className='flex justify-center items-center'>
      <p className='text-purple-500 font-bold'>Welcome to the overlay view </p>

      </div>
      {showEventDataModal &&  <ShowEventM/>}
      {showEventModal &&  <EventModal/>}
      {showMoreOpen && <ShowMoreEventModals/>}
      {showEventDataModal2 && <ShowMoreEventModal2/>}
        {selectedUsers.length ===  0  &&  <span className='flex items-center justify-center'>Please select users calendars from <Link  to = '/main' className='text-red-500 ml-2' >here</Link></span>}
        <div className='flex'>
      {selectedUsers && selectedUsers.map((evt,i)=>{
        return   <div  className={`${colorList[evt.color]} mx-4 rounded px-2`}>
        {/* <button className=''  */}
                        
                    {/* > */}
                       <span className='mr-8 mb-8'> {evt.name}</span> 
                    <span className={`material-icons-outlined  cursor-pointer`} onClick={()=>handleRemoveEvents(evt)}>
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
      
      week.map((days, dayId)=>{
        // console.log("dayId id is :", dayId)
        // console.log("days :", days)
  
        // DAy file
        var count =0
const totalShowMoreOption =[]
        
   return     <div className={`border  border-gray-300 flex flex-col `}>
     {selectedOffDay && (days.format("dddd") === selectedOffDay[0] || days.format("dddd") ===  selectedOffDay[1] ||  days.format("dddd") ===  selectedOffDay[2])? 
      <div className='h-24   w-full md:h-32 flex flex-col  overflow-hidden  items-center' >
       <header className="flex flex-col  items-center">
        { weekId === 0 &&  (
        <>
      
         <p className="text-sm  text-red-400 mt-1">
            {days.format("ddd").toUpperCase()}
          </p> 
         
          </>
        )}
          <p
          className={`text-sm   text-red-400  hover:rounded-full  w-7 h-7  flex justify-center items-center   text-center px-2  ${()=>getCurrentDayClass(days)}`}
       >
          {days.format("DD")}
        </p> 
      
        
      </header>

      
      
      </div>: 
      <div className='h-24   w-full md:h-32 flex flex-col  overflow-hidden  items-center' onClick={handleDivOnClick} >
       <header className="flex flex-col  items-center">
        { weekId === 0 &&  (
     
      
         <p className="text-sm mt-1">
            {days.format("ddd").toUpperCase()}
          </p>
         
         
        )}
       <p
          className={`text-sm  cursor-pointer hover:rounded-full hover:bg-blue-300 w-7 h-7  flex justify-center items-center   text-center px-2  ${()=>getCurrentDayClass(days)}`  } onClick={(e) =>  handleClickOnDate(e,days)}
       >
          {days.format("DD")}
          

          
        </p>
      
        
      </header>

      
      <div
        className="flex-1 "
       
      >
       
      
      {selectedUsersEventFromLs.toReversed().map((evt,i)=>{
        // console.log("i:",i)
        // console.log("Evt start is :", evt.start)
      const start = evt.start && dayjs(evt.start).format('DD')
      const fullStart = evt.start && dayjs(evt.start)
      // console.log("Fullstart is :", fullStart)
      // const sstart =  start.format('DD')
      const end =evt.end && dayjs(evt.end).format('DD')
      const fullend =evt.end && dayjs(evt.end)
      // console.log("fullend is :", fullend)
      // console.log("(end-start) is:", (end-start))
      // console.log("days.format", days.format("DD-MM-YY"))
      let currentDate = fullStart;
while (dayjs(currentDate).isBefore(fullend) || dayjs(currentDate).isSame(fullend, 'day')) {

  if(days.format('DD-MM-YY') ===( currentDate && currentDate.format('DD-MM-YY'))){
    if(days.format('DD-MM-YY') === fullStart.format('DD-MM-YY')){
      // console.log("evt inside === is  :", evt)
      totalShowMoreOption.push(evt)
      count++
      // console.log("count inside == is :", count)
      // console.log("totalShowMoreOption inside == is :", totalShowMoreOption)
if(count >3){
return <span className='text-blue-500 cursor-pointer text-xs flex items-center justify-center' onClick={(e)=>handleShowMoreOpen(e,days,totalShowMoreOption)} >{count===4 && 'show more'}</span>

}
      return (
        <div onClick={(e) => handleEventClick(e,evt)} className={`${colorList[evt.label]}  text-xs h-4  cursor-pointer flex items-center justify-center border-none w-24 md:w-96  m-1   border-gray-50`}>{ evt.auditNo}/{evt.user}</div>
      )
    }else if (days.format('DD-MM-YY') !== fullStart.format('DD-MM-YY')){

      totalShowMoreOption.push(evt)
      count++
      // console.log("count inside !== is :", count)
      // console.log("totalShowMoreOptionNot inside !== is :", totalShowMoreOption)
if(count >3){
return <span className='text-blue-500 cursor-pointer text-xs flex items-center justify-center' onClick={(e)=>handleShowMoreOpen(e,days,totalShowMoreOption)} >{count===4 && 'show more'}</span>

}else{
  return (
    <div onClick={(e) => handleEventClick(e,evt)} className={`${colorList[evt.label]}  text-xs h-4 cursor-pointer flex items-center justify-center border-none w-24 md:w-96 m-1  border-gray-50 `}>
       {days.format("ddd") === 'Mon'? <span className=''>{evt.auditNo}/{evt.user}</span>: <span className='invisible'>,</span>}
     </div>
   )
}
      
    }
 
  }
  
  currentDate = dayjs(currentDate).add(1, 'day');


}
     
       

        
     
      // console.log("Start date is the: ", start)
      // console.log("Sstart date is the: ", sstart)
      // console.log("End date is the: ", end)
    
      })}
   
      </div>
      </div>}
      </div>
  
       
  
    })
    ))
  }
  </div>
  </div>
  )
}

export default Overlay