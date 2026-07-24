import Image from "next/image";

import qrCode from "../assets/rera-qr-code.png";

const ReraStrip = () => {
  return (
    <div className="block md:hidden w-full bg-[#F2EDE0] py-[5px] text-[1rem]">
      <div className="flex items-center justify-center gap-3 px-4">
        <Image
          src={qrCode}
          alt="RERA QR Code – CRC The Peridona"
          width={72}
          height={72}
          className="object-contain"
          loading="lazy"
          quality={80}
        />
        <p className="text-[#141004] text-[11px] leading-[1.6] tracking-wide">
          <strong>RERA NO.:</strong> UPRERAPRJ298067/05/2025
          <br />
          <a
            href="https://www.up-rera.in"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            www.up-rera.in
          </a>
        </p>
      </div>
    </div>
  );
};

export default ReraStrip;
