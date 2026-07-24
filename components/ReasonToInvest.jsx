import { FaMapMarkerAlt, FaPlane, FaRoad, FaGolfBall, FaBuilding, FaConciergeBell, FaCouch, FaShieldAlt } from "react-icons/fa";

export default function ReasonsToInvest() {
  return (
    <section className="relative w-full bg-[#FAF8F4] py-16 px-6 overflow-hidden" id="investment">
      <div className="glow-blob -top-20 -right-24 w-[380px] h-[380px] opacity-30" />
      <div className="glow-blob -bottom-24 -left-24 w-[340px] h-[340px] opacity-25" style={{ animationDelay: "-6s" }} />
      <div className="relative max-w-5xl mx-auto flex flex-col gap-10">

        {/* Heading */}
        <div className="text-center" data-reveal>
          <p className="uppercase text-xs tracking-widest text-[#DCA54A] mb-3">
            Reasons to Invest
          </p>

          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Why Invest in CRC The Peridona
          </h2>
          <span className="gold-line block h-[2px] w-16 mx-auto mt-4 bg-gradient-to-r from-transparent via-[#DCA54A] to-transparent" />

          <p className="text-gray-600 text-sm mt-4 max-w-2xl mx-auto">
            An ultra-luxury address inside a mature golf township, combining
            rarity, world-class design, and long-term appreciation potential —
            at a tentative price of ₹12.5 Cr* onwards.
          </p>
        </div>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-10 md:px-[8rem]">

          {/* Left: Key Reasons */}
          <div data-reveal="left">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Key Reasons
            </h4>

            <ul className="space-y-4">
              {[
                { icon: <FaMapMarkerAlt />, text: "Pari Chowk just ~2 km away, with expressway access" },
                { icon: <FaPlane />, text: "Jewar Noida International Airport ~35 km" },
                { icon: <FaGolfBall />, text: "Mature Jaypee Greens golf township with 25-year green cover" },
                { icon: <FaBuilding />, text: "Ultra-low density — only 341 residences on 6.8 acres" },
                { icon: <FaRoad />, text: "Connected to Yamuna & Noida–Greater Noida Expressways" },
              ].map((item, i) => (
                <li key={i} className="group flex items-center gap-3" data-reveal style={{ "--reveal-delay": i + 1 }}>
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#DCA54A]/10 text-[#DCA54A] text-base flex-shrink-0 transition-all duration-300 group-hover:bg-[#DCA54A] group-hover:text-white group-hover:scale-110">{item.icon}</span>
                  <span className="text-gray-800 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Right: Additional Value */}
          <div data-reveal="right">
            <h4 className="text-lg font-semibold text-gray-900 mb-4">
              Additional Value
            </h4>

            <ul className="space-y-4">
              {[
                { icon: <FaConciergeBell />, text: "Global design team — Killa Design, Gensler, Rockwell Group, SWA" },
                { icon: <FaCouch />, text: "One Floor One Apartment* with private lift lobby" },
                { icon: <FaShieldAlt />, text: "By CRC Group — Building Values" },
              ].map((item, i) => (
                <li key={i} className="group flex items-center gap-3" data-reveal style={{ "--reveal-delay": i + 1 }}>
                  <span className="flex items-center justify-center w-9 h-9 rounded-full bg-[#DCA54A]/10 text-[#DCA54A] text-base flex-shrink-0 transition-all duration-300 group-hover:bg-[#DCA54A] group-hover:text-white group-hover:scale-110">{item.icon}</span>
                  <span className="text-gray-800 text-sm">{item.text}</span>
                </li>
              ))}
            </ul>

            {/* Closing */}

          </div>

        </div>
          <p className="text-gray-600 text-sm mt-6 leading-relaxed text-center" data-reveal>
              With just 341 limited residences and 2-side golf and nature park
              views, The Peridona offers homeowners a rare lifestyle — and
              investors a scarce, appreciating asset in Greater Noida.
            </p>
      </div>
    </section>
  );
}