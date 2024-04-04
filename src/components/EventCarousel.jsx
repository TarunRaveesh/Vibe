import React, { useState, useEffect } from "react";
import axios from "axios";
import { Swiper, SwiperSlide } from "swiper/react";
import EventCard from "./EventCard";
import "../styles/EventCard.css";
import "swiper/css";

const EventCarousel = () => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const response = await axios.get(
        "https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&type=reco"
      );
      setEvents(response.data.events);
    };

    fetchEvents();
  }, []);

  return (
    <Swiper
      slidesPerView={4.25}
      spaceBetween={20}
      loop={true}
      breakpoints={{
        1280: {
          slidesPerView: 4.25 /* Adjust as needed for 1280px */,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3.15 /* Adjust as needed for 1024px */,
          spaceBetween: 17.5,
        },
        768: {
          slidesPerView: 2.5,
          spaceBetween: 15,
        },
        480: {
          slidesPerView: 1.15,
          spaceBetween: 10,
        },
        360: {
          // Adjust this breakpoint for smaller phones
          slidesPerView: 1,
          spaceBetween: 5,
        },
        280: {
          // Adjust this breakpoint for smaller phones
          slidesPerView: 1,
          spaceBetween: 5,
        },
      }}
    >
      {events.map((event) => (
        <SwiperSlide key={event.eventName}>
          <EventCard {...event} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default EventCarousel;
