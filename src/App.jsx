
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './Components/Header'; 
import Footer from './Components/Footer'; 
import Home from "./Pages/Home"
import ServicesPage from "./Pages/Services"
import ContactPage from "./Pages/Contact"
import PackagesPage from "./Pages/Packages"

function App() {
  return (
    <Router>
      <div>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/packages" element={<PackagesPage />} />
          <Route path="/contact" element={<ContactPage />} /> 
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;