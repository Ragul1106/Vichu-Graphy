function Gifts({ phone }) {
  const products = [
    {
      id: 1,
      name: "Personalized Mug",
      price: "₹299",
      size: "Standard",
      emoji: "☕",
    },
    {
      id: 2,
      name: "Custom Keychain",
      price: "₹149",
      size: "Small",
      emoji: "🔑",
    },
    { id: 3, name: "Gift Hamper", price: "₹899", size: "Large", emoji: "🎀" },
    { id: 4, name: "Photo Album", price: "₹499", size: "Medium", emoji: "📖" },
    { id: 5, name: "LED Lamp", price: "₹699", size: "Desk size", emoji: "💡" },
    {
      id: 6,
      name: "Custom Cushion",
      price: "₹399",
      size: "16x16 inch",
      emoji: "🛋️",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Gifts <span className="text-sky-600">Collection</span>
        </h1>
        <p className="text-gray-500">
          Perfect gifts for birthdays, festivals & special moments
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.map((item, index) => (
          <div
            key={item.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl 
                       hover:-translate-y-2 transition-all duration-300 animate-fade-in-up"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Image area */}
            <div
              className="h-44 bg-gradient-to-br from-sky-50 to-pink-50 flex items-center justify-center text-5xl 
                            hover:scale-105 transition-transform duration-500"
            >
              {item.emoji}
            </div>

            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-800">
                {item.name}
              </h3>
              <p className="text-sm text-gray-500 mt-1">Size: {item.size}</p>
              <p className="text-sky-600 font-bold text-lg mt-2">
                {item.price}
              </p>

              {/* Call button */}
              <a
                href={`https://wa.me/${phone}?text=${encodeURIComponent("Hi, I want to order: " + item.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 w-full bg-gradient-to-r from-sky-500 to-pink-400 text-white py-2.5 rounded-full 
             font-semibold flex items-center justify-center gap-2 
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

export default Gifts;
