import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './Components/Header.jsx'
import Footer from './Components/Footer'
import Home from './Pages/Home'
import AboutUs from './Pages/AboutUs'
import ServicesPage from './Pages/ServicesPage'
import ContactUs from './Pages/ContactUs'
import MouseFollower from './components/Common/MouseFollower'
import ScrollToTop from './components/Common/ScrollToTop'

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
