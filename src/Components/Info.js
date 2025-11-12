import React from "react";
import InformationCard from "./InformationCard";
import { faHeartPulse } from "@fortawesome/free-solid-svg-icons";
import "../Styles/Info.css";

function Info() {
  return (
    <div className="info-section" id="services">
      <div className="info-title-content">
        <h3 className="info-title">
          <span>What We Do</span>
        </h3>
        <p className="info-description">
        Experience personalised and dedicated support tailored to your needs. Our services 
        provide comprehensive assistance, expertly designed to enhance your well-being and 
        independence. Connect with a highly skilled support coordinator who is 
        committed to offering expert assistance for daily activities, ensuring you live 
        comfortably and confidently. With personalised care plans, we create customised 
        strategies that cater to your unique requirements, helping you achieve your goals. 
        You can rely on our ongoing support to navigate and coordinate NDIS plans, access 
        the NDIS, and more.
        </p>
      </div>

      <div className="info-cards-content">
        <InformationCard
          title="Personalised Support Coordination"
          description="Our personalised support coordination services are here to help you navigate the NDIS and get the most from your plan. Whether you need assistance finding the right providers, understanding your funding, or working towards your goals, you can count on dedicated guidance tailored to your unique needs—supporting your choice, control, and confidence every step of the way."
          icon={faHeartPulse}
        />

        <InformationCard
          title="NDIS Access Support"
          description="Navigating the NDIS can be complex, but our expert team 
          makes it simple and stress-free. We work closely with you to understand how to access the NDIS and make the most of your application. Our 
          aim is to empower you to make informed choices and achieve the best outcomes."
          icon={faHeartPulse}
        />

        <InformationCard
          title="Comprehensive Care Management"
          description="We offer comprehensive care management to ensure all aspects of your well-being 
          are addressed. From coordinating medical appointments and therapies to providing emotional 
          support and advocacy, our holistic approach ensures you receive continuous and compassionate care."
          icon={faHeartPulse}
        />
      </div>
    </div>
  );
}

export default Info;
