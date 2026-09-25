import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { MessageCircle, Sparkles } from "lucide-react";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MarriageEvents from "./pages/Events";
import Gifts from "./pages/Gifts";
import Frames from "./pages/Frames";
import Invitations from "./pages/Invitations";

/* ---------------------------------------------
   Animated Page Wrapper
--------------------------------------------- */
function AnimatedRoutes({ whatsappNumber }) {
  const location = useLocation();

  return (
    <div key={location.pathname} className="animate-page-enter">
      <Routes>
        <Route path="/" element={<Home phone={whatsappNumber} />} />

        <Route
          path="/events"
          element={<MarriageEvents phone={whatsappNumber} />}
        />

        <Route
          path="/gifts"
          element={<Gifts phone={whatsappNumber} />}
        />

        <Route
          path="/frames"
          element={<Frames phone={whatsappNumber} />}
        />

        <Route
          path="/invitation"
          element={<Invitations phone={whatsappNumber} />}
        />
      </Routes>
    </div>
  );
}

function App() {
  const whatsappNumber = "919092223815";

  const whatsappMessage = encodeURIComponent(
    "Hi, I want to enquire about your photography, frames, gifts, invitations and events."
  );

  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`;

  return (
    <BrowserRouter>
      <div className="relative min-h-screen overflow-hidden">

        {/* ==================================================
            ANIMATED GLOBAL BACKGROUND
        ================================================== */}
        <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">

          {/* Base gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-white via-sky-50 to-pink-50" />

          {/* -----------------------------------------------
              LARGE BLUE GLOW
          ------------------------------------------------ */}
          <div
            className="
              absolute
              -top-40
              -left-40
              w-[500px]
              h-[500px]
              rounded-full
              bg-sky-300/30
              blur-[100px]
              animate-floating-slow
            "
          />

          {/* -----------------------------------------------
              LARGE PINK GLOW
          ------------------------------------------------ */}
          <div
            className="
              absolute
              top-[20%]
              -right-40
              w-[500px]
              h-[500px]
              rounded-full
              bg-pink-300/25
              blur-[110px]
              animate-floating-reverse
            "
          />

          {/* -----------------------------------------------
              CENTER GLOW
          ------------------------------------------------ */}
          <div
            className="
              absolute
              top-[45%]
              left-[35%]
              w-[400px]
              h-[400px]
              rounded-full
              bg-sky-200/25
              blur-[100px]
              animate-pulse-soft
            "
          />

          {/* -----------------------------------------------
              BOTTOM PINK GLOW
          ------------------------------------------------ */}
          <div
            className="
              absolute
              -bottom-48
              right-[20%]
              w-[500px]
              h-[500px]
              rounded-full
              bg-pink-200/25
              blur-[110px]
              animate-floating-slow
            "
          />

          {/* ==================================================
              FLOATING PARTICLES
          ================================================== */}

          <span className="particle particle-1" />
          <span className="particle particle-2" />
          <span className="particle particle-3" />
          <span className="particle particle-4" />
          <span className="particle particle-5" />
          <span className="particle particle-6" />
          <span className="particle particle-7" />
          <span className="particle particle-8" />
          <span className="particle particle-9" />
          <span className="particle particle-10" />
          <span className="particle particle-11" />
          <span className="particle particle-12" />

          {/* Pink glowing particles */}
          <span className="glow-particle glow-1" />
          <span className="glow-particle glow-2" />
          <span className="glow-particle glow-3" />

          {/* ==================================================
              DECORATIVE ROTATING RINGS
          ================================================== */}

          <div
            className="
              absolute
              top-[15%]
              right-[20%]
              w-24
              h-24
              rounded-full
              border
              border-sky-300/20
              animate-spin-slow
            "
          />

          <div
            className="
              absolute
              bottom-[15%]
              left-[10%]
              w-32
              h-32
              rounded-full
              border
              border-pink-300/20
              animate-spin-reverse
            "
          />

          {/* Extra small ring */}
          <div
            className="
              absolute
              top-[55%]
              right-[8%]
              w-16
              h-16
              rounded-full
              border
              border-sky-300/15
              animate-spin-slow
            "
          />

          {/* ==================================================
              SUBTLE GRID
          ================================================== */}

          <div
            className="
              absolute
              inset-0
              opacity-[0.035]
              bg-[linear-gradient(rgba(14,165,233,1)_1px,transparent_1px),linear-gradient(90deg,rgba(14,165,233,1)_1px,transparent_1px)]
              bg-[size:50px_50px]
            "
          />

          {/* Soft overlay */}
          <div className="absolute inset-0 bg-white/10" />
        </div>

        {/* ==================================================
            NAVBAR
        ================================================== */}
        <div className="relative z-40">
          <Navbar />
        </div>

        {/* ==================================================
            PAGE CONTENT
        ================================================== */}
        <main className="relative z-10">
          <AnimatedRoutes whatsappNumber={whatsappNumber} />
        </main>

        {/* ==================================================
            FLOATING WHATSAPP
        ================================================== */}
        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Vichu Graphy on WhatsApp"
          className="
            group
            fixed
            bottom-6
            right-6
            z-50
            w-14
            h-14
            rounded-full
            flex
            items-center
            justify-center
            bg-gradient-to-r
            from-sky-500
            to-pink-400
            text-white
            shadow-xl
            hover:shadow-2xl
            hover:scale-110
            active:scale-95
            transition-all
            duration-300
            animate-whatsapp
          "
        >
          {/* Glow */}
          <span
            className="
              absolute
              inset-0
              rounded-full
              bg-sky-400
              opacity-30
              blur-md
              animate-ping-soft
            "
          />

          <MessageCircle
            size={27}
            strokeWidth={2.2}
            className="
              relative
              z-10
              group-hover:rotate-12
              transition-transform
              duration-300
            "
          />
        </a>

        {/* ==================================================
            FOOTER
        ================================================== */}
        <footer
          className="
            relative
            z-10
            mt-20
            overflow-hidden
            bg-white/75
            backdrop-blur-xl
            border-t
            border-sky-100/80
          "
        >
          {/* Animated top line */}
          <div
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2
              w-64
              h-[2px]
              rounded-full
              bg-gradient-to-r
              from-sky-400
              via-pink-400
              to-sky-400
              animate-footer-line
            "
          />

          <div
            className="
              max-w-6xl
              mx-auto
              px-4
              py-10
              text-center
              animate-footer-enter
            "
          >
            {/* Sparkle icon */}
            <div
              className="
                mx-auto
                mb-4
                w-11
                h-11
                rounded-full
                flex
                items-center
                justify-center
                bg-gradient-to-br
                from-sky-100
                to-pink-100
                text-pink-500
                animate-soft-bounce
              "
            >
              <Sparkles size={20} />
            </div>

            <p className="text-gray-600 text-sm md:text-base mb-3">
              © 2026{" "}
              <span className="font-bold text-sky-600">
                Vichu Graphy
              </span>
              . All rights reserved.
            </p>

            <a
              href={`https://wa.me/${whatsappNumber}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Contact Vichu Graphy on WhatsApp"
              className="
                inline-flex
                items-center
                justify-center
                gap-2
                text-sky-600
                font-bold
                text-lg
                hover:text-pink-500
                hover:scale-105
                transition-all
                duration-300
              "
            >
              <MessageCircle size={22} strokeWidth={2.2} />
              WhatsApp Us
            </a>

            <p className="text-gray-400 text-xs mt-5">
              Photography • Frames • Gifts • Invitations • Events
            </p>

            <div
              className="
                mx-auto
                mt-6
                h-px
                max-w-xs
                bg-gradient-to-r
                from-transparent
                via-sky-200
                to-transparent
              "
            />

            <p className="text-gray-400 text-[11px] mt-5 tracking-wide">
              Capturing your beautiful moments ✨
            </p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;