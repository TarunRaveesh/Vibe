import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import "../styles/EventCard.css";

function EventCard({ eventName, cityName, date, weather, distanceKm, imgUrl }) {
  date = date.replace("T00:00:00.000Z", "");

  const formatDate = (dateString) => {
    const dateObj = new Date(dateString);
    const month = dateObj.toLocaleString("default", { month: "long" });
    const day = dateObj.getDate();
    const year = dateObj.getFullYear();
    return `${month} ${day}, ${year}`;
  };

  const formatWeather = (weatherString) => {
    const lastCIndex = weatherString.lastIndexOf("C");
    if (lastCIndex !== -1) {
      return weatherString.substring(0, lastCIndex) + "°C";
    } else {
      return weatherString;
    }
  };

  return (
    <div className="event-card">
      <img
        src={imgUrl.replace("/view", "").replace("/file/d/", "/thumbnail?id=")}
        alt={eventName}
      />
      <div className="event-info">
        <h5>{eventName}</h5>
        <p>
          <FontAwesomeIcon icon={faLocationDot} /> {cityName}
        </p>
        <p>
          <span>{formatDate(date)}</span>
          <span> | </span>
          <span>{formatWeather(weather)}</span>
        </p>
      </div>
    </div>
  );
}

export default EventCard;
