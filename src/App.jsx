import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { SpeedInsights } from "@vercel/speed-insights/react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Pages/Home";
import ServicesPage from "./Pages/Services";
import ContactPage from "./Pages/Contact";
import PackagesPage from "./Pages/Packages";
import ScrollToTop from "./Pages/ScrollToTop";

function App() {
  return (
    <Router>
      
      <ScrollToTop />

      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />
      <SpeedInsights />
    </Router>
  );
}

export default App;
