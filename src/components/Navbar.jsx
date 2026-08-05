import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()
  const [isOpen, setIsOpen] = useState(false)

  const links = [
    { path: '/', label: 'Home' },
    { path: '/marriage-events', label: 'Events' },
    { path: '/gifts', label: 'Gifts' },
    { path: '/frames', label: 'Frames' },
    { path: '/invitation', label: 'Invitation' },
  ]

  const whatsappNumber = '919092223815'
  const message = encodeURIComponent('Hi, I want to book marriage photography / videography from Vichu Graphy')

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-sky-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold text-sky-700 tracking-wide hover:text-pink-500 transition"
            onClick={() => setIsOpen(false)}
          >
            📸 Vichu Graphy
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-6">
            {links.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`relative font-medium text-sm transition-all duration-300 hover:text-pink-500 ${
                  location.pathname === link.path 
                    ? 'text-sky-600 after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-pink-400' 
                    : 'text-gray-600'
                }`}
              >
                {link.label}
              </Link>
            ))}

            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-sky-500 to-pink-400 text-white px-5 py-2 rounded-full font-semibold 
                         shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 flex items-center gap-2 text-sm"
            >
              💬 WhatsApp
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 rounded-lg hover:bg-sky-50 transition"
          >
            <span className={`bg-sky-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? 'rotate-45 translate-y-1' : '-translate-y-0.5'}`}></span>
            <span className={`bg-sky-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm my-0.5 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`bg-sky-700 block transition-all duration-300 ease-out h-0.5 w-6 rounded-sm ${isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="px-4 pb-4 pt-2 space-y-1 bg-white border-t border-sky-50">
          {links.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-xl font-medium transition ${
                location.pathname === link.path
                  ? 'bg-sky-50 text-sky-600'
                  : 'text-gray-600 hover:bg-pink-50 hover:text-pink-500'
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile WhatsApp Button */}
          <a
            href={`https://wa.me/${whatsappNumber}?text=${message}`}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setIsOpen(false)}
            className="flex items-center justify-center gap-2 mt-3 bg-gradient-to-r from-sky-500 to-pink-400 text-white px-5 py-3 rounded-full font-semibold shadow-md"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar