import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { FaStar } from "react-icons/fa";
import { MdLocationOn } from "react-icons/md";
import { FiArrowLeft } from "react-icons/fi";
import { FaMinus, FaPlus } from "react-icons/fa6";

import Swal from "sweetalert2";

import "../Pages/CSS/SupplierDetails.css";

const SupplierDetails = () => {

  const navigate = useNavigate();
  const { id } = useParams();

//supplier data

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

 //states

  const [waterType, setWaterType] = useState(
    supplier?.water === "Normal"
      ? "Normal"
      : "Cold"
  );

  const [quantity, setQuantity] = useState(1);

  const [showOrderForm, setShowOrderForm] =
    useState(false);
//delivery type

  const [deliveryType, setDeliveryType] =
    useState("now");


  const [bookingDate, setBookingDate] =
    useState("");

  const [bookingTime, setBookingTime] =
    useState("");


  const [userDetails, setUserDetails] = useState({
    name: "",
    mobile: "",
    address: "",
    location: "",
    currentLocation: ""
  });

  const [savedUser, setSavedUser] =
    useState(null);


  useEffect(() => {

    const user =
      localStorage.getItem("jalmitraUser");

    if (user) {

      try {

        const savedUserData =
          JSON.parse(user);

        // Mobile ko sirf numbers me convert karna
        const mobile =
          String(savedUserData.mobile || "")
            .replace(/\D/g, "")
            .slice(-10);

        const userData = {

          name:
            savedUserData.name || "",

          mobile:
            mobile,

          address:
            savedUserData.address || "",

          location:
            savedUserData.location || "",

          currentLocation:
            savedUserData.currentLocation || ""

        };

        setSavedUser(userData);

        setUserDetails(userData);

      } catch (error) {

        localStorage.removeItem(
          "jalmitraUser"
        );

      }

    }

  }, []);



  if (!supplier) {

    return (

      <div className="supplier-not-found">

        <h2>
          Supplier Not Found
        </h2>

        <button
          onClick={() =>
            navigate("/search-bar")
          }
        >
          Back to Search
        </button>

      </div>

    );

  }


  const increaseQuantity = () => {

    setQuantity((prev) => prev + 1);

  };

  const decreaseQuantity = () => {

    if (quantity > 1) {

      setQuantity((prev) => prev - 1);

    }

  };


  const totalPrice =
    supplier.price * quantity;


  const handleChange = (e) => {

    const { name, value } = e.target;

    setUserDetails((prev) => ({
      ...prev,
      [name]: value
    }));

  };


  const getToday = () => {

    const date = new Date();

    const year =
      date.getFullYear();

    const month =
      String(
        date.getMonth() + 1
      ).padStart(2, "0");

    const day =
      String(
        date.getDate()
      ).padStart(2, "0");

    return `${year}-${month}-${day}`;

  };

  const today = getToday();


  const handleProceedOrder = () => {

    setShowOrderForm(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });

  };



  const handleOrderSubmit = (e) => {

    e.preventDefault();


    const mobileNumber =
      String(userDetails.mobile || "")
        .replace(/\D/g, "");

    // NAME VALIDATION
   

    if (!userDetails.name.trim()) {

      Swal.fire({
        icon: "warning",
        title: "Name Required",
        text: "Please enter your name.",
        confirmButtonColor: "#159bc5"
      });

      return;

    }

 //mobile validation

    if (!/^[6-9][0-9]{9}$/.test(mobileNumber)) {

      Swal.fire({
        icon: "warning",
        title: "Invalid Mobile Number",
        text: "Please enter a valid 10 digit mobile number.",
        confirmButtonColor: "#159bc5"
      });

      return;

    }
//address validation

    if (!userDetails.address.trim()) {

      Swal.fire({
        icon: "warning",
        title: "Address Required",
        text: "Please enter your delivery address.",
        confirmButtonColor: "#159bc5"
      });

      return;

    }

  //location validation

    if (!userDetails.location.trim()) {

      Swal.fire({
        icon: "warning",
        title: "Location Required",
        text: "Please enter your location.",
        confirmButtonColor: "#159bc5"
      });

      return;

    }

  //prebook validation

    if (deliveryType === "prebook") {

   

      if (!bookingDate) {

        Swal.fire({
          icon: "warning",
          title: "Select Date",
          text: "Please select your delivery date.",
          confirmButtonColor: "#159bc5"
        });

        return;

      }


      if (!bookingTime) {

        Swal.fire({
          icon: "warning",
          title: "Select Time",
          text: "Please select your delivery time.",
          confirmButtonColor: "#159bc5"
        });

        return;

      }

// same day future time

      if (bookingDate === today) {

        const now = new Date();

        const currentHours =
          String(
            now.getHours()
          ).padStart(2, "0");

        const currentMinutes =
          String(
            now.getMinutes()
          ).padStart(2, "0");

        const currentTime =
          `${currentHours}:${currentMinutes}`;

        if (bookingTime <= currentTime) {

          Swal.fire({
            icon: "warning",
            title: "Invalid Time",
            text: "Please select a future delivery time.",
            confirmButtonColor: "#159bc5"
          });

          return;

        }

      }

    }

  //  customer data

    const customer = {

      name:
        userDetails.name.trim(),

      mobile:
        mobileNumber,

      address:
        userDetails.address.trim(),

      location:
        userDetails.location.trim(),

      currentLocation:
        userDetails.currentLocation || ""

    };


    // SAVE USER
   

    localStorage.setItem(
      "jalmitraUser",
      JSON.stringify(customer)
    );

  //payment page

    navigate("/payment", {

      state: {

        supplier,

        waterType,

        quantity,

        totalPrice,

        userDetails:
          customer,

        // Delivery Type

        deliveryType,

        // Pre Booking Date

        bookingDate:
          deliveryType === "prebook"
            ? bookingDate
            : null,

        // Pre Booking Time

        bookingTime:
          deliveryType === "prebook"
            ? bookingTime
            : null

      }

    });

  };



  return (

    <div className="supplier-details-page">

   {/* header */}

      <div className="supplier-details-header">

        <button

          onClick={() => {

            if (showOrderForm) {

              setShowOrderForm(false);

            } else {

              navigate("/search-bar");

            }

          }}

          className="back-button"

        >

          <FiArrowLeft />

        </button>

        <h2>

          {showOrderForm
            ? "Delivery Details"
            : "Supplier Details"}

        </h2>

      </div>


  {/* supplier details */}

      {!showOrderForm && (

        <>

          {/* SUPPLIER CARD */}

          <div className="supplier-main-card">

            <div className="supplier-big-image">

              <img
                src="/bund.png"
                alt="Water Supplier"
              />

            </div>

            <h1>
              {supplier.name}
            </h1>

            <div className="supplier-rating">

              <FaStar />

              <span>
                {supplier.rating}
              </span>

            </div>

            <p className="supplier-location">

              <MdLocationOn />

              {supplier.location}

            </p>

            <p className="supplier-distance">

              {supplier.distance} away

            </p>

          </div>


          {/* =================================
              WATER TYPE
          ================================== */}

          <div className="water-section">

            <h3>
              Select Water Type
            </h3>

            <div className="water-options">

              {/* COLD */}

              {(supplier.water === "Both" ||
                supplier.water === "Cold") && (

                <button

                  type="button"

                  className={
                    waterType === "Cold"
                      ? "water-btn active"
                      : "water-btn"
                  }

                  onClick={() =>
                    setWaterType("Cold")
                  }

                >

                  ❄️

                  <span>
                    Cold Water
                  </span>

                </button>

              )}


              {/* NORMAL */}

              {(supplier.water === "Both" ||
                supplier.water === "Normal") && (

                <button

                  type="button"

                  className={
                    waterType === "Normal"
                      ? "water-btn active"
                      : "water-btn"
                  }

                  onClick={() =>
                    setWaterType("Normal")
                  }

                >

                  💧

                  <span>
                    Normal Water
                  </span>

                </button>

              )}

            </div>

          </div>


          {/* =================================
              PRODUCT
          ================================== */}

          <div className="product-card">

            <div>

              <h3>
                20L Water Can
              </h3>

              <p>

                {waterType === "Cold"
                  ? "Cold Drinking Water"
                  : "Normal Drinking Water"}

              </p>

            </div>

            <div className="product-price">

              ₹{supplier.price}

              <span>
                / 20L
              </span>

            </div>

          </div>


          {/* =================================
              QUANTITY
          ================================== */}

          <div className="quantity-section">

            <div className="quantity-info">

              <h3>
                Quantity
              </h3>

              <p>
                20L Water Can
              </p>

            </div>

            <div className="quantity-control">

              <button

                type="button"

                onClick={decreaseQuantity}

                disabled={quantity === 1}

              >

                <FaMinus />

              </button>

              <span>
                {quantity}
              </span>

              <button

                type="button"

                onClick={increaseQuantity}

              >

                <FaPlus />

              </button>

            </div>

          </div>


      

          <div className="total-price-box">

            <div>

              <span>
                Total Quantity
              </span>

              <strong>
                {quantity} × 20L
              </strong>

            </div>

            <div className="total-amount">

              <span>
                Total Amount
              </span>

              <strong>
                ₹{totalPrice}
              </strong>

            </div>

          </div>


          {/* proceed */}

          <button

            type="button"

            className="proceed-order-btn"

            onClick={handleProceedOrder}

          >

            Proceed to Order

          </button>

        </>

      )}


 {/* delivery form */}

      {showOrderForm && (

        <div className="order-form-section">

          <div className="form-heading">

            <h2>
              Delivery Details
            </h2>

            <p>
              Enter your details for water delivery
            </p>

          </div>


   {/* delivery type */}

          <div className="delivery-type-section">

            <label>
              Delivery Type
            </label>

            <div className="delivery-type-options">

              {/* DELIVER NOW */}

              <button

                type="button"

                className={
                  deliveryType === "now"
                    ? "delivery-type-btn active"
                    : "delivery-type-btn"
                }

                onClick={() => {

                  setDeliveryType("now");

                  setBookingDate("");

                  setBookingTime("");

                }}

              >

                <span className="delivery-type-icon">
                  🚚
                </span>

                <span className="delivery-type-info">

                  <strong>
                    Deliver Now
                  </strong>

                  <small>
                    Get water as soon as possible
                  </small>

                </span>

              </button>


              {/* PRE BOOK */}

              <button

                type="button"

                className={
                  deliveryType === "prebook"
                    ? "delivery-type-btn active"
                    : "delivery-type-btn"
                }

                onClick={() =>
                  setDeliveryType("prebook")
                }

              >

                <span className="delivery-type-icon">
                  📑
                </span>

                <span className="delivery-type-info">

                  <strong>
                    Pre-Book
                  </strong>

                  <small>
                    Schedule your water delivery
                  </small>

                </span>

              </button>

            </div>

          </div>


       {/* prebook date+time  */}

          {deliveryType === "prebook" && (

            <div className="prebook-fields">

              {/* DATE */}

              <div className="form-group">

                <label>
                  Delivery Date
                </label>

                <input

                  type="date"

                  min={today}

                  value={bookingDate}

                  onChange={(e) =>
                    setBookingDate(
                      e.target.value
                    )
                  }

                />

              </div>


              {/* TIME */}

              <div className="form-group">

                <label>
                  Delivery Time
                </label>

                <input

                  type="time"

                  value={bookingTime}

                  onChange={(e) =>
                    setBookingTime(
                      e.target.value
                    )
                  }

                />

              </div>

            </div>

          )}


      {/* existing address */}

          {savedUser && (

            <div className="existing-address">

              <div className="existing-address-header">

                <h3>
                  Existing Address
                </h3>

                <span>
                  ✓ Saved
                </span>

              </div>

              <p>
                {savedUser.address}
              </p>

              <small>
                {savedUser.location}
              </small>

            </div>

          )}


     {/* customer form */}

          <form
            onSubmit={handleOrderSubmit}
          >

            {/* NAME */}

            <div className="form-group">

              <label>
                Your Name
              </label>

              <input

                type="text"

                name="name"

                placeholder="Enter your name"

                value={userDetails.name}

                onChange={handleChange}

              />

            </div>


            {/* MOBILE */}

            <div className="form-group">

              <label>
                Mobile Number
              </label>

              <input

                type="tel"

                name="mobile"

                placeholder="Enter 10 digit mobile number"

                value={userDetails.mobile}

                maxLength={10}

                inputMode="numeric"

                onChange={(e) => {

                  const value =
                    e.target.value
                      .replace(/\D/g, "")
                      .slice(0, 10);

                  setUserDetails((prev) => ({
                    ...prev,
                    mobile: value
                  }));

                }}

              />

              <small className="input-help">
                Enter a valid 10 digit mobile number
              </small>

            </div>


            {/* ADDRESS */}

            <div className="form-group">

              <label>
                Delivery Address
              </label>

              <textarea

                name="address"

                placeholder="Enter your complete address"

                value={userDetails.address}

                onChange={handleChange}

              ></textarea>

            </div>


            {/* LOCATION */}

            <div className="form-group">

              <label>
                Area / Location
              </label>

              <input

                type="text"

                name="location"

                placeholder="Example: Aliganj, Lucknow"

                value={userDetails.location}

                onChange={handleChange}

              />

            </div>


            {/* =================================
                CURRENT LOCATION
            ================================== */}

            <div className="form-group">

              <label>
                Delivery Location
              </label>

              <button

                type="button"

                className="location-btn"

                onClick={() => {

                  if (!navigator.geolocation) {

                    Swal.fire({

                      icon: "error",

                      title: "Not Supported",

                      text:
                        "Geolocation is not supported by your browser.",

                      confirmButtonColor:
                        "#159bc5"

                    });

                    return;

                  }


                  Swal.fire({

                    title:
                      "Getting Location...",

                    text:
                      "Please wait",

                    allowOutsideClick:
                      false,

                    didOpen: () => {

                      Swal.showLoading();

                    }

                  });


                  navigator.geolocation.getCurrentPosition(

                    async (position) => {

                      const latitude =
                        position.coords.latitude;

                      const longitude =
                        position.coords.longitude;


                      try {

                        const response =
                          await fetch(

                            `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`

                          );


                        const data =
                          await response.json();


                        const address =
                          data.address || {};


                        const readableAddress = [

                          address.suburb ||
                          address.neighbourhood ||
                          address.city_district,

                          address.city ||
                          address.town,

                          address.state

                        ]

                          .filter(Boolean)

                          .join(", ") ||

                          data.display_name ||

                          "Current Location";


                        setUserDetails(
                          (prev) => ({

                            ...prev,

                            currentLocation:
                              readableAddress

                          })
                        );


                        Swal.fire({

                          icon: "success",

                          title:
                            "Location Detected",

                          text:
                            readableAddress,

                          confirmButtonText:
                            "OK",

                          confirmButtonColor:
                            "#159bc5"

                        });


                      } catch (error) {

                        const currentLocation =
                          `${latitude.toFixed(6)}, ${longitude.toFixed(6)}`;

                        setUserDetails(
                          (prev) => ({

                            ...prev,

                            currentLocation

                          })
                        );


                        Swal.fire({

                          icon: "warning",

                          title:
                            "Location Found",

                          text:
                            "Address could not be loaded.",

                          confirmButtonText:
                            "OK",

                          confirmButtonColor:
                            "#159bc5"

                        });

                      }

                    },

                    () => {

                      Swal.fire({

                        icon: "error",

                        title:
                          "Location Error",

                        text:
                          "Unable to get your current location.",

                        confirmButtonColor:
                          "#159bc5"

                      });

                    },

                    {

                      enableHighAccuracy:
                        true,

                      timeout:
                        10000,

                      maximumAge:
                        0

                    }

                  );

                }}

              >

                📍 Use Current Location

              </button>


              {userDetails.currentLocation && (

                <p className="location-text">

                  {userDetails.currentLocation}

                </p>

              )}

            </div>


            {/* =================================
                ORDER SUMMARY
            ================================== */}

            <div className="form-order-summary">

              <div>

                <span>
                  Water Type
                </span>

                <strong>
                  {waterType} Water
                </strong>

              </div>


              <div>

                <span>
                  Quantity
                </span>

                <strong>
                  {quantity} × 20L
                </strong>

              </div>


              <div>

                <span>
                  Delivery Type
                </span>

                <strong>

                  {deliveryType === "prebook"
                    ? "Pre-Booked"
                    : "Deliver Now"}

                </strong>

              </div>


              {/* PREBOOK DATE */}

              {deliveryType === "prebook" && (

                <>

                  <div>

                    <span>
                      Delivery Date
                    </span>

                    <strong>
                      {bookingDate || "Not Selected"}
                    </strong>

                  </div>


                  <div>

                    <span>
                      Delivery Time
                    </span>

                    <strong>
                      {bookingTime || "Not Selected"}
                    </strong>

                  </div>

                </>

              )}


              <div>

                <span>
                  Total Amount
                </span>

                <strong>
                  ₹{totalPrice}
                </strong>

              </div>

            </div>


            {/* =================================
                PAYMENT BUTTON
            ================================== */}

            <button

              type="submit"

              className="continue-payment-btn"

            >

              {deliveryType === "prebook"
                ? "Continue to Pre-Book"
                : "Continue to Payment"}

            </button>

          </form>

        </div>

      )}

    </div>

  );

};

export default SupplierDetails;