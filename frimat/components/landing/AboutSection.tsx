"use client";
import React from "react";
import { motion } from "framer-motion";
import { Target, Eye, Shield, Award } from "lucide-react";

export function AboutSection() {
  return (
    <section id="nosotros" className="py-24 bg-white relative overflow-hidden bg-dots-pattern">
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-full opacity-[0.02] pointer-events-none select-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-brand rounded-full blur-[120px]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <span className="text-brand font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Nuestra Empresa</span>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter">
            Compromiso con la <br/> <span className="text-brand">Excelencia Constructiva</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
          {/* Misión */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group p-8 md:p-12 glass-panel border-zinc-100 hover:border-brand/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-zinc-200/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Target className="w-32 h-32 text-zinc-950" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-brand/10 flex items-center justify-center rounded-xl mb-8 group-hover:scale-110 transition-transform duration-500">
                <Target className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-3xl font-black text-zinc-900 mb-6 tracking-tight italic uppercase">Misión</h3>
              <p className="text-zinc-500 font-light text-lg leading-relaxed">
                Ser una empresa multidisciplinaria; gestionar y construir proyectos de alta calidad incorporando en estos los recursos necesarios para otorgar confiabilidad y seguridad a nuestros clientes. Buscamos incursionar en nuevas áreas, especialidades y asociaciones; así poder proyectarnos a nuevos mercados.
              </p>
            </div>
          </motion.div>

          {/* Visión */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="group p-8 md:p-12 glass-panel border-zinc-100 hover:border-brand/30 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-zinc-200/50 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
              <Eye className="w-32 h-32 text-zinc-950" />
            </div>
            
            <div className="relative z-10">
              <div className="w-16 h-16 bg-brand/10 flex items-center justify-center rounded-xl mb-8 group-hover:scale-110 transition-transform duration-500">
                <Eye className="w-8 h-8 text-brand" />
              </div>
              <h3 className="text-3xl font-black text-zinc-900 mb-6 tracking-tight italic uppercase">Visión</h3>
              <p className="text-zinc-500 font-light text-lg leading-relaxed">
                Ser una empresa de proyectos constructivos de alta calidad, reconocido a nivel nacional, no solo como tales, sino que tener la satisfacción de nuestros clientes. Ser una empresa comprometida con la Calidad, Seguridad, Eficiencia y Eficacia, de tal manera que se entregue una asesoría optima para crear una relación directa y confiable.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Operational Values Mini Section */}
        <div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40">
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-zinc-500">
            <Shield className="w-4 h-4" /> Seguridad Industrial
          </div>
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-zinc-500">
            <Award className="w-4 h-4" /> Calidad Certificada
          </div>
          <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-zinc-500">
            <Award className="w-4 h-4" /> Eficiencia Operativa
          </div>
        </div>
      </div>
    </section>
  );
}
