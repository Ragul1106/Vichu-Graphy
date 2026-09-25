import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MessageCircle } from "lucide-react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MarriageEvents from "./pages/Events";
import Gifts from "./pages/Gifts";
import Frames from "./pages/Frames";
import Invitations from "./pages/Invitations";
function App() {
  const whatsappNumber = "919092223815";
  const whatsappMessage = encodeURIComponent(
    "Hi, I want to book from Vichu Graphy",
  );
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;
  return (
    <BrowserRouter>
      {" "}
      <div className="min-h-screen bg-gradient-to-b from-white via-sky-50 to-pink-50">
        {" "}
        {/* Navbar */} <Navbar /> {/* Pages */}{" "}
        <Routes>
          {" "}
          <Route path="/" element={<Home phone={whatsappNumber} />} />{" "}
          <Route
            path="/events"
            element={<MarriageEvents phone={whatsappNumber} />}
          />{" "}
          <Route path="/gifts" element={<Gifts phone={whatsappNumber} />} />{" "}
          <Route path="/frames" element={<Frames phone={whatsappNumber} />} />{" "}
          <Route
            path="/invitation"
            element={<Invitations phone={whatsappNumber} />}
          />{" "}
        </Routes>{" "}
        {/* Floating WhatsApp Button */}{" "}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Vichu Graphy on WhatsApp"
          className=" fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-r from-sky-500 to-pink-400 text-white shadow-xl hover:scale-110 hover:shadow-2xl transition-all duration-300 animate-float "
        >
          {" "}
          <MessageCircle size={27} strokeWidth={2.2} />{" "}
        </a>{" "}
        {/* Footer */}{" "}
        <footer className="bg-white border-t border-sky-100 text-center py-8 mt-16">
          {" "}
          <p className="text-gray-500 text-sm md:text-base mb-3">
            {" "}
            © 2026 Vichu Graphy. All rights reserved.{" "}
          </p>{" "}
          <a
            href={`https://wa.me/${whatsappNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact Vichu Graphy on WhatsApp"
            className=" inline-flex items-center justify-center gap-2 text-sky-600 font-bold text-lg hover:text-pink-500 hover:scale-105 transition-all duration-300 "
          >
            {" "}
            <MessageCircle size={22} strokeWidth={2.2} /> WhatsApp Us{" "}
          </a>{" "}
          <p className="text-gray-400 text-xs mt-4">
            {" "}
            Photography • Frames • Gifts • Invitations • Events{" "}
          </p>{" "}
        </footer>{" "}
      </div>{" "}
    </BrowserRouter>
  );
}
export default App;
