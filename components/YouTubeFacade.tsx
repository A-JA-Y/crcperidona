"use client";

import { useState } from "react";
import Image from "next/image";

/**
 * Lightweight YouTube embed: shows the thumbnail and only loads the player
 * (from youtube-nocookie.com) when the visitor clicks play.
 */
export default function YouTubeFacade({
  id,
  title,
  channel,
}: {
  id: string;
  title: string;
  channel?: string;
}) {
  const [playing, setPlaying] = useState(false);

  return (
    <figure className="w-full">
      <div className="relative w-full aspect-video rounded-lg overflow-hidden shadow-md border border-[#e5dcc5] bg-black">
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`}
            title={title}
            className="absolute inset-0 w-full h-full border-0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            className="group absolute inset-0 w-full h-full cursor-pointer"
            aria-label={`Play video: ${title}`}
          >
            <Image
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              fill
              unoptimized
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-0 bg-black/25 group-hover:bg-black/10 transition-colors" />
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 flex items-center justify-center w-16 h-16 rounded-full bg-[#DCA54A] group-hover:bg-[#C49A2B] shadow-lg transition-colors">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </button>
        )}
      </div>
      <figcaption className="mt-3">
        <span className="block text-sm font-semibold text-gray-900 leading-snug">{title}</span>
        {channel ? (
          <span className="block text-xs text-gray-500 mt-1">Video: {channel} · YouTube</span>
        ) : null}
      </figcaption>
    </figure>
  );
}
