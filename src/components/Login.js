import React from 'react'
import { useState } from 'react'
const Login = () => {
    const [logindata, setLogindata] = useState({})
    const handleLogin= (e) =>{
        e.preventDefault()


    }
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap    justify-center  items-center">
     
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8    w-full mt-10 md:mt-0">
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Login 
        </h2>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
           Password
          </label>
          <input
            type="pass"
            id="pass"
            name="pass"
         
            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
       
        <button onClick={handleLogin} className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
          Login
        </button>
        <p className="text-xs text-gray-500 mt-3">
          Literally you probably haven't heard of them jean shorts.
        </p>
      </div>
    </div>
  </section>
  
  )
}

export default Login