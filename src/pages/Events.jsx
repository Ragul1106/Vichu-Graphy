import { Camera, Video } from "lucide-react";
function MarriageEvents({ phone }) {
  const photography = [
    {
      id: 1,
      name: "Traditional Wedding Photography",
      price: "₹15,000",
      details: "Full day coverage + 300 edited photos",
      image: "twp",
    },
    {
      id: 2,
      name: "Candid Photography",
      price: "₹18,000",
      details: "Natural moments + 400 edited photos",
      image: "cwp",
    },
    {
      id: 3,
      name: "Pre-Wedding Shoot",
      price: "₹8,000",
      details: "Outdoor / studio + 100 photos",
      image: "pwp",
    },
    {
      id: 4,
      name: "Complete Photo Package",
      price: "₹35,000",
      details: "Traditional + Candid + Album",
      image: "cp",
    },
  ];

  const videography = [
    {
      id: 1,
      name: "Traditional Wedding Video",
      price: "₹20,000",
      details: "Full day coverage + edited video",
      image: "twv",
    },
    {
      id: 2,
      name: "Cinematic Wedding Film",
      price: "₹30,000",
      details: "Storytelling style + drone shots",
      image: "cwv",
    },
    {
      id: 3,
      name: "Highlight Video",
      price: "₹12,000",
      details: "3-5 min beautiful highlight reel",
      image: "hv",
    },
    {
      id: 4,
      name: "Complete Video Package",
      price: "₹45,000",
      details: "Traditional + Cinematic + Highlights",
      image: "comwv",
    },
  ];

  // Reusable WhatsApp booking function
  const getWhatsAppLink = (item) => {
    const message = `Hi, I want to book: ${item.name}
Price: ${item.price}
Details: ${item.details}`;

    return `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* ================= PAGE HEADER ================= */}
      <div className="text-center mb-14">
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Marriage <span className="text-sky-600">Events</span>
        </h1>

        <p className="text-gray-500 max-w-2xl mx-auto">
          Professional Photography & Cinematic Videography for your special day.
          Capture every beautiful moment of your marriage.
        </p>
      </div>

      {/* ================= PHOTOGRAPHY ================= */}
      <div className="mb-16">
        <h2 className="mb-7 flex items-center gap-3 text-2xl md:text-3xl font-bold text-gray-800">
          {" "}
          <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-100 to-pink-100 text-sky-600 shadow-sm">
            {" "}
            <Camera size={21} strokeWidth={2.2} />{" "}
          </span>{" "}
          <span>
            {" "}
            Photography <span className="text-pink-500">Packages</span>{" "}
          </span>{" "}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {photography.map((item, index) => (
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
              {/* Image */}
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
                  p-3
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

              {/* Details */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 text-base leading-snug min-h-[48px]">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mt-2 min-h-[40px]">
                  {item.details}
                </p>

                <p className="text-sky-600 font-bold text-lg mt-2">
                  {item.price}
                </p>

                {/* WhatsApp Button */}
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
                  <span>💬</span>
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ================= VIDEOGRAPHY ================= */}
      <div>
       <h2 className="mb-7 flex items-center gap-3 text-2xl md:text-3xl font-bold text-gray-800">
  <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-gradient-to-br from-sky-100 to-pink-100 text-pink-500 shadow-sm">
    <Video size={21} strokeWidth={2.2} />
  </span>

  <span>
    Videography <span className="text-pink-500">Packages</span>
  </span>
</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {videography.map((item, index) => (
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
              {/* Image */}
              <div
                className="
                  relative
                  w-full
                  h-56
                  sm:h-52
                  md:h-56
                  bg-gradient-to-br
                  from-pink-50
                  to-sky-50
                  flex
                  items-center
                  justify-center
                  p-3
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

              {/* Details */}
              <div className="p-5">
                <h3 className="font-semibold text-gray-800 text-base leading-snug min-h-[48px]">
                  {item.name}
                </h3>

                <p className="text-sm text-gray-500 mt-2 min-h-[40px]">
                  {item.details}
                </p>

                <p className="text-sky-600 font-bold text-lg mt-2">
                  {item.price}
                </p>

                {/* WhatsApp Button */}
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
                  <span>💬</span>
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MarriageEvents;
