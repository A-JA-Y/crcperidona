// Colours for the blog's data visuals. Validated (light mode, white surface) with the
// dataviz palette checker: buy vs rent passes CVD separation; the buy gold sits under 3:1
// contrast, so every bar using it carries a visible value label.
export const TONES = {
  buy: { fill: "#c8922a", soft: "#ebd3a0" },
  rent: { fill: "#2e7d52", soft: "#a9d3bb" },
} as const;

export type Tone = keyof typeof TONES;

// Sequential gold ramp, light → dark, for shaded tables.
export const GOLD_RAMP = ["#faf1de", "#f1dcb0", "#e4c07a", "#cf9a3c", "#8f5f14"] as const;

// Text set on a coloured fill: near-black or white, whichever reads better on that fill.
export const INK_DARK = "#1f1a12";
export const INK_LIGHT = "#ffffff";
