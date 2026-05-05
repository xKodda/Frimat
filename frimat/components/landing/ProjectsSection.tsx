"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Building2, Droplets, Landmark } from "lucide-react";

const CATEGORIES = [
  {
    id: "industriales",
    name: "Obras Industriales e Infraestructuras",
    icon: Building2,
    projects: [
      "Planta Celulosa Santa Fe CMPC Nacimiento (TECSA)",
      "Laminador de Barra Talcahuano CAP (SALFA)",
      "Planta Agrozzi Biorreactor Teno (AGROZZI)",
      "Planta de Hidrogeno Verde Haru Oni (SALFA)",
      "Mejoramiento Cuesta Las Chilcas (FCC)",
      "Autopista Costanera Norte (BESALCO-FE GRANDE)"
    ]
  },
  {
    id: "energia",
    name: "Energía",
    icon: Droplets,
    projects: [
      "Central Hidroeléctrica La Confluencia (HOFTIEF TECSA)",
      "Central Hidroeléctrica La Higuera (QUEIROZ GALBAO)",
      "Central Hidroeléctrica San Andres (ACCIONA)",
      "Central Termoeléctrica Campiche (SALFA MONTAJES)",
      "Central Hidroeléctrica Laja (MAS ERRAZURIZ)"
    ]
  },
  {
    id: "mineria",
    name: "Minería",
    icon: Landmark,
    projects: [
      "Planta de Tratamiento Efluentes Arauco (ECHVI MONTAJE)",
      "Subestación Traful Codelco El Teniente (SALFA MONTAJES)",
      "Tanque en Tierra GNL Mejillones (BALZOLA)",
      "Planta Desalinizadora Atacama (INIMA- CVV)",
      "Evacuador Etapa 4 Tranque El Mauro Minera Los Pelambres (OHLA-ME)",
      "Fundaciones Observatorio E-ELT Armazones (CIMOLAI)"
    ]
  },
  {
    id: "comercial",
    name: "Centros Comerciales",
    icon: Building2,
    projects: [
      "Mall Costanera Center (Salfa)",
      "Mall Florida Center (Neut Latour)",
      "Mall Plaza Los Dominicos (Sigro)",
      "Mall Plaza Egaña (Sigro)",
      "Mall Plaza Sur (Tecsa)",
      "Mall Portal La Dehesa (Tecsa)",
      "Mall Plaza Antofagasta (Tecsa)",
      "Mall Vivo Coquimbo (Tecsa)",
      "Mall Plaza Alameda (Sigro)",
      "Mall Plaza Copiapó (Besalco)"
    ]
  },
  {
    id: "hidraulicas",
    name: "Obras Hidráulicas",
    icon: Droplets,
    projects: [
      "Planta de Tratamiento de Aguas Servidas La Farfana (Tecsa - Sigdo Koppers)",
      "Planta de Tratamiento de Aguas Servidas El Trebal Etapa 1 (Tecsa)",
      "Planta de Tratamiento de Aguas Servidas El Trebal Etapa 2 (Compax Dragado)",
      "Planta de Tratamiento de Aguas Servidas Temuco (CVV)"
    ]
  }
];

const FEATURED_PROJECTS = [
  {
    title: "Mall Costanera Center",
    client: "SALFA",
    category: "Centros Comerciales",
    image: "/hero-estructural-principal.png",
  },
  {
    title: "Planta de Hidrógeno Verde Haru Oni",
    client: "SALFA",
    category: "Obras Industriales",
    image: "/infraestructura-vial-sector4.png",
  },
  {
    title: "Subestación Traful Codelco El Teniente",
    client: "SALFA MONTAJES",
    category: "Minería",
    image: "/fundaciones-mineras-norte.png",
  },
  {
    title: "Autopista Costanera Norte",
    client: "BESALCO - FE GRANDE",
    category: "Infraestructura",
    image: "/tunel-lo-ruiz-obras-civiles.png",
  }
];

export function ProjectsSection() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id);

  return (
    <section id="proyectos" className="py-24 bg-zinc-50 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <span className="text-brand font-bold tracking-[0.3em] uppercase text-xs mb-4 block">Proyectos Emblemáticos</span>
          <h2 className="text-4xl md:text-6xl font-black text-zinc-900 tracking-tighter">
            Obras de <br /> <span className="text-brand">Alto Impacto</span>
          </h2>
        </motion.div>

        {/* Vitrina de Proyectos Destacados */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-32">
          {FEATURED_PROJECTS.map((project, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative overflow-hidden bg-zinc-950 ${idx === 0 || idx === 3 ? 'md:aspect-[16/9]' : 'md:aspect-[4/3]'} aspect-square`}
            >
              <Image 
                src={project.image}
                alt={project.title}
                fill
                className="object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent pointer-events-none"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                <span className="inline-block px-3 py-1 bg-brand text-white text-xs font-bold uppercase tracking-wider mb-4 shadow-lg">
                  {project.category}
                </span>
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 leading-tight">
                  {project.title}
                </h3>
                <p className="text-zinc-300 font-medium text-sm md:text-base flex items-center gap-2">
                  <span className="w-4 h-[2px] bg-brand inline-block"></span> Cliente: {project.client}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mb-16 text-center md:text-left">
          <span className="text-zinc-500 font-bold tracking-[0.2em] uppercase text-xs mb-2 block">Experiencia Consolidada</span>
          <h3 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight">Archivo de Obras Ejecutadas</h3>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Menu Categories */}
          <div className="lg:w-1/3 flex flex-col gap-4">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-4 p-6 text-left transition-all duration-300 border ${activeTab === cat.id
                    ? "bg-zinc-950 text-white border-zinc-950 shadow-xl translate-x-2"
                    : "bg-white text-zinc-500 border-zinc-200 hover:border-brand/50"
                  }`}
              >
                <cat.icon className={`w-6 h-6 ${activeTab === cat.id ? "text-brand" : "text-zinc-400"}`} />
                <span className="font-black uppercase tracking-widest text-xs md:text-sm">{cat.name}</span>
              </button>
            ))}
          </div>

          {/* Projects Display */}
          <div className="lg:w-2/3 bg-white border border-zinc-200 p-8 md:p-12 shadow-2xl min-h-[500px] relative overflow-hidden">
            <div className="absolute top-0 right-0 p-8 opacity-5">
              <Building2 className="w-64 h-64 text-zinc-950" />
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.5 }}
                className="relative z-10"
              >
                <h3 className="text-2xl font-black text-zinc-900 mb-8 uppercase italic flex items-center gap-3">
                  <span className="w-10 h-[2px] bg-brand"></span>
                  {CATEGORIES.find(c => c.id === activeTab)?.name}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-4">
                  {CATEGORIES.find(c => c.id === activeTab)?.projects.map((project, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="flex items-start gap-3 group"
                    >
                      <div className="w-2 h-2 bg-brand rounded-full mt-2 shrink-0 group-hover:scale-125 transition-transform"></div>
                      <span className="text-zinc-700 font-bold text-sm md:text-base leading-tight group-hover:text-zinc-950 transition-colors uppercase">
                        {project}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
