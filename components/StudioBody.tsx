"use client";

import { useEffect, useRef } from "react";

export function StudioBody({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const w = window as unknown as {
      StudioBlocks?: { enhance: (el: HTMLElement) => () => void };
    };
    if (!ref.current || !w.StudioBlocks) return;
    return w.StudioBlocks.enhance(ref.current);
  }, [html]);

  return (
    <div
      ref={ref}
      className="studio-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
