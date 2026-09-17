import React from 'react'
import {
    FiArrowLeft,
    FiCheck,
    FiTruck,
    FiCircle
} from "react-icons/fi";
import './CSS/TrackOrder.css'
import {NavLink} from 'react-router-dom'
const TrackOrder = () => {
    return (
        <>
            <div className="track-page">

                <div className="track-container">

                    <div className="track-header">
                  <NavLink to='/my-profile'> <FiArrowLeft className="track-back" /></NavLink>
                        <h2>Track Order</h2>
                    </div>

                    <div className="order-info">
                        <h3>Order #JM12345</h3>
                        <p>Placed on 10 Apr 2025&nbsp; • &nbsp;10:30 AM</p>
                    </div>

                    <div className="timeline">

                        <div className="timeline-item completed">
                            <div className="timeline-circle">
                                <FiCheck />
                            </div>

                            <div className="timeline-content">
                                <h4>Order Placed</h4>
                                <p>10 Apr 2025 • 10:30 AM</p>
                            </div>
                        </div>

                        <div className="timeline-line"></div>


                        <div className="timeline-item completed">
                            <div className="timeline-circle">
                                <FiCheck />
                            </div>

                            <div className="timeline-content">
                                <h4>Accepted by Supplier</h4>
                                <p>10 Apr 2025 • 11:15 AM</p>
                            </div>
                        </div>

                        <div className="timeline-line"></div>


                        <div className="timeline-item active">
                            <div className="timeline-circle">
                                <FiTruck />
                            </div>

                            <div className="timeline-content">
                                <h4>Out for Delivery</h4>
                                <p>10 Apr 2025 • 03:20 PM</p>
                            </div>
                        </div>

                        <div className="timeline-line"></div>


                        <div className="timeline-item pending">
                            <div className="timeline-circle">
                                <FiCircle />
                            </div>

                            <div className="timeline-content">
                                <h4>Delivered</h4>
                                <p>Expected by 10 Apr 2025 • 06:00 PM</p>
                            </div>
                        </div>

                    </div>


                    <div className="delivery-card">

                        <div className="delivery-route">
                          
                            <FiTruck className="delivery-truck" />
                        </div>

                        <h3>Your order is on the way!</h3>

                        <p>
                            <strong>Delivery partner:</strong> Shalu Kushwaha
                        </p>

                        <p>
                            <strong>Contact:</strong> 45665 12454
                        </p>

                    </div>

                </div>

            </div>
        </>
    )
}

export default TrackOrder