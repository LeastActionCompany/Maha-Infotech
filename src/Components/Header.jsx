import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import logo from "../assets/MahaInfo_logo.jpg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const location = useLocation()

  const navigation = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact Us', href: '/contact' },
  ]

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex justify-between items-center h-20"> {/* Increased height */}
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link to="/">
              <img
                className="h-16 w-auto transition-transform duration-300 hover:scale-105" // bigger logo + hover effect
                src={logo}
                alt="Company Logo"
              />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-10"> {/* more spacing between links */}
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`${
                  location.pathname === item.href
                    ? 'text-royal-blue-700 font-semibold border-b-2 border-royal-blue-700'
                    : 'text-gray-700 hover:text-royal-blue-700'
                } px-4 py-3 text-base font-medium transition-all duration-200`} // increased text size
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-3 rounded-md text-gray-700 hover:text-royal-blue-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-royal-blue-500 transition-all duration-200"
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-7 w-7" // slightly bigger icon
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16"/>
                </svg>
              ) : (
                <svg
                  className="block h-7 w-7"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-4 pt-4 pb-5 space-y-2 sm:px-6 bg-white shadow-xl rounded-b-lg">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`${
                    location.pathname === item.href
                      ? 'bg-royal-blue-100 text-royal-blue-700 font-semibold'
                      : 'text-gray-700 hover:bg-royal-blue-50 hover:text-royal-blue-700'
                  } block px-4 py-3 rounded-md text-base font-medium transition-all duration-200`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Header
