import React from "react";
import Navbar from "../layout/Navbar.jsx";
import Button from "../components/Button.jsx";
import "../styles/WelcomePage.css";
const WelcomePage = () => {
  return (
    <div className="welcome-page-container">
      <Navbar />
      <div className="hero-page-continer-top">
        <div className="hero-page-container-top-left">
          <div className="hero-page-container-top-left-heading ">
            Join Our Online
          </div>
          <div className="hero-page-container-top-left-heading color-pink">
            Classes for Weight Loss, Strength & Self Care
          </div>
          <div className="hero-page-container-top-left-sub-heading">
            Our health coaches are well trained to help you in your weight loss
            and gain journey
          </div>
          <div className="hero-page-container-top-left-btn-container">
            <Button buttonText="Book a Call" color="#f14e87" weight="600" />
          </div>
          <div className="hero-page-container-top-left-sub-heading">
            Contact us for an instant health coach advice :{" "}
            <span>+91 9027819666</span>
          </div>
        </div>
        <div className="hero-page-container-top-right"></div>
      </div>
      <div className="hero-page-continer-bottom">
        <div className="hero-page-continer-bottom-child"></div>
      </div>
    </div>
  );
};

export default WelcomePage;
