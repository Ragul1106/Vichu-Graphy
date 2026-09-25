import { MessageCircle } from "lucide-react";

function Gifts({ phone }) {
  const products = [
    {
      id: 1,
      name: "Personalized Mug",
      price: "₹299",
      size: "Standard",
      image: "mug",
    },
    {
      id: 2,
      name: "Custom Keychain",
      price: "₹149",
      size: "Small",
      image: "key",
    },
    {
      id: 3,
      name: "Gift Hamper",
      price: "₹899",
      size: "Large",
      image: "gift",
    },
    {
      id: 4,
      name: "Photo Album",
      price: "₹499",
      size: "Medium",
      image: "album",
    },
    {
      id: 5,
      name: "LED Lamp",
      price: "₹699",
      size: "Desk Size",
      image: "ledlamp",
    },
    {
      id: 6,
      name: "Custom Cushion",
      price: "₹399",
      size: "16 × 16 inch",
      image: "cushion",
    },
  ];

  const getWhatsAppLink = (item) => {
    const message = `Hi, I want to order: ${item.name}
Price: ${item.price}
Size: ${item.size}`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <section className="max-w-6xl mx-auto px-4 py-12">

      {/* ================= HEADING ================= */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
          Gifts <span className="text-sky-600">Collection</span>
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Perfect gifts for birthdays, festivals & special moments
        </p>
      </div>

      {/* ================= PRODUCTS ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
        {products.map((item, index) => (
          <div
            key={item.id}
            className="
              bg-white
              rounded-2xl
              shadow-md
              overflow-hidden
              hover:shadow-xl
              hover:-translate-y-2
              transition-all
              duration-300
              animate-fade-in-up
            "
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            {/* ================= PRODUCT IMAGE ================= */}
            <div
              className="
                relative
                w-full
                h-64
                sm:h-60
                md:h-64
                bg-gradient-to-br
                from-sky-50
                to-pink-50
                flex
                items-center
                justify-center
                p-4
                overflow-hidden
              "
            >
              <img
                src={`/images/${item.image}.jpg`}
                alt={item.name}
                className="
                  w-full
                  h-full
                  object-contain
                  transition-transform
                  duration-500
                  hover:scale-105
                "
                onError={(e) => {
                  e.currentTarget.src = "/images/gift-placeholder.jpg";
                }}
              />
            </div>

            {/* ================= PRODUCT DETAILS ================= */}
            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-800 min-h-[28px]">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Size: {item.size}
              </p>

              <p className="text-sky-600 font-bold text-lg mt-2">
                {item.price}
              </p>

              {/* ================= WHATSAPP BUTTON ================= */}
              <a
                href={getWhatsAppLink(item)}
                target="_blank"
                rel="noopener noreferrer"
                className="
                  mt-4
                  w-full
                  bg-gradient-to-r
                  from-sky-500
                  to-pink-400
                  text-white
                  py-2.5
                  rounded-full
                  font-semibold
                  flex
                  items-center
                  justify-center
                  gap-2
                  hover:shadow-lg
                  hover:scale-[1.02]
                  transition-all
                  duration-300
                "
              >
                <MessageCircle size={19} />
                Order Now
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Gifts;

