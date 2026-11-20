import { TONES } from "./chartTones";

/**
 * A simple from → to timeline: a track between two dated markers, with year ticks.
 * Positions are given in months from the start.
 */
export default function WaitTimeline({
  title,
  months,
  start,
  end,
  ticks,
}: {
  title: string;
  months: number;
  start: { label: string; sub: string };
  end: { label: string; sub: string };
  ticks: { label: string; month: number }[];
}) {
  const pct = (m: number) => `${(m / months) * 100}%`;

  return (
    <figure className="my-10 rounded-xl border border-[#e5dcc5] bg-white p-5 md:p-6 font-sans">
      <figcaption className="mb-8 text-[15px] font-semibold text-gray-900 leading-snug">{title}</figcaption>

      <div
        className="relative mx-2 h-10"
        role="img"
        aria-label={`${start.label} (${start.sub}) to ${end.label} (${end.sub})`}
      >
        <div
          className="absolute left-0 right-0 top-1/2 h-2 -translate-y-1/2 rounded-full"
          style={{ background: TONES.buy.soft }}
        />
        {ticks.map((t) => (
          <div key={t.label} className="absolute top-1/2 -translate-x-1/2" style={{ left: pct(t.month) }}>
            <span className="block h-4 w-px -translate-y-1/2 bg-white" />
            <span className="absolute left-1/2 top-3 -translate-x-1/2 text-[11px] text-gray-400 tabular-nums">
              {t.label}
            </span>
          </div>
        ))}
        {[
          { at: 0, ring: TONES.buy.soft, fill: "#ffffff" },
          { at: months, ring: "#ffffff", fill: TONES.buy.fill },
        ].map((m) => (
          <span
            key={m.at}
            className="absolute top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-full border-2"
            style={{ left: pct(m.at), borderColor: TONES.buy.fill, background: m.fill, boxShadow: "0 0 0 2px #fff" }}
          />
        ))}
      </div>

      <div className="mt-6 flex items-start justify-between gap-4">
        <p className="leading-snug">
          <span className="block text-[14px] font-semibold text-gray-900">{start.label}</span>
          <span className="block text-[12px] text-gray-500">{start.sub}</span>
        </p>
        <p className="text-right leading-snug">
          <span className="block text-[14px] font-semibold text-gray-900">{end.label}</span>
          <span className="block text-[12px] text-gray-500">{end.sub}</span>
        </p>
      </div>
    </figure>
  );
}
