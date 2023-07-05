import React, { useContext, useState, useEffect } from "react";
import Contex from "../contex/Contex";
// import TimePicker from 'react-time-picker';
import { TimePicker } from 'antd';
import { DatePicker,Space } from 'antd';
import Select from 'react-select'
import makeAnimated from 'react-select/animated';
import dayjs from 'dayjs';
import SmallCalendar from "./SmallCalendar";
const { RangePicker } = DatePicker;
// import 'react-time-picker/dist/TimePicker.css';
// import 'react-clock/dist/Clock.css';
const options = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];

const colourOptions = [
  { value: 'Arisha', label: 'Arisha' },
  { value: 'Ramsha', label: 'Ramsha' },
  { value: 'Ansab', label: 'Ansab' },
  { value: 'Kishore', label: 'Kishore' },
];

export default function EventModal() {
  const animatedComponents = makeAnimated();
  //  date picker code
  const [dates, setDates] = useState(null);
  const [valued, setValued] = useState(null);
  const [selectedTeamMembers, setSelectedTeamMembers] = useState([]);
  console.log("Selected team members is :", selectedTeamMembers)
  console.log("Selected team members is :", selectedTeamMembers.length )
  console.log("Value 0 is:", valued &&  valued[0])
  console.log("Value 1 is:", valued &&  valued[1])
  console.log("dates date is :", dates)
  console.log("valued date is :", valued)
  const disabledDate = (current) => {
    // console.log("current date is :", current)
    
    if (!dates) {
      return false;
    }
    const tooLate = dates[0] && current.diff(dates[0], 'year') >= 1;
    // console.log("tooLate is :", tooLate)
    const tooEarly = dates[1] && dates[1].diff(current, 'year') >= 1;
    // console.log("tooEarly is :", tooEarly)
    return !!tooEarly || !!tooLate;
  };
  const onOpenChange = (open) => {
    if (open) {
      setDates([null, null]);
    } else {
      setDates(null);
    }
  };


  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
    showEventModal,
    showSmallCal,
    setShowSmallCal,userNameAddEvent,adminNameAddEvent,setAdminNameAddEvent,setUserNameAddEvent
  } = useContext(Contex);

  const [showTime, setShowTime] = useState(false)
  const [adminNameEvent, setAdminNameEvent] = useState("")
console.log("adminNameAddEvent is:",adminNameAddEvent)
console.log("userNameAddEvent is:",userNameAddEvent)
// useEffect(() => {
//   // setAdminNameEvent(adminNameAddEvent)
//   setAdminNameAddEvent('')
// }, [userNameAddEvent])

  const handleAddTime = () => {
    setShowTime(!showTime)

  }
  const [timeString, setTimeString] = useState('');
  console.log("time string is ",timeString);

  const start = timeString && timeString[0]
  // const startTimeIS = dayjs(start).format('HH:mm')
  const startTimeIS = dayjs(start).hour()
  console.log("Start time  is :", start)
  console.log("startTimeIS time   in hour  is :", startTimeIS)
  const end = timeString && timeString[1]
  const endTimeIS = timeString && dayjs(end).format('HH:mm')
  console.log("end time  is :", endTimeIS)
  // Use state to store the selected option
  const [selectedOption, setSelectedOption] = useState("");
  // Handle the change event of the select tag
  const handleChange = (event) => {
    // Set the selected option to the value of the selected option
    setSelectedOption(event.target.value);
  };
  console.log("selectedOption:", selectedOption)

  const [value, onChange] = useState('10:00');
  console.log("Time value is :", value)
  const [modalData, setModalData] = useState({auditNo:'', location:'',customerName:"",standaradTyp:'', industCode:'', siteName:'',label:'' })
  const [auditNo, setAuditNo] = useState('');
  const [location, setLocation] = useState(
    selectedEvent ? selectedEvent.location : ""
  );
  const [label, setLabel] = useState(
    selectedEvent ? selectedEvent.label : ""
  );
  const [desc, setDescription] = useState(
    selectedEvent ? selectedEvent.desc : ""
  );
  // const [selectedLabel, setSelectedLabel] = useState(
  //   selectedEvent
  //     ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
  //     : labelsClasses[0]
  // );

  function handleSubmit(e) {
    e.preventDefault();
const {auditNo,location, customerName, standaradTyp, industCode, siteName, label} = modalData
    // auditNo:'', location:'',customerName:"",standaradTyp:'', industCode:'', siteName:'',label:'' 
    const calendarEvent = {
      auditNo,
      customerName,
      standaradTyp,
      industCode,
      siteName,
      location,
      createdLabel:label,
      label: selectedOption,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
      start:valued && valued[0],
      end:valued && valued[1],
      user: userNameAddEvent && userNameAddEvent,
     
      // admin: adminNameAddEvent && adminNameAddEvent,

    };
    console.log("CalendarEvent is:", calendarEvent)

    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      if (auditNo && customerName && standaradTyp && siteName && label) {
if(selectedTeamMembers.length > 0){
  // selectedTeamMembers.forE
  selectedTeamMembers.forEach((item) => {
    
    dispatchCalEvent({ type: "push", payload: {
      auditNo,
      customerName,
      standaradTyp,
      industCode,
      siteName,
      location,
      createdLabel:label,
      label: selectedOption,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
      start:valued && valued[0],
      end:valued && valued[1],
      user: item.value
     
      // admin: adminNameAddEvent && adminNameAddEvent,

    } });
  });
}else{
  dispatchCalEvent({ type: "push", payload: calendarEvent });
}
        
      } else {
        alert("All Fields are required.")
      }
    }

    setShowEventModal(false);
    setSelectedTeamMembers([])
    setUserNameAddEvent('')
  }

  // const handleSmallCal = () =>{
  //   setShowSmallCal(true)
  // }
  const handleDefaultValue = () => {
    // if (selectedDates) {
    //   return [dayjs(defaultValue[0], DATE_FORMAT), dayjs(defaultValue[1], DATE_FORMAT)];
    // }

    return [dayjs(), dayjs()];
  };
  const onchange = (e)=>{
    const  {name, value} = e.target
    setModalData({...modalData, [name]:value})
    
  }
  return (

    <div>  
    <div className={`h-screen w-full fixed left-0 top-0 flex justify-center items-center  z-10`}>
     
      <form className=" bg-white rounded-lg shadow-2xl mx-9 px-4  w-full md:w-96 ">
        <header className="bg-gray-100 px-4 xl:py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400 ">
            drag_handle
          </span>
          <span>Add New Event</span>
          <div>
            
              
        
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="">
          <div className="grid grid-cols-1/5 items-end gap-y-2  md:gap-y-4">
            <div></div>
            <input
              type="number"
              name="auditNo"
              placeholder="Audit No"
              value={modalData.auditNo}
              required
              className=" border-0 text-gray-600 font-semibold   w-1/2 md:w-full  border-b-2 text-sm p-1 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={onchange}
            />
            <div className="flex">
              <span className="material-icons-outlined text-gray-400 ">
                schedule
              </span>
              <p className="ml-2 mr-10" >{daySelected.format("dddd, MMMM DD")}</p>


            </div>
           
<Space direction="vertical" size={8}>
  
    <RangePicker 
    //  defaultValue={handleDefaultValue}
     defaultValue = {{
      defaultValue:[dayjs(), dayjs()]}}
         suffixIcon
         style={{
           height: "auto",
           width: "auto",
           border: "none",
           borderRadius: "0px",
           cursor: "pointer",
           fontSize: "17px",
           margin: "0px",
           padding: "0px"
         }}
         value={dates || valued}
         disabledDate={disabledDate}
         onCalendarChange={(val) => {
           setDates(val);
         }}
         onChange={(val) => {
           setValued(val);
         }}
        
         format="YYYY-MM-DD HH:mm a"
         placeholder={["Start", "End"]}
        
         showTime={{
          hideDisabledOptions: true,
          defaultValue: [dayjs('00:00', 'HH:mm'), dayjs('11:59', 'HH:mm')],
        }}
        />
 
  </Space>
  



            <div className="flex">
            <span className="material-icons-outlined">
          person
</span>
              <input
                type="text"
                name="customerName"
                placeholder="Customer Name"
                value={modalData.customerName}
                required
                className="border-0 text-gray-600  border-b-2 text-sm p-1 w-1/2 md:w-full border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={onchange}
              />
            </div>
            <div className="flex">
      
              <input
                type="text"
                name="standaradTyp"
                placeholder="Standarad (Audit type)"
                value={modalData.standaradTyp}
                required
                className="border-0 text-gray-600  border-b-2 text-sm p-1 w-1/2 md:w-full border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={onchange}
              />
            </div>
            <div className="flex">
            <span className="material-icons-outlined">
fiber_pin
</span>
              <input
                type="number"
                name="industCode"
                placeholder="Industrial Code"
                value={modalData.industCode}
                required
                className="border-0 text-gray-600  border-b-2 text-sm p-1 w-1/2 md:w-full border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={onchange}
              />
            </div>
            <div className="flex">
    
              <input
                type="text"
                name="siteName"
                placeholder="Site Name"
                value={modalData.siteName}
                required
                className="border-0 text-gray-600  border-b-2 text-sm p-1 w-1/2 md:w-full border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={onchange}
              />
            </div>
            <div className="flex">
              <span className="material-icons-outlined">
                add_location
              </span>
              <input
                type="text"
                name="location"
                placeholder="Add a Location"
                value={modalData.location}
                required
                className="border-0 text-gray-600  w-1/2 md:w-full border-b-2 text-sm p-1 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={onchange}
              />
            </div>
            

            <Select
      closeMenuOnSelect={false}
      components={animatedComponents}
     placeholder ='Select team members (optional)'
      isMulti
      options={colourOptions}
      onChange={setSelectedTeamMembers}
      className="p-0 m-0 border-none"
    />
            <div className="flex gap-x-2">
              <div className="flex">
                <div className=""><input
                  type="text"
                  name="label"
                  placeholder="Create a label"
                  value={modalData.label}
                  required
                  className=" border-0 text-gray-600   w-1/2 md:w-full border-b-2 text-sm p-1 border-gray-200 focus:outline-none focus:ring-0  focus:border-blue-500"
                  onChange={onchange}
                /></div>
                <div className="ml-4">
                  <select onChange={handleChange} className="border-0 ">
                    {options.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

          



            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t pb-2  ">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-2 text-sm py-1 rounded text-white"
          >
           Schedule
          </button>
        </footer>
      </form>
    </div>
    </div>
  );
}