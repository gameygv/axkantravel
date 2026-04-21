import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Preguntas Frecuentes — Axkan Travel | Disfruta Chiapas",
  description:
    "Resuelve tus dudas sobre nuestros paquetes turísticos por Chiapas. Transporte, hospedaje, pagos y más.",
};

const faqs = [
  {
    pregunta: "¿Desde dónde salen los viajes?",
    respuesta:
      "Nuestros paquetes empiezan cuando llegas a Chiapas. Tú eliges y pagas tu transporte hacia el estado, y a partir de tu llegada nosotros nos encargamos del resto (tours, hospedaje y recorridos dentro de Chiapas).",
  },
  {
    pregunta: "¿El transporte a Chiapas está incluido en los paquetes?",
    respuesta:
      "No. El traslado desde tu ciudad de origen hacia Chiapas corre por tu cuenta. Nuestros paquetes empiezan cuando llegas al estado y se enfocan en recorridos internos, tours y hospedaje.",
  },
  {
    pregunta: "¿Dónde están las oficinas y cuál es el horario?",
    respuesta:
      "Nuestra oficina está en Álvaro Obregón 2, Sta Lucía, 29250 San Cristóbal de las Casas, Chiapas. Puedes contactarnos por WhatsApp al +52 967 133 5224 para atención inmediata.",
  },
  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta:
      "Aceptamos transferencia bancaria, depósito en efectivo y pagos con tarjeta. Contáctanos para conocer las opciones disponibles para tu paquete.",
  },
  {
    pregunta: "¿Puedo personalizar un paquete?",
    respuesta:
      "¡Claro que sí! Podemos adaptar cualquiera de nuestros paquetes según tus necesidades: agregar días, cambiar destinos o ajustar el tipo de hospedaje. Escríbenos por WhatsApp y armamos algo a tu medida.",
  },
  {
    pregunta: "¿Los paquetes incluyen hospedaje?",
    respuesta:
      "Sí, todos nuestros paquetes incluyen hospedaje en Hoteles Axkan, ubicados estratégicamente en las mejores zonas de los destinos que visitamos.",
  },
  {
    pregunta: "¿Es seguro viajar a Chiapas?",
    respuesta:
      "Chiapas es uno de los destinos turísticos más visitados de México. Nuestros recorridos están diseñados por rutas seguras y con guías que conocen la zona a la perfección. Además, contamos con el respaldo del Corporativo Axkan.",
  },
  {
    pregunta: "¿Puedo viajar con niños?",
    respuesta:
      "¡Por supuesto! Muchas familias viajan con nosotros. Nuestros guías adaptan la experiencia para que todos la disfruten, sin importar la edad.",
  },
];

export default function FAQPage() {
  return (
    <>
      <section className="bg-secondary py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Preguntas Frecuentes
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Todo lo que necesitas saber antes de viajar con nosotros
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-3xl px-4">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <details
                key={i}
                className="group rounded-2xl border border-gray-200 bg-white overflow-hidden"
              >
                <summary className="flex cursor-pointer items-center justify-between p-6 font-semibold text-gray-900 hover:text-primary transition-colors">
                  <span>{faq.pregunta}</span>
                  <svg
                    className="h-5 w-5 flex-shrink-0 text-gray-400 group-open:rotate-180 transition-transform"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.respuesta}
                </div>
              </details>
            ))}
          </div>

          <div className="mt-12 text-center bg-light rounded-2xl p-8">
            <h3 className="text-xl font-bold mb-3">
              ¿No encontraste tu respuesta?
            </h3>
            <p className="text-gray-600 mb-6">
              Escríbenos por WhatsApp y te respondemos de inmediato.
            </p>
            <a
              href="https://wa.me/5219671335224?text=Hola%2C%20tengo%20una%20pregunta%20sobre%20sus%20paquetes"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-500 px-8 py-3 font-semibold text-white hover:bg-green-600 transition-colors"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
              </svg>
              Escríbenos por WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
