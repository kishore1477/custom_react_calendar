import React, { useContext } from 'react'
import ShowMultipleCalendar from './ShowMultipleCalendar'
import SideBar from './SideBar'
import Contex from '../contex/Contex'

const Main = () => {
  const  {showEventModal} = useContext(Contex)
  return (
    <div className={` ${showEventModal && ' bg-red-100'} flex` }>
        
        <div className='w-1/5 border-r-4px solid black h-96 bg-slate-100'>
            <SideBar/>
        </div>
        <div className=''>
            <ShowMultipleCalendar/>
            </div>
    </div>
  )
}

export default Main