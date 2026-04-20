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
            <h5 className="text-white font-bold uppercase tracking-wider text-xs mb-2">Operaciones</h5>
            <a href="#" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
              <MapPin className="w-4 h-4 text-brand" /> Av. Desarrollo Industrial 1234, Santiago
            </a>
            <a href="#" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
              <Phone className="w-4 h-4 text-brand" /> +56 9 1234 5678
            </a>
            <a href="#" className="flex items-center gap-3 text-sm hover:text-white transition-colors">
              <Mail className="w-4 h-4 text-brand" /> propuestas@empresa-ejecutora.cl
            </a>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-semibold uppercase tracking-widest text-zinc-600">
          <span>© 2026 Ejemplo Operativo. Uso exclusivo B2B.</span>
          <div className="flex items-center gap-3">
            <span>Diseñado como herramienta comercial</span>
            <span className="w-1 h-1 bg-zinc-700 rounded-full"></span>
            <a href="https://clikium.cl/" target="_blank" rel="noopener noreferrer" className="hover:text-brand transition-colors">
              Desarrollado por Clikium
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
