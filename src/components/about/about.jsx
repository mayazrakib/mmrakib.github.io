import Socials from "./socials.jsx";

import "./about.scss";

function About() {
    return (
        <section className="profile-section" aria-labelledby="profile-heading">
            <header className="section-heading">
                <h2 id="profile-heading">PROFILE</h2>
                <span>RECORD / ACTIVE</span>
            </header>

            <dl className="profile-data">
                <div className="profile-row">
                    <dt>LOCATION</dt>
                    <dd>SYDNEY, AUSTRALIA</dd>
                </div>
                <div className="profile-row">
                    <dt>FIELD</dt>
                    <dd>COMPUTER SCIENCE</dd>
                </div>
                <div className="profile-row">
                    <dt>FOCUS</dt>
                    <dd>DATA ENGINEERING / QUANTITATIVE FINANCE / AI/ML</dd>
                </div>
            </dl>

            <p className="about-text">
                I'm a computer scientist from Sydney, Australia. I have a
                passion for data engineering, quantitative finance, and AI/ML.
                I also write from time to time.
            </p>

            <Socials />
        </section>
    );
}

export default About;
