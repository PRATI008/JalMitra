import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import "../Pages/CSS/SupplierDetails.css"

const SupplierDetails = () => {

  const navigate = useNavigate();

  const { id } = useParams();

  const [waterType, setWaterType] = useState("Cold");

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

  return (
    <div className="supplier-details-page">

      {/* Header */}

      <div className="supplier-details-header">

        <button
          onClick={() => navigate("/search-bar")}
          className="back-button"
        >
          ←
        </button>

        <h2>Supplier Details</h2>

      </div>


      {/* Supplier Info */}

      <div className="supplier-main-card">

        <div className="supplier-big-image">
        <img src="/bund.png" alt="" />
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


      {/* Water Type */}

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


      {/* Product */}

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


      {/* Order Button */}

      <button
        className="proceed-order-btn"
        onClick={() => navigate("/order")}
      >
        Proceed to Order
      </button>

    </div>
  );
};

export default SupplierDetails;