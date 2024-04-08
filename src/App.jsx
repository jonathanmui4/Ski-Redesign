import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect } from "react";
import HomeCentralised from "./components/Pages/HomePage/HomePage.jsx";
import HomeAsymmetrical from "./components/Pages/HomePage2/AsymmetricalHomePage.jsx";
import ResultsPageSingle1Col from "./components/Pages/ResultsSingleFilter/ResultsPageSingle1Col.jsx";
import ResultsPage2Column from "./components/Pages/ResultsSingleFilter/ResultsPage2Column.jsx";
import ResultsPage3Column from "./components/Pages/ResultsSingleFilter/ResultsPage3Column.jsx";
import ErrorPage from "./components/Pages/ErrorPage.jsx";
import CompletionPage from "./Components/Pages/CompletionPage.jsx";

function App() {
    const location = useLocation(); // This hook gives you the current location

    useEffect(() => {
        // This effect will run once on initial render
        const startTime = Date.now();
        sessionStorage.setItem('startTime', startTime);
        console.log('Page loading started at:', startTime);

        // Optional: Track page changes
        return () => {
            const endTime = Date.now();
            const duration = endTime - startTime;
            console.log(`User spent ${duration} ms before navigating away or reloading.`);
            // Here you could also send this data to an analytics endpoint
        };
    }, []); // Empty dependency array means this effect runs once on mount

    useEffect(() => {
        // This effect runs every time the location changes
        console.log(`Navigated to ${location.pathname}`);
    }, [location]); // Dependency on location means this effect runs on location change

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

            <Route path="/completionpage" element={<CompletionPage />} />
        </Routes>
    );
}

export default App;
