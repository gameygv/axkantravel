import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Paquetes Turísticos — Axkan Travel | Disfruta Chiapas",
  description:
    "Explora nuestros paquetes turísticos por Chiapas. Recorridos completos de varios días con hospedaje, tours y traslados internos incluidos.",
};

const paquetes = [
  {
    nombre: "Chiapas Viajero",
    duracion: "6 días / 5 noches",
    imagen: "/images/hero-chiapas.jpg",
    descripcion:
      "El paquete más completo para conocer lo esencial de Chiapas. Incluye Cañón del Sumidero, San Cristóbal, Palenque, Agua Azul y Lagos de Montebello.",
    incluye: [
      "Hospedaje 5 noches en Hoteles Axkan",
      "Tours guiados a todos los destinos",
      "Traslados internos en Chiapas",
      "Desayunos incluidos",
      "Guía certificado",
    ],
    destacado: true,
  },
  {
    nombre: "Chiapas Navideño",
    duracion: "7 días / 6 noches",
    imagen: "/images/san-cristobal.jpg",
    descripcion:
      "Vive la magia de Chiapas en temporada navideña. San Cristóbal iluminado, mercados artesanales, la Fiesta Grande de Chiapa de Corzo y más.",
    incluye: [
      "Hospedaje 6 noches en Hoteles Axkan",
      "Tours especiales de temporada",
      "Cena navideña incluida",
      "Traslados y guías",
      "Actividades festivas locales",
    ],
    destacado: false,
  },
  {
    nombre: "Chiapas Primaveral",
    duracion: "5 días / 4 noches",
    imagen: "/images/cascadas-agua-azul.jpg",
    descripcion:
      "Disfruta Chiapas en su máximo esplendor verde. Cascadas en su mejor nivel, selva exuberante y clima perfecto para la aventura.",
    incluye: [
      "Hospedaje 4 noches en Hoteles Axkan",
      "Tours a cascadas y naturaleza",
      "Traslados internos",
      "Desayunos incluidos",
      "Seguro de viajero",
    ],
    destacado: false,
  },
  {
    nombre: "Chiapas Mochilero",
    duracion: "6 días / 5 noches",
    imagen: "/images/selva-chiapas.jpg",
    descripcion:
      "Para los aventureros. Rutas alternativas, senderismo en la selva, comunidades indígenas y los rincones menos explorados de Chiapas.",
    incluye: [
      "Hospedaje 5 noches (hoteles y cabañas)",
      "Rutas de senderismo guiadas",
      "Traslados internos",
      "Desayunos y almuerzos de campo",
      "Equipo básico de trekking",
    ],
    destacado: false,
  },
];

export default function PaquetesPage() {
  return (
    <>
      {/* Hero with Ken Burns */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/lagos-montebello.jpg"
            alt="Lagos de Montebello"
            fill
            className="object-cover animate-ken-burns"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/70" />
        <div className="relative z-10 text-center text-white px-4 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 mb-6">
            <span className="text-xs font-medium tracking-[0.15em] uppercase">Experiencias</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Nuestros Paquetes
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            Explora nuestros paquetes pensados para que conozcas Chiapas de
            forma cómoda y segura
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="mx-auto max-w-4xl px-4 text-center">
          <div className="line-accent mx-auto mb-6" />
          <p className="text-gray-500 text-lg leading-relaxed">
            Desde recorridos completos de varios días hasta promociones
            especiales por temporada, todos nuestros paquetes incluyen
            hospedaje con aliados como <strong>Hoteles Axkan</strong> y visitas
            a los destinos más representativos del estado.
          </p>
        </div>
      </section>

      {/* Paquetes */}
      <section className="py-16 md:py-20 bg-light">
        <div className="mx-auto max-w-7xl px-4 space-y-8">
          {paquetes.map((paq) => (
            <div
              key={paq.nombre}
              className={`bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 ${
                paq.destacado ? "ring-2 ring-primary shadow-lg shadow-primary/10" : "border border-gray-100"
              }`}
            >
              <div className="grid md:grid-cols-2">
                <div className="relative aspect-[4/3] md:aspect-auto">
                  <Image
                    src={paq.imagen}
                    alt={paq.nombre}
                    fill
                    className="object-cover"
                  />
                  {paq.destacado && (
                    <span className="absolute top-4 left-4 bg-primary text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Más Popular
                    </span>
                  )}
                </div>
                <div className="p-8 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-2xl font-bold">{paq.nombre}</h2>
                  </div>
                  <p className="text-secondary font-semibold mb-4">
                    {paq.duracion}
                  </p>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {paq.descripcion}
                  </p>
                  <div className="mb-6">
                    <h4 className="font-semibold mb-2">Incluye:</h4>
                    <ul className="space-y-1">
                      {paq.incluye.map((item) => (
                        <li
                          key={item}
                          className="flex items-center gap-2 text-sm text-gray-600"
                        >
                          <svg className="h-4 w-4 text-secondary flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                          </svg>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Link
                    href="/contacto"
                    className="inline-block rounded-full bg-primary px-6 py-3 text-center font-semibold text-white hover:bg-primary-dark transition-colors w-fit"
                  >
                    Cotizar este Paquete
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Nota importante */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="bg-secondary/5 border border-secondary/20 rounded-2xl p-8">
            <h3 className="text-xl font-bold text-secondary mb-3">
              Información Importante
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Nuestros paquetes comienzan cuando llegas a Chiapas. Tú eliges y
              pagas tu transporte hacia el estado (avión, autobús, auto), y a
              partir de tu llegada nosotros nos encargamos del resto: tours,
              hospedaje y recorridos dentro de Chiapas. Contáctanos para
              conocer fechas disponibles y precios actualizados.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
