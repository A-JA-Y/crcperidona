import Image, { type StaticImageData } from "next/image";

/** A full-width image inside a blog post, with a caption and an optional credit line. */
export default function BlogFigure({
  src,
  alt,
  caption,
  credit,
}: {
  src: StaticImageData;
  alt: string;
  caption?: string;
  credit?: string;
}) {
  return (
    <figure className="my-10 font-sans">
      <div className="relative aspect-video overflow-hidden rounded-xl border border-[#e5dcc5] bg-gray-100">
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 680px" className="object-cover" />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-[13px] text-gray-600 leading-relaxed">
          {caption}
          {credit ? <span className="block text-[12px] text-gray-400 mt-1">{credit}</span> : null}
        </figcaption>
      ) : null}
    </figure>
  );
}
