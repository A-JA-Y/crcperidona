import Image from "next/image";
import neighborhood from "../assets-crc/neighborhood.webp";

const checkItems = [
  "Pari Chowk — approx. 2 km away",
  "Direct access to the Yamuna Expressway",
  "Connected to the Noida–Greater Noida Expressway",
  "Jewar Noida International Airport — approx. 35 km",
  "IGI Airport, Delhi — approx. 55 km",
  "Pari Chowk / Knowledge Park metro stations close by",
  "Jaypee Public School within walking distance",
  "Hospitals, retail and everyday conveniences within the township",
  "Primary access via Narmada Gate, opposite the practice range",
];

export default function LocationAdvantages() {
  return (
    <section className="relative w-full bg-white py-16 px-6 overflow-hidden" id="location">
      <div className="glow-blob -top-24 -left-24 w-[380px] h-[380px] opacity-25" />
      <div className="relative max-w-5xl mx-auto">

        {/* Label */}
        <p className="text-center text-xs font-bold uppercase mb-4 text-[#c8922a] tracking-[0.2em]" data-reveal>
          Location & Connectivity
        </p>

        {/* Heading */}
        <h2 className="text-center font-bold text-gray-900 mb-4 text-3xl md:text-4xl leading-tight" data-reveal>
          Jaypee Greens, Greater Noida — A Connected Golf Township Address
        </h2>
        <span className="gold-line block h-[2px] w-16 mx-auto mb-14 bg-gradient-to-r from-transparent via-[#DCA54A] to-transparent" data-reveal="fade" />

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-12 items-start">

          {/* LEFT: TEXT */}
          <div className="flex-1 max-w-lg" data-reveal="left">

            <h3 className="font-bold text-gray-900 mb-3 text-base">
              Strategic Connectivity
            </h3>

            <p className="text-gray-600 leading-relaxed mb-8 text-sm">
              Set inside the 452-acre Jaypee Greens golf township, CRC The
              Peridona is barely 2 km from Pari Chowk, with direct access to
              the Yamuna Expressway and seamless connectivity to the
              Noida–Greater Noida Expressway. Metro stations at Pari Chowk and
              Knowledge Park are close by, while the Jewar Noida International
              Airport is around 35 km away — keeping the address effortlessly
              connected to the rest of the NCR.
            </p>

            <ul className="space-y-4">
              {checkItems.map((item, i) => (
                <li
                  key={i}
                  className="group flex items-start gap-3"
                  data-reveal
                  style={{ "--reveal-delay": (i % 5) + 1 }}
                >

                  {/* Check Icon */}
                  <span className="flex items-center justify-center w-5 h-5 rounded-full bg-[#c8922a]/10 text-[#c8922a] text-[11px] mt-0.5 flex-shrink-0 transition-all duration-300 group-hover:bg-[#c8922a] group-hover:text-white group-hover:scale-110">
                    ✓
                  </span>

                  <span className="text-gray-800 text-sm">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT: IMAGE */}
          <div className="flex-1 w-full" data-reveal="right">
            <div className="group w-full h-[300px] md:h-[400px] rounded-lg overflow-hidden shadow-md border border-[#e5dcc5] transition-shadow duration-500 hover:shadow-xl">
              <Image
                src={neighborhood}
                alt="Jaypee Greens township neighbourhood around CRC The Peridona, Greater Noida"
                className="img-rich w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                placeholder="blur"
              />
            </div>

            {/* Small CTA */}
            <a
              href="https://maps.google.com/?q=Jaypee+Greens,+Greater+Noida"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-1 mt-3 text-sm text-[#c8922a] hover:underline"
            >
              View on Google Maps
              <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
            </a>
          </div>

        </div>
      </div>
    </section>
  );
}
