import React, { useEffect, useState } from "react";
import SupportWorker from "../Assets/down-syndrome-colour.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarCheck, faAngleUp } from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/Hero.css";

function Hero() {
  const navigate = useNavigate();
  const [goUp, setGoUp] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  useEffect(() => {
    const onPageScroll = () => {
      if (window.scrollY > 600) {
        setGoUp(true);
      } else {
        setGoUp(false);
      }
    };
    window.addEventListener("scroll", onPageScroll);

    return () => {
      window.removeEventListener("scroll", onPageScroll);
    };
  }, []);

  return (
    <div className="section-container">
      <div className="hero-section">
        <div className="text-section">
          <p className="text-headline">Expert Support Coordination</p>
          <h2 className="text-title">
            Connect today for compassionate support
          </h2>
          <p className="text-descritpion">
          Find a support coordinator who understands your needs and is here to help you make the most of your NDIS plan.
          Whether it’s connecting with services, managing your supports, or working towards your goals,
          our experienced coordinators are here to guide you with care and understanding.
          Start getting the support you deserve, your way.
          </p>
          <button
            className="text-appointment-btn"
            type="button"
            onClick={handleBookAppointmentClick}
          >
            <FontAwesomeIcon icon={faCalendarCheck} /> Contact Us Today! 
          </button>
          <div className="text-stats">
          <div className="text-stats-container">
            <p>100%</p>
            <p>Client Satisfaction</p>
          </div>

          <div className="text-stats-container">
            <p>100%</p>
            <p>Successful NDIS Plan Navigation</p>
          </div>

          <div className="text-stats-container">
            <p>10+</p>
            <p>Years of Experience</p>
          </div>
          </div>
        </div>

        <div className="hero-image-section">
          <img className="hero-image1" src={SupportWorker} alt="SupportWorker" />
        </div>
      </div>

      <div
        onClick={scrollToTop}
        className={`scroll-up ${goUp ? "show-scroll" : ""}`}
      >
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
    </div>
  );
}

export default Hero;
