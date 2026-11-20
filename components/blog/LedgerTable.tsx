/** A two-column amounts table (item → amount) with optional bold total rows. */
export default function LedgerTable({
  caption,
  head,
  rows,
}: {
  caption?: string;
  head: [string, string];
  rows: { label: string; value: string; total?: boolean }[];
}) {
  return (
    <div className="my-8 overflow-x-auto rounded-xl border border-[#e5dcc5] font-sans">
      <table className="w-full table-fixed text-left text-[14px]">
        {caption ? (
          <caption className="caption-top px-5 pt-4 pb-1 text-left text-[15px] font-semibold text-gray-900">
            {caption}
          </caption>
        ) : null}
        <colgroup>
          <col style={{ width: "58%" }} />
          <col style={{ width: "42%" }} />
        </colgroup>
        <thead className="bg-[#FAF8F4] text-[12px] font-semibold uppercase tracking-wider text-[#a8761c]">
          <tr>
            <th scope="col" className="px-5 py-3">
              {head[0]}
            </th>
            <th scope="col" className="px-5 py-3 text-right">
              {head[1]}
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r) => (
            <tr key={r.label} className={`border-t border-[#e5dcc5] ${r.total ? "bg-[#FAF8F4]" : "bg-white"}`}>
              <th
                scope="row"
                className={`px-4 sm:px-5 py-3 ${r.total ? "font-semibold text-gray-900" : "font-normal text-gray-600"}`}
              >
                {r.label}
              </th>
              <td
                className={`px-4 sm:px-5 py-3 text-right tabular-nums ${r.total ? "font-semibold text-gray-900" : "text-gray-700"}`}
              >
                {r.value}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
