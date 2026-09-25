import { MessageCircle } from "lucide-react";

function Frames({ phone }) {
  const products = [
    {
      id: 1,
      name: "Wooden Photo Frame",
      size: "8x10 inch",
      image: "wood",
    },
    {
      id: 2,
      name: "Acrylic Frame",
      size: "6x8 inch",
      image: "acrylic",
    },
    {
      id: 3,
      name: "Collage Frame (6 photos)",
      size: "12x16 inch",
      image: "collage",
    },
    // {
    //   id: 4,
    //   name: "Metal Frame",
    //   size: "A4 size",
    //   image: "metalframe",
    // },
    {
      id: 5,
      name: "LED Photo Frame",
      size: "10x12 inch",
      image: "led",
    },
    {
      id: 6,
      name: "Custom Name Frame",
      size: "Custom size",
      image: "customname",
    },
  ];

  const getWhatsAppLink = (item) => {
    const message = `Hi, I'm interested in the ${item.name} (${item.size}).
Please share the current price and order details.`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* ================= HEADING ================= */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Photo <span className="text-pink-500">Frames</span>
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Choose your favourite frame and contact us for the current price,
          customization options & order details.
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
            {/* ================= IMAGE ================= */}
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
                  e.currentTarget.src = "/images/placeholder.jpg";
                }}
              />
            </div>

            {/* ================= DETAILS ================= */}
            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-800">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500 mt-1">
                Size: {item.size}
              </p>

              <p className="text-sm text-gray-400 mt-2">
                Contact us for price & customization
              </p>

              {/* ================= WHATSAPP ================= */}
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
                Enquire Now
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* ================= BOTTOM NOTE ================= */}
      <div className="text-center mt-12">
        <p className="text-sm text-gray-500">
          💬 Prices may vary based on size, design and customization.
          Contact us for the latest price and availability.
        </p>
      </div>
    </div>
  );
}

export default Frames;

