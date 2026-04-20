import Image from "next/image";

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-24">
        {/* Contenedor del Logo con fondo blanco para que se sienta como una "placa" o sello */}
        <div className="flex items-center gap-3">
          <div className="bg-white p-2.5 rounded shadow-lg border border-white/10">
            <Image 
              src="/logoFrimat.jpeg" 
              alt="Frimat Logo" 
              width={180} 
              height={60} 
              className="w-auto h-9 md:h-11 object-contain"
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
        
        {/* CTA Contacto */}
        <div className="hidden sm:flex items-center">
          <a href="#contacto" className="bg-brand hover:bg-brand-hover text-white px-6 py-3 text-sm font-bold uppercase tracking-wider transition-all">
            Contacto
          </a>
        </div>
      </div>
    </nav>
  );
}
