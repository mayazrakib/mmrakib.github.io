import "./document_footer.scss";

import { isHomeLocation } from "../../location.js";

function DocumentFooter() {
    const page = isHomeLocation() ? "PAGE 001 / END" : "PAGE 404 / END";

    return (
        <footer className="document-footer">
            <span>MAYAZ RAKIB</span>
            <span>{page}</span>
        </footer>
    );
}

export default DocumentFooter;
