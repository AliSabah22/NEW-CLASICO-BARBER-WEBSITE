"use client";

import { useState, useRef, useLayoutEffect } from "react";
import { ChevronDown } from "lucide-react";
import clsx from "clsx";

const services = [
  {
    category: "Clasico Services",
    items: [
      { name: "Clasico Haircut", price: "$35" },
      { name: "Clasico Haircut & Beard", price: "$45" },
      { name: "Clasico Haircut & Beard & Face Wax", price: "$55" },
      { name: "Clasico Haircut & Beard & Face Wax & Threading", price: "$65" },
      { name: "Clasico Haircut & Beard & Face Wax & Threading & Hair Color", price: "$75" },
      { name: "Clasico Haircut & Beard & Face Wax & Threading & Hair Color & Hair Treatment", price: "$85" },
      { name: "Clasico Haircut & Beard & Face Wax & Threading & Hair Color & Hair Treatment & Hair Styling", price: "$95" },
    ],
  },
  {
    category: "Side Fades",
    items: [
      { name: "Side Fade", price: "$30" },
      { name: "Side Fade & Beard", price: "$40" },
      { name: "Side Fade & Beard & Face Wax", price: "$50" },
      { name: "Side Fade & Beard & Face Wax & Threading", price: "$60" },
      { name: "Side Fade & Beard & Face Wax & Threading & Hair Color", price: "$70" },
      { name: "Side Fade & Beard & Face Wax & Threading & Hair Color & Hair Treatment", price: "$80" },
      { name: "Side Fade & Beard & Face Wax & Threading & Hair Color & Hair Treatment & Hair Styling", price: "$90" },
    ],
  },
  {
    category: "Face Waxing/Threading",
    items: [
      { name: "Face Wax", price: "$20" },
      { name: "Face Threading", price: "$25" },
      { name: "Face Wax & Threading", price: "$35" },
    ],
  },
  {
    category: "Beard Services",
    items: [
      { name: "Beard Trim", price: "$15" },
      { name: "Beard Trim & Shape", price: "$25" },
      { name: "Beard Trim & Shape & Color", price: "$35" },
    ],
  },
];

export default function ServicesAccordion() {
  const [openCategory, setOpenCategory] = useState<string | null>(null);
  const contentRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [headerHeights, setHeaderHeights] = useState<number[]>([]);
  const [contentHeights, setContentHeights] = useState<number[]>([]);

  useLayoutEffect(() => {
    setHeaderHeights(
      contentRefs.current.map((el) => (el ? el.previousElementSibling?.clientHeight || 64 : 64))
    );
    setContentHeights(
      contentRefs.current.map((el) => (el ? el.scrollHeight : 0))
    );
  }, [openCategory]);

  return (
    <div className="py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((category, idx) => {
          const isOpen = openCategory === category.category;
          const headerHeight = headerHeights[idx] || 64;
          const contentHeight = contentHeights[idx] || 0;
          return (
            <div
              key={category.category}
              className={clsx(
                'w-full bg-black/95 rounded-lg shadow-xl border overflow-hidden transition-all duration-300',
                isOpen ? 'border-gold/40 scale-105' : 'border-gold/20 hover:border-gold/30'
              )}
              style={{ minHeight: 0, paddingBottom: 0, height: isOpen ? headerHeight + contentHeight : headerHeight, boxShadow: isOpen ? '0 8px 32px 0 rgba(212,175,55,0.15)' : '0 2px 8px 0 rgba(212,175,55,0.05)', borderColor: isOpen ? '#D4AF37' : 'rgba(212,175,55,0.2)' }}
            >
              <div
                className="flex items-center justify-between px-6 py-4 cursor-pointer select-none"
                onClick={() => setOpenCategory(isOpen ? null : category.category)}
                style={{ minHeight: 64 }}
              >
                <span className="text-lg font-bold text-gold font-display">{category.category}</span>
                <ChevronDown className={clsx('w-6 h-6 text-gold transition-transform duration-300', isOpen && 'rotate-180')} />
              </div>
              <div
                ref={el => { contentRefs.current[idx] = el; }}
                style={{
                  opacity: isOpen ? 1 : 0,
                  pointerEvents: isOpen ? 'auto' : 'none',
                  transition: 'opacity 0.3s',
                  height: isOpen ? contentHeight : 0,
                  overflow: 'hidden',
                }}
              >
                {isOpen && (
                  <div className="px-6 pb-4 space-y-3 animate-fade-in">
                    {category.items.map((item, index) => (
                      <div
                        key={item.name}
                        className="flex justify-between items-center py-2 border-b border-gold/10 last:border-0 animate-fade-in"
                        style={{ animationDelay: `${index * 0.05}s` }}
                      >
                        <span className="text-white/90 font-inter">{item.name}</span>
                        <span className="text-gold font-inter">{item.price}</span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
} 