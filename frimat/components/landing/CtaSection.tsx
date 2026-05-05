"use client";
import { ArrowRight, Mail, MapPin, MessageSquare, Phone } from "lucide-react";
import { motion } from "framer-motion";

// Reemplaza con tu número. Ej: "569XXXXXXXX"
const WHATSAPP_NUMBER = "56978094716"; 

export function CtaSection() {
  const whatsappMessage = encodeURIComponent("WhatsApp Oficial Frimat. Quisiera contactarme con el área comercial para coordinar una reunión de licitaciones.");

  return (
    <section id="contacto" className="py-24 bg-zinc-50 border-t border-zinc-200 bg-grid-pattern">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tighter mb-4">
            Gestión de Subcontratos Listos para Operar
          </h2>
          <p className="text-lg text-zinc-500 font-light max-w-2xl mx-auto leading-relaxed">
            Póngase en contacto con nuestro equipo de ingeniería. Integramos canales de atención instantánea para agilizar licitaciones.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-0 bg-white rounded-xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.1)] overflow-hidden border border-zinc-100">
          
          {/* Formulario */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-3/5 p-8 md:p-12 lg:p-16"
          >
            <h3 className="text-2xl font-bold text-zinc-900 mb-8">Cotización de Proyectos</h3>
            <form action={async (formData) => {
              const { sendContactEmail } = await import('@/app/actions/sendEmail');
              const button = document.getElementById('submitBtn') as HTMLButtonElement;
              const originalText = button.innerText;
              button.innerText = 'Enviando...';
              button.disabled = true;
              
              const res = await sendContactEmail(formData);
              
              if (res.error) {
                alert(res.error);
                button.innerText = originalText;
                button.disabled = false;
              } else {
                alert('¡Su solicitud ha sido enviada con éxito! Nos contactaremos a la brevedad.');
                (document.getElementById('contactForm') as HTMLFormElement).reset();
                button.innerText = 'Solicitud Enviada ✓';
              }
            }} id="contactForm" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Nombre Completo <span className="text-brand">*</span></label>
                  <input name="name" required type="text" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="Ej. Ing. Juan Pérez" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Empresa / Mandante <span className="text-brand">*</span></label>
                  <input name="company" required type="text" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="Ej. Constructora Sur" />
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Correo Corporativo <span className="text-brand">*</span></label>
                  <input name="email" required type="email" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="juan@empresa.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Teléfono Directo</label>
                  <input name="phone" type="tel" className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all" placeholder="+56 9 0000 0000" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-zinc-900 uppercase tracking-wider">Alcance y Envergadura del Proyecto</label>
                <textarea name="message" rows={4} className="w-full bg-zinc-50 border border-zinc-200 px-4 py-3 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all resize-none" placeholder="Describa brevemente cubicación estimada, ubicación de faena y plazos..."></textarea>
              </div>
              <div className="pt-4">
                <button id="submitBtn" type="submit" className="w-full bg-zinc-950 hover:bg-black text-white py-4 font-bold tracking-widest text-sm uppercase transition-all duration-300 shadow-lg hover:shadow-2xl hover:shadow-black/20 hover:-translate-y-1 disabled:opacity-50 disabled:hover:translate-y-0 disabled:cursor-not-allowed">
                  Enviar Solicitud Comercial
                </button>
              </div>
            </form>
          </motion.div>

          {/* Información de Contacto Directo / WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="lg:w-2/5 relative overflow-hidden bg-brand p-8 md:p-12 lg:p-16 text-white flex flex-col justify-between shadow-2xl"
          >
            {/* Texture */}
            <div className="absolute inset-0 bg-black/10 z-0"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-8">Atención Inmediata</h3>
              
              <div className="space-y-8">
                {/* Whatsapp integration highlight funcional */}
                <a 
                  href={`https://wa.me/${WHATSAPP_NUMBER}?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/10 p-6 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all cursor-pointer group rounded-sm shadow-xl relative overflow-hidden"
                >
                  <div className="absolute top-0 right-0 w-2 h-full bg-[#25D366]"></div>
                  <div className="flex gap-4 items-start">
                    <div className="bg-[#25D366] rounded-full p-2.5 shadow-lg shrink-0">
                      <MessageSquare className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold mb-1">WhatsApp Licitaciones</h4>
                      <p className="text-sm font-medium text-white/90 leading-relaxed mb-4">Integración directa. Envía un mensaje a nuestro número corporativo para ser atendido sin esperas.</p>
                      <span className="text-sm font-bold uppercase tracking-wider flex items-center gap-1 group-hover:text-[#25D366] transition-colors">
                        Iniciar Chat Automático <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </a>

                <div className="flex items-center gap-5 pt-4">
                  <div className="bg-black/20 p-3 rounded-full shrink-0">
                    <Mail className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[10px] uppercase tracking-widest opacity-80 mb-1">Área Comercial</h4>
                    <span className="font-semibold text-base md:text-lg">Mfuentes@frimat.cl</span>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="bg-black/20 p-3 rounded-full shrink-0">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[10px] uppercase tracking-widest opacity-80 mb-1">Contacto Directo</h4>
                    <span className="font-semibold text-base md:text-lg">+56 9 7809 4716</span>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div className="bg-black/20 p-3 rounded-full shrink-0">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-[10px] uppercase tracking-widest opacity-80 mb-1">Oficinas Centrales</h4>
                    <span className="font-semibold text-base md:text-lg uppercase">Lampa, Santiago</span>
                  </div>
                </div>

              </div>
            </div>
            
            <div className="relative z-10 mt-16 p-6 border border-white/20 bg-white/5 backdrop-blur-xl rounded-sm">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] mb-2 text-white/70">Horario de Atención</p>
              <p className="text-sm font-semibold">Lunes a Viernes: 08:30 - 18:30 hrs</p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
