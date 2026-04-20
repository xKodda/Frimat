"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Calculator, ArrowRight, TrendingUp, Info } from "lucide-react";

type ServiceType = "hormigonado" | "moldaje" | "enfierradura";

const SERVICES = {
  hormigonado: { name: "Hormigonado Estructural", unit: "m³", basePrice: 45000, max: 10000, min: 100, step: 100 },
  moldaje: { name: "Moldaje Industrial", unit: "m²", basePrice: 18000, max: 20000, min: 100, step: 100 },
  enfierradura: { name: "Armado de Enfierradura", unit: "kg", basePrice: 1300, max: 500000, min: 1000, step: 1000 },
};

// Reemplaza con tu número. Ej: "569XXXXXXXX"
const WHATSAPP_NUMBER = "56978785893";

export function CalculatorSection() {
  const [service, setService] = useState<ServiceType>("hormigonado");
  const [volume, setVolume] = useState<number>(SERVICES["hormigonado"].min * 5); // Default start

  const currentService = SERVICES[service];

  // Cálculo referencial
  const minCost = volume * currentService.basePrice;
  const maxCost = minCost * 1.15; // +15% margen de complejidad

  const formatCLP = (val: number) =>
    new Intl.NumberFormat("es-CL", { style: "currency", currency: "CLP", maximumFractionDigits: 0 }).format(val);

  // Generar mensaje automático de WhatsApp
  const whatsappMessage = encodeURIComponent(
    `Hola, he interactuado con el cotizador en línea de su web. Me gustaría consultar por el servicio de *${currentService.name}* para un volumen de *${new Intl.NumberFormat("es-CL").format(volume)} ${currentService.unit}*. El orden de magnitud estimado es de *${formatCLP(minCost)}*. ¿Podemos agendar una reunión?`
  );

  return (
    <section className="py-24 bg-white border-t border-zinc-200">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12 md:mb-16"
        >
           <div className="inline-flex items-center gap-2 px-3 py-1 bg-zinc-100 text-brand text-xs font-bold uppercase tracking-widest rounded-sm mb-4">
            <Calculator className="w-4 h-4" /> Simulador Interactivo
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold text-zinc-900 tracking-tight mb-4">
            Estimador de Presupuesto Inicial
          </h2>
          <p className="text-base md:text-lg text-zinc-600 font-medium max-w-2xl mx-auto leading-relaxed">
            Nuestros clientes no pierden tiempo. Calcule de inmediato un orden de magnitud (CAPEX) para sus partidas de obra gruesa antes de nuestra reunión.
          </p>
        </motion.div>

        <div className="bg-zinc-50 border border-zinc-200 rounded-xl max-w-5xl mx-auto p-6 md:p-12 shadow-xl shadow-zinc-200/50 flex flex-col md:flex-row gap-10 md:gap-12 items-center">
          
          {/* Controles del formulario */}
          <div className="w-full md:w-1/2 space-y-8">
            <div className="space-y-4">
              <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider block">
                1. Seleccione la Partida a Cotizar
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                {(Object.keys(SERVICES) as ServiceType[]).map((key) => (
                  <button
                    key={key}
                    onClick={() => {
                      setService(key);
                      setVolume(SERVICES[key].min * 5);
                    }}
                    className={`py-3 px-2 text-xs font-bold uppercase tracking-wider border transition-all ${
                      service === key 
                        ? "bg-zinc-900 text-white border-zinc-900 shadow-md" 
                        : "bg-white text-zinc-600 border-zinc-200 hover:border-zinc-400"
                    }`}
                  >
                    {SERVICES[key].name}
                  </button>
                ))}
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex justify-between items-end">
                <label className="text-sm font-bold text-zinc-900 uppercase tracking-wider block">
                  2. Ingrese el Volumen / Cubicación
                </label>
                <span className="text-2xl font-black text-brand">
                  {new Intl.NumberFormat("es-CL").format(volume)} <span className="text-sm text-zinc-500">{currentService.unit}</span>
                </span>
              </div>
              <input 
                type="range" 
                min={currentService.min} 
                max={currentService.max} 
                step={currentService.step}
                value={volume}
                onChange={(e) => setVolume(Number(e.target.value))}
                className="w-full h-2 bg-zinc-200 rounded-lg appearance-none cursor-pointer accent-brand"
              />
              <div className="flex justify-between text-xs text-zinc-500 font-medium">
                <span>{new Intl.NumberFormat("es-CL").format(currentService.min)} {currentService.unit}</span>
                <span>{new Intl.NumberFormat("es-CL").format(currentService.max)}+ {currentService.unit}</span>
              </div>
            </div>
          </div>

          {/* Resultado del simulador */}
          <div className="w-full md:w-1/2 p-6 md:p-8 bg-zinc-900 rounded-xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500 pointer-events-none">
              <TrendingUp className="w-32 h-32 text-white" />
            </div>
            
            <div className="relative z-10">
              <h3 className="text-zinc-400 text-xs font-bold uppercase tracking-widest mb-2">Orden de Magnitud Estimado</h3>
              <p className="text-3xl md:text-5xl font-black text-white mb-2 leading-none">
                {formatCLP(minCost)}
              </p>
              <p className="text-zinc-500 text-sm font-medium mb-8">
                Rango proyectado hasta {formatCLP(maxCost)} (±15%) excluye IVA.
              </p>
              
              <div className="bg-white/10 border border-white/20 p-4 rounded mb-8 flex items-start gap-3">
                <Info className="w-5 h-5 text-brand shrink-0 mt-0.5" />
                <p className="text-xs text-zinc-300 leading-relaxed font-medium">
                  Este modelo es 100% referencial. Demuestra la capacidad tecnológica de captar al mandante calculando costos en tiempo real, desarrollado por{" "}
                  <a href="https://clikium.cl/" target="_blank" rel="noopener noreferrer" className="text-white font-bold underline hover:text-brand transition-colors">
                    Clikium
                  </a>.
                </p>
              </div>

              {/* Botón WhatsApp funcional */}
              <a 
                href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-brand hover:bg-brand-hover text-white py-4 text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-lg text-center px-4"
              >
                Exportar a WhatsApp Corporativo <ArrowRight className="w-4 h-4 shrink-0" />
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
