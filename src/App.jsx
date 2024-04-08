import { Routes, Route } from "react-router-dom";
import HomeCentralised from './Components/Pages/HomePage/HomePage.jsx';
import HomeAsymmetrical from './Components/Pages/HomePage2/AsymmetricalHomePage.jsx'
import ResultsPageSingle1Col from "./Components/Pages/ResultsSingleFilter/ResultsPageSingle1Col.jsx";
import ResultsPage2Column from "./Components/Pages/ResultsSingleFilter/ResultsPage2Column.jsx";
import ResultsPage3Column from "./Components/Pages/ResultsSingleFilter/ResultsPage3Column.jsx";
import ErrorPage from "./Components/Pages/ErrorPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="*" element={<ErrorPage />} />
            {/* Centralised */}
            <Route path="/home-1" element={<HomeCentralised />} />
            {/* Asymmetrical */}
            <Route path="/home-2" element={<HomeAsymmetrical />} />
            <Route path="/results-1" element={<ResultsPageSingle1Col />} />
            <Route path="/results-2" element={<ResultsPage2Column />} />
            <Route path="/results-3" element={<ResultsPage3Column />} />
        </Routes>
    );
}

export default App;
