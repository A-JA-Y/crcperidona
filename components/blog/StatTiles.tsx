/** A row of headline figures: label, value and an optional one-line note. */
export default function StatTiles({
  items,
}: {
  items: { label: string; value: string; note?: string }[];
}) {
  const cols =
    items.length === 4 ? "grid-cols-2 md:grid-cols-4" : items.length === 3 ? "grid-cols-1 sm:grid-cols-3" : "grid-cols-2";

  return (
    <dl
      className={`my-8 grid ${cols} gap-[1px] overflow-hidden rounded-xl border border-[#e5dcc5] bg-[#e5dcc5] font-sans`}
    >
      {items.map((i) => (
        <div key={i.label} className="flex flex-col bg-[#FAF8F4] px-4 py-4">
          <dt className="text-[12px] text-gray-500 leading-snug">{i.label}</dt>
          <dd className="mt-1 text-[22px] md:text-[24px] font-semibold text-gray-900 leading-tight">{i.value}</dd>
          {i.note ? <dd className="mt-1 text-[12px] text-gray-500 leading-snug">{i.note}</dd> : null}
        </div>
      ))}
    </dl>
  );
}
