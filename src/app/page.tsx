import Image from "next/image";
import Link from "next/link";

const destinos = [
  {
    nombre: "Cañón del Sumidero",
    imagen: "/images/hero-chiapas.jpg",
    descripcion: "Paredes de más de 1,000 metros de altura y el majestuoso río Grijalva.",
  },
  {
    nombre: "San Cristóbal de las Casas",
    imagen: "/images/san-cristobal.jpg",
    descripcion: "Ciudad colonial mágica entre montañas y cultura indígena viva.",
  },
  {
    nombre: "Palenque",
    imagen: "/images/palenque.jpg",
    descripcion: "Ruinas mayas envueltas en selva tropical y misterio ancestral.",
  },
  {
    nombre: "Cascadas de Agua Azul",
    imagen: "/images/cascadas-agua-azul.jpg",
    descripcion: "Cascadas turquesa escalonadas en la selva lacandona.",
  },
  {
    nombre: "Lagos de Montebello",
    imagen: "/images/lagos-montebello.jpg",
    descripcion: "Más de 50 lagos de colores esmeralda y turquesa entre bosques.",
  },
  {
    nombre: "Selva Chiapaneca",
    imagen: "/images/selva-chiapas.jpg",
    descripcion: "Aventura guiada por la biodiversidad más rica de México.",
  },
];

const testimonios = [
  {
    nombre: "María González",
    origen: "Ciudad de México",
    texto:
      "Fue el mejor viaje de nuestra vida. Todo organizado, sin preocupaciones. Los hoteles Axkan son increíbles y los tours espectaculares.",
  },
  {
    nombre: "Carlos y Ana Rodríguez",
    origen: "Guadalajara",
    texto:
      "Viajamos en familia con niños pequeños y todo fue perfecto. La atención por WhatsApp fue inmediata y los guías conocen cada rincón de Chiapas.",
  },
  {
    nombre: "Roberto Méndez",
    origen: "Monterrey",
    texto:
      "Como viajero frecuente, puedo decir que Disfruta Chiapas ofrece la mejor relación calidad-precio. Paquetes completos y sin sorpresas.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <Image
          src="/images/hero-chiapas.jpg"
          alt="Cañón del Sumidero, Chiapas"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black/60" />
        <div className="relative z-10 text-center text-white px-4 max-w-4xl">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Disfruta Chiapas
          </h1>
          <p className="text-lg md:text-2xl font-light mb-2 drop-shadow">
            Tu conexión a Chiapas y el Mundo Maya
          </p>
          <p className="text-base md:text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Paquetes turísticos completos con hospedaje, tours y recorridos por
            los destinos más espectaculares del estado
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="rounded-full bg-primary px-8 py-4 text-lg font-semibold hover:bg-primary-dark transition-colors shadow-lg"
            >
              Cotiza tu Aventura
            </Link>
            <Link
              href="/paquetes"
              className="rounded-full border-2 border-white px-8 py-4 text-lg font-semibold hover:bg-white/20 transition-colors"
            >
              Ver Paquetes
            </Link>
          </div>
        </div>
      </section>

      {/* Propuesta de Valor */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Seguridad y Confianza</h3>
              <p className="text-gray-600">
                Paquetes claros con acompañamiento antes y durante el viaje.
                Operación respaldada por el Corporativo Axkan.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Especialistas en Chiapas</h3>
              <p className="text-gray-600">
                No vendemos &quot;de todo el mundo&quot;. Conocemos cada rincón de
                Chiapas y diseñamos rutas que incluyen lo imperdible.
              </p>
            </div>
            <div className="text-center p-6">
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-accent/10 text-accent">
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-2">Hospedaje Incluido</h3>
              <p className="text-gray-600">
                Todos los paquetes incluyen hospedaje en Hoteles Axkan,
                ubicados estratégicamente en las mejores zonas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Destinos Destacados */}
      <section className="py-16 md:py-20 bg-light">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Destinos que te Esperan
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chiapas es uno de los estados más ricos en naturaleza, cultura e
              historia de todo México. Estos son algunos de los destinos que
              incluimos en nuestros paquetes.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {destinos.map((destino) => (
              <div
                key={destino.nombre}
                className="group relative overflow-hidden rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="aspect-[4/3] relative">
                  <Image
                    src={destino.imagen}
                    alt={destino.nombre}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                </div>
                <div className="absolute bottom-0 p-5 text-white">
                  <h3 className="text-xl font-bold mb-1">{destino.nombre}</h3>
                  <p className="text-sm opacity-90">{destino.descripcion}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/paquetes"
              className="inline-block rounded-full bg-secondary px-8 py-3 font-semibold text-white hover:bg-secondary-dark transition-colors"
            >
              Ver Todos los Paquetes
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Nosotros (breve) */}
      <section className="py-16 md:py-20 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/images/selva-chiapas.jpg"
                alt="Grupo de turistas disfrutando Chiapas"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                ¿Por qué elegirnos?
              </h2>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Disfruta Chiapas nace dentro del Corporativo Axkan para ayudar a
                más personas a conocer el estado con paquetes organizados,
                seguros y con respaldo local. Diseñamos experiencias completas
                combinando hospedaje en Hoteles Axkan con tours a los destinos
                más emblemáticos.
              </p>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Equipo local que conoce cada rincón de Chiapas
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Atención personalizada por WhatsApp antes y durante tu viaje
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Hospedaje incluido en hoteles propios del grupo
                </li>
                <li className="flex items-start gap-3">
                  <svg className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  Paquetes todo incluido: sin sorpresas ni costos ocultos
                </li>
              </ul>
              <Link
                href="/nosotros"
                className="mt-8 inline-block rounded-full border-2 border-primary px-6 py-3 font-semibold text-primary hover:bg-primary hover:text-white transition-colors"
              >
                Conoce Nuestra Historia
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonios */}
      <section className="py-16 md:py-20 bg-light">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Lo que Dicen Nuestros Viajeros
            </h2>
            <p className="text-gray-600">
              La mejor recomendación es la de quienes ya vivieron la experiencia.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonios.map((t) => (
              <div
                key={t.nombre}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex gap-1 mb-4 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-5 w-5" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic leading-relaxed">
                  &quot;{t.texto}&quot;
                </p>
                <div>
                  <p className="font-semibold">{t.nombre}</p>
                  <p className="text-sm text-gray-500">{t.origen}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="relative py-20 overflow-hidden">
        <Image
          src="/images/cascadas-agua-azul.jpg"
          alt="Cascadas de Agua Azul"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-primary/80" />
        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            ¿Listo para Vivir la Experiencia Chiapas?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Contáctanos hoy y recibe una cotización personalizada para tu
            próxima aventura. Sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="rounded-full bg-white px-8 py-4 font-semibold text-primary hover:bg-gray-100 transition-colors"
            >
              Solicitar Cotización
            </Link>
            <a
              href="https://wa.me/5219671335224?text=Hola%2C%20quiero%20cotizar%20un%20paquete%20a%20Chiapas"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white px-8 py-4 font-semibold hover:bg-white/20 transition-colors"
            >
              WhatsApp Directo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
