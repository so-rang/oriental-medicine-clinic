"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

import type { FaqItem } from "./data";

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <ul className="divide-y divide-paper-line border-t border-b border-paper-line">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <li key={item.question}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? null : i)}
              className="flex w-full items-center justify-between gap-4 py-3.5 text-left transition-colors hover:bg-hanji-deep/30"
              aria-expanded={open}
            >
              <div className="flex items-baseline gap-3">
                <span className="font-myeongjo text-[11px] tracking-widest text-moss">
                  {item.category}
                </span>
                <h3 className="font-myeongjo text-base text-ink md:text-lg">
                  {item.question}
                </h3>
              </div>
              <span
                className={`inline-block h-px w-5 shrink-0 bg-ink transition-transform ${
                  open ? "rotate-0" : "rotate-90"
                }`}
                aria-hidden
              />
            </button>

            <AnimatePresence initial={false}>
              {open && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <p className="pb-5 text-sm leading-relaxed text-ink-soft">
                    {item.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </li>
        );
      })}
    </ul>
  );
}
