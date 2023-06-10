import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const localizer = momentLocalizer(moment);

const MyCalendar = () => {
  const [calendars, setCalendars] = useState([
    {
      id: 1,
      name: 'Personal',
      color: 'blue',
      events: [
        {
          id: 1,
          title: 'Meeting',
          start: new Date(2023, 5, 10, 10, 0),
          end: new Date(2023, 5, 10, 11, 0),
        },
        // Add more events as needed
      ],
    },
    {
      id: 2,
      name: 'Work',
      color: 'red',
      events: [
        {
          id: 2,
          title: 'Conference Call',
          start: new Date(2023, 5, 11, 14, 0),
          end: new Date(2023, 5, 11, 15, 0),
        },
        // Add more events as needed
      ],
    },
  ]);

  const handleToggleCalendar = (calendarId) => {
    setCalendars((prevCalendars) =>
      prevCalendars.map((calendar) => {
        if (calendar.id === calendarId) {
          return { ...calendar, visible: !calendar.visible };
        }
        return calendar;
      })
    );
  };

  return (
    <div>
      {calendars.map((calendar) => (
        <label key={calendar.id}>
          <input
            type="checkbox"
            checked={calendar.visible}
            onChange={() => handleToggleCalendar(calendar.id)}
          />
          {calendar.name}
        </label>
      ))}
      <Calendar
        localizer={localizer}
        events={calendars
          .filter((calendar) => calendar.visible)
          .flatMap((calendar) => calendar.events)}
      />
    </div>
  );
};

export default MyCalendar;
