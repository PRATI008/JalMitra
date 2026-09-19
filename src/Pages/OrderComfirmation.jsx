import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

import { FiArrowLeft } from "react-icons/fi";
import { FaCheckCircle } from "react-icons/fa";
import { FaTruck } from "react-icons/fa6";
import { MdLocationOn, MdPhone } from "react-icons/md";
import { FaUser } from "react-icons/fa";

import "./CSS/OrderConfirmation.css";

const OrderConfirmation = () => {

  const navigate = useNavigate();
  const location = useLocation();

  // Payment page se order data receive hoga
  const orderData = location.state;


  // Agar data nahi mila
  if (!orderData) {
    return (
      <div className="confirmation-error">

        <h2>Order Details Not Found</h2>

        <button onClick={() => navigate("/home")}>
          Go to Home
        </button>

      </div>
    );
  }


  // Payment page se data nikal rahe hain
  const {
    supplier,
    waterType,
    quantity,
    totalPrice,
    userDetails,
    paymentMethod
  } = orderData;


  // Order ID
  const orderId = `JM${Date.now().toString().slice(-8)}`;


  return (
    <>

       <div className="confirmation-header">
 <button
          className="confirmation-back"
          onClick={() => navigate("/home")}
        >
          <FiArrowLeft />
        </button>

        <h2>Order Confirmation</h2>


      </div>
    <div className="confirmation-page">

   

      <div className="confirmation-success">

        <div className="success-circle">
          <FaCheckCircle />
        </div>

        <h1>Order Confirmed!</h1>

        <p>
          Your water order has been placed successfully.
        </p>

        <p>
          Thank you for choosing <strong>JalMitra!</strong>
        </p>

      </div>



      <div className="order-id-card">

        <div className="order-id-icon">
          📄
        </div>

        <div className="order-id-info">

          <span>Order ID</span>

          <strong>{orderId}</strong>

        </div>

        <div className="order-status">
          Placed
        </div>

      </div>

      <div className="confirmation-card">

        <div className="card-heading">

          <span></span>

          <h3>Order Details</h3>

        </div>


        <div className="detail-row">

          <span>Supplier</span>

          <strong>
            {supplier.name}
          </strong>

        </div>


        <div className="detail-row">

          <span>Water Type</span>

          <strong className="water-name">
            {waterType === "Cold" ? "" : ""}{" "}
            {waterType} Water
          </strong>

        </div>


        <div className="detail-row">

          <span>Quantity</span>

          <strong>
            {quantity} × 20L
          </strong>

        </div>


        <div className="detail-row">

          <span>Price per Can</span>

          <strong>
            ₹{supplier.price}
          </strong>

        </div>


        <div className="detail-row total-row">

          <span>Total Amount</span>

          <strong>
            ₹{totalPrice}
          </strong>

        </div>


        <div className="detail-row">

          <span>Payment Method</span>

          <strong>
            {paymentMethod === "cod"
              ? " Cash on Delivery"
              : " Online Payment"}
          </strong>

        </div>

      </div>


      {/* ================= DELIVERY DETAILS ================= */}

      <div className="confirmation-card">

        <div className="card-heading">

          <MdLocationOn />

          <h3>Delivery Address</h3>

        </div>


        <div className="customer-details">

          <div className="customer-row">

            <FaUser />

            <span>
              {userDetails.name}
            </span>

          </div>


          <div className="customer-row">

            <MdPhone />

            <span>
              {userDetails.mobile}
            </span>

          </div>


          <div className="customer-row">

            <MdLocationOn />

            <span>
              {userDetails.location}
            </span>

          </div>


          <div className="customer-row address-row">

            <MdLocationOn />

            <span>
              {userDetails.address}
            </span>

          </div>

        </div>

      </div>



      <button
        className="track-order-btn"
        onClick={() => {

          navigate("/track-order", {
            state: orderData
          });

        }}
      >

        <FaTruck />

        <span>Track Order</span>

        <span className="track-arrow">
          →
        </span>

      </button>

      <button
        className="confirmation-home-btn"
        onClick={() => navigate("/home")}
      >
         Back to Home
      </button>



      <div className="confirmation-footer">

        <span></span>

        <p>
          Clean Water • Healthy Life
        </p>

        <span></span>

      </div>

    </div>
    </>
  );
};

export default OrderConfirmation;