import React from "react";
import "./Event.css";
import eventBg from "../src/assets/event-bg.jpg"; // import your local image

const Event = () => {
  const eventTitle = "GIVERS GALA 2.0";
  const eventSubtitle = "You are cordially invited!";
  const eventDescription = "Join us for an unforgettable evening of fun and celebration!";
  const eventLocation = "RJ Atlas Digital AI, Thalasery";

  // Event start and end for Google Calendar (UTC)
  const eventStart = "20251107T033000Z"; // 9:00 AM IST → 03:30 UTC
  const eventEnd = "20251107T043000Z";   // 10:00 AM IST → 04:30 UTC

  const calendarLink = `https://www.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(
    eventTitle
  )}&dates=${eventStart}/${eventEnd}&details=${encodeURIComponent(
    eventDescription
  )}&location=${encodeURIComponent(eventLocation)}&sf=true&output=xml`;

  const mapsLink = "https://maps.app.goo.gl/dqmpL9Q5WYCVG1fu5?g_st=iwb";

  return (
    <div className="event-background" style={{ backgroundImage: `url(${eventBg})` }}>
      <div className="event-overlay">
        <h1 className="event-title">{eventTitle}</h1>
        <h3 className="event-subtitle">{eventSubtitle}</h3>

        <div className="event-buttons">
          <a
            href={calendarLink}
            target="_blank"
            rel="noopener noreferrer"
            className="event-button"
          >
            Add to Calendar
          </a>
          <a
            href={mapsLink}
            target="_blank"
            rel="noopener noreferrer"
            className="event-button"
          >
            Location
          </a>
        </div>
      </div>
    </div>
  );
};

export default Event;
