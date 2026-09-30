import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import { FiUser } from "react-icons/fi";
import { FiMapPin } from "react-icons/fi";
import { FiChevronRight } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { MdPhone } from "react-icons/md";
import { FaHome } from "react-icons/fa";
import "../Pages/CSS/MyProfile.css";
import Footer from "../Components/Footer";
import { NavLink, useNavigate } from "react-router-dom";

const MyProfile = () => {
    const navigate = useNavigate();

    const isLoggedIn =
        localStorage.getItem("jalmitraLogin") === "true";

    const savedUser =
        localStorage.getItem("jalmitraUser");

    const user =
        isLoggedIn && savedUser
            ? JSON.parse(savedUser)
            : null;

    const handleLogout = () => {
        localStorage.removeItem("jalmitraLogin");
        alert("Logout successful");
        navigate("/home");
    };

    return (
        <>
            <div className="profile-page">
                <div className="profile-container">

                    <div className="profile-header">
                        <NavLink to="/order">
                            <FiArrowLeft className="back-icon" />
                        </NavLink>
                        <h2>My Profile</h2>
                    </div>

                    {user ? (
                        <>
                            <div className="user-card">
                                <div className="user-image">
                                    <FiUser className="user-img" />
                                </div>

                                <div className="user-info">
                                    <h3>{user.name}</h3>

                                    <p>
                                        <span>
                                            <MdPhone />
                                        </span>
                                        {user.mobile}
                                    </p>
                                </div>
                            </div>

                            <div className="saved-details">
                                <h3>My Details</h3>

                                <div className="saved-detail-item">
                                    <div className="saved-detail-icon">
                                        <FiUser />
                                    </div>

                                    <div className="saved-detail-info">
                                        <span>Name</span>
                                        <strong>
                                            {user.name}
                                        </strong>
                                    </div>
                                </div>

                                <div className="saved-detail-item">
                                    <div className="saved-detail-icon">
                                        <MdPhone />
                                    </div>

                                    <div className="saved-detail-info">
                                        <span>Mobile Number</span>
                                        <strong>
                                            {user.mobile}
                                        </strong>
                                    </div>
                                </div>

                                <div className="saved-detail-item">
                                    <div className="saved-detail-icon">
                                        <FiMapPin />
                                    </div>

                                    <div className="saved-detail-info">
                                        <span>Location</span>
                                        <strong>
                                            {user.location || "Not available"}
                                        </strong>
                                    </div>
                                </div>

                                <div className="saved-detail-item">
                                    <div className="saved-detail-icon">
                                        <FaHome />
                                    </div>

                                    <div className="saved-detail-info">
                                        <span>Address</span>
                                        <strong>
                                            {user.address || "Not available"}
                                        </strong>
                                    </div>
                                </div>
                            </div>
                        </>
                    ) : (
                        <div className="login-required">
                            <div className="user-image">
                                <FiUser className="user-img" />
                            </div>

                            <h3>Please Login</h3>

                            <p>
                                Login to view your profile details.
                            </p>

                            <button
                                onClick={() => navigate("/login")}
                            >
                                Login
                            </button>
                        </div>
                    )}

                    <div className="profile-menu">

                        <NavLink
                            to="/order"
                            className="profile-menu-item"
                        >
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

                        {user && (
                            <div
                                className="profile-menu-item logout-item"
                                onClick={handleLogout}
                            >
                                <div className="menu-left">
                                    <div className="menu-icon logout-icon">
                                        <FiLogOut />
                                    </div>

                                    <span>Logout</span>
                                </div>

                                <FiChevronRight className="chevron" />
                            </div>
                        )}

                    </div>

                </div>
            </div>

            <Footer />
        </>
    );
};

export default MyProfile;