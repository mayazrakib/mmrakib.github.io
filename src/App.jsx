import "./global.scss";

import Navbar from "./components/navigation/navbar.jsx";
import HomePage from "./components/pages/homepage.jsx";

function App() {
    return (
        <div className="site-canvas">
            <main className="technical-sheet">
                <Navbar />
                <HomePage />
            </main>
        </div>
    );
}

export default App;
