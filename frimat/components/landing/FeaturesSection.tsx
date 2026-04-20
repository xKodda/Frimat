"use client";
import { HardHat, Pickaxe, Settings, ShieldAlert } from "lucide-react";
import { motion } from "framer-motion";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

export function FeaturesSection() {
  return (
    <section className="py-24 bg-white border-y border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
            Capacidad de Ejecución
          </h2>
          <p className="text-zinc-600 font-medium text-lg max-w-2xl mx-auto leading-relaxed">
            Coordinación de faenas con cumplimiento estricto de plazos y estándares técnicos. Control absoluto en el terreno.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-4 gap-8"
        >
          <motion.div variants={item} className="bg-zinc-50 p-8 border border-zinc-200 hover:border-brand transition-colors">
            <Settings className="w-10 h-10 text-brand mb-6" />
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Enfierradura Estructural</h3>
            <p className="text-zinc-600 text-sm font-medium leading-relaxed">Asignación de cuadrillas para armaduras masivas. Lectura de planos y cubicación precisa en obra.</p>
          </motion.div>
          <motion.div variants={item} className="bg-zinc-50 p-8 border border-zinc-200 hover:border-brand transition-colors">
            <HardHat className="w-10 h-10 text-brand mb-6" />
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Moldaje Industrial</h3>
            <p className="text-zinc-600 text-sm font-medium leading-relaxed">Instalación rápida de sistemas industrializados asegurando plomos, alineación y hermeticidad.</p>
          </motion.div>
          <motion.div variants={item} className="bg-zinc-50 p-8 border border-zinc-200 hover:border-brand transition-colors">
            <Pickaxe className="w-10 h-10 text-brand mb-6" />
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Hormigonado</h3>
            <p className="text-zinc-600 text-sm font-medium leading-relaxed">Control de vibrado, vaciado continuo y curado bajo exigentes especificaciones normativas.</p>
          </motion.div>
          <motion.div variants={item} className="bg-zinc-50 p-8 border border-zinc-200 hover:border-brand transition-colors">
            <ShieldAlert className="w-10 h-10 text-brand mb-6" />
            <h3 className="text-xl font-bold text-zinc-900 mb-3">Seguridad y Calidad</h3>
            <p className="text-zinc-600 text-sm font-medium leading-relaxed">Cumplimiento de matrices de riesgo. Protocolos liberados a la primera, minimizando retrabajos.</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
