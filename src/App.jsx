import { Routes, Route } from "react-router-dom";
import HomeCentralised from "./components/Pages/HomePage/HomePage.jsx";
import HomeAsymmetrical from "./components/Pages/HomePage2/AsymmetricalHomePage.jsx";
import ResultsPageSingle1Col from "./components/Pages/ResultsSingleFilter/ResultsPageSingle1Col.jsx";
import ResultsPage2Column from "./components/Pages/ResultsSingleFilter/ResultsPage2Column.jsx";
import ResultsPage3Column from "./components/Pages/ResultsSingleFilter/ResultsPage3Column.jsx";
import ErrorPage from "./components/Pages/ErrorPage.jsx";

function App() {
    return (
        <Routes>
            <Route path="*" element={<ErrorPage />} />
            {/* Home page */}
            {/* Centralised */}
            <Route path="/CS1/home" element={<HomeCentralised />} />
            <Route path="/CS2/home" element={<HomeCentralised />} />
            <Route path="/CS3/home" element={<HomeCentralised />} />

            {/* <Route path="/CM1/home" element={<HomeCentralised />} />
            <Route path="/CM2/home" element={<HomeCentralised />} />
            <Route path="/CM3/home" element={<HomeCentralised />} /> */}

            {/* Asymmetrical */}
            <Route path="/AS1/home" element={<HomeAsymmetrical />} />
            <Route path="/AS2/home" element={<HomeAsymmetrical />} />
            <Route path="/AS3/home" element={<HomeAsymmetrical />} />

            {/* <Route path="/AM1/home" element={<HomeAsymmetrical />} />
            <Route path="/AM2/home" element={<HomeAsymmetrical />} />
            <Route path="/AM3/home" element={<HomeAsymmetrical />} />  */}

            {/* Results Page */}
            {/* Single Dropdown */}
            <Route path="/AS1/results-1" element={<ResultsPageSingle1Col />} />
            <Route path="/AS2/results-2" element={<ResultsPage2Column />} />
            <Route path="/AS3/results-3" element={<ResultsPage3Column />} />

            <Route path="/CS1/results-1" element={<ResultsPageSingle1Col />} />
            <Route path="/CS2/results-2" element={<ResultsPage2Column />} />
            <Route path="/CS3/results-3" element={<ResultsPage3Column />} />

            {/* Multi Filter */}
            {/* <Route path="/AM1/results-1" element={<ResultsPageSingle1Col />} />
            <Route path="/AM2/results-2" element={<ResultsPage2Column />} />
            <Route path="/AM3/results-3" element={<ResultsPage3Column />} />

            <Route path="/CM1/results-1" element={<ResultsPageSingle1Col />} />
            <Route path="/CM2/results-2" element={<ResultsPage2Column />} />
            <Route path="/CM3/results-3" element={<ResultsPage3Column />} /> */}
        </Routes>
    );
}

export default App;
