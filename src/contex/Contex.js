import dayjs from 'dayjs';
import { createContext } from 'react';

const Contex = createContext({
  monthIndex: 0,
  setMonthIndex: (index) => {},
    count:0 ,
    setCount : ()=>{},
    daySelected: null,
  setDaySelected: (day) => {},
  showEventModal: false,
  setShowEventModal: () => {},
  dispatchCalEvent: ({ type, payload }) => {},
  dispatch: ({ type, payload }) => {},
  savedEvents: [],
  selectedUserEventArray: [],
  selectedEvent: null,
  setSelectedEvent: () => {},
  selectedUserEvent: null,
  setSelectedUserEvent: () => {},
  labels: [],
  setLabels: () => {},
  updateLabel: () => {},
  selectedDate:dayjs(),
  setSelectedDate:()=>{},
  view:'month',
  setView:()=>{},
  checked:true,
  setChecked: ()=>{},
  dispatchMultiCalEventModal: ({ type, payload }) => {},
  multipleCalendarEventModalArray: [],
  showMultiCalEventModal: false,
  setShowMultiCalEventModal: () => {},
  showSmallCal:false,
  setShowSmallCal:()=>{},
  loggedUser:'',
  setLoggedUser: ()=>{},
  loggedAdmin:"",
  setLoggedAdmin:()=>{}, 
  selectedOffDay :["Saturday","Sunday"],
  setSelectedOffDay:()=>{},
  userNameAddEvent:'',
  setUserNameAddEvent:()=>{},
  adminNameAddEvent:'',
  setAdminNameAddEvent:()=>{}
 

})




export default Contex;