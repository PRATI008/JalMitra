import React from 'react'
import "../Components/CSS/Footer.css"
import { NavLink } from 'react-router-dom'
import { IoIosHome } from "react-icons/io";
import { FaSearch } from "react-icons/fa";
import { BsHandbag } from "react-icons/bs";
import { FaUserAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <>
   
   <div className="bottom-outer">
        <div className="bottom-menu">
<ul>
  <NavLink to='/home' className={({ isActive }) => `navlinks ${isActive ? " navActive" : ""}`}> <p><IoIosHome />  </p>  Home</NavLink>
  <NavLink to='/search-bar' className={({ isActive }) => `navlinks ${isActive ? " navActive" : ""}`}><p><FaSearch /></p> Search</NavLink>
  <NavLink to='/order' className={({ isActive }) => `navlinks ${isActive ? " navActive" : ""}`}> <p><BsHandbag /></p>  Orders</NavLink>
  <NavLink to='/my-profile' className={({ isActive }) => `navlinks ${isActive ? " navActive" : ""}`}> <p><FaUserAlt /></p> Profile</NavLink>
</ul>
     
      </div>
    </div>
    </>
  )
}

export default Footer 