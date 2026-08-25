import "./document_footer.scss";

import { isHomeLocation, isUtilitiesLocation } from "../../location.js";

function DocumentFooter() {
    let page = "PAGE 404 / END";

    if (isHomeLocation()) {
        page = "PAGE 001 / END";
    } else if (isUtilitiesLocation()) {
        page = "PAGE 002 / END";
    }

    return (
        <footer className="document-footer">
            <span>MAYAZ RAKIB</span>
            <span>{page}</span>
        </footer>
    );
}

export default DocumentFooter;
