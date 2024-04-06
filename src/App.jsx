import { Routes, Route } from "react-router-dom";
import HelloWorld from "./Components/HelloWorld";
import Home1 from "./Components/Pages/Home1";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home1 />} />
            <Route path="/results-1" element={<HelloWorld />} />
        </Routes>
    );
}

export default App;
