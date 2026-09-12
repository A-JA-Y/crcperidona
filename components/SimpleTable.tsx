import type { ReactNode } from "react";

export default function SimpleTable({
  headers,
  rows,
  className = "",
}: {
  headers?: string[];
  rows: ReactNode[][];
  className?: string;
}) {
  return (
    <div className={`overflow-x-auto rounded-lg border border-[#e5dcc5] shadow-sm ${className}`}>
      <table className="w-full text-sm text-left">
        {headers && (
          <thead className="bg-[#FAF8F4] text-[#c8922a] uppercase text-xs tracking-wider">
            <tr>
              {headers.map((h) => (
                <th key={h} className="px-5 py-4">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
        )}
        <tbody>
          {rows.map((row, i) => (
            <tr key={i} className="border-t border-[#e5dcc5] bg-white">
              {row.map((cell, j) => (
                <td
                  key={j}
                  className={`px-5 py-4 ${j === 0 ? "font-semibold text-gray-900" : "text-gray-600"}`}
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
