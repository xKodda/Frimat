import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative w-full h-[95vh] min-h-[700px] flex flex-col bg-zinc-950">
      <div className="absolute inset-0">
        <Image 
          src="/hero-estructural-principal.png" 
          alt="Obra estructural de gran escala" 
          fill 
          className="object-cover opacity-60" 
          priority 
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/50 to-transparent"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent"></div>
      

      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center items-start animate-fade-in-up pb-20">
        <span className="text-brand font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2">
          <span className="w-8 h-[2px] bg-brand"></span> Ejecución en Terreno
        </span>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] max-w-4xl tracking-tight mb-8">
          Ejecución estructural confiable para proyectos de gran escala
        </h1>
        <p className="text-xl md:text-2xl text-white max-w-3xl mb-4 font-semibold leading-relaxed">
          Especialistas en subcontratos para proyectos de gran escala en minería, infraestructura y obras civiles.
        </p>
        <p className="text-lg md:text-xl text-zinc-400 max-w-2xl mb-12 font-medium leading-relaxed">
          Coordinación de faenas con cumplimiento estricto de plazos, seguridad y estándares técnicos en terreno.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-5 w-full sm:w-auto">
          <a href="#proyectos" className="bg-brand hover:bg-brand-hover text-white px-8 py-4 font-semibold transition-all flex items-center justify-center gap-2">
            Ver proyectos ejecutados
            <ArrowRight className="w-5 h-5" />
          </a>
          <a href="#contacto" className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 font-semibold transition-all flex items-center justify-center">
            Coordinar reunión técnica
          </a>
        </div>
      </div>
    </section>
  );
}
