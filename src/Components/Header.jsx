import React from 'react'
import "../Components/CSS/Header.css"
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
const Header = () => {
  return (
    <>
      <div className="header-outer">
        <img src="./logo-bg.png" alt="" />
        <div className="header-icons">
            <span><IoMdNotificationsOutline/></span>
            <span><FaRegUserCircle/></span>
        </div>
      </div>
    </>
  )
}

export default Header