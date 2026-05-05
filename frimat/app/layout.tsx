import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Frimat | Construcción Industrial, Enfierradura y Moldaje",
    template: "%s | Frimat",
  },
  description: "Frimat: Especialistas en montaje industrial, enfierradura, moldaje y obras civiles de gran escala para los sectores minero, energético y retail.",
  keywords: ["Construcción industrial", "Enfierradura", "Moldaje", "Obras civiles", "Montaje industrial", "Minería", "Energía", "Constructora Chile", "Frimat"],
  authors: [{ name: "Frimat Ingeniería y Construcción" }],
  creator: "Frimat",
  publisher: "Frimat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "Frimat | Construcción Industrial de Alta Complejidad",
    description: "Expertos en enfierradura, moldajes y obras civiles. Liderando proyectos en minería, energía e infraestructura desde hace más de 20 años.",
    url: "https://frimat.cl", // Update this to the actual domain when available
    siteName: "Frimat",
    images: [
      {
        url: "/hero-estructural-principal.png",
        width: 1200,
        height: 630,
        alt: "Frimat Obras Industriales",
      },
    ],
    locale: "es_CL",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frimat | Construcción Industrial",
    description: "Especialistas en montaje industrial, enfierradura y obras civiles de gran escala.",
    images: ["/hero-estructural-principal.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/logo-favicon.png",
    shortcut: "/logo-favicon.png",
    apple: "/logo-favicon.png",
  },
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
