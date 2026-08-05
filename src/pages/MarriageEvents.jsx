function MarriageEvents({ phone }) {
  const photography = [
    { id: 1, name: 'Traditional Wedding Photography', price: '₹15,000', details: 'Full day coverage + 300 edited photos', emoji: '📷' },
    { id: 2, name: 'Candid Photography', price: '₹18,000', details: 'Natural moments + 400 edited photos', emoji: '✨' },
    { id: 3, name: 'Pre-Wedding Shoot', price: '₹8,000', details: 'Outdoor / studio + 100 photos', emoji: '💑' },
    { id: 4, name: 'Complete Photo Package', price: '₹35,000', details: 'Traditional + Candid + Album', emoji: '📸' },
  ]

  const videography = [
    { id: 1, name: 'Traditional Wedding Video', price: '₹20,000', details: 'Full day coverage + edited video', emoji: '🎥' },
    { id: 2, name: 'Cinematic Wedding Film', price: '₹30,000', details: 'Storytelling style + drone shots', emoji: '🎬' },
    { id: 3, name: 'Highlight Video', price: '₹12,000', details: '3-5 min beautiful highlight reel', emoji: '✨' },
    { id: 4, name: 'Complete Video Package', price: '₹45,000', details: 'Traditional + Cinematic + Highlights', emoji: '📹' },
  ]

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* Page Header */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Marriage <span className="text-sky-600">Events</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Professional Photography & Cinematic Videography for your special day.  
          Capture every beautiful moment of your marriage.
        </p>
      </div>

      {/* ================= PHOTOGRAPHY SECTION ================= */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          📷 Photography Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photography.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl 
                         hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-36 bg-gradient-to-br from-sky-50 to-pink-50 flex items-center justify-center text-4xl">
                {item.emoji}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.details}</p>
                <p className="text-sky-600 font-bold text-lg mt-2">{item.price}</p>

                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent('Hi, I want to book: ' + item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-gradient-to-r from-sky-500 to-pink-400 text-white py-2 rounded-full 
                             font-semibold flex items-center justify-center gap-2 text-sm
                             hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  💬 Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= VIDEOGRAPHY SECTION ================= */}
      <div>
        <h2 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
          🎥 Videography Packages
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videography.map((item, index) => (
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl 
                         hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="h-36 bg-gradient-to-br from-pink-50 to-sky-50 flex items-center justify-center text-4xl">
                {item.emoji}
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-sm text-gray-500 mt-1">{item.details}</p>
                <p className="text-sky-600 font-bold text-lg mt-2">{item.price}</p>

                <a
                  href={`https://wa.me/${phone}?text=${encodeURIComponent('Hi, I want to book: ' + item.name)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 w-full bg-gradient-to-r from-sky-500 to-pink-400 text-white py-2 rounded-full 
                             font-semibold flex items-center justify-center gap-2 text-sm
                             hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
                >
                  💬 Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  )
}

export default MarriageEvents