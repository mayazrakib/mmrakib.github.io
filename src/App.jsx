import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./global.scss";

import Navbar from "./components/navigation/navbar.jsx";
import HomePage from "./components/pages/homepage.jsx";

function App() {
    return (
        <Router>
            <div className="site-canvas">
                <main className="technical-sheet">
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<HomePage />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}

export default App;
