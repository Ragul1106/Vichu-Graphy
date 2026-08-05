import { Link, useLocation } from 'react-router-dom'

function Navbar() {
  const location = useLocation()

  const links = [
    { path: '/', label: 'Home' },
    { path: '/marriage-events', label: 'Marriage Events' },
    { path: '/gifts', label: 'Gifts' },
    { path: '/frames', label: 'Frames' },
    { path: '/medals', label: 'Medals' },
  ]

  const whatsappNumber = '919092223815'
  const message = encodeURIComponent('Hi, I want to book marriage photography / videography from Vichu Graphy')

  return (
    <nav className="bg-white/90 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-sky-100">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          
          {/* Logo */}
          <Link to="/" className="text-xl font-bold text-sky-700 tracking-wide hover:text-pink-500 transition">
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

            {/* WhatsApp Button */}
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

          {/* Mobile WhatsApp Button */}
          <div className="md:hidden">
            <a
              href={`https://wa.me/${whatsappNumber}?text=${message}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gradient-to-r from-sky-500 to-pink-400 text-white px-4 py-1.5 rounded-full text-sm font-semibold shadow"
            >
              💬 Chat
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar