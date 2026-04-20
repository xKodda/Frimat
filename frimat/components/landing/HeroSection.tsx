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
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-950/50 to-transparent z-0"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-0"></div>
      
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center items-start pb-20 pt-28 md:pt-0">
        <motion.span 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-brand font-bold tracking-widest uppercase text-sm mb-4 flex items-center gap-2"
        >
          <span className="w-8 h-[2px] bg-brand"></span> Más de 25 años de experiencia
        </motion.span>
        
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] max-w-4xl tracking-tight mb-6 md:mb-8"
        >
          Especialistas en Obras Civiles de Gran Envergadura
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-2xl text-white max-w-3xl mb-4 font-semibold leading-relaxed"
        >
          Orientados a la prestación de servicios en Energía, Minería, Centros Comerciales e Industria.
        </motion.p>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-base md:text-xl text-zinc-400 max-w-2xl mb-10 md:mb-12 font-medium leading-relaxed"
        >
          Especialistas en instalación y modulación de encofrados, armado de aceros y vertido de hormigones en grandes cantidades.
        </motion.p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 md:gap-5 w-full sm:w-auto"
        >
          <a href="#proyectos" className="bg-brand hover:bg-brand-hover text-white px-8 py-4 font-semibold transition-all flex items-center justify-center gap-2 text-center text-sm md:text-base">
            Ver proyectos destacados
            <ArrowRight className="w-5 h-5 hidden sm:block" />
          </a>
          <a href="#contacto" className="bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 py-4 font-semibold transition-all flex items-center justify-center text-center text-sm md:text-base">
            Coordinar reunión técnica
          </a>
        </motion.div>
      </div>
    </section>
  );
}
