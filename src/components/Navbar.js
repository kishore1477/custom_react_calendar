import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

<header className="text-gray-600 body-font  w-full mr-0">
  <div className="container   flex flex-wrap shadow bg-white py-3 mr-0 flex-col md:flex-row items-center">
  
    <nav className=" flex flex-wrap items-center text-base justify-center">
    
      
    </nav>
    {/* <span className="ml-3 text-xl">Tailblocks</span> */}
    <Link to = "/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0" >
    <img src="https://t4.ftcdn.net/jpg/03/20/76/73/360_F_320767314_SjgITibHaxadut6siUJyNaxzRWy8vzRE.jpg"className='w-20 h-10 ' alt="profile" width="500" height="600"/>
 
    </Link>
    <Link  to = '/login'className="ml-4 hover:text-gray-900">Login </Link>
  </div>
</header>

    </div>
  )
}

export default Navbar