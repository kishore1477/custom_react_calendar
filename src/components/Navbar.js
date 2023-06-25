import React, {useContext} from 'react'
import { Link } from 'react-router-dom'
import Contex from '../contex/Contex'
import { useNavigate } from 'react-router-dom';
const Navbar = () => {
  const contex = useContext(Contex)
  const { showEventModal, setView, }= contex 
  const navigate = useNavigate();

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
    <div className={`${showEventModal && 'bg-red-100'}`}>

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
  
    {loggedAdmin || loggedUser ? <a  onClick={handleLogout} className="ml-4 cursor-pointer hover:text-gray-900  bg-slate-200 rounded-sm text-black px-4">Logout </a>: <Link  to = '/login' className="ml-4 hover:text-gray-900  bg-slate-200 rounded-sm text-black px-4">Login </Link> }
   {loggedAdmin && <Link  to = '/main' className="ml-4 hover:text-gray-900 bg-slate-200 rounded-sm text-black px-4">Multiple Calendar </Link>}
    
  </div>
</header>

    </div>
  )
}

export default Navbar