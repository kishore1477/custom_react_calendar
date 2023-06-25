import React, { useContext, useState } from "react";
import Contex from "../contex/Contex";
// import TimePicker from 'react-time-picker';
import { TimePicker } from 'antd';
import { DatePicker,Space } from 'antd';

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
const labelsClasses = [
  "indigo",
  "gray",
  "green",
  "blue",
  "red",
  "purple",
];

export default function EventModal() {

  //  date picker code
  const [dates, setDates] = useState(null);
  const [valued, setValued] = useState(null);
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
    setShowSmallCal,
  } = useContext(Contex);

  const [showTime, setShowTime] = useState(false)


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
  const [title, setTitle] = useState(
    selectedEvent ? selectedEvent.title : ""
  );
  const [location, setLocation] = useState(
    selectedEvent ? selectedEvent.location : ""
  );
  const [label, setLabel] = useState(
    selectedEvent ? selectedEvent.label : ""
  );
  const [desc, setDescription] = useState(
    selectedEvent ? selectedEvent.desc : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      start,
      end,
      title,
      desc,
      location,
      createdLabel:label,
      label: selectedOption,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
      start:valued && valued[0],
      end:valued && valued[1]
    };
    console.log("CalendarEvent is:", calendarEvent)

    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      if (title && desc && location) {

        dispatchCalEvent({ type: "push", payload: calendarEvent });
      } else {
        alert("All Fields are required.")
      }
    }

    setShowEventModal(false);
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
  return (

    <div>  
    <div className={`h-screen w-full fixed left-0 top-0  flex justify-center items-center z-10 `}>
     
      <form className=" bg-white rounded-lg shadow-2xl mx-9 w-full md:w-96 ">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400 ">
            drag_handle
          </span>
          <span>Add New Event</span>
          <div>
            {selectedEvent && (
              <span
                onClick={() => {
                  dispatchCalEvent({
                    type: "delete",
                    payload: selectedEvent,
                  });
                  setShowEventModal(false);
                }}
                className="material-icons-outlined text-gray-400 cursor-pointer"
              >
                delete
              </span>
            )}
            <button onClick={() => setShowEventModal(false)}>
              <span className="material-icons-outlined text-gray-400">
                close
              </span>
            </button>
          </div>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2  w-1/2 md:w-full  border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <div className="flex">
              <span className="material-icons-outlined text-gray-400 ">
                schedule
              </span>
              <p className="ml-2 mr-10" >{daySelected.format("dddd, MMMM DD")}</p>


            </div>
            {/* <RangePicker
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
      
      onOpenChange={onOpenChange}
      changeOnBlur
    /> */}

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
        
         format="YYYY-MM-DD HH:mm"
         placeholder={["Start", "End"]}
        
         showTime={{
          hideDisabledOptions: true,
          defaultValue: [dayjs('00:00', 'HH:mm'), dayjs('11:59', 'HH:mm')],
        }}
        />
 
  </Space>
    {/* <DatePicker.RangePicker format="YYYY-MM-DD HH:mm"/> */}
            {/* <TimePicker.RangePicker placeholder={["Start", "End"]} format="YYYY-MM-DD HH:mm" className="font-bold text-green-700" onOk={(time) => {
              setTimeString(time);
              console.log("time is ",time);
            
            }} /> */}



            <div className="flex">
              <span className="material-icons-outlined text-gray-400  flex justify-center items-center">
                segment
              </span>
              <input
                type="text"
                name="desc"
                placeholder="Add a description"
                value={desc}
                required
                className="ml-4 border-0 text-gray-600 pb-2 border-b-2 w-1/2 md:w-full border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setDescription(e.target.value)}
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
                value={location}
                required
                className="ml-4 border-0 text-gray-600 pb-2 w-1/2 md:w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>
            <div className="flex gap-x-2">
              <div className="flex">
                <div className=""><input
                  type="text"
                  name="label"
                  placeholder="Create a label"
                  value={label}
                  required
                  className=" border-0 text-gray-600 pb-2 w-1/2 md:w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                  onChange={(e) => setLabel(e.target.value)}
                /></div>
                <div className="ml-4">
                  <select onChange={handleChange}>
                    {options.map((option, i) => (
                      <option key={i} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* {labelsClasses.map((lblClass, i) => {
              // console.log("lbl Classes is:", lblClass)
            return (    <span
                  key={i}
                  onClick={() => setSelectedLabel(lblClass)}
                  className={`bg-${lblClass}-500  w-6 h-6 rounded-full flex items-center justify-center cursor-pointer`}
                >
                  {selectedLabel === lblClass && (
                    <span className="material-icons-outlined  text-sm">
                      check
                    </span>
                  )}
                </span>
              )})} */}



            </div>
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 ">
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
    </div>
  );
}