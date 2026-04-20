"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
};

export function ProjectsSection() {
  return (
    <section id="proyectos" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6"
        >
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
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {/* Project 1 */}
          <motion.div variants={item} className="group relative bg-white border border-zinc-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative h-80 w-full overflow-hidden bg-zinc-200">
              <Image src="/fundaciones-mineras-norte.png" alt="Central Hidroeléctrica Laja" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-zinc-950 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Energía</div>
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">Central Hidroeléctrica Laja</h3>
              <h4 className="text-brand font-bold uppercase text-sm tracking-wider mb-4">Mandante: Mas Errázuriz</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-zinc-100 text-zinc-600 text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">Subcontrato de Alta Ingeniería</span>
              </div>
              <p className="text-zinc-600 mb-8 font-medium leading-relaxed">
                Obra de infraestructura energética que incluye trabajos de hormigón y estructuras de gran envergadura para la conducción y control del caudal.
              </p>
              <button className="flex items-center gap-2 text-zinc-900 font-bold hover:text-brand transition-colors group/btn">
                Ver detalle del proyecto <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>

          {/* Project 2 */}
          <motion.div variants={item} className="group relative bg-white border border-zinc-200 overflow-hidden hover:shadow-2xl transition-all duration-300">
            <div className="relative h-80 w-full overflow-hidden bg-zinc-200">
              <Image src="/infraestructura-vial-sector4.png" alt="Mallplaza Los Dominicos" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-zinc-950 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Comercial</div>
            </div>
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-zinc-900 mb-2">Mallplaza Los Dominicos</h3>
              <h4 className="text-brand font-bold uppercase text-sm tracking-wider mb-4">Mandante: SIGRO</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-zinc-100 text-zinc-600 text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">Obra Gruesa de Alto Estándar</span>
              </div>
              <p className="text-zinc-600 mb-8 font-medium leading-relaxed">
                Proyecto comercial de alto estándar. Su desarrollo destacó por la precisión en obra gruesa y la coordinación técnica requerida en entorno urbano.
              </p>
              <button className="flex items-center gap-2 text-zinc-900 font-bold hover:text-brand transition-colors group/btn">
                Ver detalle del proyecto <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
          
          {/* Project 3 - Span 2 cols */}
          <motion.div variants={item} className="group md:col-span-2 relative bg-white border border-zinc-200 overflow-hidden hover:shadow-2xl transition-all duration-300 flex flex-col md:flex-row">
            <div className="relative h-80 md:h-auto md:w-1/2 overflow-hidden bg-zinc-200">
              <Image src="/tunel-lo-ruiz-obras-civiles.png" alt="Túnel Lo Ruiz" fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute top-4 left-4 bg-zinc-950 text-white text-xs font-bold px-3 py-1 uppercase tracking-wider">Obras Civiles</div>
            </div>
            <div className="p-8 md:p-12 md:w-1/2 flex flex-col justify-center">
              <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-2">Túnel Lo Ruiz</h3>
              <h4 className="text-brand font-bold uppercase text-sm tracking-wider mb-4">Mandante: OHLA</h4>
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-zinc-100 text-zinc-600 text-xs font-bold px-2 py-1 rounded-sm uppercase tracking-wider">Obra Vial de Gran Envergadura</span>
              </div>
              <p className="text-zinc-600 mb-8 font-medium leading-relaxed">
                Ejecución de obras civiles asociadas a estructuras de hormigón armado, incluyendo enfierradura de alta densidad y moldaje. Proyecto desarrollado bajo estrictos estándares de calidad y seguridad propios de infraestructura crítica.
              </p>
              <button className="flex items-center gap-2 text-zinc-900 font-bold hover:text-brand transition-colors group/btn w-fit">
                Ver detalle del proyecto <ArrowRight className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
