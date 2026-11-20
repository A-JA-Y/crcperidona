import { TONES, type Tone } from "./chartTones";

export type BarDetail = { label: string; value: string };

export type BarRow = {
  label: string;
  value: number;
  /** Upper end of a range, drawn as a lighter extension past `value`. */
  high?: number;
  /** The figure printed beside the bar, e.g. "₹1.13–1.23 crore". */
  display: string;
  tone: Tone;
  /** Shown on hover / keyboard focus. Every figure here must also appear in the article. */
  details?: BarDetail[];
};

/**
 * Horizontal bars on one shared axis, for comparing what buying and renting cost.
 * Each row prints its own value, so the tooltip only adds the breakdown.
 */
export default function CompareBars({
  title,
  subtitle,
  rows,
  max,
  ticks,
  gap,
  note,
}: {
  title: string;
  subtitle?: string;
  rows: BarRow[];
  max: number;
  ticks: { value: number; label: string }[];
  /** Bracket drawn under the bars between two values, e.g. the extra cost of owning. */
  gap?: { from: number; to: number; label: string };
  note?: string;
}) {
  const pct = (v: number) => `${Math.max(0, Math.min(100, (v / max) * 100))}%`;

  return (
    <figure className="my-10 rounded-xl border border-[#e5dcc5] bg-white p-5 md:p-6 font-sans">
      <figcaption className="mb-6">
        <span className="block text-[15px] font-semibold text-gray-900 leading-snug">{title}</span>
        {subtitle ? (
          <span className="block text-[13px] text-gray-500 mt-1 leading-relaxed">{subtitle}</span>
        ) : null}
      </figcaption>

      <div className="space-y-6">
        {rows.map((row) => {
          const tone = TONES[row.tone];
          const hasRange = typeof row.high === "number" && row.high > row.value;
          return (
            <div
              key={row.label}
              tabIndex={row.details ? 0 : undefined}
              aria-label={`${row.label}: ${row.display}`}
              className="group relative rounded outline-none focus-visible:ring-2 focus-visible:ring-[#c8922a]/50 focus-visible:ring-offset-4"
            >
              <div className="flex items-baseline justify-between gap-3 mb-2">
                <span className="text-[13px] md:text-[14px] text-gray-600 leading-snug">{row.label}</span>
                <span className="text-[14px] md:text-[15px] font-semibold text-gray-900 whitespace-nowrap">
                  {row.display}
                </span>
              </div>

              <div className="flex h-5 gap-[2px]" aria-hidden="true">
                <div
                  className={`h-full transition-[filter] duration-200 group-hover:brightness-110 ${hasRange ? "" : "rounded-r-[4px]"}`}
                  style={{ width: pct(row.value), background: tone.fill }}
                />
                {hasRange ? (
                  <div
                    className="h-full rounded-r-[4px] transition-[filter] duration-200 group-hover:brightness-105"
                    style={{ width: pct((row.high as number) - row.value), background: tone.soft }}
                  />
                ) : null}
              </div>

              {row.details?.length ? (
                <div
                  role="tooltip"
                  className="pointer-events-none absolute left-0 bottom-full z-20 mb-2 w-max max-w-[min(300px,100%)] rounded-md bg-gray-900 px-3 py-2.5 text-[12px] leading-relaxed text-white shadow-lg opacity-0 translate-y-1 transition-all duration-150 group-hover:opacity-100 group-hover:translate-y-0 group-focus-visible:opacity-100 group-focus-visible:translate-y-0"
                >
                  {row.details.map((d) => (
                    <span key={d.label} className="flex items-center gap-2">
                      <span className="inline-block h-[2px] w-3 flex-shrink-0" style={{ background: tone.fill }} />
                      <strong className="font-semibold text-white">{d.value}</strong>
                      <span className="text-white/70">{d.label}</span>
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          );
        })}
      </div>

      {gap ? (
        <div className="relative mt-3 h-12" aria-hidden="true">
          <div
            className="absolute top-0 h-2.5 border-x border-b border-gray-400"
            style={{ left: pct(gap.from), width: pct(gap.to - gap.from) }}
          />
          <p
            className="absolute top-4 text-center text-[12px] md:text-[13px] font-semibold text-gray-800 leading-tight"
            style={{ left: pct(gap.from), width: pct(gap.to - gap.from) }}
          >
            {gap.label}
          </p>
        </div>
      ) : null}

      <div className="relative mt-3 h-5 border-t border-gray-200" aria-hidden="true">
        {ticks.map((t, i) => (
          <span
            key={t.label}
            // On narrow screens keep the first tick and every other one counted back from the last,
            // so neighbouring labels never collide.
            className={`absolute top-1.5 text-[11px] text-gray-400 tabular-nums whitespace-nowrap ${
              i === 0 || (ticks.length - 1 - i) % 2 === 0 ? "" : "hidden sm:inline"
            }`}
            style={{
              left: pct(t.value),
              transform:
                i === 0 ? "none" : i === ticks.length - 1 && t.value >= max ? "translateX(-100%)" : "translateX(-50%)",
            }}
          >
            {t.label}
          </span>
        ))}
      </div>

      {note ? <p className="mt-4 text-[12px] text-gray-500 leading-relaxed">{note}</p> : null}
    </figure>
  );
}
