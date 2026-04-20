import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 bg-zinc-50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
              Experiencia en Terreno
            </h2>
            <p className="text-zinc-600 font-medium text-lg max-w-2xl">
              Nuestro respaldo es la ejecución. Trabajamos directamente como subcontrato especialista bajo los más altos estándares constructivos.
            </p>
          </div>
          <div className="text-xs text-brand font-semibold tracking-wider uppercase mb-1">
            /* Formato Portafolio Técnico */
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Project 1 */}
          <div className="group relative bg-white border border-zinc-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative h-80 w-full overflow-hidden bg-zinc-200">
              <Image src="/fundaciones-mineras-norte.png" alt="Proyecto Minero" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-zinc-950 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Minería</div>
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">Proyecto Minero Norte</h3>
              <h4 className="text-brand font-bold uppercase text-sm tracking-wider mb-4">Subcontrato: Enfierradura y Moldaje</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-zinc-100 text-zinc-600 text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">Subcontrato en obra de gran escala</span>
              </div>
              <p className="text-zinc-600 mb-8 font-medium leading-relaxed">
                Ejecución de fundaciones masivas y muros de contención. Trabajo bajo estrictas normativas de seguridad, cumpliendo protocolos de liberación exigentes.
              </p>
              <button className="flex items-center gap-2 text-zinc-900 font-bold hover:text-brand transition-colors group/btn">
                Ver detalle del proyecto <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Project 2 */}
          <div className="group relative bg-white border border-zinc-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative h-80 w-full overflow-hidden bg-zinc-200">
              <Image src="/infraestructura-vial-sector4.png" alt="Infraestructura Vial" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-zinc-950 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Infraestructura</div>
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">Estructuras Viales Sector 4</h3>
              <h4 className="text-brand font-bold uppercase text-sm tracking-wider mb-4">Subcontrato: Hormigonado Complejo</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-zinc-100 text-zinc-600 text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">Ejecución bajo estándares exigentes</span>
              </div>
              <p className="text-zinc-600 mb-8 font-medium leading-relaxed">
                Construcción de cepas y tableros para paso sobre nivel. Coordinación de vaciado ininterrumpido y control de curado bajo especificaciones técnicas.
              </p>
              <button className="flex items-center gap-2 text-zinc-900 font-bold hover:text-brand transition-colors group/btn">
                Ver detalle del proyecto <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
          
          {/* Project 3 - Span 2 cols */}
          <div className="group md:col-span-2 relative bg-white border border-zinc-200 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row">
            <div className="relative h-80 md:h-auto md:w-1/2 overflow-hidden bg-zinc-200">
              <Image src="/tunel-lo-ruiz-obras-civiles.png" alt="Túnel Lo Ruiz Obras Civiles" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-zinc-950 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Obras Civiles</div>
            </div>
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">Obra: Túnel Lo Ruiz</h3>
              <h4 className="text-brand font-bold uppercase text-sm tracking-wider mb-4">Subcontrato: Obra Gruesa Completa</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-zinc-100 text-zinc-600 text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">Subcontrato en obra vial de gran envergadura</span>
              </div>
              <p className="text-zinc-600 mb-8 font-medium leading-relaxed">
                Ejecución de obras civiles asociadas a estructuras de hormigón armado, incluyendo enfierradura de alta densidad y sistemas de moldaje para elementos estructurales. Proyecto desarrollado en conjunto con OHLA, cumpliendo con altos estándares de calidad, seguridad y plazos exigentes propios de infraestructura crítica.
              </p>
              <button className="flex items-center gap-2 text-zinc-900 font-bold hover:text-brand transition-colors group/btn w-fit">
                Ver detalle del proyecto <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
