import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ServicesPage from './pages/ServicesPage'
import ContactUs from './pages/ContactUs';
import MouseFollower from './Components/Common/MouseFollower';
import ScrollToTop from "./Components/Common/ScrollToTop"

function App() {
  return (
    <Router>
      <div className="App">
        <MouseFollower />
        <Header />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App