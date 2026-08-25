import "./navbar.scss";

function Navbar() {
    return (
        <nav id="navbar" aria-label="Primary navigation">
            <div className="masthead-meta">
                <div className="masthead-identity">
                    <span>MAYAZ RAKIB</span>
                    <span>COMPUTER SCIENTIST</span>
                </div>
                <div className="masthead-reference">
                    <span>PROFILE / 01</span>
                    <span>SYDNEY, AU</span>
                </div>
            </div>

            <ul id="navbar-links">
                <li className="navbar-link">
                    <a href="/" className="active" aria-current="page">
                        <span className="nav-index">[01]</span>
                        <span className="nav-label">Home</span>
                    </a>
                </li>
                <li className="navbar-link">
                    <a
                        href="https://github.com/mayazrakib"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="nav-index">[02]</span>
                        <span className="nav-label">Projects</span>
                    </a>
                </li>
                <li className="navbar-link">
                    <a
                        href="/resume.pdf"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <span className="nav-index">[03]</span>
                        <span className="nav-label">Resume</span>
                    </a>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
