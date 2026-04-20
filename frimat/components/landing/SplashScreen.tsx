"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export function SplashScreen() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    // Hide the splash screen after 2.2 seconds
    const timer = setTimeout(() => {
      setShow(false);
    }, 2200);
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
          className="fixed inset-0 z-[100] bg-zinc-950 flex flex-col items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0, y: 10 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 1.05, opacity: 0, y: -10 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative w-48 h-24 md:w-64 md:h-32 mb-8"
          >
            <Image 
              src="/logoFrimat.jpeg" 
              alt="Frimat Logo" 
              fill 
              className="object-contain"
              priority
            />
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="absolute bottom-16 flex flex-col items-center gap-3"
          >
            <div className="w-40 h-[2px] bg-zinc-800 relative overflow-hidden rounded-full">
              <motion.div 
                initial={{ x: "-100%" }}
                animate={{ x: "200%" }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="absolute inset-y-0 w-1/3 bg-brand rounded-full"
              />
            </div>
            <span className="text-zinc-500 text-[10px] font-bold uppercase tracking-[0.3em]">Cargando Experiencia</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
