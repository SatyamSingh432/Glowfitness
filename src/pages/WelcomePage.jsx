import React from "react";
import Navbar from "../layout/Navbar.jsx";
import Button from "../components/Button.jsx";
import women from "../assets/women.png";
import line from "../assets/line.png";
import pink from "../assets/redpattern.png";
import skyblue from "../assets/bluepattern.png";
import "../styles/WelcomePage.css";
const WelcomePage = () => {
  return (
    <div className="welcome-page-container">
      <Navbar />
      <div className="hero-page-continer-top">
        <div className="hero-page-container-top-left">
          <div className="hero-page-container-top-left-heading ">
            Join Our{" "}
            <div className="online-word">
              Online{" "}
              <div>
                <img src={line} alt="" />
              </div>
            </div>
          </div>
          <div className="hero-page-container-top-left-heading color-skyblue">
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
        <div className="hero-page-container-bottom-child">
          <div className="tagline-container">
            <p>Glow into your best self </p>
          </div>
          <div className="women-img-container">
            <img src={women} alt="" />
          </div>
          <div className="pattern-pink-container">
            <img src={pink} alt="" />
          </div>
          <div className="pattern-skyblue-container">
            <img src={skyblue} alt="" />
          </div>
          <div className="hero-page-data">
            <p>Experience</p>
            <p className="color-pink">5+ years</p>
          </div>
          <div className="hero-page-data">
            <p>Health Coaches</p>
            <p className="color-pink">20+</p>
          </div>
          <div className="hero-page-data">
            <p>Members</p>
            <p className="color-pink">500+</p>
          </div>
          <div className="hero-page-data">
            <p>Total Weight Loss</p>
            <p className="color-pink">2500+ kg</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
