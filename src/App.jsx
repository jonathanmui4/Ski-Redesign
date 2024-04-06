import { Routes, Route } from "react-router-dom";
import HelloWorld from "./Components/HelloWorld";
import Home1 from "./Components/Pages/Home1";
import ResultsPageSingle1Col from "./Components/Pages/ResultsPageSingle1Col";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/results-1" element={<ResultsPageSingle1Col />} />
        </Routes>
    );
}

export default App;
