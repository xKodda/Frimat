import { Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="bg-zinc-950 text-zinc-400 py-16 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10">
          <div className="max-w-sm">
            <div className="mb-6">
              <Image 
                src="/logoFrimat.jpeg" 
                alt="Frimat Logo" 
                width={180} 
                height={60} 
                className="w-auto h-10 md:h-12 object-contain rounded-sm"
              />
            </div>
            <p className="text-sm leading-relaxed text-zinc-500">
              Especialistas en obra gruesa, enfierradura y moldaje para proyectos de infraestructura, minería y obras civiles de gran envergadura.
            </p>
          </div>
          
          <div className="flex flex-col gap-4">
            <h5 className="text-white font-bold uppercase tracking-wider text-xs mb-2">Contacto Directo</h5>
            <div className="flex items-center gap-3 text-sm text-zinc-300 font-bold mb-2">
              <span className="w-8 h-[1px] bg-brand"></span>
              MAURICIO FUENTES DIAZ
            </div>
            <a href="https://maps.google.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
              <MapPin className="w-4 h-4 text-brand" /> Panamericana Norte 18450, Lampa, Santiago
            </a>
            <a href="tel:+56978094716" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-brand" /> +56 9 7809 4716
            </a>
            <a href="mailto:Mfuentes@frimat.cl" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-brand" /> Mfuentes@frimat.cl
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-sm font-medium text-zinc-600">
          <span>© 2026 Frimat S.A. Todos los derechos reservados.</span>
          <div className="flex items-center gap-3">
            <span>Diseño y Desarrollo Tecnológico por <a href="https://clikium.cl/" target="_blank" rel="noopener noreferrer" className="text-brand hover:underline font-bold">Clikium</a></span>
          </div>
        </div>
      </div>
    </footer>
  );
}
