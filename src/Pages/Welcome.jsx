import React from "react";
import "../Pages/Welcome.css";
import { NavLink } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

const Welcome = () => {
  return (
    <div className="welcome-page">

      {/* Background Image */}
      <div className="welcome-background"></div>

      {/* Light Overlay */}
      <div className="welcome-overlay"></div>


      {/* Main Content */}
      <div className="welcome-content">

        <div className="welcome-water-icon">
          💧
        </div>

        <p className="welcome-small-text">
          WELCOME TO JALMITRA
        </p>

        <h1>
          Fresh Water for a
          <br />
          <span>Healthier Life</span>
        </h1>

        <p className="welcome-description">
          Find trusted water suppliers near you and
          order fresh water quickly and easily.
        </p>

        <NavLink
          to="/home"
          className="get-started-btn"
        >
          Get Started
          <span>< FaArrowRight className="back-icon" /></span>
        </NavLink>

        <div className="welcome-bottom-text">
          <span>Clean Water</span>
          <i>•</i>
          <span>Healthy Life</span>
          <i>•</i>
          <span>Better Tomorrow</span>
        </div>

      </div>

    </div>
  );
};

export default Welcome;