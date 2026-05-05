"use client";
import { motion, Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export function FeaturesSection() {
  return (
    <section id="servicios" className="py-24 bg-white border-y border-zinc-200 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tighter mb-4">
            Áreas de Interés
          </h2>
          <p className="text-zinc-500 font-light text-lg max-w-3xl mx-auto leading-relaxed">
            Nuestra especialización abarca diversos sectores estratégicos, garantizando soluciones constructivas de alta calidad en cada uno.
          </p>
        </motion.div>

        <motion.div 
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {[
            {
              title: "Centros Comerciales",
              desc: "Experiencia en ejecución de grandes plataformas retail con altos estándares de tráfico y acabado."
            },
            {
              title: "Edificación No Residencial",
              desc: "Infraestructura institucional, de salud y servicios con rigurosos requerimientos normativos."
            },
            {
              title: "Obras Hidráulicas",
              desc: "Plantas de tratamiento de aguas y sistemas de conducción de gran envergadura."
            },
            {
              title: "Obras Industriales",
              desc: "Estructuras para procesos industriales complejos y montajes de alta ingeniería."
            },
            {
              title: "Energía",
              desc: "Infraestructura para generación, transmisión y subestaciones eléctricas."
            },
            {
              title: "Minería",
              desc: "Ejecución de obras subterráneas y de superficie bajo estrictos estándares de seguridad minera."
            }
          ].map((feature, i) => (
            <motion.div 
              key={i}
              variants={item} 
              className="bg-white p-8 border border-zinc-200 hover:border-brand transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-zinc-200/50 group flex flex-col justify-between"
            >
              <div>
                <h3 className="text-xl font-black text-zinc-900 mb-3 uppercase tracking-tight leading-tight">
                  {feature.title}
                </h3>
                <p className="text-zinc-500 text-sm font-light leading-relaxed">
                  {feature.desc}
                </p>
              </div>
              <div className="mt-6 w-8 h-[2px] bg-zinc-200 group-hover:w-full group-hover:bg-brand transition-all duration-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
