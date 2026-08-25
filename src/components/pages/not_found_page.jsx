import { useEffect } from "react";

import DocumentFooter from "../layout/document_footer.jsx";

import "./not_found_page.scss";

function NotFoundPage() {
    useEffect(() => {
        document.title = "404 — Mayaz Rakib";
    }, []);

    return (
        <div className="document-body not-found-page">
            <section
                className="not-found-section"
                aria-labelledby="not-found-heading"
            >
                <header className="not-found-header">
                    <h1 id="not-found-heading">PAGE NOT FOUND</h1>
                    <span>STATUS / 404</span>
                </header>

                <div className="not-found-record">
                    <p className="not-found-code" aria-hidden="true">
                        404
                    </p>
                    <div className="not-found-message">
                        <p className="not-found-status">
                            REQUEST FAILED / INVALID RESOURCE
                        </p>
                        <p>
                            THE REQUESTED PAGE DOES NOT EXIST OR HAS BEEN MOVED.
                        </p>
                        <a className="not-found-link" href="/">
                            [RETURN TO HOME]
                        </a>
                    </div>
                </div>
            </section>

            <DocumentFooter />
        </div>
    );
}

export default NotFoundPage;
