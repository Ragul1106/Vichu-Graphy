import { Link } from 'react-router-dom'

function Home({ phone }) {
  const whatsappMessage = encodeURIComponent('Hi, I want to book from Vichu Graphy')

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 text-center">
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-pink-50 to-white -z-10"></div>
        
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 animate-fade-in-up">
          Capture Your <span className="text-sky-600">Beautiful Marriage</span> Moments
        </h1>
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-600 animate-fade-in-up delay-100">
          Professional Photography & Cinematic Videography for Weddings.  
          Also offering Gifts, Photo Frames & Vazhthu Medals.
        </p>

        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-200">
          <Link 
            to="/marriage-events" 
            className="bg-sky-500 text-white px-7 py-3 rounded-full font-semibold 
                       shadow-md hover:bg-sky-600 hover:scale-105 transition-all duration-300"
          >
            Marriage Events
          </Link>
          
          <Link 
            to="/frames" 
            className="bg-pink-400 text-white px-7 py-3 rounded-full font-semibold 
                       shadow-md hover:bg-pink-500 hover:scale-105 transition-all duration-300"
          >
            Photo Frames
          </Link>

          <a
            href={`https://wa.me/${phone}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-white text-sky-600 border-2 border-sky-400 px-7 py-3 rounded-full font-semibold 
                       hover:bg-sky-50 hover:scale-105 transition-all duration-300"
          >
            💬 WhatsApp Us
          </a>
        </div>
      </section>

      {/* Categories */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          Our <span className="text-pink-500">Services</span>
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {/* Marriage Events Card */}
          <Link 
            to="/marriage-events" 
            className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl 
                       hover:-translate-y-2 transition-all duration-300 animate-fade-in-up delay-100"
          >
            <div className="h-44 bg-gradient-to-br from-sky-100 to-pink-100 flex items-center justify-center text-5xl 
                            group-hover:scale-110 transition-transform duration-500">
              📸
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold mb-1 text-gray-800 group-hover:text-sky-600 transition">
                Marriage Events
              </h3>
              <p className="text-gray-500 text-sm">Photography & Videography</p>
            </div>
          </Link>

          {/* Gifts Card */}
          <Link 
            to="/gifts" 
            className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl 
                       hover:-translate-y-2 transition-all duration-300 animate-fade-in-up delay-200"
          >
            <div className="h-44 bg-gradient-to-br from-pink-100 to-sky-100 flex items-center justify-center text-5xl 
                            group-hover:scale-110 transition-transform duration-500">
              🎁
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold mb-1 text-gray-800 group-hover:text-pink-500 transition">
                Gifts
              </h3>
              <p className="text-gray-500 text-sm">Thoughtful gifts for every occasion</p>
            </div>
          </Link>

          {/* Frames Card */}
          <Link 
            to="/frames" 
            className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl 
                       hover:-translate-y-2 transition-all duration-300 animate-fade-in-up delay-300"
          >
            <div className="h-44 bg-gradient-to-br from-sky-50 to-pink-50 flex items-center justify-center text-5xl 
                            group-hover:scale-110 transition-transform duration-500">
              🖼️
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold mb-1 text-gray-800 group-hover:text-sky-600 transition">
                Photo Frames
              </h3>
              <p className="text-gray-500 text-sm">Preserve your precious memories</p>
            </div>
          </Link>

          {/* Medals Card */}
          <Link 
            to="/medals" 
            className="group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl 
                       hover:-translate-y-2 transition-all duration-300 animate-fade-in-up delay-400"
          >
            <div className="h-44 bg-gradient-to-br from-pink-50 to-sky-50 flex items-center justify-center text-5xl 
                            group-hover:scale-110 transition-transform duration-500">
              🏅
            </div>
            <div className="p-5 text-center">
              <h3 className="text-lg font-bold mb-1 text-gray-800 group-hover:text-pink-500 transition">
                Vazhthu Medals
              </h3>
              <p className="text-gray-500 text-sm">Congratulations medals & awards</p>
            </div>
          </Link>

        </div>
      </section>
    </div>
  )
}

export default Home