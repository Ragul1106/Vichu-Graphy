import { Link } from "react-router-dom";
function Home({ phone }) {
  const whatsappMessage = encodeURIComponent(
    "Hi, I want to book from Vichu Graphy",
  );
  const services = [
    {
      id: 1,
      title: "Events",
      description: "Photography & Videography",
      image: "/images/marriageHome.jpg",
      path: "/events",
      hoverColor: "group-hover:text-sky-600",
      animation: "delay-100",
    },
    {
      id: 2,
      title: "Gifts",
      description: "Thoughtful gifts for every occasion",
      image: "/images/gifthome.jpg",
      path: "/gifts",
      hoverColor: "group-hover:text-pink-500",
      animation: "delay-200",
    },
    {
      id: 3,
      title: "Photo Frames",
      description: "Preserve your precious memories",
      image: "/images/photoframes.jpg",
      path: "/frames",
      hoverColor: "group-hover:text-sky-600",
      animation: "delay-300",
    },
  ];
  return (
    <div>
      {" "}
      {/* ================= HERO SECTION ================= */}{" "}
      <section className="relative overflow-hidden py-20 px-4 text-center">
        {" "}
        {/* Background */}{" "}
        <div className="absolute inset-0 bg-gradient-to-br from-sky-100 via-pink-50 to-white -z-10" />{" "}
        {/* Heading */}{" "}
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-800 animate-fade-in-up">
          {" "}
          Capture Your <span className="text-sky-600">
            Beautiful Marriage
          </span>{" "}
          Moments{" "}
        </h1>{" "}
        {/* Description */}{" "}
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-gray-600 animate-fade-in-up delay-100">
          {" "}
          Professional Photography & Cinematic Videography for Weddings. <br />{" "}
          Also offering Gifts & Photo Frames.{" "}
        </p>{" "}
        {/* Buttons */}{" "}
        <div className="flex flex-wrap justify-center gap-4 animate-fade-in-up delay-200">
          {" "}
          {/* Events */}{" "}
          <Link
            to="/events"
            className=" bg-sky-500 text-white px-7 py-3 rounded-full font-semibold shadow-md hover:bg-sky-600 hover:scale-105 transition-all duration-300 "
          >
            {" "}
            Events{" "}
          </Link>{" "}
          {/* Photo Frames */}{" "}
          <Link
            to="/frames"
            className=" bg-pink-400 text-white px-7 py-3 rounded-full font-semibold shadow-md hover:bg-pink-500 hover:scale-105 transition-all duration-300 "
          >
            {" "}
            Photo Frames{" "}
          </Link>{" "}
          {/* WhatsApp */}{" "}
          <a
            href={`https://wa.me/${phone}?text=${whatsappMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className=" bg-white text-sky-600 border-2 border-sky-400 px-7 py-3 rounded-full font-semibold hover:bg-sky-50 hover:scale-105 transition-all duration-300 "
          >
            {" "}
            WhatsApp Us{" "}
          </a>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================= SERVICES SECTION ================= */}{" "}
      <section className="max-w-6xl mx-auto px-4 py-16">
        {" "}
        {/* Section Heading */}{" "}
        <h2 className="text-3xl font-bold text-center mb-12 text-gray-800">
          {" "}
          Our <span className="text-pink-500">Services</span>{" "}
        </h2>{" "}
        {/* Service Cards */}{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {" "}
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className={` group bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl hover:-translate-y-2 transition-all duration-300 animate-fade-in-up ${service.animation} `}
            >
              {" "}
              {/* Image */}{" "}
              <div className=" h-52 bg-gradient-to-br from-sky-50 to-pink-50 flex items-center justify-center overflow-hidden ">
                {" "}
                <img
                  src={service.image}
                  alt={service.title}
                  className=" w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 "
                />{" "}
              </div>{" "}
              {/* Content */}{" "}
              <div className="p-5 text-center">
                {" "}
                <h3
                  className={` text-lg font-bold mb-1 text-gray-800 transition ${service.hoverColor} `}
                >
                  {" "}
                  {service.title}{" "}
                </h3>{" "}
                <p className="text-gray-500 text-sm">
                  {" "}
                  {service.description}{" "}
                </p>{" "}
              </div>{" "}
            </Link>
          ))}{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
}
export default Home;
