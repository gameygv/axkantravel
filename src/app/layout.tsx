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
  metadataBase: new URL("https://axkantravel.com"),
  openGraph: {
    title: "Axkan Travel — Disfruta Chiapas",
    description:
      "Paquetes turísticos completos para recorrer Chiapas con seguridad y confianza. Hospedaje incluido en Hoteles Axkan.",
    url: "https://axkantravel.com",
    siteName: "Axkan Travel",
    locale: "es_MX",
    type: "website",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Axkan Travel — Disfruta Chiapas — Paquetes Turísticos",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Axkan Travel — Disfruta Chiapas",
    description:
      "Paquetes turísticos completos para recorrer Chiapas con seguridad y confianza.",
    images: ["/images/og-image.jpg"],
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
