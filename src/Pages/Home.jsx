import React from "react";
import "./Home.css";
import Header from "../Components/Header";
import heroVideo from "/spalash-bg.mp4";
import { FaLocationDot } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import { FaMotorcycle } from "react-icons/fa6";
import { MdRestaurantMenu } from "react-icons/md";
import { FaAngleRight } from "react-icons/fa6";
import { FaPlus } from "react-icons/fa";
import { FaMinus } from "react-icons/fa";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import Review from "../Components/Review";
import { NavLink } from "react-router-dom";
const Home = () => {

// const suppliers = [
//   {
//     id:1,
//     name: ""

//   }
// ]

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

         Find trusted water suppliers near you 

          <br />

         and order fresh water quickly and easily.

        </p>

        {/* Buttons */}

        <div className="hero-btns">

         <NavLink to='/search-bar'> <button className="order-btn">

           Find Water

          </button></NavLink>

          <button className="plan-btn">

           Explore Suppliers

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

            <span>40+ Suppliers</span>

          </div>

          <div>

            <FaStar />

            <span>4.9 Rating</span>

          </div>

        </div>

      </div>

    </section>


{/*  location-section */}
    <section className="location-section">
      <div className="location-box">
  <span><FaLocationDot/></span>
</div>
<div className="location-info">
  <h2>Deliver Water To</h2>
<p>Find water suppliers near you location</p>

</div>

<div className="location-input-box">
 <span><FaLocationDot/></span> <input type="text" placeholder="Search your location" />
 <span><FaAngleRight/></span>
</div>
    </section>

    <div className="type-of-water">
      <h2>What Water Do You Need? </h2>
      <div className="type-of-order-cards">
        <div className="cold-water">
<h4>Cold Water</h4>
<p>Fresh & Chiled</p>
<span className="right-icons"><FaArrowRightLong/></span>
        </div>
        <div className="normal-water">

<h4>Normal Water</h4>
<p>Fresh & Clean</p>
<span className="right-icons"><FaArrowRightLong/></span>
        </div>
      </div>
    </div>


    <Review/>



    {/* quate section */}
     <section className="quote-section">

      <div className="quote-content">

        <div className="quote-icon">
          “
        </div>

        <h2>
          Paani ki zarurat ho,
          <br />
          <span>JalMitra yaad ho.</span>
        </h2>

        <p>
          Fresh Water. Easy Order. Reliable Delivery.
        </p>

      </div>

    </section>
     <div className="footer-bottom-rights">

        <p>
          © 2026 JalMitra. All rights reserved.
        </p>

        <p>
          Made for easy water delivery .
        </p>

      </div>
   </>

  );

};

export default Home;