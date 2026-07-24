import Image from "next/image";

import residenceLiving from "@/assets-crc/residenceLiving.webp";
import residenceBalcony from "@/assets-crc/residenceBalcony.webp";
import towerImg from "@/assets-crc/gallery_tower1.webp";

const residenceFeatures = ["One Floor One Apartment* concept", "Private lift lobby for every residence", "2-side views — Golf Course & Nature Park", "Penthouse residences (indicative*)"];
const configItems = ["4 BHK — 4,900 sq ft", "5 BHK — 5,600 sq ft", "4 BHK — 6,700 sq ft", "Penthouse*"];
const specFeatures = ["Imported marble in living & dining", "Engineered wood flooring in bedrooms", "Modular kitchen with built-in appliances", "VRV/VRF air conditioning & smart-home provisions"];

const towerFacts = {
  "The Address": ["7 towers", "341 residences", "43 floors"],
  "The Scale": ["~160 m* tower height", "330 m* front facade", "6.80 acres in Jaypee Greens"],
  "The Finish": ["Double-glazed windows", "European sanitaryware", "High-speed lifts with private lobby"],
};

export default function Residences() {
  return (
    <section
      className="w-full py-12 px-4 sm:px-8"
      style={{ backgroundColor: "#faf6e8" }}
      id="investment-benefits"
    >
      <div className="max-w-5xl mx-auto">
        <h6 className="text-center uppercase mb-3" data-reveal style={{ color: "#c8922a", letterSpacing: "2.5px", fontSize: "11px", fontWeight: 600 }}>
          For the chosen few
        </h6>
        <h2
          className="text-center font-bold text-gray-900 mb-10"
          data-reveal
          style={{ fontSize: "clamp(1.4rem, 3.5vw, 2rem)", lineHeight: "1.25", color: "#2c1f0e" }}
        >
          The Residences — 4, 4.5 &amp; 5.5 BHK from 4,950 sq ft
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">

          {/* Card 1 — The Residences */}
          <div className="card-lift bg-white p-7" data-reveal style={{ borderTop: "3px solid #DCA54A", "--reveal-delay": 1 }}>
            <div className="overflow-hidden mb-5">
              <Image
                src={residenceLiving}
                alt="CRC The Peridona residence living room with golf course views"
                className="img-rich w-full h-36 object-cover transition-transform duration-700 ease-out hover:scale-110"
                quality={80}
              />
            </div>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#c8922a", textTransform: "uppercase", marginBottom: "8px" }}>
              The Residences
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#2c1f0e" }}>
              Sky residences, crafted for privacy
            </h3>
            <ul className="space-y-2 mb-4">
              {residenceFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="rounded-full flex-shrink-0" style={{ width: 5, height: 5, background: "#DCA54A", display: "inline-block" }} />
                  <span style={{ fontSize: "13px", color: "#5c4a2a" }}>{f}</span>
                </li>
              ))}
            </ul>
            <div style={{ borderTop: "0.5px solid #e8dfc8", paddingTop: "10px" }}>
              <p style={{ fontSize: "11px", fontWeight: 600, color: "#8a7a5a", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "6px" }}>
                Floor-plan configurations*
              </p>
              <div className="flex flex-wrap gap-1.5">
                {configItems.map((item) => (
                  <span key={item} style={{ fontSize: "12px", background: "#faf6e8", color: "#7a5c1e", padding: "3px 10px", borderRadius: "20px", border: "0.5px solid #d4c9ae" }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Card 2 — Typologies & Specifications */}
          <div className="card-lift bg-white p-7" data-reveal style={{ borderTop: "3px solid #DCA54A", "--reveal-delay": 2 }}>
            <div className="overflow-hidden mb-5">
              <Image
                src={residenceBalcony}
                alt="CRC The Peridona residence balcony overlooking Jaypee Greens"
                className="img-rich w-full h-36 object-cover transition-transform duration-700 ease-out hover:scale-110"
                quality={80}
              />
            </div>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#c8922a", textTransform: "uppercase", marginBottom: "8px" }}>
              Typologies &amp; Specifications
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#2c1f0e" }}>
              Starting 4,950 sq ft
            </h3>
            <div className="flex gap-2 mb-4">
              {["4 BHK", "4.5 BHK", "5.5 BHK"].map((v) => (
                <div key={v} className="flex-1 text-center py-3" style={{ background: "#faf6e8", border: "0.5px solid #d4c9ae" }}>
                  <div style={{ fontSize: "18px", fontWeight: 700, color: "#DCA54A" }}>{v}</div>
                  <div style={{ fontSize: "11px", color: "#8a7a5a" }}>Typology</div>
                </div>
              ))}
            </div>
            <ul className="space-y-2">
              {specFeatures.map((f) => (
                <li key={f} className="flex items-center gap-2">
                  <span className="rounded-full flex-shrink-0" style={{ width: 5, height: 5, background: "#DCA54A", display: "inline-block" }} />
                  <span style={{ fontSize: "13px", color: "#5c4a2a" }}>{f}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Card 3 — The Towers */}
          <div className="card-lift bg-white p-7" data-reveal style={{ borderTop: "3px solid #DCA54A", "--reveal-delay": 3 }}>
            <div className="overflow-hidden mb-5">
              <Image
                src={towerImg}
                alt="CRC The Peridona towers rising above the Jaypee Greens golf township"
                className="img-rich w-full h-36 object-cover transition-transform duration-700 ease-out hover:scale-110"
                quality={80}
              />
            </div>
            <p style={{ fontSize: "10px", fontWeight: 600, letterSpacing: "2px", color: "#c8922a", textTransform: "uppercase", marginBottom: "8px" }}>
              The Towers
            </p>
            <h3 className="font-bold mb-4" style={{ fontSize: "16px", color: "#2c1f0e" }}>
              A landmark on the golf course
            </h3>
            <div className="flex flex-col gap-3">
              {Object.entries(towerFacts).map(([category, items]) => (
                <div key={category}>
                  <p style={{ fontSize: "11px", fontWeight: 600, color: "#8a7a5a", textTransform: "uppercase", letterSpacing: "1px", marginBottom: "5px" }}>
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {items.map((item) => (
                      <span key={item} style={{ fontSize: "12px", color: "#5c4a2a", background: "#faf6e8", padding: "3px 9px", borderRadius: "20px", border: "0.5px solid #d4c9ae" }}>
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        <p className="text-center mt-6" style={{ fontSize: "11px", color: "#8a7a5a" }}>
          *Indicative; subject to approved building plan.
        </p>
      </div>
    </section>
  );
}
