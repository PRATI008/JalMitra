import React from 'react'
import "../Pages/Welcome.css"
import { NavLink } from 'react-router-dom'
const Welcome = () => {
  return (
    <>
    <div className="get-started-outer">

    </div>
    <div className="get-started-content">
        <h1>Fresh Water for a Healtheir Life</h1>
        <p>FInd trusted water suppliers near you and order fresh water quickly and easily</p>
       <NavLink to='/home' className='get-started-btn'> Get Started</NavLink>
    </div>
    <div className="get-started-bottom-bar">
        <marquee behavior="
        " direction="">Clean Water &nbsp; &nbsp; . Healthy Life  &nbsp; &nbsp;. &nbsp; &nbsp; Better Tommarow  </marquee>
    </div>
    </>
  )
}

export default Welcome