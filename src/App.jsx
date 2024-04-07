import { Routes, Route } from "react-router-dom";
import Home1 from "./Components/Pages/HomePage/HomePage.jsx";
import ResultsPageSingle1Col from "./Components/Pages/ResultsPageSingle1Col.jsx";
// import Home2 from "./components/Pages/HomePage2/HomePage";
// import ResultsPageSingle1Col from "./components/Pages/ResultsPageSingle1Col";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home1 />} />
            {/* <Route path="/home2" element={<Home2 />} /> */}
            <Route path="/results-1" element={<ResultsPageSingle1Col />} />
        </Routes>
    );
}

export default App;
