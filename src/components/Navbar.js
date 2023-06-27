import React, {useContext, useState} from 'react'
import { Link } from 'react-router-dom'
import Contex from '../contex/Contex'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const contex = useContext(Contex)
  const { showEventModal, setView, }= contex 
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);

  const handleDropDown = () => {
    setOpen(!isOpen);
  };
  const admin = localStorage.getItem('admin')
  const loggedAdmin = admin && JSON.parse(localStorage.getItem('admin'))
  const user = localStorage.getItem('loggedUser')
  const loggedUser = user && JSON.parse(localStorage.getItem('loggedUser'))
  const handleLogout  = () =>{
    localStorage.setItem('loggedUser', '')
    localStorage.setItem('admin', '')
    navigate('/login')
  }
  return (
    // sticky top-0
    <div className={`${showEventModal && 'bg-red-100'} `}>

<header className={`text-gray-600 body-font  w-full mr-0  border`}>
  <div className="container   flex flex-wrap shadow py-3 mr-0 flex-col md:flex-row items-center">
  
    <nav className=" flex flex-wrap items-center text-base justify-center">
    
      
    </nav>
    {/* <span className="ml-3 text-xl">Tailblocks</span> */}
    {loggedAdmin || loggedUser ?  <Link to = "/origin" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" onClick={()=>setView('month')} >
    <img src="https://t4.ftcdn.net/jpg/03/20/76/73/360_F_320767314_SjgITibHaxadut6siUJyNaxzRWy8vzRE.jpg"className='w-20 h-10 ' alt="profile" width="500" height="600"/>
 
    </Link>:  <Link to = "/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"  >
    <img src="https://t4.ftcdn.net/jpg/03/20/76/73/360_F_320767314_SjgITibHaxadut6siUJyNaxzRWy8vzRE.jpg"className='w-20 h-10 ' alt="profile" width="500" height="600"/>
 
    </Link>}
  <div className='absolute  right-6'>
    {loggedAdmin || loggedUser ? 
  //   <>
  //   <button
  //     id="dropdownAvatarNameButton"
  //     data-dropdown-toggle="dropdownAvatarName"
  //     className="flex items-center text-sm font-medium text-gray-900 rounded-full hover:text-blue-600 dark:hover:text-blue-500 md:mr-0 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:text-white"
  //     type="button"
  //   >
  //     <span className="sr-only">Open user menu</span>
  //     <img
  //       className="w-8 h-8 mr-2 rounded-full"
  //       src="/docs/images/people/profile-picture-3.jpg"
  //       alt="user photo"
  //     />
  //     { loggedUser && loggedUser.name} { loggedAdmin && loggedAdmin.name}
  //     <svg
  //       className="w-4 h-4 mx-1.5"
  //       aria-hidden="true"
  //       fill="currentColor"
  //       viewBox="0 0 20 20"
  //       xmlns="http://www.w3.org/2000/svg"
  //     >
  //       <path
  //         fillRule="evenodd"
  //         d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
  //         clipRule="evenodd"
  //       />
  //     </svg>
  //   </button>
  //   {/* Dropdown menu */}
  //   <div
  //     id="dropdownAvatarName"
  //     className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
  //   >
  //     <div className="px-4 py-3 text-sm text-gray-900 dark:text-white">
  //       <div className="font-medium ">Pro User</div>
  //       <div className="truncate">{ loggedUser && loggedUser.email} { loggedAdmin && loggedAdmin.email}</div>
  //     </div>
  //     <ul
  //       className="py-2 text-sm text-gray-700 dark:text-gray-200"
  //       aria-labelledby="dropdownInformdropdownAvatarNameButtonationButton"
  //     >
  //       <li>
  //         <a
  //           href="#"
  //           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //         >
  //           Dashboard
  //         </a>
  //       </li>
  //       <li>
  //         <a
  //           href="#"
  //           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //         >
  //           Settings
  //         </a>
  //       </li>
  //       <li>
  //         <a
  //           href="#"
  //           className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
  //         >
  //           Earnings
  //         </a>
  //       </li>
  //     </ul>
  //     <div className="py-2">
  //       <a
  //         onClick={handleLogout}
  //         className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
  //       >
  //         Logout
  //       </a>
  //     </div>
  //   </div>
  // </>
  
  <div className="dropdown">
  <button
    className="text-black rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center"
    onClick={handleDropDown}
  >
    { loggedUser && loggedUser.name} { loggedAdmin && loggedAdmin.name}
    <svg
      className="ml-2 w-4 h-4"
      aria-hidden="true"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  </button>

  <div
    id="dropdown"
    className={`z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ${
      isOpen ? "block" : "hidden"
    }`}
  >
    <ul className=" z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow ">
        <li
        >
          <a   onClick={handleLogout} className="block py-2 px-4 cursor-pointer hover:bg-gray-100">
          logout
          </a>
        </li>
    </ul>
  </div>
</div>
    : <Link  to = '/login' className="ml-4 hover:text-gray-900  bg-slate-200 rounded-sm text-black px-4">Login </Link> }
   </div>
   {loggedAdmin && <div>
    
    <Link  to = '/main' className="ml-4 hover:text-gray-900 bg-slate-200 rounded-sm text-black px-4">Multiple Calendar </Link>
    <Link  to = '/offDays' className="ml-4 hover:text-gray-900 bg-slate-200 rounded-sm text-black px-4">Calendar off days setup </Link>
    </div>}
  </div>
</header>

    </div>
  )
}

export default Navbar