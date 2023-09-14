import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AiFillEyeInvisible,AiFillEye } from 'react-icons/ai';
import { AiOutlineMail } from 'react-icons/ai';
import { RiLockPasswordLine } from 'react-icons/ri';
const Login = () => {
  
    const [Error, setError] = useState("")
    const [loginData, setLoginData] = useState({logEmail:"",logPass:""});
const [Success, setSuccess] = useState("");
const [open, setOpen] = useState(false);
const navigate = useNavigate();
const  userList = {
  user :[

    {
      name:"Arisha",
      email:"arisha@evolve.com",
      pass:"arisha12",
      color:'red'
    },
    {
      name:"Ansab",
      email:"ansab@evolve.com",
      pass:"ansab12",
      color:'green'
    },
    {
      name:"Ramsha",
      email:"ramsha@evolve.com",
      pass:"ramsha12",
      color:'indigo'
    },
    {
      name:"Kishore",
      email:"kishore@evolve.com",
      pass:"kishore12",
      color:'purple'
    },
  ],
  other:[

     
    {
      name:"Sameer",
      email:"sameer@evolve.com",
      pass:"sameer12",
      color:'blue',
      profession:'Auditor'
    },
    {
      name:"Huzaifa",
      email:"huzaifa@evolve.com",
      pass:"huzaifa12",
      color:'gray',
      profession:'Translator'
    },
    {
      name:"Waleed",
      email:"waleed@evolve.com",
      pass:"waleed12",
      color:'purple',
      profession:'Expert'
    },
  ]
}
// const userList  = [
 
//   [
   
//   ],
 
// ]
const adminList  = [
  {
    name:"Noman",
    email:"noman@evolve.com",
    pass:"noman12"
  }
]
localStorage.setItem("userList", JSON.stringify(userList))
localStorage.setItem("adminList", JSON.stringify(adminList))
    const handleLogin= (e) =>{
      e.preventDefault()
      const {logEmail, logPass} = loginData
  
  userList.user.map((user,i)=>{
    if((user.email === logEmail) && (user.pass === logPass )){
      localStorage.setItem("loggedUser", JSON.stringify(user))
      navigate('/origin')
    }
    // if((user.email === logEmail || user.other.email === logEmail) && (user.pass === logPass || user.other.pass === logPass)){
    //   localStorage.setItem("loggedUser", JSON.stringify(user))
    //   navigate('/origin')
    // }
  })
  userList.other.map((user,i)=>{
    if((user.email === logEmail) && (user.pass === logPass )){
      localStorage.setItem("loggedUser", JSON.stringify(user))
      navigate('/origin')
    }
    // if((user.email === logEmail || user.other.email === logEmail) && (user.pass === logPass || user.other.pass === logPass)){
    //   localStorage.setItem("loggedUser", JSON.stringify(user))
    //   navigate('/origin')
    // }
  })
  adminList.map((admin,i)=>{
    if(admin.email === logEmail && admin.pass === logPass){
      localStorage.setItem("admin", JSON.stringify(admin))
      navigate('/origin')
    }
  })
    
       
       


    }
    const toggle = ()=>{
      setOpen(!open)
  
    }
    const onchange = (e)=>{
      const  {name, value} = e.target
      setLoginData({...loginData, [name]:value})
      
    }
  return (
    <section className="text-gray-600 body-font">
    <div className="container px-5 py-24 mx-auto flex flex-wrap    justify-center  items-center">
    
      <div className="lg:w-2/6 md:w-1/2 bg-gray-100 rounded-lg p-8    w-full mt-10 md:mt-0">
     <b>admin login: -</b>  email: noman@evolve.com, password: noman12, <br/>  <b>user login:</b> - email: kishore@evolve.com, password: kishore12,
        <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
          Login 
        </h2>
        <form className="space-y-4 md:space-y-6" onSubmit={handleLogin}>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-gray-600">
            Email Address
          </label>
          <input
           type="email" name="logEmail" id="logEmail"
            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  pr-3 pl-10" required  value={loginData.logEmail} onChange={onchange}
          />
           <div className = 'absolute  left-1 top-9 text-purple-700 text-2xl'>
{/* <RiShieldUserFill/> */}
<AiOutlineMail/>
              </div>
        </div>
        <div className="relative mb-4">
          <label htmlFor="full-name" className="leading-7 text-sm text-gray-600">
           Password
          </label>
          <input
           type={open?'text':'password'} name="logPass" id="logPass" placeholder="••••••••" 
         
            className="w-full bg-white rounded border border-gray-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out  pr-3 pl-10" required  value={loginData.logPass} onChange={onchange} 
          />
          <div className = 'text-2xl absolute right-1 top-9 text-yellow-500 cursor-pointer'>
              {
                open? <AiFillEye color='indigo' onClick={toggle}/>: <AiFillEyeInvisible  color='indigo' onClick={toggle}/>
              }
            
            </div>
            <div className = ' absolute left-1 top-9  text-purple-700 text-2xl'> 
              <RiLockPasswordLine/>
            </div>
        </div>
       
        <button  className="text-white bg-purple-500 border-0 py-2 px-8 focus:outline-none hover:bg-purple-600 rounded text-lg">
          Login
        </button>
        </form>
        <p className="text-xs text-gray-500 mt-3">
         To login in your given account  to view your account.
        </p>
      </div>
    </div>
  </section>
  
  )
}

export default Login