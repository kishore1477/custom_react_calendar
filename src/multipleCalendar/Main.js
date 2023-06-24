import React from 'react'
import ShowMultipleCalendar from './ShowMultipleCalendar'
import SideBar from './SideBar'

const Main = () => {
  return (
    <div className='flex mt-10'>
        
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