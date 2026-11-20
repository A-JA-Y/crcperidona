import CtaRow, { type Cta } from "@/components/CtaRow";

/** A dark call-to-action panel for long-form posts. Buttons come from CtaRow. */
export default function CtaBand({
  eyebrow,
  title,
  text,
  items,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  items: Cta[];
}) {
  return (
    <aside className="my-12 rounded-xl bg-[#1f1a12] px-6 py-7 md:px-8 md:py-8 font-sans">
      {eyebrow ? (
        <p className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#DCA54A]">{eyebrow}</p>
      ) : null}
      <p className="mb-2 text-[20px] md:text-[22px] font-semibold leading-snug text-white">{title}</p>
      {text ? <p className="mb-6 text-[14px] leading-relaxed text-white/70">{text}</p> : null}
      <CtaRow items={items} />
    </aside>
  );
}
