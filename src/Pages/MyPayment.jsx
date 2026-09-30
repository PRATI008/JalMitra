import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { FiArrowLeft } from "react-icons/fi";
import { FaMoneyBillWave } from "react-icons/fa";
import { FaCreditCard } from "react-icons/fa6";
import Swal from "sweetalert2";
import "../Pages/CSS/MyPayment.css";

const MyPayment = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const orderData = location.state;

  const [paymentMethod, setPaymentMethod] = useState("cod");

  if (!orderData) {
    return (
      <div className="payment-error">
        <h2>Order Details Not Found</h2>
        <button onClick={() => navigate("/home")}>
          Go to Home
        </button>
      </div>
    );
  }

  const {
    supplier,
    waterType,
    quantity,
    totalPrice,
    userDetails,
    isFirstOrder
  } = orderData;

  const savedUser = localStorage.getItem("jalmitraUser");

  const savedUserDetails = savedUser
    ? JSON.parse(savedUser)
    : null;

  const customerDetails = userDetails?.name
    ? userDetails
    : savedUserDetails;

  const handleOrder = () => {
    const isLoggedIn =
      localStorage.getItem("jalmitraLogin") === "true";

    if (!isLoggedIn && !isFirstOrder) {
      navigate("/login", {
        state: {
          returnTo: "order-confirmation",
          orderData: {
            supplier,
            waterType,
            quantity,
            totalPrice,
            userDetails: customerDetails,
            paymentMethod
          }
        }
      });

      return;
    }

    Swal.fire({
      icon: "success",
      title: "Order Placed!",
      text: "Your water order has been placed successfully.",
      confirmButtonText: "OK",
      confirmButtonColor: "#159bc5",
      width: "340px",
      customClass: {
        popup: "jalmitra-alert",
        title: "jalmitra-alert-title",
        htmlContainer: "jalmitra-alert-text",
        confirmButton: "jalmitra-alert-button"
      }
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/order-comfirmation", {
          state: {
            supplier,
            waterType,
            quantity,
            totalPrice,
            userDetails: customerDetails,
            paymentMethod,
            isFirstOrder
          }
        });
      }
    });
  };

  return (
    <>
      <div className="payment-header">
        <button
          onClick={() => navigate(-1)}
          className="payment-back-btn"
        >
          <FiArrowLeft />
        </button>

        <h2>Payment</h2>
      </div>

      <div className="payment-page">

        <div className="payment-section">
          <h3>Order Summary</h3>

          <div className="payment-summary">

            <div className="summary-row">
              <span>Supplier</span>
              <strong>{supplier.name}</strong>
            </div>

            <div className="summary-row">
              <span>Water Type</span>
              <strong>{waterType} Water</strong>
            </div>

            <div className="summary-row">
              <span>Quantity</span>
              <strong>{quantity} × 20L</strong>
            </div>

            <div className="summary-row">
              <span>Price</span>
              <strong>₹{supplier.price} / 20L</strong>
            </div>

            <div className="summary-total">
              <span>Total Amount</span>
              <strong>₹{totalPrice}</strong>
            </div>

          </div>
        </div>

        <div className="payment-section">
          <h3>Delivery Details</h3>

          <div className="delivery-card">

            <h4>
              {customerDetails?.name || "Customer"}
            </h4>

            <p>
              <strong>Mobile:</strong>{" "}
              {customerDetails?.mobile || "Not available"}
            </p>

            <p>
              <strong>Address:</strong>{" "}
              {customerDetails?.address || "Not available"}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {customerDetails?.location || "Not available"}
            </p>

            <p>
              <strong>Current Location:</strong>{" "}
              {customerDetails?.currentLocation || "Not available"}
            </p>

          </div>
        </div>

        <div className="payment-section">
          <h3>Select Payment Method</h3>

          <button
            className={
              paymentMethod === "cod"
                ? "payment-method active"
                : "payment-method"
            }
            onClick={() => setPaymentMethod("cod")}
          >
            <div className="payment-icon">
              <FaMoneyBillWave />
            </div>

            <div className="payment-method-info">
              <strong>Cash on Delivery</strong>
              <span>Pay when your water is delivered</span>
            </div>

            <div className="payment-radio">
              {paymentMethod === "cod" ? "●" : "○"}
            </div>
          </button>

          <button
            className={
              paymentMethod === "online"
                ? "payment-method active"
                : "payment-method"
            }
            onClick={() => setPaymentMethod("online")}
          >
            <div className="payment-icon">
              <FaCreditCard />
            </div>

            <div className="payment-method-info">
              <strong>Online Payment</strong>
              <span>UPI, Card or Net Banking</span>
            </div>

            <div className="payment-radio">
              {paymentMethod === "online" ? "●" : "○"}
            </div>
          </button>

        </div>

        <div className="payment-bottom">

          <div className="final-price">
            <span>Total Payable</span>
            <strong>₹{totalPrice}</strong>
          </div>

          <button
            className="order-now-btn"
            onClick={handleOrder}
          >
            Order Now
          </button>

        </div>

      </div>
    </>
  );
};

export default MyPayment;