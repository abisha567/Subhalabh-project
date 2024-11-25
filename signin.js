import React from "react";
import { useNavigate } from "react-router-dom";  // For navigation
import "./signin.css"; // Import CSS for styling

const SignInPage = () => {
    const navigate = useNavigate();

    return (
        <div className="signin-container">
            <h1 className="signin-title">Sign In to Subha Labh</h1>
            
            {/* Sign In Form */}
            <form className="signin-form">
                <div className="form-group">
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        className="form-input"
                        placeholder="Enter your email"
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        className="form-input"
                        placeholder="Enter your password"
                    />
                </div>
                <button type="submit" className="btn-submit">
                    Sign In
                </button>
            </form>

            {/* Social Media Sign-In Options */}
            <div className="social-signin">
                <p>or sign up using</p>
                <div className="social-buttons">
                    <button className="btn-social google">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/51/Google.png/1024px-Google.png"
                            alt="Google Logo"
                            className="social-logo"
                        />
                        Sign in with Google
                    </button>
                    <button className="btn-social facebook">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                            alt="Facebook Logo"
                            className="social-logo"
                        />
                        Sign in with Facebook
                    </button>
                    <button className="btn-social twitter">
                        <img
                            src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_2021.svg"
                            alt="Twitter Logo"
                            className="social-logo"
                        />
                        Sign in with Twitter
                    </button>
                </div>
            </div>

            {/* Sign Up Button */}
            <div className="signup-link">
                <p>Don't have an account?</p>
                <button
                    className="btn-signup"
                    onClick={() => navigate("/signup")}
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default SignInPage;
