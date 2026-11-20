import { TONES, type Tone } from "./chartTones";

type Card = { title: string; items: string[]; tone: Tone };

/** Two side-by-side checklists, e.g. "Renting suits you if" / "Buying suits you if". */
export default function FitCards({ cards }: { cards: Card[] }) {
  return (
    <div className="my-10 grid gap-5 md:grid-cols-2 font-sans">
      {cards.map((card) => {
        const tone = TONES[card.tone];
        return (
          <div
            key={card.title}
            className="rounded-xl border border-[#e5dcc5] bg-white p-5 md:p-6 border-t-4"
            style={{ borderTopColor: tone.fill }}
          >
            <p className="mb-4 text-[16px] font-semibold text-gray-900">{card.title}</p>
            <ul className="space-y-3">
              {card.items.map((item) => (
                <li key={item} className="flex items-start gap-3 text-[14.5px] leading-relaxed text-gray-700">
                  <svg
                    className="mt-[5px] h-3.5 w-3.5 flex-shrink-0"
                    viewBox="0 0 16 16"
                    fill="none"
                    stroke={tone.fill}
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M3 8.5l3.2 3L13 4.5" />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        );
      })}
    </div>
  );
}
