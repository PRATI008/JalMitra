import React from "react";

import { FiShoppingBag } from "react-icons/fi";
import { FiArrowLeft } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiCreditCard } from "react-icons/fi";
import { FiStar } from "react-icons/fi";
import { FiHelpCircle } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { FiSearch } from "react-icons/fi";
import { FiSettings } from "react-icons/fi";
import { MdOutlineEmail } from "react-icons/md";

import { FaPhoneAlt } from "react-icons/fa";

import "./CSS/MyProfile.css";

const MyProfile = () => {
    return (
        <>
            <div className="profile-page">

                <div className="profile-container">

                    <div className="profile-header">
                        <FiArrowLeft className="back-icon" />
                        <h2>My Profile</h2>
                    </div>

                    <div className="user-card">

                        <div className="user-image">
                            <FiUser  className="user-img"/>
                        </div>

                        <div className="user-info">
                            <h3>Shalu Kushwaha</h3>

                            <p>
                                <span><MdOutlineEmail /></span>
                                shalukushwaha@gmail.com
                            </p>

                            <p>
                                <span><FaPhoneAlt /></span>
                                +91 98765 43210
                            </p>
                        </div>

                    </div>

                    <div className="profile-menu">

                        <div className="profile-menu-item">
                            <div className="menu-left">
                                <div className="menu-icon">
                                    <FiUser />
                                </div>
                                <span>My Orders</span>
                            </div>
                            <FiChevronRight className="chevron" />
                        </div>


                        <div className="profile-menu-item">
                            <div className="menu-left">
                                <div className="menu-icon">
                                    <FiMapPin /> 
                                </div>
                                <span>Addresses</span>
                            </div>
                            <FiChevronRight className="chevron" />
                        </div>


                        <div className="profile-menu-item">
                            <div className="menu-left">
                                <div className="menu-icon">
                                    <FiCreditCard />
                                </div>
                                <span>Payment Methods</span>
                            </div>
                            <FiChevronRight className="chevron" />
                        </div>


                        <div className="profile-menu-item">
                            <div className="menu-left">
                                <div className="menu-icon">
                                    <FiStar />
                                </div>
                                <span>Reviews & Ratings</span>
                            </div>
                            <FiChevronRight className="chevron" />
                        </div>


                        <div className="profile-menu-item">
                            <div className="menu-left">
                                <div className="menu-icon">
                                    <FiHelpCircle />
                                </div>
                                <span>Help & Support</span>
                            </div>
                            <FiChevronRight className="chevron" />
                        </div>


                        <div className="profile-menu-item">
                            <div className="menu-left">
                                <div className="menu-icon">
                                    <FiSettings />
                                </div>
                                <span>Settings</span>
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

{/* 
                    <div className="bottom-navigation">

                        <div className="bottom-item">
                            <FiHome />
                            <span>Home</span>
                        </div>

                        <div className="bottom-item">
                            <FiSearch />
                            <span>Search</span>
                        </div>

                        <div className="bottom-item">
                            <FiShoppingBag />
                            <span>Orders</span>
                        </div>

                        <div className="bottom-item active">
                            <FiUser />
                            <span>Profile</span>
                        </div>

                    </div> */}

                </div>

            </div>
        </>
    );
};

export default MyProfile;