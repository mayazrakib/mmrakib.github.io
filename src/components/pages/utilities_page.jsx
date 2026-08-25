import { useEffect } from "react";
import {
    FaExchangeAlt,
    FaKey,
    FaPaste,
    FaPlayCircle,
    FaShareAlt,
} from "react-icons/fa";

import DocumentFooter from "../layout/document_footer.jsx";

import "./utilities_page.scss";

const utilities = Object.freeze([
    {
        Icon: FaKey,
        name: "SECRETS",
        host: "send.mayazrakib.com",
        link: "https://send.mayazrakib.com",
    },
    {
        Icon: FaPaste,
        name: "PASTE",
        host: "paste.mayazrakib.com",
        link: "https://paste.mayazrakib.com",
    },
    {
        Icon: FaShareAlt,
        name: "FILE SHARING",
        host: "drop.mayazrakib.com",
        link: "https://drop.mayazrakib.com",
    },
    {
        Icon: FaExchangeAlt,
        name: "FILE CONVERSION",
        host: "convert.mayazrakib.com",
        link: "https://convert.mayazrakib.com",
    },
    {
        Icon: FaPlayCircle,
        name: "STREAMING",
        host: "streaming.mayazrakib.com",
        link: "https://streaming.mayazrakib.com",
    },
]);

function UtilitiesPage() {
    useEffect(() => {
        document.title = "Utilities — Mayaz Rakib";
    }, []);

    return (
        <div className="document-body utilities-page">
            <section
                className="utilities-section"
                aria-labelledby="utilities-heading"
            >
                <header className="utilities-heading">
                    <h1 id="utilities-heading">UTILITIES</h1>
                    <span>SERVICES / 05</span>
                </header>

                <ul className="utilities-list">
                    {utilities.map((utility, index) => (
                        <li
                            key={utility.name}
                            className="utilities-item"
                            style={{ "--utility-index": index }}
                        >
                            <a
                                href={utility.link}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <span className="utility-index">
                                    UTILITY /{" "}
                                    {String(index + 1).padStart(2, "0")}
                                </span>
                                <span className="utility-name">
                                    <utility.Icon aria-hidden="true" />
                                    <span>{utility.name}</span>
                                </span>
                                <span className="utility-host">
                                    {utility.host}
                                </span>
                            </a>
                        </li>
                    ))}
                </ul>
            </section>

            <DocumentFooter />
        </div>
    );
}

export default UtilitiesPage;
