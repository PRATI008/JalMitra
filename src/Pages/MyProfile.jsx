import React from 'react'
import './CSS/MyProfile.css'
import { IoIosArrowBack } from "react-icons/io";
import { FcBusinessman } from "react-icons/fc";

const MyProfile = () => {
    return (
        <>
            <div className="profile-container">
                <div className="myprofile"> <IoIosArrowBack className='back-icon' />My Profile</div>
                <div className="myprofile-logo">
                    <img src="./myprofile-logo.png" alt="" />
                </div>
            </div>
            <div className="profile-detail">
                <div className="profile-image">
                    <FcBusinessman className='user-icon' />
                </div>
                <div className="user-info">
                    <h3>Shalu Kushwaha</h3>

                    <p>
                        <span>✉</span>
                        shalukushwaha@gmail.com
                    </p>

                    <p>
                        <span>☎</span>
                        +91 98765 43210
                    </p>
                </div>
            </div>
        </>
    )
}

export default MyProfile