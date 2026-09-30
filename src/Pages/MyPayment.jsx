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


  // Agar order data nahi mila
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


  // Order data
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



  // Order place karna
  const handleOrder = () => {

    // New Order Object
    const newOrder = {

      orderId: `JM${Date.now().toString().slice(-8)}`,

      supplier,

      waterType,

      quantity,

      totalPrice,

      userDetails,

      paymentMethod,

      // Pre Booking
      deliveryType: deliveryType || "now",

      bookingDate:
        deliveryType === "prebook"
          ? bookingDate
          : null,

      bookingTime:
        deliveryType === "prebook"
          ? bookingTime
          : null,

      status: "Order Placed",

      orderDate: new Date().toLocaleDateString(),

      orderTime: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit"
      })

    };


    // Order ko localStorage me save karna
    localStorage.setItem(
      "jalmitraOrder",
      JSON.stringify(newOrder)
    );


    // Success popup
    Swal.fire({

      icon: "success",

      title: "Order Placed!",

      text:
        deliveryType === "prebook"
          ? "Your water has been successfully pre-booked."
          : "Your water order has been placed successfully.",

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

          state: newOrder

        });

      }

    });

  };


  return (
    <>

      {/* Header */}

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


        {/* =========================
            ORDER SUMMARY
        ========================== */}

        <div className="payment-section">

          <h3>Order Summary</h3>

          <div className="payment-summary">


            <div className="summary-row">

              <span>Supplier</span>

              <strong>
                {supplier.name}
              </strong>

            </div>


            <div className="summary-row">

              <span>Water Type</span>

              <strong>

                {waterType === "Cold"
                  ? "❄️ Cold Water"
                  : "💧 Normal Water"}

              </strong>

            </div>


            <div className="summary-row">

              <span>Quantity</span>

              <strong>

                {quantity} × 20L

              </strong>

            </div>


            <div className="summary-row">

              <span>Price</span>

              <strong>

                ₹{supplier.price} / 20L

              </strong>

            </div>



            {/* Delivery Type */}

            <div className="summary-row">

              <span>Delivery Type</span>

              <strong>

                {deliveryType === "prebook"
                  ? "📅 Pre-Booked"
                  : "🚚 Deliver Now"}

              </strong>

            </div>



            {/* Pre Booking Date */}

            {deliveryType === "prebook" && (

              <>

                <div className="summary-row">

                  <span>Delivery Date</span>

                  <strong>
                    📅 {bookingDate}
                  </strong>

                </div>


                <div className="summary-row">

                  <span>Delivery Time</span>

                  <strong>
                    ⏰ {bookingTime}
                  </strong>

                </div>

              </>

            )}



            <div className="summary-total">

              <span>Total Amount</span>

              <strong>
                ₹{totalPrice}
              </strong>

            </div>


          </div>

        </div>



   {/* delivery details */}

        <div className="payment-section">

          <h3>Delivery Details</h3>


          <div className="delivery-card">

            <h4>
              {userDetails.name}
            </h4>


            <p>

              <strong>Mobile:</strong>{" "}

              {userDetails.mobile}

            </p>


            <p>

              <strong>Address:</strong>{" "}

              {userDetails.address}

            </p>


            <p>

              <strong>Location:</strong>{" "}

              {userDetails.location}

            </p>


            {userDetails.currentLocation && (

              <p>

                <strong>Current Location:</strong>{" "}

                {userDetails.currentLocation}

              </p>

            )}


          </div>

        </div>



       {/* payment method */}

        <div className="payment-section">

          <h3>Select Payment Method</h3>



          {/* COD */}

          <button

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



          {/* ONLINE */}

          <button

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



        {/* =========================
            BOTTOM
        ========================== */}

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