import React from 'react'
import { useContext } from 'react'
import Contex from '../contex/Contex'

const SideBar = () => {
  const  {savedEvent, setSelectedUserEvent, selectedUserEvent,  dispatch,selectedUsers, showEventModal,filteredEvents,dispatchUsersEvent,showMoreOpen} =   useContext(Contex)
  const eventInLS = JSON.parse(localStorage.getItem('events'))
const handleClick =(evt)=>{
 const userList =  selectedUsers.map((evet)=>evet.name)
 const existingUser  = userList.includes(evt.name)
 if(!existingUser){
  dispatch({ type: "push", payload: evt });
  filteredEvents &&  filteredEvents.map((evtt,i)=>{
if(evtt.user === evt.name){
  dispatchUsersEvent({ type: "push", payload:evtt});
}
  })
 }
//  console.log("Existing USer is:", existingUser)
//  console.log("Userlist is :", userList)
 
}

const admin = localStorage.getItem('admin')
const loggedAdmin = admin && JSON.parse(localStorage.getItem('admin'))
const user = localStorage.getItem('loggedUser')
const loggedUser = user && JSON.parse(localStorage.getItem('loggedUser'))
const Userlist = JSON.parse(localStorage.getItem('userList'))
console.log("userList is :", Userlist)
  return (
    <div className={`h-screen ${(showEventModal || showMoreOpen) && ' bg-red-100'}` }>
     <div className='ml-5'>
 <span className='font-bold flex justify-start items-start ml-10'> Users</span>
      {loggedUser || loggedAdmin ? Userlist.user.map((user,i)=>{
       return(
        <div key={i} className='mx-4 flex flex-col space-y-4'> 
        <div className=' py-4 cursor-pointer flex justify-start items-start' onClick={()=>handleClick(user) }>{user.name}</div>
        </div>
    )
     
      }):<></>}
      {loggedAdmin && Userlist.other.map((user,i)=>{
        return(
          <div key={i} className='mx-4 flex flex-col space-y-4'> 
          <div className=' py-4 cursor-pointer flex justify-start items-start' onClick={()=>handleClick(user) }>{user.name} ({user.profession})</div>
          </div>
      )
      })}
      </div>
    </div>
  )
}

export default SideBar