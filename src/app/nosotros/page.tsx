import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Nosotros — Axkan Travel | Disfruta Chiapas",
  description:
    "Conoce la historia de Disfruta Chiapas, nuestra misión, visión y valores. Parte del Corporativo Axkan, diseñamos experiencias turísticas únicas en Chiapas.",
};

export default function NosotrosPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/san-cristobal.jpg"
          alt="San Cristóbal de las Casas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center text-white px-4">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Nuestra Historia
          </h1>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Conocemos Chiapas porque lo vivimos todos los días
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="prose prose-lg mx-auto">
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              <strong>Disfruta Chiapas</strong> nace dentro del{" "}
              <strong>Corporativo Axkan</strong> con un propósito claro: ayudar
              a más personas a conocer uno de los estados más espectaculares de
              México con paquetes organizados, seguros y con respaldo local.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              Somos una agencia que diseña experiencias completas por Chiapas,
              combinando hospedaje en <strong>Hoteles Axkan</strong> con tours a
              los destinos más emblemáticos del estado: Cañón del Sumidero, San
              Cristóbal de Las Casas, Palenque, cascadas y lagos.
            </p>
            <p className="text-gray-600 leading-relaxed">
              Trabajamos con un equipo que conoce la zona, resuelve tus dudas
              por WhatsApp y te acompaña antes y durante el viaje, para que te
              enfoques en disfrutar y no en preocuparte por la logística.
            </p>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-16 md:py-20 bg-light">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Misión</h3>
              <p className="text-gray-600 leading-relaxed">
                Conectar a las personas con lo mejor de Chiapas a través de
                paquetes turísticos organizados, seguros y accesibles,
                integrando naturaleza, cultura y hospedaje con aliados locales
                como Hoteles Axkan.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Visión</h3>
              <p className="text-gray-600 leading-relaxed">
                Aspiramos a ser la agencia líder en turismo chiapaneco,
                destacándonos por la confianza, seguridad y servicios
                innovadores, buscando la máxima satisfacción de nuestros
                clientes.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-accent/10 text-accent">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Valores</h3>
              <ul className="text-gray-600 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span><strong>Seguridad y confianza:</strong> paquetes claros y acompañamiento constante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span><strong>Amor por Chiapas:</strong> respeto a la cultura local y los destinos naturales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-secondary font-bold mt-1">•</span>
                  <span><strong>Transparencia:</strong> información honesta sobre lo que incluye cada paquete</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
