import React, { useState } from "react";
import { useNavigate, useParams, NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import { FaMinus, FaPlus } from "react-icons/fa6";
import "../Pages/CSS/SupplierDetails.css";

const SupplierDetails = () => {

  const navigate = useNavigate();
  const { id } = useParams();

  // Water type
  const [waterType, setWaterType] = useState("Cold");

  // Quantity
  const [quantity, setQuantity] = useState(1);

  // Order form show/hide
  const [showOrderForm, setShowOrderForm] = useState(false);

  // User details
  const [userDetails, setUserDetails] = useState({
    name: "",
    mobile: "",
    address: "",
    location: "",
    currentLocation: ""
  });

  const suppliers = [
    {
      id: 1,
      name: "Mishra Water Supply",
      location: "Aliganj, Lucknow",
      distance: "1.3 km",
      water: "Both",
      price: 30,
      rating: 4.5
    },
    {
      id: 2,
      name: "Fresh Drop Water",
      location: "Gomti Nagar, Lucknow",
      distance: "2.5 km",
      water: "Normal",
      price: 25,
      rating: 4.8
    },
    {
      id: 3,
      name: "Aqua Pure",
      location: "Hazratganj, Lucknow",
      distance: "3.1 km",
      water: "Cold",
      price: 35,
      rating: 4.7
    },
    {
      id: 4,
      name: "Sky Water Services",
      location: "Indira Nagar, Lucknow",
      distance: "4.2 km",
      water: "Both",
      price: 30,
      rating: 4.6
    }
  ];

  const supplier = suppliers.find(
    (item) => item.id === Number(id)
  );

  if (!supplier) {
    return <h2>Supplier Not Found</h2>;
  }

  // Quantity increase
  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  // Quantity decrease
  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Total price
  const totalPrice = supplier.price * quantity;

  // Form input change
  const handleChange = (e) => {
    setUserDetails({
      ...userDetails,
      [e.target.name]: e.target.value
    });
  };

  // Form submit
  const handleOrderSubmit = (e) => {
    e.preventDefault();

    navigate("/payment", {
      state: {
        supplier,
        waterType,
        quantity,
        totalPrice,
        userDetails
      }
    });
  };

  return (
    <div className="supplier-details-page">

      {/* ================= HEADER ================= */}

      <div className="supplier-details-header">

        <button
          onClick={() => navigate("/search-bar")}
          className="back-button"
        >
          <NavLink to="/search-bar">
            <FiArrowLeft className="track-back" />
          </NavLink>
        </button>

        <h2>Supplier Details</h2>

      </div>


      {/* ================= SUPPLIER INFO ================= */}

      <div className="supplier-main-card">

        <div className="supplier-big-image">
          <img src="/bund.png" alt="Water Supplier" />
        </div>

        <h1>{supplier.name}</h1>

        <div className="supplier-rating">

          <FaStar />

          <span>{supplier.rating}</span>

        </div>

        <p className="supplier-location">

          <MdLocationOn />

          {supplier.location}

        </p>

        <p className="supplier-distance">
          {supplier.distance} away
        </p>

      </div>


      {/* ================= WATER TYPE ================= */}

      <div className="water-section">

        <h3>Select Water Type</h3>

        <div className="water-options">

          {(supplier.water === "Both" ||
            supplier.water === "Cold") && (

            <button
              className={
                waterType === "Cold"
                  ? "water-btn active"
                  : "water-btn"
              }
              onClick={() => setWaterType("Cold")}
            >
              ❄️
              <span>Cold Water</span>
            </button>

          )}


          {(supplier.water === "Both" ||
            supplier.water === "Normal") && (

            <button
              className={
                waterType === "Normal"
                  ? "water-btn active"
                  : "water-btn"
              }
              onClick={() => setWaterType("Normal")}
            >
              💧
              <span>Normal Water</span>
            </button>

          )}

        </div>

      </div>


      {/* ================= PRODUCT ================= */}

      <div className="product-card">

        <div>

          <h3>20L Water Can</h3>

          <p>
            {waterType === "Cold"
              ? "Cold Drinking Water"
              : "Normal Drinking Water"}
          </p>

        </div>

        <div className="product-price">

          ₹{supplier.price}

          <span>/ 20L</span>

        </div>

      </div>


      {/* ================= QUANTITY ================= */}

      <div className="quantity-section">

        <div className="quantity-info">

          <h3>Quantity</h3>

          <p>20L Water Can</p>

        </div>

        <div className="quantity-control">

          <button
            onClick={decreaseQuantity}
            disabled={quantity === 1}
          >
            <FaMinus />
          </button>

          <span>{quantity}</span>

          <button onClick={increaseQuantity}>
            <FaPlus />
          </button>

        </div>

      </div>


      {/* ================= TOTAL ================= */}

      <div className="total-price-box">

        <div>

          <span>Total Quantity</span>

          <strong>{quantity} × 20L</strong>

        </div>

        <div className="total-amount">

          <span>Total Amount</span>

          <strong>₹{totalPrice}</strong>

        </div>

      </div>


      {/* ================= PROCEED BUTTON ================= */}

      {!showOrderForm && (

        <button
          className="proceed-order-btn"
          onClick={() => setShowOrderForm(true)}
        >
          Proceed to Order
        </button>

      )}


      {/* ================= ORDER FORM ================= */}

      {showOrderForm && (

        <div className="order-form-section">

          <div className="form-heading">

            <h2>Delivery Details</h2>

            <p>
              Enter your details for water delivery
            </p>

          </div>


          <form onSubmit={handleOrderSubmit}>

            {/* Name */}

            <div className="form-group">

              <label>Your Name</label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={userDetails.name}
                onChange={handleChange}
                required
              />

            </div>


            {/* Mobile */}

            <div className="form-group">

              <label>Mobile Number</label>

              <input
                type="tel"
                name="mobile"
                placeholder="Enter mobile number"
                value={userDetails.mobile}
                onChange={handleChange}
                required
              />

            </div>


            {/* Address */}

            <div className="form-group">

              <label>Delivery Address</label>

              <textarea
                name="address"
                placeholder="Enter your complete address"
                value={userDetails.address}
                onChange={handleChange}
                required
              ></textarea>

            </div>


            {/* Location */}

            <div className="form-group">

              <label>Area / Location</label>

              <input
                type="text"
                name="location"
                placeholder="Example: Aliganj, Lucknow"
                value={userDetails.location}
                onChange={handleChange}
                required
              />

            </div>


            {/* Current Location */}

            <div className="form-group">

              <label>Current Location</label>

              <input
                type="text"
                name="currentLocation"
                placeholder="Enter your current location"
                value={userDetails.currentLocation}
                onChange={handleChange}
                required
              />

            </div>


            {/* Order Summary */}

            <div className="form-order-summary">

              <div>
                <span>Water Type</span>
                <strong>{waterType} Water</strong>
              </div>

              <div>
                <span>Quantity</span>
                <strong>{quantity} × 20L</strong>
              </div>

              <div>
                <span>Total Amount</span>
                <strong>₹{totalPrice}</strong>
              </div>

            </div>


            {/* Continue Payment */}

            <button
              type="submit"
              className="continue-payment-btn"
            >
              Continue to Payment
            </button>

          </form>

        </div>

      )}

    </div>
  );
};

export default SupplierDetails;