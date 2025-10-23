import React from "react";
import "./Event.css";

const Event = () => {
  // Event details
  const eventTitle = "Jd Creation Meetup";
  const eventDescription = "Join us for our fun and exciting event!";
  const eventLocation = "RJ Atlas Digital AI, Thalasery";

  // Event start time in UTC for 4:50 PM IST
  const eventStart = "20251023T113000Z";

  // Automatically calculate end as 1 hour later
  const startDate = new Date("2025-10-23T11:20:00Z");
  const endDate = new Date(startDate.getTime() + 60 * 60 * 1000); // +1 hour

  const pad = (num) => String(num).padStart(2, "0");
  const formatDate = (date) =>
    `${date.getUTCFullYear()}${pad(date.getUTCMonth() + 1)}${pad(
      date.getUTCDate()
    )}T${pad(date.getUTCHours())}${pad(date.getUTCMinutes())}${pad(
      date.getUTCSeconds()
    )}Z`;

  const eventEnd = formatDate(endDate);

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
