import React from "react";
import Doctor from "../Assets/Disability-sign.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleCheck,
  faCalendarCheck,
} from "@fortawesome/free-solid-svg-icons";
import { useNavigate  } from "react-router-dom";
import "../Styles/BookAppointment.css";

function BookAppointment() {
  const navigate = useNavigate();

  const handleBookAppointmentClick = () => {
    navigate("/appointment");
  };

  return (
    <div className="ba-section">
      <div className="ba-image-content">
        <img src={Doctor} alt="Doctor Group" className="ba-image1" />
      </div>

      <div className="ba-text-content">
        <h3 className="ba-title">
          <span>Why Choose Us</span>
        </h3><p className="ba-description">
        Discover the reasons to choose our support services for your NDIS needs.
        Experience expert care, convenience, and personalised solutions,
        making your well-being our top priority. Join us on a journey to
        better support and a more independent life.
      </p>

        <p className="ba-checks ba-check-first">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#3b0a54" }} /> Dedicated Support Coordinator
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#3b0a54" }} /> Comprehensive Care Management
        </p>
        <p className="ba-checks">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#3b0a54" }} /> 24/7 Support Availability
        </p>
        <p className="ba-checks ba-check-last">
          <FontAwesomeIcon icon={faCircleCheck} style={{ color: "#3b0a54" }} /> Easy and Quick Referral Pathway
        </p>
        <button
          className="text-appointment-btn"
          type="button"
          onClick={handleBookAppointmentClick}
        >
          <FontAwesomeIcon icon={faCalendarCheck} /> Contact Us
        </button>
      </div>
    </div>
  );
}

export default BookAppointment;
