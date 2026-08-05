import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import MarriageEvents from './pages/MarriageEvents'
import Gifts from './pages/Gifts'
import Frames from './pages/Frames'
import Medals from './pages/Medals'

function App() {
  const whatsappNumber = '919092223815'
  const message = encodeURIComponent('Hi, I want to book from Vichu Graphy')

  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-pink-50">
        <Navbar />

        <Routes>
          <Route path="/" element={<Home phone={whatsappNumber} />} />
          <Route path="/marriage-events" element={<MarriageEvents phone={whatsappNumber} />} />
          <Route path="/gifts" element={<Gifts phone={whatsappNumber} />} />
          <Route path="/frames" element={<Frames phone={whatsappNumber} />} />
          <Route path="/medals" element={<Medals phone={whatsappNumber} />} />
        </Routes>

        {/* Floating WhatsApp Button */}
        <a
          href={`https://wa.me/${whatsappNumber}?text=${message}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 bg-gradient-to-r from-sky-500 to-pink-400 text-white 
                     w-14 h-14 rounded-full flex items-center justify-center text-2xl 
                     shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 z-50 animate-float"
        >
          💬
        </a>

        <footer className="bg-white border-t border-sky-100 text-center py-8 mt-16">
          <p className="text-gray-500 mb-2">© 2025 Vichu Graphy</p>
          <a 
            href={`https://wa.me/${whatsappNumber}`} 
            target="_blank"
            rel="noopener noreferrer"
            className="text-sky-600 font-bold text-lg hover:text-pink-500 transition"
          >
            💬 WhatsApp Us
          </a>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App