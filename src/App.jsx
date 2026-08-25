import "./global.scss";

import { useEffect, useState } from "react";

import Navbar from "./components/navigation/navbar.jsx";
import HomePage from "./components/pages/homepage.jsx";
import NotFoundPage from "./components/pages/not_found_page.jsx";
import UtilitiesPage from "./components/pages/utilities_page.jsx";
import { getCurrentRoute, ROUTES } from "./location.js";

function App() {
    const [route, setRoute] = useState(getCurrentRoute);
    const hasPageChrome = route === ROUTES.HOME;

    useEffect(() => {
        const updateRoute = () => {
            setRoute(getCurrentRoute());
        };

        window.addEventListener("hashchange", updateRoute);

        return () => {
            window.removeEventListener("hashchange", updateRoute);
        };
    }, []);

    let page = <NotFoundPage />;

    if (route === ROUTES.HOME) {
        page = <HomePage />;
    } else if (route === ROUTES.UTILITIES) {
        page = <UtilitiesPage />;
    }

    return (
        <div className="site-canvas">
            <main
                className={`technical-sheet${hasPageChrome ? "" : " technical-sheet--unframed"}`}
            >
                {hasPageChrome && <Navbar />}
                {page}
            </main>
        </div>
    );
}

export default App;
