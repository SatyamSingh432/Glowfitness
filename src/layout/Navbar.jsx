import React from "react";
import "../styles/Navbar.css";
import logo from "../assets/logo.svg";
import Button from "../components/Button";
const Navbar = () => {
  return (
    <nav className="nav-bar">
      <div className="nav-logo">
        <img src={logo} alt="" />
      </div>
      <ul className="nav-list">
        <li>
          <button className="list-btn">Home</button>
        </li>
        <li>
          <button className="list-btn">services</button>
        </li>
        <li>
          <button className="list-btn">Virtual Classes</button>
        </li>
        <li>
          <button className="list-btn">Result</button>
        </li>
        <li>
          <button className="list-btn">Contact Us</button>
        </li>
        <li>
          <Button buttonText="Sign Up" color="#57A6AF" />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
