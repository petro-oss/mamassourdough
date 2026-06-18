"use client";

import { useState } from "react";
import { ScrollReveal } from "./ScrollReveal";

type Benefit = {
  icon: React.ReactNode;
  title: string;
  body: string;
};

export function HealthBenefitsGrid({ benefits }: { benefits: Benefit[] }) {
  const [active, setActive] = useState<string | null>(null);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-5">
      {benefits.map(({ icon, title, body }, i) => {
        const isActive = active === title;
        return (
          <ScrollReveal key={title} delay={i * 60}>
            <button
              onClick={() => setActive(isActive ? null : title)}
              className={`w-full text-left bg-white rounded-2xl p-8 shadow-sm border-b-2 transition-all duration-300 cursor-pointer
                ${isActive
                  ? "border-[#C4852A] shadow-lg scale-[1.02] bg-[#FDF7EF]"
                  : "border-[#4A6741]/30 hover:shadow-md hover:scale-[1.01]"
                }`}
            >
              <div className="w-12 h-12 rounded-full bg-[#C4852A] flex items-center justify-center mb-4">
                {icon}
              </div>
              <h3 className="font-serif text-lg italic text-[#2C1A0E] mb-2">{title}</h3>
              <p className={`font-sans text-sm text-[#8B6347] leading-relaxed transition-all duration-300 ${isActive ? "opacity-100" : "opacity-80"}`}>
                {body}
              </p>
              <p className={`font-mono text-[9px] tracking-[0.15em] uppercase text-[#C4852A] mt-3 transition-opacity duration-200 ${isActive ? "opacity-100" : "opacity-0"}`}>
                tap to close
              </p>
            </button>
          </ScrollReveal>
        );
      })}
    </div>
  );
}
