import { GOLD_RAMP, INK_DARK, INK_LIGHT } from "./chartTones";

/**
 * A small table whose cells are shaded light → dark by value (one hue), so the reader
 * sees at a glance which way the numbers move. Every value is printed in its cell.
 */
export default function HeatTable({
  caption,
  corner,
  columns,
  rows,
  format = (v: number) => `${v.toFixed(1)}%`,
  lowLabel = "Lower",
  highLabel = "Higher",
  note,
}: {
  caption: string;
  corner: string;
  columns: string[];
  rows: { label: string; values: number[] }[];
  format?: (v: number) => string;
  lowLabel?: string;
  highLabel?: string;
  note?: string;
}) {
  const all = rows.flatMap((r) => r.values);
  const min = Math.min(...all);
  const max = Math.max(...all);
  // The small epsilon keeps values that sit exactly on a band edge (e.g. 7.1 in 6.5–9.5)
  // from dropping a band through floating-point error.
  const step = (v: number) =>
    max === min
      ? 0
      : Math.min(GOLD_RAMP.length - 1, Math.floor(((v - min) / (max - min)) * GOLD_RAMP.length + 1e-9));
  const valueColWidth = `${(100 - 28) / columns.length}%`;

  return (
    <figure className="my-10 font-sans">
      <div className="overflow-x-auto rounded-xl border border-[#e5dcc5] bg-white">
        <table className="w-full table-fixed border-separate border-spacing-[2px] text-left">
          <caption className="caption-top px-4 pt-4 pb-2 text-left text-[15px] font-semibold text-gray-900 leading-snug">
            {caption}
          </caption>
          <colgroup>
            <col style={{ width: "28%" }} />
            {columns.map((c) => (
              <col key={c} style={{ width: valueColWidth }} />
            ))}
          </colgroup>
          <thead>
            <tr>
              <th scope="col" className="px-3 py-2 text-[12px] font-semibold text-gray-500 leading-tight">
                {corner}
              </th>
              {columns.map((c) => (
                <th
                  key={c}
                  scope="col"
                  className="px-3 py-2 text-center text-[12px] font-semibold text-gray-500 leading-tight"
                >
                  {c}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.label}>
                <th scope="row" className="px-3 py-3 text-[13px] font-semibold text-gray-900 whitespace-nowrap">
                  {r.label}
                </th>
                {r.values.map((v, i) => {
                  const s = step(v);
                  return (
                    <td
                      key={columns[i]}
                      className="rounded-[4px] px-3 py-3 text-center text-[15px] font-semibold tabular-nums"
                      style={{ background: GOLD_RAMP[s], color: s === GOLD_RAMP.length - 1 ? INK_LIGHT : INK_DARK }}
                    >
                      {format(v)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <div className="flex items-center gap-2 px-4 pb-4 pt-2 text-[11px] text-gray-500" aria-hidden="true">
          <span>{lowLabel}</span>
          <span className="flex gap-[2px]">
            {GOLD_RAMP.map((c) => (
              <span key={c} className="h-2.5 w-6 rounded-[2px]" style={{ background: c }} />
            ))}
          </span>
          <span>{highLabel}</span>
        </div>
      </div>
      {note ? <figcaption className="mt-3 text-[12px] text-gray-500 leading-relaxed">{note}</figcaption> : null}
    </figure>
  );
}
