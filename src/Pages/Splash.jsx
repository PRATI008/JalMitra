import React from "react";
import { useEffect } from "react";
import "../Pages/Splash.css"
import { useNavigate } from "react-router-dom"
function Splash(){

    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate("/welcome");
        }, 8000);
        return () => clearTimeout(timer);
    }, [navigate]);



    return(
        <>
        <div className="splash">
            <video 
            className="splash-video" 
            autoPlay 
            muted 
            loop 
            playsInline>
                <source src="/spalash-bg.mp4" type="video/mp4"/>
                </video> 
                <div className="splash-overlay"></div>

           <div className="splash-content">
            <img src="/logo.png" alt="JalMitra Logo" className="splash-logo" />
             {/* <h1>
                <span>Jal</span>
                Mitra
                </h1>
                <p>Water at Your Doorstep</p> */}
                <div className="loading">
                   
                </div>
           </div>
           
        </div>
        </>
    )
}
export default Splash;
