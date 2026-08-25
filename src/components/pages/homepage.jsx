import { useEffect } from "react";

import Introduction from "../about/introduction.jsx";
import About from "../about/about.jsx";
import DocumentFooter from "../layout/document_footer.jsx";

function HomePage() {
    useEffect(() => {
        document.title = "Mayaz Rakib";
    }, []);

    return (
        <div className="document-body">
            <Introduction />
            <About />
            <DocumentFooter />
        </div>
    );
}

export default HomePage;
