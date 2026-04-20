import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Frimat | Especialistas en Enfierradura y Moldaje",
  description: "Especialistas en enfierradura, moldaje y estructuras de hormigón con experiencia en proyectos de gran escala.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full font-sans bg-zinc-50 text-zinc-900 flex flex-col">{children}</body>
    </html>
  );
}
