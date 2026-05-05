export function MetricsSection() {
  return (
    <section className="bg-zinc-950 border-y border-white/5 py-20 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/5 rounded-full blur-[120px] -mr-64 -mt-64"></div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
          <div className="flex flex-col group cursor-default">
            <span className="text-6xl md:text-7xl font-black text-white group-hover:text-brand transition-colors duration-500 mb-4 leading-none">25<span className="text-brand text-3xl md:text-4xl ml-1">+</span></span>
            <span className="text-zinc-500 font-bold text-xs uppercase tracking-[0.2em] leading-relaxed">
              Años de Experiencia <br/> Consolidada
            </span>
          </div>
          <div className="flex flex-col group cursor-default">
            <span className="text-6xl md:text-7xl font-black text-white group-hover:text-brand transition-colors duration-500 mb-4 leading-none">500<span className="text-brand text-3xl md:text-4xl ml-1">k</span></span>
            <span className="text-zinc-500 font-bold text-xs uppercase tracking-[0.2em] leading-relaxed">
              m³ de Hormigón <br/> Estructural
            </span>
          </div>
          <div className="flex flex-col group cursor-default">
            <span className="text-6xl md:text-7xl font-black text-white group-hover:text-brand transition-colors duration-500 mb-4 leading-none">120<span className="text-brand text-3xl md:text-4xl ml-1">+</span></span>
            <span className="text-zinc-500 font-bold text-xs uppercase tracking-[0.2em] leading-relaxed">
              Proyectos de <br/> Gran Escala
            </span>
          </div>
          <div className="flex flex-col group cursor-default">
            <span className="text-6xl md:text-7xl font-black text-white group-hover:text-brand transition-colors duration-500 mb-4 leading-none">0</span>
            <span className="text-zinc-500 font-bold text-xs uppercase tracking-[0.2em] leading-relaxed">
              Incidentes de <br/> Seguridad Críticos
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
