import React from "react";

import { FiArrowLeft } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { MdPhone } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import "../Pages/CSS/MyProfile.css"
import Footer from "../Components/Footer";
import { NavLink } from "react-router-dom";

const MyProfile = () => {

    // Saved user details localStorage se lena
    const savedUser = localStorage.getItem("jalmitraUser");

    const user = savedUser
        ? JSON.parse(savedUser)
        : null;

    return (
        <>
            <div className="profile-page">

                <div className="profile-container">

                    {/* Header */}
                    <div className="profile-header">

                        <NavLink to="/order">
                            <FiArrowLeft className="back-icon" />
                        </NavLink>

                        <h2>My Profile</h2>

                    </div>


                    {/* User Basic Card */}
                    <div className="user-card">

                        <div className="user-image">
                            <FiUser className="user-img" />
                        </div>

                        <div className="user-info">

                            <h3>
                                {user?.name || "Guest User"}
                            </h3>

                            <p>
                                <span>
                                    <MdPhone />
                                </span>

                                {user?.mobile || "Mobile number not added"}
                            </p>

                        </div>

                    </div>


                    {/* Saved Details */}
                    <div className="saved-details">

                        <h3>My Details</h3>


                        {/* Name */}
                        <div className="saved-detail-item">

                            <div className="saved-detail-icon">
                                <FiUser />
                            </div>

                            <div className="saved-detail-info">
                                <span>Name</span>
                                <strong>
                                    {user?.name || "Not available"}
                                </strong>
                            </div>

                        </div>


                        {/* Mobile */}
                        <div className="saved-detail-item">

                            <div className="saved-detail-icon">
                                <MdPhone />
                            </div>

                            <div className="saved-detail-info">
                                <span>Mobile Number</span>
                                <strong>
                                    {user?.mobile || "Not available"}
                                </strong>
                            </div>

                        </div>


                        {/* Location */}
                        <div className="saved-detail-item">

                            <div className="saved-detail-icon">
                                <FiMapPin />
                            </div>

                            <div className="saved-detail-info">
                                <span>Location</span>
                                <strong>
                                    {user?.location || "Not available"}
                                </strong>
                            </div>

                        </div>


                        {/* Address */}
                        <div className="saved-detail-item">

                            <div className="saved-detail-icon">
                                <FaHome />
                            </div>

                            <div className="saved-detail-info">
                                <span>Address</span>
                                <strong>
                                    {user?.address || "Not available"}
                                </strong>
                            </div>

                        </div>

                    </div>


                    {/* Profile Menu */}
                    <div className="profile-menu">

                        <NavLink to="/order" className="profile-menu-item">

                            <div className="menu-left">

                                <div className="menu-icon">
                                    <FiUser />
                                </div>

                                <span>My Orders</span>

                            </div>

                            <FiChevronRight className="chevron" />

                        </NavLink>


                        <div className="profile-menu-item">

                            <div className="menu-left">

                                <div className="menu-icon">
                                    <FiMapPin />
                                </div>

                                <span>Addresses</span>

                            </div>

                            <FiChevronRight className="chevron" />

                        </div>


                      


                        <div className="profile-menu-item logout-item">

                            <div className="menu-left">

                                <div className="menu-icon logout-icon">
                                    <FiLogOut />
                                </div>

                                <span>Logout</span>

                            </div>

                            <FiChevronRight className="chevron" />

                        </div>

                    </div>

                </div>

            </div>

            <Footer />
        </>
    );
};

export default MyProfile;