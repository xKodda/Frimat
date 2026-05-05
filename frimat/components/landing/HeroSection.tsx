"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative w-full h-[100dvh] min-h-[600px] md:h-[95vh] md:min-h-[700px] flex flex-col bg-zinc-950 overflow-hidden">
      <motion.div 
        className="absolute inset-0"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
      >
        <Image 
          src="/hero-estructural-principal.png" 
          alt="Obra estructural de gran escala" 
          fill 
          className="object-cover opacity-60" 
          priority 
        />
      </motion.div>
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/98 via-zinc-950/60 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-zinc-950/30 z-0"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_50%,rgba(249,115,22,0.05),transparent_50%)] z-0"></div>
      <div className="absolute inset-0 bg-grid-pattern-dark opacity-10 z-0 mix-blend-overlay"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center items-start pb-20 pt-28 md:pt-0">
        <motion.div
           initial={{ opacity: 0, x: -20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 0.8, delay: 0.1 }}
           className="bg-brand/10 backdrop-blur-sm border border-brand/20 px-3 py-1 rounded-full mb-8"
        >
          <span className="text-brand font-bold tracking-widest uppercase text-[10px] md:text-xs flex items-center gap-2">
            <span className="w-2 h-2 bg-brand rounded-full animate-pulse"></span> 
            Líderes en Construcción Industrial desde 2001
          </span>
        </motion.div>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          className="text-5xl md:text-7xl lg:text-8xl font-black text-white leading-[0.95] max-w-4xl tracking-tighter mb-8"
        >
          Ingeniería que <br/>
          <span className="text-brand">Construye Futuro</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-zinc-300 max-w-2xl mb-12 font-light leading-relaxed"
        >
          Especialistas en montaje industrial, obras civiles de gran escala y soluciones integrales para la minería y energía.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto"
        >
          <a href="#proyectos" className="bg-brand hover:bg-brand-hover text-white px-10 py-5 font-bold transition-all duration-300 flex items-center justify-center gap-3 text-center text-sm md:text-base shadow-glow hover:shadow-brand/40 hover:-translate-y-1 group">
            Portafolio de Proyectos
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </a>
          <a href="#contacto" className="glass-panel-dark text-white hover:bg-white/10 px-10 py-5 font-bold transition-all duration-300 flex items-center justify-center text-center text-sm md:text-base border border-white/20 hover:-translate-y-1 hover:shadow-xl hover:shadow-white/5">
            Agendar Consultoría Técnica
          </a>
        </motion.div>
      </div>
    </section>
  );
}
