import { Link } from "react-router-dom";
import { ArrowRight, MessageCircle, Sparkles } from "lucide-react";
function Home({ phone }) {
  const whatsappMessage = encodeURIComponent(
    "Hi, I want to enquire about Vichu Graphy services.",
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
    <div className="relative">
      {" "}
      {/* ================================================== HERO SECTION ================================================== */}{" "}
      <section className="relative overflow-hidden px-4 pt-20 pb-24 md:pt-28 md:pb-32 text-center">
        {" "}
        {/* Decorative glow */}{" "}
        <div className="absolute top-10 left-1/2 -translate-x-1/2 w-72 h-72 md:w-96 md:h-96 bg-sky-200/20 blur-[100px] rounded-full pointer-events-none" />{" "}
        {/* Small decorative sparkle */}{" "}
        <div className="absolute top-16 left-[12%] text-sky-300 animate-soft-bounce hidden md:block">
          {" "}
          <Sparkles size={22} />{" "}
        </div>{" "}
        <div className="absolute top-28 right-[12%] text-pink-300 animate-soft-bounce hidden md:block">
          {" "}
          <Sparkles size={18} />{" "}
        </div>{" "}
        {/* Hero content */}{" "}
        <div className="relative z-10 max-w-4xl mx-auto">
          
          <h1 className=" text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-gray-800 animate-fade-in-up ">
            {" "}
            Capture Your{" "}
            <span className="text-sky-600"> Beautiful Marriage </span>{" "}
            Moments{" "}
          </h1>{" "}
          <p className=" mt-6 text-base sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto text-gray-600 animate-fade-in-up delay-100 ">
            {" "}
            Professional Photography & Cinematic Videography for Weddings.{" "}
            <br className="hidden sm:block" /> Also offering Gifts & Photo
            Frames.{" "}
          </p>{" "}
          {/* Buttons */}{" "}
          <div className=" flex flex-wrap justify-center gap-3 sm:gap-4 mt-9 animate-fade-in-up delay-200 ">
            {" "}
            {/* Events */}{" "}
            <Link
              to="/events"
              className=" group inline-flex items-center gap-2 bg-sky-500 text-white px-6 sm:px-7 py-3 rounded-full font-semibold shadow-lg shadow-sky-200 hover:bg-sky-600 hover:scale-105 hover:shadow-xl transition-all duration-300 "
            >
              {" "}
              Events{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />{" "}
            </Link>{" "}
            {/* Photo Frames */}{" "}
            <Link
              to="/frames"
              className=" group inline-flex items-center gap-2 bg-pink-400 text-white px-6 sm:px-7 py-3 rounded-full font-semibold shadow-lg shadow-pink-200 hover:bg-pink-500 hover:scale-105 hover:shadow-xl transition-all duration-300 "
            >
              {" "}
              Photo Frames{" "}
              <ArrowRight
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />{" "}
            </Link>{" "}
            {/* WhatsApp */}{" "}
            <a
              href={`https://wa.me/${phone}?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className=" inline-flex items-center gap-2 bg-white/80 backdrop-blur-md text-sky-600 border-2 border-sky-300 px-6 sm:px-7 py-3 rounded-full font-semibold shadow-md hover:bg-sky-50 hover:border-sky-400 hover:scale-105 hover:shadow-lg transition-all duration-300 "
            >
              {" "}
              <MessageCircle size={19} /> WhatsApp Us{" "}
            </a>{" "}
          </div>{" "}
        </div>{" "}
      </section>{" "}
      {/* ================================================== SERVICES SECTION ================================================== */}{" "}
      <section className="relative max-w-6xl mx-auto px-4 pb-20 md:pb-28">
        {" "}
        {/* Section heading */}{" "}
        <div className="text-center mb-10 md:mb-14 animate-fade-in-up">
          {" "}
          <p className="text-sm font-semibold tracking-[0.2em] uppercase text-sky-500 mb-2">
            {" "}
            What We Offer{" "}
          </p>{" "}
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800">
            {" "}
            Our <span className="text-pink-500"> Services </span>{" "}
          </h2>{" "}
          <p className="mt-3 max-w-xl mx-auto text-gray-500 text-sm md:text-base">
            {" "}
            From capturing unforgettable moments to creating beautiful memories,
            explore our services.{" "}
          </p>{" "}
        </div>{" "}
        {/* Service Cards */}{" "}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 md:gap-8">
          {" "}
          {services.map((service) => (
            <Link
              key={service.id}
              to={service.path}
              className={` group bg-white/90 backdrop-blur-sm rounded-3xl shadow-lg shadow-gray-200/50 overflow-hidden border border-white hover:shadow-2xl hover:-translate-y-3 transition-all duration-500 animate-fade-in-up ${service.animation} `}
            >
              {" "}
              {/* ========================================== IMAGE ========================================== */}{" "}
              <div className=" relative h-60 sm:h-64 md:h-64 lg:h-68 bg-gradient-to-br from-sky-50 to-pink-50 overflow-hidden ">
                {" "}
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className=" w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110 "
                  onError={(e) => {
                    e.currentTarget.src = "/images/placeholder.jpg";
                  }}
                />{" "}
                {/* Image gradient overlay */}{" "}
                <div className=" absolute inset-0 bg-gradient-to-t from-black/35 via-transparent to-transparent opacity-70 group-hover:opacity-40 transition-opacity duration-500 " />{" "}
                {/* Floating category badge */}{" "}
                <div className=" absolute top-4 left-4 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md text-xs font-semibold text-gray-700 shadow-md group-hover:scale-105 transition-transform duration-300 ">
                  {" "}
                  {service.title}{" "}
                </div>{" "}
                {/* Bottom arrow */}{" "}
                <div className=" absolute bottom-4 right-4 w-10 h-10 rounded-full bg-white/90 backdrop-blur-md flex items-center justify-center text-sky-600 shadow-lg opacity-0 translate-y-3 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-400 ">
                  {" "}
                  <ArrowRight
                    size={19}
                    className="group-hover:translate-x-0.5 transition-transform"
                  />{" "}
                </div>{" "}
              </div>{" "}
              {/* ========================================== CARD CONTENT ========================================== */}{" "}
              <div className="p-5 md:p-6 text-center">
                {" "}
                <h3
                  className={` text-xl font-bold mb-2 text-gray-800 transition-colors duration-300 ${service.hoverColor} `}
                >
                  {" "}
                  {service.title}{" "}
                </h3>{" "}
                <p className="text-gray-500 text-sm leading-relaxed">
                  {" "}
                  {service.description}{" "}
                </p>{" "}
                <div className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-sky-600 group-hover:text-pink-500 transition-colors duration-300">
                  {" "}
                  Explore{" "}
                  <ArrowRight
                    size={16}
                    className="group-hover:translate-x-1 transition-transform duration-300"
                  />{" "}
                </div>{" "}
              </div>{" "}
            </Link>
          ))}{" "}
        </div>{" "}
      </section>{" "}
    </div>
  );
}
export default Home;
