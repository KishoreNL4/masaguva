import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/landingPage";
import MarketPage from "./components/marketPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/market" element={<MarketPage />} /> {/* Example route */}
      </Routes>
    </Router>
  );
}

export default App;
