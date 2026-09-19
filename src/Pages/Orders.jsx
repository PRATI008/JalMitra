import React from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { FaBoxOpen, FaTruck } from "react-icons/fa";
import {FiArrowLeft} from "react-icons/fi";
import { MdLocationOn } from "react-icons/md";
import "./CSS/Orders.css";
import Footer from "../Components/Footer";

const Order = () => {

  const navigate = useNavigate();

  const savedOrder = localStorage.getItem("jalmitraOrder");

  const order = savedOrder
    ? JSON.parse(savedOrder)
    : null;


  // Agar order nahi hai
  if (!order) {

    return (
     <>
      <div className="order-header">
          <NavLink to='/home'> <FiArrowLeft className="order-back" /></NavLink>

          <h2>My Orders</h2>
        </div>

      <div className="order-page">

       

        <div className="empty-order">

          <div className="empty-order-icon">
            <FaBoxOpen />
          </div>

          <h2>No Orders Yet</h2>

          <p>
            You haven't placed any water order yet.
          </p>

          <button
            onClick={() => navigate("/search-bar")}
          >
            Find Water
          </button>

        </div>

      </div>
     </>
    );
  }

  return (
    <>
    <div className="order-page">

      <div className="order-header">

        <h2>My Orders</h2>

      </div>


      <div className="order-card">

        {/* Order Top */}

        <div className="order-card-top">

          <div>

            <span>Order ID</span>

            <strong>
              {order.orderId}
            </strong>

          </div>

          <div className="order-status">
            {order.status}
          </div>

        </div>


        {/* Supplier */}

        <div className="order-supplier">

          <h3>
            {order.supplier.name}
          </h3>

          <p>
            <MdLocationOn />

            {order.supplier.location}
          </p>

        </div>


        {/* Water */}

        <div className="order-details">

          <div>

            <span>Water Type</span>

            <strong>
              {order.waterType === "Cold"
                ? "❄️ Cold Water"
                : "💧 Normal Water"}
            </strong>

          </div>


          <div>

            <span>Quantity</span>

            <strong>
              {order.quantity} × 20L
            </strong>

          </div>


          <div>

            <span>Total Amount</span>

            <strong className="order-total">
              ₹{order.totalPrice}
            </strong>

          </div>

        </div>


        {/* Track */}

        <button
          className="order-track-btn"
          onClick={() => {

            navigate("/track-order", {
              state: order
            });

          }}
        >

          <FaTruck />

          Track Order

        </button>


        {/* View Details */}

        <button
          className="order-details-btn"
          onClick={() => {

            navigate("/order-confirmation", {
              state: order
            });

          }}
        >
          View Order Details
        </button>

      </div>

    </div>

    <Footer/>
    </>
  );
};

export default Order;