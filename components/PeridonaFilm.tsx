import poster from "@/assets-crc/peridona-towers-film.webp";

/**
 * The official CRC The Peridona film (public/hero-video.mp4) with native controls.
 * preload="none" keeps the 22 MB file from downloading until the visitor presses play.
 */
export default function PeridonaFilm({ caption }: { caption?: string }) {
  return (
    <figure className="w-full">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md border border-[#e5dcc5] bg-black">
        <video
          controls
          playsInline
          preload="none"
          poster={poster.src}
          className="absolute inset-0 w-full h-full object-cover"
          aria-label="CRC The Peridona project film: the towers, the golf course, the nature park, The Club and the design team"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>
      </div>
      <figcaption className="mt-3">
        <span className="block text-sm font-semibold text-gray-900 leading-snug">
          {caption ?? "CRC The Peridona: the project film"}
        </span>
        <span className="block text-xs text-gray-500 mt-1">
          1 min 33 sec · golf course and nature park views, the towers, The Club
        </span>
      </figcaption>
    </figure>
  );
}
