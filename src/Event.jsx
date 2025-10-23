import React from "react";
import "./Event.css";

const Event = () => {
  // Event details
  const eventTitle = "Jd Creation Meetup";
  const eventDescription = "Join us for our fun and exciting event!";
  const eventLocation = "RJ Atlas Digital AI, thalasery";

  // Event start and end time in UTC (YYYYMMDDTHHMMSSZ)
  const eventStart = "20251023T163500Z";
  const eventEnd = "20251025T130000Z";

  // Generate Google Calendar link
  const calendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventTitle
  )}&dates=${eventStart}/${eventEnd}&details=${encodeURIComponent(
    eventDescription
  )}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`;

  return (
    <div className="event-container">
      <h2 className="event-title">{eventTitle}</h2>
      <p className="event-details">{eventDescription}</p>
      <p className="event-location">📍 {eventLocation}</p>
      <a
        href={calendarLink}
        target="_blank"
        rel="noopener noreferrer"
        className="calendar-button"
      >
        Add to Google Calendar
      </a>
    </div>
  );
};

export default Event;
