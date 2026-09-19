import React from "react";

import {
  FiArrowLeft,
  FiCheck,
  FiTruck,
  FiCircle
} from "react-icons/fi";

import {
  useLocation,
  useNavigate
} from "react-router-dom";

import "./CSS/TrackOrder.css";

import Footer from "../Components/Footer";


const TrackOrder = () => {

  const navigate = useNavigate();
  const location = useLocation();


  // Pehle navigation state check
  const savedOrder = localStorage.getItem("jalmitraOrder");

  const order = location.state
    || (savedOrder ? JSON.parse(savedOrder) : null);


  // Agar order nahi hai
  if (!order) {

    return (
      <>
        <div className="track-empty">

          <h2>No Active Order</h2>

          <p>
            You haven't placed any order yet.
          </p>

          <button
            onClick={() => navigate("/search-bar")}
          >
            Find Water
          </button>

        </div>

        <Footer />
      </>
    );
  }


  return (
    <>
      <div className="track-page">

        <div className="track-container">


          {/* Header */}

          <div className="track-header">

            <button
              onClick={() => navigate("/order")}
              className="track-back-btn"
            >
              <FiArrowLeft />
            </button>

            <h2>Track Order</h2>

          </div>


          {/* Order Info */}

          <div className="order-info">

            <h3>
              Order #{order.orderId}
            </h3>

            <p>
              {order.orderDate}
              &nbsp; • &nbsp;
              {order.orderTime}
            </p>

          </div>


          {/* Supplier */}

          <div className="track-supplier">

            <h3>
              {order.supplier.name}
            </h3>

            <p>
              {order.waterType} Water •{" "}
              {order.quantity} × 20L
            </p>

          </div>


          {/* Timeline */}

          <div className="timeline">


            {/* Order Placed */}

            <div className="timeline-item completed">

              <div className="timeline-circle">
                <FiCheck />
              </div>

              <div className="timeline-content">

                <h4>Order Placed</h4>

                <p>
                  Your order has been placed successfully.
                </p>

              </div>

            </div>


            <div className="timeline-line"></div>


            {/* Accepted */}

            <div className="timeline-item completed">

              <div className="timeline-circle">
                <FiCheck />
              </div>

              <div className="timeline-content">

                <h4>Accepted by Supplier</h4>

                <p>
                  Supplier will confirm your order.
                </p>

              </div>

            </div>


            <div className="timeline-line"></div>


            {/* Preparing */}

            <div className="timeline-item active">

              <div className="timeline-circle">
                <FiTruck />
              </div>

              <div className="timeline-content">

                <h4>Preparing</h4>

                <p>
                  Your water is being prepared.
                </p>

              </div>

            </div>


            <div className="timeline-line"></div>


            {/* Delivery */}

            <div className="timeline-item pending">

              <div className="timeline-circle">
                <FiCircle />
              </div>

              <div className="timeline-content">

                <h4>Out for Delivery</h4>

                <p>
                  Delivery partner will pick up your order.
                </p>

              </div>

            </div>


            <div className="timeline-line"></div>


            {/* Delivered */}

            <div className="timeline-item pending">

              <div className="timeline-circle">
                <FiCircle />
              </div>

              <div className="timeline-content">

                <h4>Delivered</h4>

                <p>
                  Waiting for delivery.
                </p>

              </div>

            </div>

          </div>


          {/* Delivery Card */}

          <div className="delivery-card">

            <div className="delivery-route">

              <FiTruck className="delivery-truck" />

            </div>

            <h3>
              Your order is being processed!
            </h3>

            <p>
              <strong>Supplier:</strong>{" "}
              {order.supplier.name}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {order.supplier.location}
            </p>

          </div>

        </div>

      </div>

      <Footer />

    </>
  );
};


export default TrackOrder;