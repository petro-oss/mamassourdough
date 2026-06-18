"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { n: "10+", label: "Year old starter" },
  { n: "4",   label: "Ingredients" },
  { n: "100%", label: "Handmade" },
  { n: "∞",   label: "Love" },
];

function useCountUp(target: number, duration = 1200, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      setValue(Math.floor(p * target));
      if (p < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [active, target, duration]);
  return value;
}

function StatItem({ n, label }: { n: string; label: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(false);
  const numericTarget = parseInt(n.replace(/\D/g, "")) || 0;
  const count = useCountUp(numericTarget, 1000, active);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setActive(true); observer.disconnect(); } },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const display =
    n === "∞" ? "∞"
    : n.endsWith("+") ? `${count}+`
    : n.endsWith("%") ? `${count}%`
    : `${count}`;

  return (
    <div ref={ref} className="text-center">
      <p className="font-serif text-4xl md:text-5xl italic text-[#2C1A0E]">{display}</p>
      <p className="font-mono text-[9px] tracking-[0.25em] uppercase text-[#8B6347] mt-1">{label}</p>
    </div>
  );
}

export function StatsRow() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-12 border-t border-[#D4BFA8]">
      {stats.map(s => <StatItem key={s.label} {...s} />)}
    </div>
  );
}
