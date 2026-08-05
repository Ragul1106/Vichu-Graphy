function Invitations({ phone }) {
  const products = [
    {
      id: 1,
      name: "Wedding Invitation",
      price: "₹15 onwards",
      size: "Custom Design",
      emoji: "💍",
      details: "Traditional & Modern designs",
    },
    {
      id: 2,
      name: "Ear Piercing Invitation",
      price: "₹12 onwards",
      size: "Custom Design",
      emoji: "👂",
      details: "Kaan Valai / Ear boring cards",
    },
    {
      id: 3,
      name: "Puberty Invitation",
      price: "₹12 onwards",
      size: "Custom Design",
      emoji: "🌸",
      details: "Manjal Neerattu Vizha cards",
    },
    {
      id: 4,
      name: "Birthday Invitation",
      price: "₹10 onwards",
      size: "Custom Design",
      emoji: "🎂",
      details: "Kids & Adults birthday cards",
    },
    {
      id: 5,
      name: "House Warming Invitation",
      price: "₹12 onwards",
      size: "Custom Design",
      emoji: "🏠",
      details: "Grihapravesam invitation cards",
    },
    {
      id: 6,
      name: "Baby Shower Invitation",
      price: "₹12 onwards",
      size: "Custom Design",
      emoji: "👶",
      details: "Seemantham / Valaikappu cards",
    },
    {
      id: 7,
      name: "Engagement Invitation",
      price: "₹15 onwards",
      size: "Custom Design",
      emoji: "💖",
      details: "Nichayathartham cards",
    },
    
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Beautiful <span className="text-pink-500">Invitations</span>
        </h1>
        <p className="text-gray-500 max-w-2xl mx-auto">
          Custom designed invitation cards for every special occasion.  
          Wedding, Puberty, Ear Piercing, Birthday, House Warming & more.
        </p>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item, index) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl 
                       hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.08}s` }}
          >
            {/* Image / Emoji area */}
            <div className="h-40 bg-gradient-to-br from-sky-50 to-pink-50 flex items-center justify-center text-5xl 
                            hover:scale-105 transition-transform duration-500">
              {item.emoji}
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-1">{item.details}</p>
              <p className="text-sky-600 font-bold text-lg mt-2">{item.price}</p>

              {/* WhatsApp Order Button */}
              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent(
                  "Hi, I want invitation card for: " + item.name
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full bg-gradient-to-r from-sky-500 to-pink-400 text-white py-2.5 rounded-full 
                           font-semibold flex items-center justify-center gap-2 text-sm
                           hover:shadow-lg hover:scale-[1.02] transition-all duration-300"
              >
                💬 Order Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Invitations;