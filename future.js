import React from "react";
import "./future.css"; // Import the CSS file for styling
import { useNavigate } from "react-router-dom";

const FuturePage = () => {
    const navigate = useNavigate();

    return (
        <div className="future-container">
            <header className="navbar">
                <div className="logo">SUBHA LABH</div>
                <div className="auth-buttons">
                    {/* Sign In Button */}
                    <button 
                        className="btn-secondary" 
                        onClick={() => navigate("/signin")}
                    >
                        Sign In
                    </button>
                    
                    {/* Sign Up Button */}
                    <button 
                        className="btn-secondary" 
                        onClick={() => navigate("/signup")}
                    >
                        Sign Up
                    </button>
                </div>
            </header>
            <div className="content">
                <h1>Discover Your Cosmic Path</h1>
                <div className="moon-images"></div>
            </div>
        </div>
    );
};

export default FuturePage;
