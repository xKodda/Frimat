"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-panel-dark border-b border-white/5 transition-all duration-500">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-20 md:h-24">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <a href="#" className="flex items-center">
            <Image 
              src="/logoFrimat.jpeg" 
              alt="Frimat Logo" 
              width={180} 
              height={60} 
              className="w-auto h-10 md:h-12 object-contain brightness-110 contrast-125"
              priority
            />
          </a>
        </div>
        
        {/* Navegación Desktop */}
        <div className="hidden md:flex items-center gap-10 text-xs font-bold tracking-[0.2em] text-zinc-400">
          <a href="#nosotros" className="hover:text-brand transition-colors uppercase relative group">
            La Empresa
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#servicios" className="hover:text-brand transition-colors uppercase relative group">
            Ejecución
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full"></span>
          </a>
          <a href="#proyectos" className="hover:text-brand transition-colors uppercase relative group">
            Proyectos
            <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-brand transition-all duration-300 group-hover:w-full"></span>
          </a>
        </div>
        
        {/* CTA Contacto Desktop */}
        <div className="hidden md:flex items-center">
          <a href="#contacto" className="bg-brand hover:bg-brand-hover text-white px-8 py-3.5 text-xs font-bold uppercase tracking-widest transition-all shadow-glow hover:shadow-brand/20">
            Iniciar Propuesta
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="flex md:hidden items-center">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <div className={`md:hidden absolute top-full left-0 w-full bg-zinc-950/98 backdrop-blur-2xl border-b border-white/5 transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[300px] opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="p-8 flex flex-col gap-6">
          <a href="#nosotros" onClick={() => setIsOpen(false)} className="text-zinc-300 font-bold hover:text-brand uppercase tracking-[0.2em] text-xs">La Empresa</a>
          <a href="#servicios" onClick={() => setIsOpen(false)} className="text-zinc-300 font-bold hover:text-brand uppercase tracking-[0.2em] text-xs">Ejecución</a>
          <a href="#proyectos" onClick={() => setIsOpen(false)} className="text-zinc-300 font-bold hover:text-brand uppercase tracking-[0.2em] text-xs">Proyectos</a>
          <a href="#contacto" onClick={() => setIsOpen(false)} className="bg-brand text-white p-4 text-center font-bold uppercase tracking-widest text-xs">Contacto</a>
        </div>
      </div>
    </nav>
  );
}
