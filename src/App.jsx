import "./global.scss";

import Navbar from "./components/navigation/navbar.jsx";
import HomePage from "./components/pages/homepage.jsx";
import NotFoundPage from "./components/pages/not_found_page.jsx";
import { isHomeLocation } from "./location.js";

function App() {
    const isHomePage = isHomeLocation();

    return (
        <div className="site-canvas">
            <main className="technical-sheet">
                <Navbar />
                {isHomePage ? <HomePage /> : <NotFoundPage />}
            </main>
        </div>
    );
}

export default App;
