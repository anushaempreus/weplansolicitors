"use client";

import { useRef, useState, type ReactNode } from "react";

export type AccItem = { q: string; a: ReactNode };

export default function Accordion({ items }: { items: AccItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="accordion">
      {items.map((item, i) => (
        <Item
          key={i}
          item={item}
          open={openIndex === i}
          onToggle={() => setOpenIndex(openIndex === i ? null : i)}
        />
      ))}
    </div>
  );
}

function Item({
  item,
  open,
  onToggle,
}: {
  item: AccItem;
  open: boolean;
  onToggle: () => void;
}) {
  const ref = useRef<HTMLDivElement>(null);
  return (
    <div className="acc-item">
      <button
        className={`acc-q ${open ? "open" : ""}`}
        onClick={onToggle}
        aria-expanded={open}
      >
        {item.q}
      </button>
      <div
        className="acc-a"
        style={{ maxHeight: open ? `${ref.current?.scrollHeight ?? 1000}px` : 0 }}
      >
        <div className="acc-a-inner" ref={ref}>
          {item.a}
        </div>
      </div>
    </div>
  );
}
