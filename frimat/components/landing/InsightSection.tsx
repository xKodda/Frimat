"use client";
import { CheckCircle2, FileCheck2 } from "lucide-react";
import { motion } from "framer-motion";

export function InsightSection() {
  return (
    <section className="py-24 bg-zinc-950 text-white relative overflow-hidden">
      {/* Abstract Background Element */}
      <div className="absolute -top-32 -right-32 w-96 h-96 bg-brand opacity-10 rounded-full blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] bg-brand opacity-5 rounded-full blur-[100px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10 flex flex-col md:flex-row gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2"
        >
          <div className="text-brand font-bold tracking-widest uppercase text-sm mb-4">Nuestra Diferencia</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            Compromiso con el <br/> Rigor Técnico
          </h2>
          <div className="space-y-6">
            {[
              "Ejecución de obra gruesa bajo estándares internacionales de calidad.",
              "Equipo técnico altamente calificado y con vasta experiencia en minería.",
              "Cumplimiento garantizado de plazos críticos y metas de producción.",
              "Protocolos de seguridad de clase mundial con tasa cero de incidentes.",
              "Soporte de ingeniería constante durante todas las fases del proyecto."
            ].map((item, i) => (
              <motion.div 
                custom={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                key={i} 
                className="flex gap-4 items-start"
              >
                <CheckCircle2 className="w-6 h-6 text-brand shrink-0 mt-1" />
                <p className="text-zinc-300 font-medium text-lg leading-relaxed">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="md:w-1/2 max-w-sm ml-auto"
        >
          <div className="bg-zinc-900/50 backdrop-blur-md border border-white/5 p-8 relative rounded-sm">
            <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-brand text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest shadow-lg">
              Excelencia Operativa
            </div>
            <FileCheck2 className="w-8 h-8 text-brand mb-6" />
            <p className="text-zinc-400 font-medium italic mb-2 leading-relaxed text-sm">
              "Para Frimat, la ingeniería no es solo un plano; es la base de cada estructura que levantamos. Nuestra obsesión por el detalle nos permite entregar resultados que superan las expectativas de los mandantes más exigentes del país."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
