export function MetricsSection() {
  return (
    <section className="bg-zinc-950 border-b border-zinc-800 text-white py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x-0 md:divide-x divide-zinc-800">
          <div className="flex flex-col items-center md:items-start md:pl-0">
            <span className="text-5xl font-black text-brand mb-2">+15</span>
            <span className="text-zinc-400 font-medium text-sm md:text-base uppercase tracking-wide">Años de experiencia<br/>en obra</span>
          </div>
          <div className="flex flex-col items-center md:items-start md:pl-12">
            <span className="text-5xl font-black text-brand mb-2">+50k</span>
            <span className="text-zinc-400 font-medium text-sm md:text-base uppercase tracking-wide">Toneladas de acero<br/>trabajadas</span>
          </div>
          <div className="flex flex-col items-center md:items-start md:pl-12">
            <span className="text-5xl font-black text-brand mb-2">+120</span>
            <span className="text-zinc-400 font-medium text-sm md:text-base uppercase tracking-wide">Proyectos<br/>ejecutados</span>
          </div>
          <div className="flex flex-col items-center md:items-start md:pl-12">
            <span className="text-5xl font-black text-brand mb-2">100%</span>
            <span className="text-zinc-400 font-medium text-sm md:text-base uppercase tracking-wide">Participación en<br/>gran escala</span>
          </div>
        </div>
      </div>
    </section>
  );
}
