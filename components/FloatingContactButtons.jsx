import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";
import { SALES_PHONE_HREF } from "./ProjectSnapshot";

const WHATSAPP_HREF =
  "https://wa.me/917304216059?text=" +
  encodeURIComponent("Hi, I'm interested in CRC The Peridona. Please share details.");

export default function FloatingContactButtons() {
  return (
    <div className="fixed bottom-5 left-4 z-40 flex flex-col gap-3">
      <a
        href={WHATSAPP_HREF}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <FaWhatsapp size={26} />
      </a>
      <a
        href={SALES_PHONE_HREF}
        aria-label="Call +91 73042 16059"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#c8952a] text-white shadow-lg transition-transform duration-300 hover:scale-110 active:scale-95"
      >
        <FaPhoneAlt size={20} />
      </a>
    </div>
  );
}
