"use client";

import Link from "next/link";
import { useModal } from "./ModalContext";

export type Cta = {
  label: string;
  /** Internal route, tel: or external URL. Omit (or set brochure) to open the enquiry modal. */
  href?: string;
  brochure?: boolean;
  primary?: boolean;
};

const base =
  "inline-block text-xs font-semibold tracking-widest uppercase px-6 py-3 rounded-md transition-colors text-center";
const primaryCls = `${base} bg-[#DCA54A] hover:bg-[#C49A2B] text-white`;
const secondaryCls = `${base} border-2 border-[#DCA54A] text-[#DCA54A] hover:bg-[#DCA54A] hover:text-white`;

export default function CtaRow({
  items,
  align = "left",
  className = "",
}: {
  items: Cta[];
  align?: "left" | "center";
  className?: string;
}) {
  const { openModal } = useModal();

  return (
    <div
      className={`flex flex-wrap gap-4 ${align === "center" ? "justify-center" : ""} ${className}`}
    >
      {items.map((item, i) => {
        const cls = (item.primary ?? i === 0) ? primaryCls : secondaryCls;

        if (item.brochure || !item.href) {
          return (
            <button key={item.label} type="button" onClick={() => openModal()} className={cls}>
              {item.label}
            </button>
          );
        }

        if (item.href.startsWith("tel:") || item.href.startsWith("http")) {
          return (
            <a
              key={item.label}
              href={item.href}
              className={cls}
              {...(item.href.startsWith("http")
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {})}
            >
              {item.label}
            </a>
          );
        }

        return (
          <Link key={item.label} href={item.href} className={cls}>
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
