import React from "react";
import "./Home.css";

import Header from "../Components/Header";
import heroVideo from "/spalash-bg.mp4";

import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaSearch } from "react-icons/fa";
import { FaShieldAlt } from "react-icons/fa";
import { FaClock } from "react-icons/fa";
import { FaWater } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";

import Review from "../Components/Review";

import { NavLink } from "react-router-dom";
import Footer from "../Components/Footer";

const Home = () => {

  return (

    <>

      <Header />

      <section className="hero">

        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>

        <div className="overlay"></div>


        <div className="hero-content">

          <span className="tag">
            💧 Trusted Water Delivery
          </span>


          <h1>

            Fresh Water,
            <br />

            Delivered to Your
            <span> Doorstep.</span>

          </h1>


          <p>

            Find trusted water suppliers near you
            <br />

            and order fresh water quickly and easily.

          </p>


          <div className="hero-btns">

            <NavLink to="/search-bar">

              <button className="order-btn">
                Find Water
              </button>

            </NavLink>


            <NavLink to="/search-bar">

              <button className="plan-btn">
                Explore Suppliers
              </button>

            </NavLink>

          </div>


          <div className="hero-features">

            <div>

              <FaMotorcycle />

              <span>Fast Delivery</span>

            </div>


            <div>

              <FaWater />

              <span>Quality Water</span>

            </div>


            <div>

              <FaStar />

              <span>4.9 Rating</span>

            </div>

          </div>

        </div>

      </section>



      {/* ================= LOCATION SECTION ================= */}

      <section className="location-section">

        <div className="location-box">

          <span>
            <FaLocationDot />
          </span>

        </div>


        <div className="location-info">

          <h2>
            Deliver Water To
          </h2>

          <p>
            Find water suppliers near your location
          </p>

        </div>


        <div className="location-input-box">

          <span>
            <FaLocationDot />
          </span>

          <input
            type="text"
            placeholder="Search your location"
          />

          <span>
            <FaArrowRightLong />
          </span>

        </div>

      </section>



   

      <section className="why-section">

        <div className="section-heading">

          <p>
            WHY JALMITRA
          </p>

          <h2>
            Water Delivery Made Simple
          </h2>

          <span>
            Everything you need for a simple and reliable
            water delivery experience.
          </span>

        </div>


        <div className="why-cards">

          <div className="why-card">

            <div className="why-icon">
              <FaSearch />
            </div>

            <h3>
              Find Nearby Suppliers
            </h3>

            <p>
              Easily find trusted water suppliers
              available near your location.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">
              <FaCheckCircle />
            </div>

            <h3>
              Choose Your Water
            </h3>

            <p>
              Select between cold water and
              normal drinking water as you need.
            </p>

          </div>


          <div className="why-card">

            <div className="why-icon">
              <FaMotorcycle />
            </div>

            <h3>
              Doorstep Delivery
            </h3>

            <p>
              Place your order and get water
              delivered directly to your doorstep.
            </p>

          </div>

        </div>

      </section>



     

      <section className="type-of-water">

        <div className="section-heading">

          <p>
            WATER OPTIONS
          </p>

          <h2>
            What Water Do You Need?
          </h2>

          <span>
            Choose the type of water you want
            for your home or daily needs.
          </span>

        </div>


        <div className="type-of-order-cards">


          {/* Cold Water */}

          <div className="water-card cold-water">

            <div className="water-card-top">

              <div className="water-icon">
                ❄️
              </div>

              <span className="water-arrow">
                <FaArrowRightLong />
              </span>

            </div>


            <h3>
              Cold Water
            </h3>


            <p>
              Fresh & Chilled
            </p>


            <div className="water-details">

              <span>
                <FaCheckCircle />
                Clean drinking water
              </span>

              <span>
                <FaCheckCircle />
                Perfect for hot days
              </span>

            </div>


            <NavLink to="/search-bar">

              <button className="water-select-btn">
                Find Cold Water
                <FaArrowRightLong />
              </button>

            </NavLink>

          </div>



          {/* Normal Water */}

          <div className="water-card normal-water">

            <div className="water-card-top">

              <div className="water-icon">
                💧
              </div>

              <span className="water-arrow">
                <FaArrowRightLong />
              </span>

            </div>


            <h3>
              Normal Water
            </h3>


            <p>
              Fresh & Clean
            </p>


            <div className="water-details">

              <span>
                <FaCheckCircle />
                Daily drinking water
              </span>

              <span>
                <FaCheckCircle />
                Reliable home supply
              </span>

            </div>


            <NavLink to="/search-bar">

              <button className="water-select-btn">
                Find Normal Water
                <FaArrowRightLong />
              </button>

            </NavLink>

          </div>

        </div>

      </section>



      {/* ================= HOW IT WORKS ================= */}

      <section className="how-section">

        <div className="section-heading">

          <p>
            HOW IT WORKS
          </p>

          <h2>
            Get Water in 3 Easy Steps
          </h2>

          <span>
            Ordering water through JalMitra is simple
            and takes only a few steps.
          </span>

        </div>


        <div className="steps-container">


          <div className="step-card">

            <div className="step-number">
              01
            </div>

            <h3>
              Search
            </h3>

            <p>
              Enter your location and find
              nearby water suppliers.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step-card">

            <div className="step-number">
              02
            </div>

            <h3>
              Choose
            </h3>

            <p>
              Select a supplier and choose
              the water type you need.
            </p>

          </div>


          <div className="step-line"></div>


          <div className="step-card">

            <div className="step-number">
              03
            </div>

            <h3>
              Receive
            </h3>

            <p>
              Place your order and get water
              delivered to your doorstep.
            </p>

          </div>

        </div>

      </section>



   

      <Review />




      <section className="quote-section">

        <div className="quote-content">

          <div className="quote-icon">
            “
          </div>

          <h2>

            Clean Water, Better Health, 

            <br />

            <span>
              Happy Customers.
            </span>

          </h2>

          <p>
            Fresh Water. Easy Order. Reliable Delivery.
          </p>

        </div>

      </section>

      <Footer/>

    </>

  );

};

export default Home;