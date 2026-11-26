"use client";

import { useEffect, useRef } from "react";

interface StudioBlocksApi {
  enhance: (el: HTMLElement) => (() => void) | void;
}

export function StudioBody({ html }: { html: string }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    const api = (window as unknown as { StudioBlocks?: StudioBlocksApi }).StudioBlocks;
    if (!el || !api?.enhance) return;
    return api.enhance(el);
  }, [html]);

  return (
    <div
      ref={ref}
      className="studio-body"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}