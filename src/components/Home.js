// import { useContext } from "react"
import { Link } from "react-router-dom"
// import Contex from "../contex/Contex"


const   Home = () =>{
//   const  { loggedAdmin,loggedUser} = useContext(Contex)
  const admin = localStorage.getItem('admin')
  const loggedAdmin = admin && JSON.parse(localStorage.getItem('admin'))
  const user = localStorage.getItem('loggedUser')
  const loggedUser = user && JSON.parse(localStorage.getItem('loggedUser'))
return (
    <section className="text-gray-600 body-font">
  <div className="container py-2 mx-auto">
    <div className="flex flex-col text-center w-full ">

        {loggedAdmin || loggedUser ? <>
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1 capitalize">
       WELCOME  {loggedAdmin?loggedAdmin.name:loggedUser.name}
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
      Welcome back!
      </h1>
        
        
        </>:<>
        <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
       WELCOME TO SCHEDULAR
      </h2>
      <h1 className="sm:text-3xl text-xl font-medium title-font  text-gray-900">
        Please Login to your provided Credentials
      </h1>
        
        </>}
      
    
    </div>
    
  {loggedAdmin || loggedUser ? <Link to ='/origin'>  <button className="flex mx-auto  text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
     View   
    </button></Link>:  <Link to ='/login'> <button className="flex mx-auto mt-3 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
     Login   
    </button> </Link>}

    <div className="d-flex flex-col justify-center items-center text-center mb-10">
    <h1 className='text-xl py-2 text-red-600'>

    Video demo of the project
</h1>
<div className=" mb-4">
<iframe src="https://drive.google.com/file/d/1nzAZE0E5Koq4TW6_5wX1XhgSebchTT65/preview"  width="100%"  height="480" allow="autoplay"></iframe>
   
    
    </div>
</div>
  </div>
</section>

)
}

export default Home
