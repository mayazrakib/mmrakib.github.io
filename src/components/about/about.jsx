import React, { useState, useEffect } from "react";

import Socials from "./socials.jsx";

import "./about.scss";

function About() {
    const [visible, setVisible] = useState(false);
    const [showSocials, setShowSocials] = useState(false);

    useEffect(() => {
        const timerParagraph = setTimeout(() => {
            setVisible(true);
        }, 50);

        return () => clearTimeout(timerParagraph);
    }, []);

    useEffect(() => {
        if (visible) {
            const timerSocials = setTimeout(() => {
                setShowSocials(true);
            }, 1000);
            return () => clearTimeout(timerSocials);
        }
    }, [visible]);

    return (
        <div className="about-container">
            <p className={`about-text ${visible ? "show" : ""}`}>
                I'm a computer scientist from Sydney, Australia.
                I have a passion for data engineering, quantitative finance, and AI/ML.
                I also write from time to time.
            </p>

            {showSocials && <Socials />}
        </div>
    );
}

export default About;
