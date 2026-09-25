import { MessageCircle } from "lucide-react";

function Invitations({ phone }) {
  const products = [
    {
      id: 1,
      name: "Wedding Invitation",
      size: "Custom Design",
      image: "wi",
      details: "Traditional & Modern designs",
    },
    {
      id: 2,
      name: "Ear Piercing Invitation",
      size: "Custom Design",
      image: "ear",
      details: "Kaan Valai / Ear boring cards",
    },
    {
      id: 3,
      name: "Puberty Invitation",
      size: "Custom Design",
      image: "puberty",
      details: "Manjal Neerattu Vizha cards",
    },
    {
      id: 4,
      name: "Birthday Invitation",
      size: "Custom Design",
      image: "birthday",
      details: "Kids & Adults birthday cards",
    },
    {
      id: 5,
      name: "House Warming Invitation",
      size: "Custom Design",
      image: "hw",
      details: "Grihapravesam invitation cards",
    },
    {
      id: 6,
      name: "Baby Shower Invitation",
      size: "Custom Design",
      image: "babyshower",
      details: "Seemantham / Valaikappu cards",
    },
    {
      id: 7,
      name: "Engagement Invitation",
      size: "Custom Design",
      image: "engagement",
      details: "Nichayathartham cards",
    },
  ];

  const getWhatsAppLink = (item) => {
    const message = `Hi, I'm interested in a ${item.name}.
Design: ${item.details}
Please share the available designs, current price and order details.`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">

      {/* ================= HEADER ================= */}
      <div className="text-center mb-12">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Beautiful{" "}
          <span className="text-pink-500">Invitations</span>
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Custom designed invitation cards for every special occasion.
          Wedding, Puberty, Ear Piercing, Birthday, House Warming & more.
        </p>
      </div>

      {/* ================= PRODUCTS GRID ================= */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
              animationDelay: `${index * 0.08}s`,
            }}
          >
            {/* ================= IMAGE ================= */}
            <div
              className="
                relative
                w-full
                h-56
                sm:h-52
                md:h-56
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
                  e.currentTarget.src = "/images/invitation-placeholder.jpg";
                }}
              />
            </div>

            {/* ================= DETAILS ================= */}
            <div className="p-5">
              <h3 className="font-semibold text-lg text-gray-800 leading-snug">
                {item.name}
              </h3>

              <p className="text-sm text-gray-500 mt-2">
                {item.details}
              </p>

              <p className="text-sm text-gray-400 mt-2">
                Custom size & design available
              </p>

              {/* ================= WHATSAPP ENQUIRY ================= */}
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
                  text-sm
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
          💬 Contact us for designs, customization, current price and
          availability.
        </p>
      </div>
    </div>
  );
}

export default Invitations;
