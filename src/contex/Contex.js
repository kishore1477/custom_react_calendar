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



})




export default Contex;