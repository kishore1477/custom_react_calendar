import React, { useContext, useState } from "react";
import Contex from "../contex/Contex";
// import TimePicker from 'react-time-picker';
import { TimePicker } from 'antd';
import dayjs from 'dayjs';
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
  const {
    setShowEventModal,
    daySelected,
    dispatchCalEvent,
    selectedEvent,
  } = useContext(Contex);

  const [showTime, setShowTime] = useState(false)


  const  handleAddTime = () =>{
    setShowTime(!showTime)

  }
  const [timeString, setTimeString] = useState('');

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
      title,
      desc,
      location,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
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
  return (
    <div className="h-screen w-full fixed left-0 top-10  flex justify-center items-center ">
      <form className="bg-white rounded-lg shadow-2xl w-1/2 md:w-1/4">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400 ">
            drag_handle
          </span>
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
              <p className="ml-2 mr-10">{daySelected.format("dddd, MMMM DD")}</p>
              <span className=" py-2 px-4 cursor-pointer bg-slate-200" onClick={handleAddTime}>Add time</span>

            </div>
           {showTime?<div className="text-sm">

              
            
            
<TimePicker.RangePicker placeholder={["Start", "End"]} format="HH:mm" className="font-bold text-green-700" onOk={(time) => {
  setTimeString(timeString);
  console.log(time);
  console.log(timeString);
}} />

</div>:<>All day</>} 
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
                  name="location"
                  placeholder="Create a label"
                  value={location}
                  required
                  className=" border-0 text-gray-600 pb-2 w-1/2 md:w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
                  onChange={(e) => setLocation(e.target.value)}
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
  );
}