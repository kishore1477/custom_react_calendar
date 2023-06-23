import React from 'react'
import { useContext } from 'react'
import Contex from '../contex/Contex'

const SideBar = () => {
  const  {savedEvent, setSelectedUserEvent, selectedUserEvent,  dispatch,selectedUserEventArray} =   useContext(Contex)
  const eventInLS = JSON.parse(localStorage.getItem('events'))
const handleClick =(evt)=>{
 const userList =  selectedUserEventArray.map((evet)=>evet.user)
 const existingUser  = userList.includes(evt.user)
 if(!existingUser){
  dispatch({ type: "push", payload: evt });
 }
 console.log("Existing USer is:", existingUser)
 console.log("Userlist is :", userList)
 
}

const admin = localStorage.getItem('admin')
const loggedAdmin = admin && JSON.parse(localStorage.getItem('admin'))
const user = localStorage.getItem('loggedUser')
const loggedUser = user && JSON.parse(localStorage.getItem('loggedUser'))
const Userlist = JSON.parse(localStorage.getItem('userList'))
console.log("userList is :", Userlist)
  return (
    <div>
       <span className='font-bold flex justify-center items-center'>Local Users</span>
        {eventInLS.map((evt,i)=>{
            return(
                <div className='mx-4 flex flex-col space-y-4'> 
                <div className=' py-4 cursor-pointer flex justify-center items-center' onClick={()=>handleClick(evt)}>{evt.user}</div>
                </div>
            )
        })}
 <span className='font-bold flex justify-center items-center'>Special Users</span>
      {loggedUser || loggedAdmin ? Userlist.map((user,i)=>{
        return(
          <div key={i} className='mx-4 flex flex-col space-y-4'> 
          <div className=' py-4 cursor-pointer flex justify-center items-center' >{user.name}</div>
          </div>
      )
      }):<></>}
    </div>
  )
}

export default SideBar