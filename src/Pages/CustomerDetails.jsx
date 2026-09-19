import React, { useState } from 'react'
import "../Pages/CSS/CustomerDetails.css"
const CustomerDetails = () => {
    const [name,setName] = useState("");
    const [mobile, setMobile] = useState("");
    const [address, setAddress] = useState("");
    const[location, setLocation] = useState("");

    const getCurrentLocation = () => {
  console.log("Geolocation:", navigator.geolocation);

  if (!navigator.geolocation) {
    alert("Geolocation API is not available.");
    return;
  }

  navigator.geolocation.getCurrentPosition(
    (position) => {
      console.log("Latitude:", position.coords.latitude);
      console.log("Longitude:", position.coords.longitude);

      alert(
        `Latitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`
      );
    },
    (error) => {
      console.log("Location Error:", error);

      if (error.code === 1) {
        alert("Location permission denied. Please allow location permission.");
      } else if (error.code === 2) {
        alert("Location is currently unavailable.");
      } else if (error.code === 3) {
        alert("Location request timed out.");
      }
    }
  );
};
  return (
   <>
   <div className="customer-form-outer">
    <h2>Customer Details</h2>
    <p>fill in the valid details in account</p>
    <div className="customer-form-inner">
        <label htmlFor="">Name:</label>
        <input type="text" placeholder='Enter Your Name' name='name' required />
        <label htmlFor="">Phone Number:</label>
        <input type="number" placeholder='Enter Your mobile no.' required name='mobile' />
        
        <label htmlFor="">Address:</label>
        <textarea>

        </textarea>
        <input type="text"
        value={location}
        placeholder='Enter Your location'
        onChange={(e) => setLocation(e.target.value)}
        />

        <button type='button' onClick={getCurrentLocation}>📍 Use Current Location</button>
    </div>
   </div>
   </>
  )
}

export default CustomerDetails