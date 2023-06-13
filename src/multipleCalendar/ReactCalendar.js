import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
const ReactCalendar = () => {
    const longEventDate = new Date(); // Set the start date of the long event
  const longEventEndDate = new Date(); // Set the end date of the long event
  longEventEndDate.setDate(longEventEndDate.getDate() + 7); // Set the event duration (7 days in this example)

  const tileContent = ({ date }) => {
    // Custom rendering for the long event
    if (date >= longEventDate && date <= longEventEndDate) {
      return <div className="long-event-tile">Long Event</div>;
    }
    return null;
  };
    const [value, onChange] = useState(new Date());
  return (
    <div>
    <Calendar onChange={onChange}  tileContent={tileContent}  value={value} />
  </div>
  )
}

export default ReactCalendar