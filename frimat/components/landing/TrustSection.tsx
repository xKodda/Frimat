import { BadgeCheck, Building2 } from "lucide-react";

export function TrustSection() {
  return (
    <section className="py-20 bg-zinc-50 border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
        <h3 className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-10">Mantenemos estándares exigidos por</h3>
        
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-24 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          {/* Logos Placeholders */}
          <div className="flex items-center gap-3 font-bold text-xl text-zinc-700">
            <Building2 className="w-8 h-8" /> CONSTRUCTORA MACRO
          </div>
          <div className="flex items-center gap-3 font-black text-2xl tracking-tighter text-zinc-700">
            <BadgeCheck className="w-8 h-8 text-zinc-800" /> INGENIERÍA SUR
          </div>
          <div className="flex items-center gap-3 font-serif italic text-2xl text-zinc-700">
            <span className="w-8 h-8 rounded-sm bg-zinc-700 text-white flex items-center justify-center font-sans not-italic text-sm">V</span>
            Vialidad Corp
          </div>
            <div className="flex items-center gap-3 font-bold text-xl text-zinc-700 tracking-widest">
            NORTEMINERA
          </div>
        </div>

        <div className="mt-16 text-xs text-zinc-400 font-semibold tracking-wider uppercase">
          * Cumplimos con certificaciones ISO 9001 e integrados de matriz de seguridad
        </div>
      </div>
    </section>
  );
}
