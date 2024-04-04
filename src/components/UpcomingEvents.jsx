import React, { useState, useEffect } from "react";
import axios from "axios";
import EventCard from "./EventCard";
import { Container, Row, Col } from "react-bootstrap";
import { css } from "@emotion/react";
import { ClipLoader } from "react-spinners";

const override = css`
  display: flex;
  margin: 0 auto;
  margin-top: 20px;
  margin-bottom: 60px;
  border-color: grey;
`;

const UpcomingEvents = () => {
  const [events, setEvents] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [showLoading, setShowLoading] = useState(false);

  const fetchEvents = async (page) => {
    setIsLoading(true);
    const response = await axios.get(
      `https://gg-backend-assignment.azurewebsites.net/api/Events?code=FOX643kbHEAkyPbdd8nwNLkekHcL4z0hzWBGCd64Ur7mAzFuRCHeyQ==&page=${page}&type=upcoming`
    );

    if (response.data.events.length === 0) {
      setIsLoading(false);
      setShowLoading(false);
      return;
    }

    setEvents((prevEvents) => [...prevEvents, ...response.data.events]);
    setIsLoading(false);
    setShowLoading(false);
  };

  useEffect(() => {
    fetchEvents(currentPage);
  }, [currentPage]);

  const handleScroll = () => {
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight;
    const clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
      setCurrentPage((prevPage) => prevPage + 1);
      setShowLoading(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [handleScroll]);

  useEffect(() => {
    let timer;
    if (showLoading) {
      timer = setTimeout(() => {
        setShowLoading(false);
      }, 600);
    }

    return () => {
      clearTimeout(timer);
    };
  }, [showLoading]);

  return (
    <Container>
      <Row>
        {events.map((event, index) => (
          <Col xs={12} sm={6} md={6} lg={4} xl={3} key={index}>
            <div className="event-card-wrapper">
              <EventCard {...event} />
            </div>
          </Col>
        ))}
      </Row>
      <Row className="justify-content-center">
        <Col xs="auto">
          <ClipLoader color="grey" loading={showLoading} css={override} />
        </Col>
      </Row>
    </Container>
  );
};

export default UpcomingEvents;
