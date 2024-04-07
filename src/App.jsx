import { Routes, Route } from "react-router-dom";
// import HelloWorld from "./Components/HelloWorld";
import Home1 from "./components/Pages/HomePage/HomePage";
// import Home2 from "./components/Pages/HomePage2/HomePage";
import ResultsPageSingle1Col from "./components/Pages/ResultsPageSingle1Col";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/" element={<Home2 />} />
            <Route path="/results-1" element={<ResultsPageSingle1Col />} />
        </Routes>
    );
}

export default App;
