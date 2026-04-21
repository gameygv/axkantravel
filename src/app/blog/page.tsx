import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog — Axkan Travel | Disfruta Chiapas",
  description:
    "Consejos de viaje, guías y artículos sobre Chiapas. Aprende cómo aprovechar al máximo tu visita al estado más espectacular de México.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-accent py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">Blog</h1>
          <p className="text-lg md:text-xl opacity-90">
            Consejos, guías y todo lo que necesitas saber sobre Chiapas
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-4xl px-4">
          <article className="bg-light rounded-2xl overflow-hidden shadow-sm">
            <div className="relative aspect-[2/1]">
              <Image
                src="/images/palenque.jpg"
                alt="Ruinas de Palenque en Chiapas"
                fill
                className="object-cover"
              />
            </div>
            <div className="p-8 md:p-10">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-sm text-secondary font-semibold">
                  Guía de Viaje
                </span>
                <span className="text-gray-300">|</span>
                <span className="text-sm text-gray-500">Abril 2026</span>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Cómo aprovechar un paquete completo para conocer Chiapas sin
                preocuparte por la logística
              </h2>
              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Viajar a Chiapas puede ser abrumador si intentas organizar
                  todo por tu cuenta: traslados internos, hospedaje, tiempos
                  entre destinos y tours. Con <strong>Disfruta Chiapas</strong>,
                  eliges un paquete que ya integra los lugares imprescindibles y
                  hospedaje en <strong>Hoteles Axkan</strong>.
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Así, en lugar de perder tiempo comparando opciones, te
                  dedicas a disfrutar las vistas, la comida y la cultura de
                  uno de los estados más ricos de México.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-3">
                  Los destinos imperdibles
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Nuestros paquetes incluyen visitas a los destinos más
                  emblemáticos de Chiapas:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>
                    <strong>Cañón del Sumidero:</strong> Paredes de más de
                    1,000 metros que se elevan sobre el río Grijalva.
                    Recorrido en lancha por uno de los cañones más
                    impresionantes del mundo.
                  </li>
                  <li>
                    <strong>San Cristóbal de las Casas:</strong> Ciudad
                    colonial declarada Pueblo Mágico. Calles empedradas,
                    mercados artesanales, iglesias históricas y gastronomía
                    única.
                  </li>
                  <li>
                    <strong>Palenque:</strong> Zona arqueológica maya en medio
                    de la selva. El Templo de las Inscripciones y el Palacio
                    son patrimonio de la humanidad.
                  </li>
                  <li>
                    <strong>Cascadas de Agua Azul:</strong> Serie de cascadas
                    turquesa escalonadas, rodeadas de selva tropical. Un
                    espectáculo natural único.
                  </li>
                  <li>
                    <strong>Lagos de Montebello:</strong> Parque nacional con
                    más de 50 lagos de colores que van del esmeralda al
                    turquesa intenso.
                  </li>
                </ul>

                <h3 className="text-xl font-bold mt-8 mb-3">
                  ¿Por qué un paquete organizado?
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4">
                  Los destinos de Chiapas están dispersos por todo el estado.
                  Sin un plan organizado, puedes perder horas en traslados
                  innecesarios o llegar a un sitio justo cuando cierra. Con
                  nuestros paquetes:
                </p>
                <ul className="list-disc list-inside text-gray-600 space-y-2 mb-6">
                  <li>Los tiempos están optimizados para aprovechar cada día</li>
                  <li>El hospedaje está ubicado estratégicamente en la ruta</li>
                  <li>Los guías locales conocen los mejores horarios y accesos</li>
                  <li>No hay sorpresas ni costos ocultos</li>
                </ul>

                <div className="bg-white rounded-xl p-6 border border-gray-200 mt-8">
                  <p className="text-gray-700 font-medium">
                    ¿Te interesa conocer Chiapas con todo resuelto?{" "}
                    <Link
                      href="/paquetes"
                      className="text-primary hover:underline font-semibold"
                    >
                      Explora nuestros paquetes
                    </Link>{" "}
                    o{" "}
                    <Link
                      href="/contacto"
                      className="text-primary hover:underline font-semibold"
                    >
                      solicita una cotización personalizada
                    </Link>
                    .
                  </p>
                </div>
              </div>
            </div>
          </article>
        </div>
      </section>
    </>
  );
}
