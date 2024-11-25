import React from "react";
import { useNavigate } from "react-router-dom"; // Import navigation hook
import "./home.css";

const Homepage = () => {
    const navigate = useNavigate(); // Create a navigation instance

    return (
        <div className="homepage">
            <header className="homepage-header">
                <h1>Welcome to Subha Labh</h1>
                <p>By the rules of astrology, we provide insights.</p>
                <button
                    onClick={() => navigate("/future")} // Navigate to the FuturePage
                    className="btn-primary"
                >
                    See Your Future
                </button>
            </header>
        </div>
    );
};

export default Homepage;
