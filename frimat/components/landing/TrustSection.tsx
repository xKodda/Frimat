import React from "react";

const TOP_CLIENTS = [
  "CODELCO",
  "ACCIONA",
  "SALFA",
  "CMPC",
  "TECSA",
  "BESALCO",
  "SIGDO KOPPERS",
  "AGROZZI",
  "INIMA",
  "OHLA-ME"
];

export function TrustSection() {
  return (
    <section className="py-16 bg-white border-y border-zinc-100 overflow-hidden relative">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-8 text-center relative z-20">
        <h3 className="text-xs font-bold text-zinc-400 uppercase tracking-[0.2em]">
          Confiamos y colaboramos con líderes de la industria
        </h3>
      </div>

      <div className="flex w-fit animate-marquee hover:[animation-play-state:paused] transition-all duration-300">
        {/* We map twice to create an infinite scroll effect */}
        {[...TOP_CLIENTS, ...TOP_CLIENTS, ...TOP_CLIENTS].map((client, idx) => (
          <div
            key={idx}
            className="flex items-center justify-center px-12 md:px-20 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <span className="text-xl md:text-3xl font-black tracking-tighter text-zinc-800 whitespace-nowrap">
              {client}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
