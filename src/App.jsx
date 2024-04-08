import { Routes, Route } from "react-router-dom";
import HomeAsymmetrical from './components/Pages/HomePage2/AsymmetricalHomePage.jsx';
import ResultsPageSingle1Col from "./components/Pages/ResultsSingleFilter/ResultsPageSingle1Col.jsx";
import ResultsPage2Column from "./components/Pages/ResultsSingleFilter/ResultsPage2Column.jsx";
import ResultsPage3Column from "./components/Pages/ResultsSingleFilter/ResultsPage3Column.jsx";
import ErrorPage from "./components/Pages/ErrorPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="*" element={<ErrorPage />} />
            {/* Centralised */}
            {/* <Route path="/abc" element={<HomeCentralised />} /> */}
            {/* Asymmetrical */}
            <Route path="/home" element={<HomeAsymmetrical />} />
            <Route path="/results-1" element={<ResultsPageSingle1Col />} />
            <Route path="/results-2" element={<ResultsPage2Column />} />
            <Route path="/results-3" element={<ResultsPage3Column />} />
        </Routes>
    );
}

export default App;
