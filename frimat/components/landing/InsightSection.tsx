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
          <div className="text-brand font-bold tracking-widest uppercase text-sm mb-4">Uso Comercial</div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight mb-8 leading-tight">
            ¿Para qué te sirve esto en la práctica?
          </h2>
          <div className="space-y-6">
            {[
              "Muestra lo que haces sin depender de recomendaciones ni enviar PDF desordenados.",
              "Da peso a tu presentación cuando vas a hablar con el administrador de contrato.",
              "Deja claro que trabajas con estándares altos, ordenando tu imagen de inmediato.",
              "Te ahorra tener que convencerles desde cero sobre tu capacidad técnica.",
              "Filtra dudas del mandante respondiendo visualmente con métricas concretas."
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
          <div className="bg-zinc-900 border border-zinc-800 p-8 relative rounded-sm">
            <div className="absolute top-0 right-0 -mt-3 -mr-3 bg-brand text-white text-[10px] font-bold px-2 py-1 uppercase tracking-widest shadow-lg">
              Insight Estratégico
            </div>
            <FileCheck2 className="w-8 h-8 text-zinc-500 mb-6" />
            <p className="text-zinc-400 font-medium italic mb-2 leading-relaxed text-sm">
              "El mandante decide mucho por percepción inicial. Si ven que tu empresa se presenta con este orden, asumen inmediatamente que en la obra trabajarás con ese mismo rigor, reduciendo la fricción para cerrar el subcontrato."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
