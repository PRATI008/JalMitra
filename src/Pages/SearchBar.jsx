import React, { useState } from 'react'
import "../Pages/CSS/SearchBar.css"
import { FaSearch, FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { useNavigate, NavLink } from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";
import Footer from '../Components/Footer';

const SearchBar = () => {

    const navigate = useNavigate();
    const [search, setSearch] = useState("");

    const [waterType, setWaterType] = useState("All");

    const suppliers = [
        {
            id: 1,
            name:"mishra water supply",
            location: "Aliganj, Lucknow",
            distance: "1.3 km",
            water: "Both",
            price:30,
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


  const filteredSuppliers = suppliers.filter((supplier) => {

    const searchMatch =
      supplier.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      supplier.location
        .toLowerCase()
        .includes(search.toLowerCase());


    const waterMatch =
      waterType === "All" ||
      supplier.water === waterType ||
      supplier.water === "Both";


    return searchMatch && waterMatch;

  });

 
  return (
   <>
       <div className="search-page">


      {/* TOP HEADER */}

      <div className="search-header">

        <button
          onClick={() => navigate("/home")}
          className="back-button"
        >
          <NavLink to='/home'> <FiArrowLeft className="track-back" /></NavLink>
        </button>


        <h2>
          Search Suppliers
        </h2>

      </div>



      {/* SEARCH BAR */}

      <div className="search-input-box">

        <FaSearch />

        <input
          type="text"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
          placeholder="Search by area or supplier name"
        />

      </div>



      {/* FILTERS */}

      <div className="search-filters">

        <button
          className={
            waterType === "All"
              ? "filter-btn active"
              : "filter-btn"
          }
          onClick={() =>
            setWaterType("All")
          }
        >
          All
        </button>


        <button
          className={
            waterType === "Cold"
              ? "filter-btn active"
              : "filter-btn"
          }
          onClick={() =>
            setWaterType("Cold")
          }
        >
          ❄️ Cold Water
        </button>


        <button
          className={
            waterType === "Normal"
              ? "filter-btn active"
              : "filter-btn"
          }
          onClick={() =>
            setWaterType("Normal")
          }
        >
          💧 Normal Water
        </button>

      </div>



      {/* SUPPLIER COUNT */}

      <div className="result-title">

        <h3>
          Nearby Suppliers
        </h3>

        <span>
          {filteredSuppliers.length} found
        </span>

      </div>



      {/* SUPPLIER LIST */}

      <div className="search-supplier-list">

        {filteredSuppliers.length === 0 ? (

          <div className="empty-result">

            <div>
              💧
            </div>

            <h3>
              No Supplier Found
            </h3>

            <p>
              Try another area or water type.
            </p>

          </div>

        ) : (

          filteredSuppliers.map((supplier) => (

            <div
              className="search-supplier-card"
              key={supplier.id}
            >


              {/* IMAGE / ICON */}

              <div className="supplier-image">

                <img src="./normal-water.png" alt="" />

              </div>



              {/* SUPPLIER INFORMATION */}

              <div className="search-supplier-info">

                <div className="supplier-name-row">

                  <h3>
                    {supplier.name}
                  </h3>

                  <span className="supplier-rating">

                    <FaStar />

                    {supplier.rating}

                  </span>

                </div>


                <p className="supplier-location">

                  <MdLocationOn />

                  {supplier.distance}
                  {" • "}
                  {supplier.location}

                </p>


                <p className="supplier-water">

                  {supplier.water === "Both"
                    ? "❄️ Cold + 💧 Normal"
                    : supplier.water === "Cold"
                      ? "❄️ Cold Water"
                      : "💧 Normal Water"
                  }

                </p>


                <p className="supplier-price">

                  ₹{supplier.price}
                  <span>
                    / 20L
                  </span>

                </p>

              </div>



              {/* VIEW BUTTON */}

              <button
                className="view-supplier-btn"
                onClick={() =>
                  navigate(
                    `/supplier/${supplier.id}`
                  )
                }
              >
                View
              </button>


            </div>

          ))

        )}

      </div>



      {/* BOTTOM NAVIGATION */}

      {/* <div className="bottom-navigation">

        <button
          onClick={() => navigate("/home")}
        >
          🏠
          <span>Home</span>
        </button>


        <button className="nav-active">
          🔍
          <span>Search</span>
        </button>


        <button
          onClick={() => navigate("/orders")}
        >
          🛍️
          <span>Orders</span>
        </button>


        <button
          onClick={() => navigate("/myprofile")}
        >
          👤
          <span>Profile</span>
        </button>

      </div> */}


    </div>
<Footer/>

   </>
  )
}

export default SearchBar