import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./CSS/Login.css";

const Login = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const [mobile, setMobile] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const savedUser = localStorage.getItem("jalmitraUser");

    if (!savedUser) {
      Swal.fire({
        icon: "warning",
        title: "Account Not Found",
        text: "Please place your first order to create an account.",
        confirmButtonColor: "#159bc5"
      }).then(() => {
        navigate("/home");
      });

      return;
    }

    const user = JSON.parse(savedUser);

    if (mobile === user.mobile) {
      localStorage.setItem("jalmitraLogin", "true");

      const orderData = location.state?.orderData;

      if (location.state?.returnTo === "order-confirmation" && orderData) {
        navigate("/order-comfirmation", {
          state: orderData
        });

        return;
      }

      Swal.fire({
        icon: "success",
        title: "Login Successful",
        text: "Welcome back to JalMitra!",
        confirmButtonColor: "#159bc5"
      }).then(() => {
        navigate("/home");
      });

    } else {
      Swal.fire({
        icon: "error",
        title: "Invalid Mobile Number",
        text: "Mobile number does not match.",
        confirmButtonColor: "#159bc5"
      });
    }
  };

  return (
    <div className="login-page">
      <div className="login-card">

        <h1>Welcome Back!</h1>

        <p className="login-text">
          Login to continue with JalMitra
        </p>

        <form onSubmit={handleLogin}>

          <label>
            Enter Mobile Number
          </label>

          <input
            type="tel"
            placeholder="Enter Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            maxLength="10"
            required
          />

          <button type="submit">
            Login
          </button>

        </form>

        <p className="login-note">
          Place your first order to create an account.
        </p>

      </div>
    </div>
  );
};

export default Login;