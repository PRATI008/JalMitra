import React from "react";
import "./Home.css";
import Header from "../Components/Header";
import heroVideo from "../assets/logo-video.mp4";

import { FaStar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";

const Home = () => {

  return (

   <>

   <Header/>
    <section className="hero">

      {/* Background Video */}

      <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}

      <div className="overlay"></div>

      {/* Hero Content */}

      <div className="hero-content">

        <span className="tag">

        💧 Trusted Water Delivery

        </span>

        <h1>

          Fresh Water, Delivered to Your Doorstep.
          <br />

          Water Delivery
          <span> Daily</span>

        </h1>

        <p>

          Fresh Breakfast • Lunch • Dinner

          <br />

          Delivered directly to your doorstep.

        </p>

        {/* Buttons */}

        <div className="hero-btns">

          <button className="order-btn">

            Order Now

          </button>

          <button className="plan-btn">

            View Plans

          </button>

        </div>

        {/* Features */}

        <div className="hero-features">

          <div>

            <FaMotorcycle />

            <span>Fast Delivery</span>

          </div>

          <div>

            <MdRestaurantMenu />

            <span>40+ Meals</span>

          </div>

          <div>

            <FaStar />

            <span>4.9 Rating</span>

          </div>

        </div>

      </div>

    </section>
   </>

  );

};

export default Home;