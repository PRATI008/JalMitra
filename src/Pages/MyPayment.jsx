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

  // Payment page par SupplierDetails se jo data aaya hai
  const orderData = location.state;


  // Payment Method
  const [paymentMethod, setPaymentMethod] = useState("cod");


  // ==========================================
  // ORDER DATA NAHI MILA
  // ==========================================

  if (!orderData) {

    return (

      <div className="payment-error">

        <h2>Order Details Not Found</h2>

        <button
          onClick={() => navigate("/home")}
        >
          Go to Home
        </button>

      </div>

    );

  }


  // ==========================================
  // ORDER DATA
  // ==========================================

  const {
    supplier,
    waterType,
    quantity,
    totalPrice,
    userDetails,

    // Pre Booking data
    deliveryType,
    bookingDate,
    bookingTime

  } = orderData;


  // ==========================================
  // ORDER PLACE FUNCTION
  // ==========================================

  const handleOrder = () => {


    // ========================================
    // NEW ORDER OBJECT
    // ========================================

    const newOrder = {

      // Unique Order ID
      orderId:
        `JM${Date.now().toString().slice(-8)}`,


      // Supplier
      supplier,


      // Water Type
      waterType,


      // Quantity
      quantity,


      // Total Price
      totalPrice,


      // Customer Details
      userDetails,


      // Payment Method
      paymentMethod,


      // ======================================
      // PRE BOOKING DATA
      // ======================================

      deliveryType:
        deliveryType || "now",


      bookingDate:
        deliveryType === "prebook"
          ? bookingDate
          : null,


      bookingTime:
        deliveryType === "prebook"
          ? bookingTime
          : null,


      // ======================================
      // ORDER STATUS
      // ======================================

      status: "Placed",


      // Order Date
      orderDate:
        new Date().toLocaleDateString("en-IN"),


      // Order Time
      orderTime:
        new Date().toLocaleTimeString(
          "en-IN",
          {
            hour: "2-digit",
            minute: "2-digit"
          }
        )

    };


    // ==========================================
    // SAVE ORDER IN LOCAL STORAGE
    // ==========================================

    localStorage.setItem(
      "jalmitraOrder",
      JSON.stringify(newOrder)
    );


    // ==========================================
    // SAVE USER DETAILS
    // ==========================================

    if (userDetails) {

      localStorage.setItem(
        "jalmitraUser",
        JSON.stringify(userDetails)
      );

    }


    // ==========================================
    // SUCCESS POPUP
    // ==========================================

    Swal.fire({

      icon: "success",

      title:
        deliveryType === "prebook"
          ? "Pre-Booking Successful!"
          : "Order Placed!",

      text:
        deliveryType === "prebook"
          ? `Your water delivery is booked for ${bookingDate} at ${bookingTime}.`
          : "Your water order has been placed successfully.",

      confirmButtonText: "OK",

      confirmButtonColor: "#159bc5",

      width: "340px",

      customClass: {

        popup: "jalmitra-alert",

        title: "jalmitra-alert-title",

        htmlContainer: "jalmitra-alert-text",

        confirmButton:
          "jalmitra-alert-button"

      }

    }).then((result) => {


      if (result.isConfirmed) {

        navigate(
          "/order-comfirmation",
          {
            state: newOrder
          }
        );

      }

    });

  };


  // ==========================================
  // UI
  // ==========================================

  return (

    <>

      {/* =====================================
          HEADER
      ====================================== */}

      <div className="payment-header">

        <button
          onClick={() => navigate(-1)}
          className="payment-back-btn"
        >

          <FiArrowLeft />

        </button>


        <h2>
          Payment
        </h2>

      </div>



      <div className="payment-page">


        {/* =====================================
            ORDER SUMMARY
        ====================================== */}

        <div className="payment-section">

          <h3>
            Order Summary
          </h3>


          <div className="payment-summary">


            {/* Supplier */}

            <div className="summary-row">

              <span>
                Supplier
              </span>

              <strong>
                {supplier.name}
              </strong>

            </div>



            {/* Water Type */}

            <div className="summary-row">

              <span>
                Water Type
              </span>

              <strong>

                {waterType === "Cold"
                  ? "❄️ Cold Water"
                  : "💧 Normal Water"}

              </strong>

            </div>



            {/* Quantity */}

            <div className="summary-row">

              <span>
                Quantity
              </span>

              <strong>
                {quantity} × 20L
              </strong>

            </div>



            {/* Price */}

            <div className="summary-row">

              <span>
                Price
              </span>

              <strong>
                ₹{supplier.price} / 20L
              </strong>

            </div>



            {/* =================================
                DELIVERY TYPE
            ================================== */}

            <div className="summary-row">

              <span>
                Delivery Type
              </span>

              <strong>

                {deliveryType === "prebook"
                  ? "📅 Pre-Booked"
                  : "🚚 Deliver Now"}

              </strong>

            </div>



            {/* =================================
                PRE BOOK DATE
            ================================== */}

            {deliveryType === "prebook" && (

              <>

                <div className="summary-row">

                  <span>
                    Delivery Date
                  </span>

                  <strong>
                    📅 {bookingDate}
                  </strong>

                </div>



                <div className="summary-row">

                  <span>
                    Delivery Time
                  </span>

                  <strong>
                    ⏰ {bookingTime}
                  </strong>

                </div>

              </>

            )}



            {/* =================================
                TOTAL
            ================================== */}

            <div className="summary-total">

              <span>
                Total Amount
              </span>

              <strong>
                ₹{totalPrice}
              </strong>

            </div>


          </div>

        </div>



        {/* =====================================
            DELIVERY DETAILS
        ====================================== */}

        <div className="payment-section">

          <h3>
            Delivery Details
          </h3>


          <div className="delivery-card">


            <h4>
              {userDetails?.name || "Customer"}
            </h4>


            <p>

              <strong>
                Mobile:
              </strong>{" "}

              {userDetails?.mobile ||
                "Not available"}

            </p>


            <p>

              <strong>
                Address:
              </strong>{" "}

              {userDetails?.address ||
                "Not available"}

            </p>


            <p>

              <strong>
                Location:
              </strong>{" "}

              {userDetails?.location ||
                "Not available"}

            </p>


            {/* Current Location */}

            {userDetails?.currentLocation && (

              <p>

                <strong>
                  Current Location:
                </strong>{" "}

                {userDetails.currentLocation}

              </p>

            )}

          </div>

        </div>



        {/* =====================================
            PAYMENT METHOD
        ====================================== */}

        <div className="payment-section">

          <h3>
            Select Payment Method
          </h3>



          {/* =================================
              CASH ON DELIVERY
          ================================== */}

          <button

            type="button"

            className={
              paymentMethod === "cod"
                ? "payment-method active"
                : "payment-method"
            }

            onClick={() =>
              setPaymentMethod("cod")
            }

          >

            <div className="payment-icon">

              <FaMoneyBillWave />

            </div>


            <div className="payment-method-info">

              <strong>
                Cash on Delivery
              </strong>

              <span>
                Pay when your water is delivered
              </span>

            </div>


            <div className="payment-radio">

              {paymentMethod === "cod"
                ? "●"
                : "○"}

            </div>

          </button>



          {/* =================================
              ONLINE PAYMENT
          ================================== */}

          <button

            type="button"

            className={
              paymentMethod === "online"
                ? "payment-method active"
                : "payment-method"
            }

            onClick={() =>
              setPaymentMethod("online")
            }

          >

            <div className="payment-icon">

              <FaCreditCard />

            </div>


            <div className="payment-method-info">

              <strong>
                Online Payment
              </strong>

              <span>
                UPI, Card or Net Banking
              </span>

            </div>


            <div className="payment-radio">

              {paymentMethod === "online"
                ? "●"
                : "○"}

            </div>

          </button>

        </div>



        {/* =====================================
            BOTTOM PAYMENT
        ====================================== */}

        <div className="payment-bottom">


          <div className="final-price">

            <span>
              Total Payable
            </span>

            <strong>
              ₹{totalPrice}
            </strong>

          </div>



          <button

            type="button"

            className="order-now-btn"

            onClick={handleOrder}

          >

            {deliveryType === "prebook"
              ? "Pre-Book Order"
              : "Order Now"}

          </button>


        </div>


      </div>

    </>

  );

};


export default MyPayment;