import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Homepage from "./home"; // Import Homepage component
import FuturePage from "./future"; // Import FuturePage component
import SignInPage from "./signin"; // Import SignInPage component
import SignUpPage from "./signup"; // Import SignUpPage component

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/future" element={<FuturePage />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/signup" element={<SignUpPage />} /> {/* Added /signup route */}
            </Routes>
        </Router>
    );
}

export default App;
