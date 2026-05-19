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
      {/* Hero with Ken Burns */}
      <section className="relative h-[55vh] min-h-[420px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/san-cristobal.jpg"
            alt="San Cristóbal de las Casas"
            fill
            className="object-cover animate-ken-burns-alt"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/60 via-dark/40 to-dark/70" />
        <div className="relative z-10 text-center text-white px-4 animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 mb-6">
            <span className="text-xs font-medium tracking-[0.15em] uppercase">Conócenos</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Nuestra Historia
          </h1>
          <p className="text-lg md:text-xl opacity-80 max-w-2xl mx-auto">
            Conocemos Chiapas porque lo vivimos todos los días
          </p>
        </div>
      </section>

      {/* Historia */}
      <section className="py-20 md:py-28 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <div className="line-accent mb-8" />
          <div className="prose prose-lg mx-auto">
            <p className="text-xl text-gray-700 leading-relaxed mb-6 font-light">
              <strong className="font-semibold">Disfruta Chiapas</strong> nace dentro del{" "}
              <strong className="font-semibold">Corporativo Axkan</strong> con un propósito claro: ayudar
              a más personas a conocer uno de los estados más espectaculares de
              México con paquetes organizados, seguros y con respaldo local.
            </p>
            <p className="text-gray-500 leading-relaxed mb-6">
              Somos una agencia que diseña experiencias completas por Chiapas,
              combinando hospedaje en <strong>Hoteles Axkan</strong> con tours a
              los destinos más emblemáticos del estado: Cañón del Sumidero, San
              Cristóbal de Las Casas, Palenque, cascadas y lagos.
            </p>
            <p className="text-gray-500 leading-relaxed">
              Trabajamos con un equipo que conoce la zona, resuelve tus dudas
              por WhatsApp y te acompaña antes y durante el viaje, para que te
              enfoques en disfrutar y no en preocuparte por la logística.
            </p>
          </div>
        </div>
      </section>

      {/* Misión, Visión, Valores */}
      <section className="py-20 md:py-28 bg-light relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-primary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="mx-auto max-w-7xl px-4 relative">
          <div className="text-center mb-16">
            <div className="line-accent mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl font-extrabold">Lo que nos Define</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/25">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.448 14.9 14.9 0 01.06-.312m-2.24 2.39a4.493 4.493 0 00-1.757 4.306 4.493 4.493 0 004.306-1.758M16.5 9a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Misión</h3>
              <p className="text-gray-500 leading-relaxed">
                Conectar a las personas con lo mejor de Chiapas a través de
                paquetes turísticos organizados, seguros y accesibles,
                integrando naturaleza, cultura y hospedaje con aliados locales
                como Hoteles Axkan.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-secondary-dark text-white shadow-lg shadow-secondary/25">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Visión</h3>
              <p className="text-gray-500 leading-relaxed">
                Aspiramos a ser la agencia líder en turismo chiapaneco,
                destacándonos por la confianza, seguridad y servicios
                innovadores, buscando la máxima satisfacción de nuestros
                clientes.
              </p>
            </div>

            <div className="bg-white rounded-3xl p-10 shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border border-gray-100">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/80 text-white shadow-lg shadow-accent/25">
                <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-4">Valores</h3>
              <ul className="text-gray-500 space-y-3">
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span><strong className="text-gray-700">Seguridad y confianza:</strong> paquetes claros y acompañamiento constante</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span><strong className="text-gray-700">Amor por Chiapas:</strong> respeto a la cultura local y los destinos naturales</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                  <span><strong className="text-gray-700">Transparencia:</strong> información honesta sobre lo que incluye cada paquete</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
