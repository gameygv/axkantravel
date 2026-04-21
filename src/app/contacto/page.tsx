import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contacto — Axkan Travel | Disfruta Chiapas",
  description:
    "Contáctanos para cotizar tu paquete turístico por Chiapas. WhatsApp, teléfono, email o visítanos en San Cristóbal de las Casas.",
};

export default function ContactoPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-primary py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
            Contáctanos
          </h1>
          <p className="text-lg md:text-xl opacity-90">
            Estamos listos para planear tu aventura por Chiapas
          </p>
        </div>
      </section>

      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Formulario */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Solicita tu Cotización
              </h2>
              <form
                action="https://formsubmit.co/ventas@disfrutachiapas.com"
                method="POST"
                className="space-y-5"
              >
                <input type="hidden" name="_subject" value="Nueva cotización desde axkantravel.dockerapps.top" />
                <input type="hidden" name="_captcha" value="false" />
                <input type="hidden" name="_next" value="https://axkantravel.dockerapps.top/contacto" />

                <div>
                  <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-1">
                    Nombre completo *
                  </label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    required
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    placeholder="Tu nombre"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Correo electrónico *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-1">
                      Teléfono / WhatsApp
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      placeholder="+52 ..."
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700 mb-1">
                      Ciudad de origen
                    </label>
                    <input
                      type="text"
                      id="ciudad"
                      name="ciudad"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      placeholder="¿De dónde vienes?"
                    />
                  </div>
                  <div>
                    <label htmlFor="viajeros" className="block text-sm font-medium text-gray-700 mb-1">
                      Número de viajeros
                    </label>
                    <input
                      type="number"
                      id="viajeros"
                      name="viajeros"
                      min="1"
                      className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                      placeholder="¿Cuántos viajan?"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="fechas" className="block text-sm font-medium text-gray-700 mb-1">
                    Fechas tentativas
                  </label>
                  <input
                    type="text"
                    id="fechas"
                    name="fechas"
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors"
                    placeholder="Ej: Del 15 al 21 de diciembre"
                  />
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-1">
                    Mensaje *
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={4}
                    className="w-full rounded-lg border border-gray-300 px-4 py-3 text-gray-900 focus:border-primary focus:ring-2 focus:ring-primary/20 outline-none transition-colors resize-none"
                    placeholder="Cuéntanos qué tipo de viaje buscas, paquete de interés, preguntas..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-full bg-primary px-8 py-4 font-semibold text-white hover:bg-primary-dark transition-colors text-lg"
                >
                  Enviar Cotización
                </button>
              </form>
            </div>

            {/* Info de contacto */}
            <div>
              <h2 className="text-2xl font-bold mb-6">
                Información de Contacto
              </h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Dirección</h3>
                    <p className="text-gray-600">
                      Álvaro Obregón 2, Sta Lucía<br />
                      29250 San Cristóbal de las Casas, Chiapas
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-50 text-green-600 flex-shrink-0">
                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">WhatsApp</h3>
                    <a
                      href="https://wa.me/5219671335224"
                      className="text-green-600 hover:underline font-medium"
                    >
                      +52 967 133 5224
                    </a>
                    <p className="text-sm text-gray-500 mt-1">
                      Respuesta inmediata en horario laboral
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary flex-shrink-0">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Teléfono</h3>
                    <a
                      href="tel:+529676316101"
                      className="text-secondary hover:underline font-medium"
                    >
                      +52 967 631 6101
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary flex-shrink-0">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Correo Electrónico</h3>
                    <a
                      href="mailto:ventas@disfrutachiapas.com"
                      className="text-primary hover:underline font-medium"
                    >
                      ventas@disfrutachiapas.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Mapa */}
              <div className="mt-8">
                <h3 className="font-semibold mb-3">Encuéntranos</h3>
                <div className="rounded-2xl overflow-hidden shadow-sm">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3820.0!2d-92.6375!3d16.7370!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTbCsDQ0JzEzLjIiTiA5MsKwMzgnMTUuMCJX!5e0!3m2!1ses!2smx!4v1"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Ubicación de Axkan Travel en San Cristóbal de las Casas"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
