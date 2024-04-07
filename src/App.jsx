import { Routes, Route } from "react-router-dom";
import Home1 from "./components/Pages/HomePage/HomePage.jsx";
import ResultsPageSingle1Col from "./components/Pages/ResultsPageSingle1Col.jsx";
import ResultsPage2Column from "./components/Pages/ResultsPage2Column.jsx";
import ResultsPage3Column from "./components/Pages/ResultsPage3Column.jsx";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home1 />} />
            {/* <Route path="/home2" element={<Home2 />} /> */}
            <Route path="/results-1" element={<ResultsPageSingle1Col />} />
            <Route path="/results-2" element={<ResultsPage2Column />} />
            <Route path="/results-3" element={<ResultsPage3Column />} />
        </Routes>
    );
}

export default App;
