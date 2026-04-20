"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/95 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 md:px-12 flex items-center justify-between h-20 md:h-24">
        {/* Contenedor del Logo con fondo blanco para que se sienta como una "placa" o sello */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-2 md:p-2.5 rounded shadow-lg border border-white/10">
            <Image 
              src="/logoFrimat.jpeg" 
              alt="Frimat Logo" 
              width={180} 
              height={60} 
              className="w-auto h-7 md:h-11 object-contain"
              priority
            />
          </div>
        </div>
        
        {/* Navegación Desktop */}
        <div className="hidden md:flex items-center gap-8 text-sm font-bold tracking-wide text-zinc-400">
          <a href="#nosotros" className="hover:text-white transition-colors uppercase">La Empresa</a>
          <a href="#servicios" className="hover:text-white transition-colors uppercase">Ejecución</a>
          <a href="#proyectos" className="hover:text-white transition-colors uppercase">Proyectos</a>
        </div>
        
        {/* CTA Contacto Desktop */}
        <div className="hidden md:flex items-center">
          <a href="#contacto" className="bg-brand hover:bg-brand-hover text-white px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all">
            Contacto
          </a>
        </div>

        {/* Mobile Toggle & CTA */}
        <div className="flex md:hidden items-center gap-3">
          <a href="#contacto" className="bg-brand hover:bg-brand-hover text-white px-4 py-2 text-[10px] sm:text-xs font-bold uppercase tracking-wider transition-all">
            Contacto
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-1">
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-zinc-950 border-b border-white/10 p-6 flex flex-col gap-6 shadow-2xl pb-8">
          <a href="#nosotros" onClick={() => setIsOpen(false)} className="text-zinc-300 font-bold hover:text-white uppercase tracking-wider">La Empresa</a>
          <a href="#servicios" onClick={() => setIsOpen(false)} className="text-zinc-300 font-bold hover:text-white uppercase tracking-wider">Ejecución</a>
          <a href="#proyectos" onClick={() => setIsOpen(false)} className="text-zinc-300 font-bold hover:text-white uppercase tracking-wider">Proyectos</a>
        </div>
      )}
    </nav>
  );
}
