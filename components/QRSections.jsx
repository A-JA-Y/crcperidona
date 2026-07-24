import Image from "next/image";
import qrCode from "../assets/rera-qr-code.png";

const QRSection = () => {
  return (
    <section className="w-full bg-[#141004] px-[30px] py-[45px]">
      <div className="max-w-screen-xl mx-auto overflow-hidden">

        <div className="float-right ml-4">
          <Image
            src={qrCode}
            alt="RERA QR Code – CRC The Peridona"
            width={110}
            height={110}
            className="block object-contain"
            priority
          />
        </div>

        <address className="not-italic text-right text-white text-[13px] leading-[1.7] tracking-wide">

          <p className="mb-0.5">
            <strong className="tracking-widest">RERA NO.:-</strong>{" "}
            <span itemProp="identifier">UPRERAPRJ298067/05/2025</span>
          </p>
          <p className="mb-2 text-[#cccccc] text-[12px]">
            <a
              href="https://www.up-rera.in"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#cccccc] hover:text-white no-underline"
            >
              www.up-rera.in
            </a>
          </p>

          <p className="mb-0">
            <strong className="tracking-widest">PROJECT</strong>: CRC THE PERIDONA
          </p>
          <p className="mb-0">
            <strong className="tracking-widest">ADDRESS</strong>: C1, JAYPEE GREENS,
          </p>
          <p>GREATER NOIDA, UTTAR PRADESH 201310</p>

        </address>

        <div className="clear-both" />
      </div>
    </section>
  );
};

export default QRSection;
