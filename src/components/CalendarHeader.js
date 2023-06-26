import dayjs from "dayjs";
import React, { useContext,useState } from "react";
import { Switch ,FormControlLabel,FormGroup} from '@mui/material';
// import logo from "../assets/logo.png";
import { GoogleLoginButton } from "react-social-login-buttons";
import { LoginSocialGoogle } from "reactjs-social-login";
import Contex from "../contex/Contex";
import Labels from "./Labels";
import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
// import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import {BiSearch, BiInfoCircle} from   "react-icons/bi";
import {BsGear} from   "react-icons/bs";
export default function CalendarHeader() {
  const navigate  = useNavigate()
  const [token, setToken] = useState('')
  const { monthIndex, setMonthIndex ,showEventModal, selectedDate,setSelectedDate, view,setView,selectedUserEventArray, checked,setChecked} = useContext(Contex);
  
   
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  const {date} = useParams()
  
  function handlePrevMonth() {
   if( view === 'day'){
    const sub = dayjs(selectedDate).subtract(1,'day')
    
    const subFormat = sub.format("MM-DD-YYYY")
   setSelectedDate(subFormat)

   }else if( view === 'month'){
    setMonthIndex(monthIndex - 1);
   }
   
    
  }
  function handleNextMonth() {
    if( view === 'day'){
      const add = dayjs(selectedDate).add(1,'day')
      const addFormat = add.format("MM-DD-YYYY")
      setSelectedDate(addFormat)
      console.log("add is :", add)
     } else if ( view === 'month'){

       setMonthIndex(monthIndex + 1);
     }

   
  }
  function handleLogout() {
    setToken('')
  }
  function handleReset() {
    if(view === 'day'){
      setSelectedDate(dayjs().format("MM-DD-YYYY"))
    }else if(view === 'month'){
      setMonthIndex(
        monthIndex === dayjs().month()
          ? monthIndex + Math.random()
          : dayjs().month()
      );
    }
    
  }

  const handleDay = () =>{
    setView('day')
    setSelectedDate(dayjs())
  }

  const handleSwitch = (e) =>{
    setChecked(!checked)
    console.log("Checked value is:", checked)
    checked?navigate('/overlay'):navigate('/main')
   

  }
  // if(selectedUserEventArray.length === 0){
  //   setChecked(false)
  // }
  const d = dayjs().format("MM-DD-YYYY") + '$day'
  console.log("D inside header:", d)
  const admin = localStorage.getItem('admin')
  const loggedAdmin = admin && JSON.parse(localStorage.getItem('admin'))
  const user = localStorage.getItem('loggedUser')
  const loggedUser = user && JSON.parse(localStorage.getItem('loggedUser'))
  return (
    // className="sticky top-16"
    <div>
    {loggedAdmin || loggedUser ? 
     <header className={`px-4 py-1 flex items-center ${showEventModal && 'bg-red-100'} `}>
      <h1 className="mr-10 text-xl text-gray-500 fond-bold">
        Calendar
      </h1>
      <button
        onClick={handleReset}
        className="border rounded py-2 px-4 mr-5"
      >
        Today
      </button>
      <button onClick={handlePrevMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_left
        </span>
      </button>
      <button onClick={handleNextMonth}>
        <span className="material-icons-outlined cursor-pointer text-gray-600 mx-2">
          chevron_right
        </span>
      </button>
      <h2 className="ml-4 text-xl text-gray-500 font-bold">
        {view === 'day'?dayjs(selectedDate).format(
          "MMMM DD YYYY"
        ):<>{view === 'month'?dayjs(new Date(dayjs().year(),monthIndex)).format(
          "MMMM YYYY"
        ):''}</>}
      </h2>

{ (loggedUser && loggedUser.name ==='Arisha') || loggedAdmin ?<FormGroup>
  <FormControlLabel control={<Switch  value={checked} onChange={(e)=>handleSwitch(e)} />} label="Overlay" />
 
</FormGroup>:<></> }
      
      {/* <Switch {...label} defaultChecked /> */}
  {/* <div className="flex items-center justify-center md:absolute md:right-80 "> <Link to = '/overlay' > <button >
      Overlay</button></Link></div> */}



      <div className="flex items-end justify-end absolute right-0 mr-4 gap-x-2 md:gap-x-8 col-span-6">
                <div className="flex items-center gap-x-2 md:gap-x-4   col-span-6">
                    <li className="list-none text-2xl">
                        <BiSearch className="text-gray-700"/>
                    </li>

                    {/* <li className="list-none text-xl">
                        <BiInfoCircle className="text-gray-700"/>
                    </li>
                    <li className="list-none text-xl">
                        <BsGear className="text-gray-700"/>
                    </li> */}
                </div>
                <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50">
      {view}
          {/* <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" /> */}
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {({ active }) => (
                <Link
                 to = '/origin'
                 onClick={()=>setView('month')}
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Month
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <Link
                 to ={`/day/${d}`}
                 onClick={handleDay}
                  className={classNames(
                    active ? 'bg-red-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                Day
                </Link>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href="#"
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'block px-4 py-2 text-sm'
                  )}
                >
                 Week
                </a>
              )}
            </Menu.Item>
            {/* <form method="POST" action="#">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="submit"
                    className={classNames(
                      active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                      'block w-full px-4 py-2 text-left text-sm'
                    )}
                  >
                    Sign out
                  </button>
                )}
              </Menu.Item>
            </form> */}
          </div>
        </Menu.Items>
      </Transition>
    </Menu>


                {/* <Select
                    withBg={true}
                    value={calendarView}
                    dropdownClass=""
                    onChange={handleChangeCalendarView}
                    renderPlaceholderValue={(v) => (
                        <span>{v.toUpperCase()}</span>
                    )}
                    render={(click) => (
                        <div>
                            <li onClick={() => click("day")} className="mui-select-item">Day</li>
                            <li onClick={() => click("month")} className="mui-select-item">Week</li>
                            <li onClick={() => click("month")} className="mui-select-item">Month</li>
                        </div>
                    )}>
                </Select> */}

                {/* <li>
                    {authState.auth ? (
                        <>
                        <Avatar onClick={()=>setOpenAuthPopup(openAuthPopup === "auth" ? "" : "auth")} className="w-10 h-10 rounded-full cursor-pointer" src={authState.auth?.avatar} username={authState.auth.firstName} />
                            <Popup  backdropClass="!bg-transparent" isWithBackdrop={true} onClose={()=>setOpenAuthPopup("")} isOpen={openAuthPopup} className="right-0 shadow-xl user-menu-popup">
                                <ul className="text-sm">
                                    <li className="flex items-center gap-x-2">
                                        <Avatar username={authState.auth?.firstName} className="h-8 w-8 rounded-full"
                                                src={authState.auth?.avatar}/>
                                        <h4>{(authState.auth?.firstName)}</h4>
                                    </li>
                                    <li className="flex items-center gap-x-2 mt-2 hover:text-white hover:bg-primary transition transition-colors px-2 py-1 rounded cursor-pointer">
                                        <MdDashboard/>
                                        <Link to={`/profile`}>Profile</Link>
                                    </li>
                                    <li onClick={handleLogout}
                                        className="flex items-center gap-x-2 hover:text-white hover:bg-primary transition transition-colors px-2 py-1 rounded cursor-pointer">
                                        <FaSignOutAlt/>
                                        <span className="">Logout</span>
                                    </li>
                                </ul>
                            </Popup>
                        </>
                    ): (
                    <Link to="/join/login">

                            <FaSignInAlt className="text-sm text-gray-700"/>

                    </Link>
                    )}
                </li> */}
            </div>
    </header>:<></>}
  
    </div>
  );
}