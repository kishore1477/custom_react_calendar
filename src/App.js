import logo from './logo.svg';
import './App.css';
import Month from './components/Month';
import { useState, useEffect,useContext  } from 'react';
import { getMonth } from './main';
import EventModal from './components/EventModal';
import Navbar from './components/Navbar';
import Contex from './contex/Contex';
import Footer from './components/Footer';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import ContexWrapper from './contex/ContexWrapper';
import Login from './components/Login';
import CalendarHeader from './components/CalendarHeader';
import Labels from './components/Labels';
import Main from './multipleCalendar/Main';
import DayView from './components/DayView/DayView';
import Overlay from './multipleCalendar/Overlay';
import Home from './components/Home';
import OffDaysSetup from './components/OffDaysSetup';
function App() {
 
  const [show, setShow] = useState(false)
 
  
  

 
const handleCalendar =()=>{
  // show?setShow(false):setShow(true)
  setShow(!show)
}
  return (
    <>
    
    <ContexWrapper>
      
<Router>
  <Navbar/>
  <CalendarHeader/>

    <Routes>
    
      <Route path="/" element={  <Home   />  }/>  
      <Route path="/offDays" element={  <OffDaysSetup   />  }/>  
      <Route path="/origin" element={  <Month   />  }/>  
      <Route path="/main" element={  <Main   />  }/>  
      {/* <Route path="/" element={  <Labels/>}/>   */}
       <Route path="/login" element={  <Login  />}/>
       <Route path="/overlay" element={  <Overlay  />}/>
       <Route path="/day/:date" element={  <DayView  />}/>
     


   
    </Routes>
    <Footer/>
  </Router>



 
   </ContexWrapper>
   </>
  );
}

export default App;
