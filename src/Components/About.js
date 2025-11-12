import React from "react";
//import SupportWorker from "../Assets/support-worker-01.png";
import SolutionStep from "./SolutionStep";
import SupportWorker from "../Assets/Girl-wheelchair.png";
import "../Styles/About.css";

function About() {
  return (
    <div className="about-section" id="about">
      <div className="about-image-content">
        <img src={SupportWorker} alt="Support Worker" className="about-image1" />
      </div>

      <div className="about-text-content">
        <h3 className="about-title">
          <span>About Us</span>
        </h3>
        <p className="about-description">
          Welcome to Trusted Pathways, your partner for accessible and personalised support. With years of industry experience, we offer expert support coordination services that meet your unique needs. Join us on this journey towards meeting your NDIS goals. 
        </p>

        <h4 className="about-text-title">Your Solutions</h4>
        <SolutionStep
          title="Choose Your Support"
          description="Find the perfect support coordinator tailored to your unique needs. Our experienced professionals are dedicated to providing compassionate and expert assistance, prioritizing your choice and control."
        />

        <SolutionStep
          title="Schedule with Ease"
          description="Get in touch with our team to schedule appointments with the convienience of personalised care at your doorstep. Our dedicated team ensures seamless and reliable support coordination services that travel to you and are available when you need us."
        />

        <SolutionStep
          title="Achieve Your Goals"
          description="Receive expert guidance and personalised care plans designed to help you achieve your goals. Whether it's daily support or navigating NDIS plans, we are here to ensure your success and independence."
        />

      </div>
    </div>
  );
}

export default About;
