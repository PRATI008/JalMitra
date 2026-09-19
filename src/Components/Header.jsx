import React from 'react'
import "../Components/CSS/Header.css"
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
const Header = () => {
  return (
    <>
      <div className="header-outer">
        <img src="./logo-bg.png" alt="" />
        <div className="header-icons">
            <span><IoMdNotificationsOutline/></span>
            <NavLink to='/my-profile' className='profile-icon'><FaRegUserCircle/></NavLink>
        </div>
      </div>
    </>
  )
}

export default Header