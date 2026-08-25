import {
    FaInstagram,
    FaYoutube,
    FaTwitter,
    FaGithub,
    FaEnvelope,
} from "react-icons/fa";

import "./socials.scss";

function Socials() {
    const icons = [
        {
            link: "https://instagram.com/mayazrakib",
            label: "Instagram",
            shortLabel: "IG",
            Icon: FaInstagram,
        },
        {
            link: "https://youtube.com/@mayazrakib",
            label: "YouTube",
            shortLabel: "YT",
            Icon: FaYoutube,
        },
        {
            link: "https://x.com/mayaz_rakib",
            label: "X / Twitter",
            shortLabel: "X",
            Icon: FaTwitter,
        },
        {
            link: "https://github.com/mayazrakib",
            label: "GitHub",
            shortLabel: "GH",
            Icon: FaGithub,
        },
        {
            link: "mailto:mayaz@rakib.com.au",
            label: "Email",
            shortLabel: "Mail",
            Icon: FaEnvelope,
        },
    ];

    return (
        <section className="contact-section" aria-labelledby="contact-heading">
            <header className="contact-heading">
                <h2 id="contact-heading">CONTACT</h2>
                <span>CHANNELS / 05</span>
            </header>

            <ul className="socials-list">
                {icons.map((item, index) => (
                    <li
                        key={item.label}
                        className="socials-item"
                        style={{ "--social-index": index }}
                    >
                        <a
                            href={item.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={item.label}
                        >
                            <item.Icon aria-hidden="true" />
                            <span className="social-label social-label-long">
                                {item.label}
                            </span>
                            <span className="social-label social-label-short">
                                {item.shortLabel}
                            </span>
                        </a>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default Socials;
