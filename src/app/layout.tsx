import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { WhatsAppButton } from "@/components/WhatsAppButton";

export const metadata: Metadata = {
  title: "Axkan Travel — Disfruta Chiapas | Paquetes Turísticos",
  description:
    "Descubre Chiapas con paquetes turísticos completos y confiables. Cañón del Sumidero, San Cristóbal, Palenque, cascadas y más. Hospedaje incluido en Hoteles Axkan.",
  keywords:
    "viajes chiapas, paquetes turísticos chiapas, agencia de viajes chiapas, cañon del sumidero, san cristobal de las casas, palenque, cascadas agua azul",
  openGraph: {
    title: "Axkan Travel — Disfruta Chiapas",
    description:
      "Paquetes turísticos completos para recorrer Chiapas con seguridad y confianza.",
    url: "https://axkantravel.dockerapps.top",
    siteName: "Axkan Travel",
    locale: "es_MX",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-light text-dark antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
