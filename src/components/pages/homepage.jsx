import Introduction from "../about/introduction.jsx";
import About from "../about/about.jsx";

import "./homepage.scss";

function HomePage() {
    return (
        <div className="document-body">
            <Introduction />
            <About />

            <footer className="document-footer">
                <span>MAYAZ RAKIB</span>
                <span>PAGE 001 / END</span>
            </footer>
        </div>
    );
}

export default HomePage;
