import { INK_DARK, INK_LIGHT } from "./chartTones";

export type Segment = {
  label: string;
  value: number;
  /** Amount printed in the legend, e.g. "₹3.125 crore". */
  display: string;
  color: string;
  /** Text colour for the share printed on the block. */
  ink?: "dark" | "light";
};

/**
 * One whole split into a few parts: a tall segmented bar with each part's share printed
 * on its block, and a legend that names the parts and gives their amounts.
 */
export default function SegmentedBar({
  title,
  total,
  segments,
  note,
}: {
  title: string;
  total: string;
  segments: Segment[];
  note?: string;
}) {
  const sum = segments.reduce((s, p) => s + p.value, 0);

  return (
    <figure className="my-10 rounded-xl border border-[#e5dcc5] bg-white p-5 md:p-6 font-sans">
      <figcaption className="mb-4 flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
        <span className="text-[15px] font-semibold text-gray-900 leading-snug">{title}</span>
        <span className="text-[20px] font-semibold text-gray-900 whitespace-nowrap">{total}</span>
      </figcaption>

      <div className="flex h-7 gap-[2px]">
        {segments.map((p, i) => {
          const share = p.value / sum;
          const shareText = `${Math.round(share * 100)}%`;
          // Tooltips for blocks that start past the middle open leftwards so they stay inside the card.
          const startsPastMiddle = segments.slice(0, i).reduce((s, q) => s + q.value, 0) / sum > 0.5;
          return (
            <div
              key={p.label}
              role="img"
              tabIndex={0}
              aria-label={`${p.label}: ${p.display}, ${shareText} of ${total}`}
              className="group relative h-full rounded-[4px] outline-none transition-[filter] duration-200 hover:brightness-110 focus-visible:ring-2 focus-visible:ring-[#c8922a]/50 focus-visible:ring-offset-2"
              style={{ width: `${share * 100}%`, background: p.color }}
            >
              {share >= 0.1 ? (
                <span
                  className="absolute inset-y-0 left-2 flex items-center text-[12px] font-semibold"
                  style={{ color: p.ink === "dark" ? INK_DARK : INK_LIGHT }}
                  aria-hidden="true"
                >
                  {shareText}
                </span>
              ) : null}
              <span
                role="tooltip"
                className={`pointer-events-none absolute ${startsPastMiddle ? "right-0" : "left-0"} bottom-full z-20 mb-2 w-max max-w-[220px] rounded-md bg-gray-900 px-3 py-2 text-[12px] leading-relaxed text-white shadow-lg opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0`}
              >
                <strong className="block font-semibold">{p.display}</strong>
                <span className="block text-white/70">
                  {p.label} · {shareText}
                </span>
              </span>
            </div>
          );
        })}
      </div>

      <ul className="mt-5 grid gap-3 sm:grid-cols-3">
        {segments.map((p) => (
          <li key={p.label} className="flex items-start gap-2.5">
            <span className="mt-1 h-3 w-3 flex-shrink-0 rounded-[3px]" style={{ background: p.color }} />
            <span className="leading-snug">
              <span className="block text-[13px] text-gray-600">{p.label}</span>
              <span className="block text-[14px] font-semibold text-gray-900">{p.display}</span>
            </span>
          </li>
        ))}
      </ul>

      {note ? <p className="mt-4 text-[12px] text-gray-500 leading-relaxed">{note}</p> : null}
    </figure>
  );
}
