import React from 'react'
import { useContext } from 'react'
import Contex from '../contex/Contex'

const SideBar = () => {
  const  {savedEvent, setSelectedUserEvent, selectedUserEvent,  dispatch} =   useContext(Contex)
  const eventInLS = JSON.parse(localStorage.getItem('events'))
const handleClick =(evt)=>{
  dispatch({ type: "push", payload: evt });
}
  return (
    <div>
       <span className='font-bold flex justify-center items-center'> Users</span>
        {eventInLS.map((evt,i)=>{
            return(
                <div className='mx-4 flex flex-col space-y-4'> 
                <div className=' py-4 cursor-pointer flex justify-center items-center' onClick={()=>handleClick(evt)}>{evt.user}</div>
                </div>
            )
        })}
    </div>
  )
}

export default SideBar