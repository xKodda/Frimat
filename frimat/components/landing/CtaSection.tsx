import { ArrowRight } from "lucide-react";

export function CtaSection() {
  return (
    <section id="contacto" className="py-32 bg-white relative">
      <div className="max-w-4xl mx-auto px-6 md:px-12 text-center">
        <h2 className="text-4xl md:text-6xl font-extrabold text-zinc-900 tracking-tight mb-6">
          Respalda tu empresa frente a proyectos de gran escala
        </h2>
        <p className="text-xl text-zinc-600 mb-12 font-medium max-w-2xl mx-auto leading-relaxed">
          Convierte tu experiencia en una herramienta concreta para cerrar nuevos contratos.
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <button className="bg-brand hover:bg-brand-hover text-white px-8 py-5 font-bold transition-all text-lg flex justify-center items-center gap-3 shadow-xl shadow-brand/20">
            Coordinar reunión técnica <ArrowRight className="w-5 h-5"/>
          </button>
          <button className="bg-zinc-900 hover:bg-black text-white px-8 py-5 font-bold transition-all text-lg flex justify-center items-center">
            Solicitar presentación
          </button>
        </div>
        <div className="mt-8 text-sm text-zinc-500 font-medium">
          Muestra confianza operativa desde el primer contacto.
        </div>
      </div>
    </section>
  );
}
