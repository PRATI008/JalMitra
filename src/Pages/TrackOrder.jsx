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

  const savedOrder = localStorage.getItem("jalmitraOrder");

  const order = location.state
    || (savedOrder ? JSON.parse(savedOrder) : null);

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

  const status = order.status || "Placed";

  const statusList = [
    "Placed",
    "Accepted",
    "Preparing",
    "Out for Delivery",
    "Delivered"
  ];

  const currentStatusIndex = statusList.indexOf(status);

  const getStatusClass = (index) => {
    if (index < currentStatusIndex) {
      return "completed";
    }

    if (index === currentStatusIndex) {
      return "active";
    }

    return "pending";
  };

  const getStatusIcon = (index) => {
    if (index < currentStatusIndex) {
      return <FiCheck />;
    }

    if (index === currentStatusIndex) {
      return <FiTruck />;
    }

    return <FiCircle />;
  };

  return (
    <>
      <div className="track-page">

        <div className="track-container">

          <div className="track-header">

            <button
              onClick={() => navigate("/order")}
              className="track-back-btn"
            >
              <FiArrowLeft />
            </button>

            <h2>Track Order</h2>

          </div>

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

          <div className="track-supplier">

            <h3>
              {order.supplier.name}
            </h3>

            <p>
              {order.waterType} Water •{" "}
              {order.quantity} × 20L
            </p>

          </div>

          <div className="timeline">

            <div className={`timeline-item ${getStatusClass(0)}`}>

              <div className="timeline-circle">
                {getStatusIcon(0)}
              </div>

              <div className="timeline-content">

                <h4>Order Placed</h4>

                <p>
                  Your order has been placed successfully.
                </p>

              </div>

            </div>

            <div className="timeline-line"></div>

            <div className={`timeline-item ${getStatusClass(1)}`}>

              <div className="timeline-circle">
                {getStatusIcon(1)}
              </div>

              <div className="timeline-content">

                <h4>Accepted by Supplier</h4>

                <p>
                  Supplier will confirm your order.
                </p>

              </div>

            </div>

            <div className="timeline-line"></div>

            <div className={`timeline-item ${getStatusClass(2)}`}>

              <div className="timeline-circle">
                {getStatusIcon(2)}
              </div>

              <div className="timeline-content">

                <h4>Preparing</h4>

                <p>
                  Your water is being prepared.
                </p>

              </div>

            </div>

            <div className="timeline-line"></div>

            <div className={`timeline-item ${getStatusClass(3)}`}>

              <div className="timeline-circle">
                {getStatusIcon(3)}
              </div>

              <div className="timeline-content">

                <h4>Out for Delivery</h4>

                <p>
                  Delivery partner will pick up your order.
                </p>

              </div>

            </div>

            <div className="timeline-line"></div>

            <div className={`timeline-item ${getStatusClass(4)}`}>

              <div className="timeline-circle">
                {getStatusIcon(4)}
              </div>

              <div className="timeline-content">

                <h4>Delivered</h4>

                <p>
                  Your order has been delivered.
                </p>

              </div>

            </div>

          </div>

          <div className="delivery-card">

            <div className="delivery-route">
              <FiTruck className="delivery-truck" />
            </div>

            <h3>
              {status === "Delivered"
                ? "Your order has been delivered!"
                : "Your order is being processed!"}
            </h3>

            <p>
              <strong>Supplier:</strong>{" "}
              {order.supplier.name}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {order.supplier.location}
            </p>

            <p>
              <strong>Delivery Location:</strong>{" "}
              {order.userDetails?.currentLocation ||
                order.userDetails?.location ||
                order.userDetails?.address}
            </p>

          </div>

        </div>

      </div>

      <Footer />
    </>
  );
};

export default TrackOrder;