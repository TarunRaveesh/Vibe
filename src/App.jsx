import React from "react";
import EventCarousel from "./components/EventCarousel";
import SearchBar from "./components/SearchBar";
import Menu from "./components/Menu";
import SignInButton from "./components/SignInButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faHeart } from "@fortawesome/free-solid-svg-icons";
import "./styles/App.css";
import UpcomingEvents from "./components/UpcomingEvents";
import "bootstrap/dist/css/bootstrap.css";
import Footer from "./components/Footer";
import Favorites from "./components/Favorites";

const App = () => {
  return (
    <>
      <div className="app">
        <div className="header">
          <h1 class="heading">VIBE</h1>
          <SignInButton />
        </div>
        <br />
        <SearchBar /> <br />
        <Favorites /> <br />
        <br />
        <Menu />
        <div className="banner-container">
          <img
            src="./src/assets/banner.jpg"
            alt="Banner Image"
            className="banner-image"
          />
          <div className="banner-text">
            <h1> Discover Exciting Events Happening Near You </h1>
            <p> Stay Tuned For Updates! </p>
          </div>
        </div>
        <div className="rec-container">
          <h4 align="left">
            Recommended Shows <FontAwesomeIcon icon={faArrowRight} />
          </h4>
          <br />
          <EventCarousel />
        </div>
        <br /> <br /> <br />
        <div className="up-container">
          <h4 align="left">
            Upcoming Events <FontAwesomeIcon icon={faArrowRight} />
          </h4>
          <br />
          <UpcomingEvents />
        </div>
        <br />
        <Footer />
      </div>
    </>
  );
};

export default App;
