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
    iniciales: "MG",
  },
  {
    nombre: "Carlos y Ana Rodríguez",
    origen: "Guadalajara",
    texto:
      "Viajamos en familia con niños pequeños y todo fue perfecto. La atención por WhatsApp fue inmediata y los guías conocen cada rincón de Chiapas.",
    iniciales: "CR",
  },
  {
    nombre: "Roberto Méndez",
    origen: "Monterrey",
    texto:
      "Como viajero frecuente, puedo decir que Disfruta Chiapas ofrece la mejor relación calidad-precio. Paquetes completos y sin sorpresas.",
    iniciales: "RM",
  },
];

const stats = [
  { numero: "500+", label: "Viajeros felices" },
  { numero: "6", label: "Destinos incluidos" },
  { numero: "4", label: "Paquetes disponibles" },
  { numero: "10+", label: "Años de experiencia" },
];

export default function HomePage() {
  return (
    <>
      {/* ═══ Hero Section with Ken Burns ═══ */}
      <section className="relative h-screen min-h-[700px] max-h-[1000px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-chiapas.jpg"
            alt="Cañón del Sumidero, Chiapas"
            fill
            className="object-cover animate-ken-burns"
            priority
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-dark/70 via-dark/40 to-dark/80" />

        {/* Decorative elements */}
        <div className="absolute top-1/4 left-8 w-px h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent hidden lg:block" />
        <div className="absolute top-1/4 right-8 w-px h-24 bg-gradient-to-b from-transparent via-white/30 to-transparent hidden lg:block" />

        <div className="relative z-10 text-center text-white px-4 max-w-5xl">
          <div className="animate-fade-up">
            <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 mb-8">
              <span className="h-1.5 w-1.5 rounded-full bg-secondary animate-pulse" />
              <span className="text-xs md:text-sm font-medium tracking-[0.15em] uppercase">
                Axkan Travel presenta
              </span>
            </div>
          </div>
          <h1 className="animate-fade-up text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] font-extrabold leading-[0.92] mb-6 tracking-tight">
            Disfruta<br />
            <span className="text-gradient bg-gradient-to-r from-secondary via-white to-secondary bg-clip-text [-webkit-text-fill-color:transparent]">
              Chiapas
            </span>
          </h1>
          <div className="animate-fade-up-delay">
            <p className="text-lg md:text-xl lg:text-2xl font-light mb-4 opacity-95">
              Tu conexión a Chiapas y el Mundo Maya
            </p>
            <p className="text-sm md:text-base opacity-70 mb-12 max-w-2xl mx-auto leading-relaxed">
              Paquetes turísticos completos con hospedaje en Hoteles Axkan,
              tours guiados y recorridos por los destinos más espectaculares del estado
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contacto"
                className="group rounded-full bg-primary px-10 py-4 text-lg font-semibold hover:bg-primary-dark transition-all shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-1"
              >
                Cotiza tu Aventura
                <svg className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
              <Link
                href="/paquetes"
                className="rounded-full border-2 border-white/40 px-10 py-4 text-lg font-semibold hover:bg-white hover:text-dark transition-all backdrop-blur-sm"
              >
                Ver Paquetes
              </Link>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-white/40 text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-5 h-9 rounded-full border-2 border-white/30 flex justify-center pt-2">
            <div className="w-1 h-2.5 rounded-full bg-white/60 animate-bounce" />
          </div>
        </div>
      </section>

      {/* ═══ Stats Banner ═══ */}
      <section className="relative -mt-16 z-20 px-4">
        <div className="mx-auto max-w-5xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px rounded-2xl overflow-hidden shadow-2xl">
            {stats.map((stat, i) => (
              <div
                key={stat.label}
                className={`px-6 py-8 text-center ${
                  i % 2 === 0 ? "bg-white" : "bg-light"
                } md:bg-white`}
              >
                <p className="text-3xl md:text-4xl font-extrabold text-primary mb-1 animate-count-up">
                  {stat.numero}
                </p>
                <p className="text-xs md:text-sm text-gray-500 font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ Propuesta de Valor ═══ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <div className="line-accent mx-auto mb-5" />
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-5">
              ¿Por qué viajar con nosotros?
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Más que una agencia de viajes, somos tu equipo local en Chiapas.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="relative p-10 rounded-3xl border border-gray-100 hover:border-primary/20 hover:shadow-xl hover:shadow-primary/5 transition-all duration-500 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-bl-[60px] rounded-tr-3xl transition-all group-hover:bg-primary/10" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary-dark text-white shadow-lg shadow-primary/25">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Seguridad y Confianza</h3>
                <p className="text-gray-500 leading-relaxed">
                  Paquetes claros con acompañamiento antes y durante el viaje.
                  Operación respaldada por el Corporativo Axkan.
                </p>
              </div>
            </div>

            <div className="relative p-10 rounded-3xl border border-gray-100 hover:border-secondary/20 hover:shadow-xl hover:shadow-secondary/5 transition-all duration-500 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-secondary/5 rounded-bl-[60px] rounded-tr-3xl transition-all group-hover:bg-secondary/10" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-secondary to-secondary-dark text-white shadow-lg shadow-secondary/25">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Especialistas en Chiapas</h3>
                <p className="text-gray-500 leading-relaxed">
                  No vendemos &quot;de todo el mundo&quot;. Conocemos cada rincón de
                  Chiapas y diseñamos rutas que incluyen lo imperdible.
                </p>
              </div>
            </div>

            <div className="relative p-10 rounded-3xl border border-gray-100 hover:border-accent/20 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500 group">
              <div className="absolute top-0 right-0 w-24 h-24 bg-accent/5 rounded-bl-[60px] rounded-tr-3xl transition-all group-hover:bg-accent/10" />
              <div className="relative">
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-accent to-accent/80 text-white shadow-lg shadow-accent/25">
                  <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 0h.008v.008h-.008V7.5z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-3">Hospedaje Incluido</h3>
                <p className="text-gray-500 leading-relaxed">
                  Todos los paquetes incluyen hospedaje en Hoteles Axkan,
                  ubicados estratégicamente en las mejores zonas.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Destinos Destacados ═══ */}
      <section className="py-24 md:py-32 bg-light relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/5 rounded-full -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/5 rounded-full translate-y-1/2 -translate-x-1/2" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-14 gap-6">
            <div>
              <p className="text-sm font-semibold tracking-[0.15em] uppercase text-secondary mb-3">
                Explora Chiapas
              </p>
              <h2 className="text-3xl md:text-5xl font-extrabold">
                Destinos que te Esperan
              </h2>
            </div>
            <p className="text-gray-500 max-w-md text-base md:text-right">
              Chiapas es uno de los estados más ricos en naturaleza, cultura e
              historia de todo México.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {destinos.map((destino, i) => (
              <div
                key={destino.nombre}
                className={`group relative overflow-hidden rounded-3xl ${
                  i === 0 ? "sm:col-span-2 lg:col-span-1 lg:row-span-2" : ""
                }`}
              >
                <div className={`relative ${i === 0 ? "aspect-[4/3] lg:aspect-auto lg:h-full" : "aspect-[4/3]"}`}>
                  <Image
                    src={destino.imagen}
                    alt={destino.nombre}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-[800ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-7">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="h-px w-6 bg-secondary" />
                    <span className="text-secondary text-xs font-semibold uppercase tracking-wider">Destino</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2">{destino.nombre}</h3>
                  <p className="text-sm text-white/70 leading-relaxed max-h-0 group-hover:max-h-20 overflow-hidden transition-all duration-500">
                    {destino.descripcion}
                  </p>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-14">
            <Link
              href="/paquetes"
              className="group inline-flex items-center gap-2 rounded-full bg-secondary px-10 py-4 font-semibold text-white hover:bg-secondary-dark transition-all hover:shadow-xl hover:shadow-secondary/20 hover:-translate-y-1"
            >
              Ver Todos los Paquetes
              <svg className="h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* ═══ Sobre Nosotros ═══ */}
      <section className="py-24 md:py-32 bg-white">
        <div className="mx-auto max-w-7xl px-4">
          <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/selva-chiapas.jpg"
                  alt="Grupo de turistas disfrutando Chiapas"
                  fill
                  className="object-cover"
                />
              </div>
              {/* Floating card */}
              <div className="absolute -bottom-6 -right-4 md:-right-8 bg-white rounded-2xl shadow-xl p-5 animate-float">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-bold text-lg">4.9/5</p>
                    <p className="text-xs text-gray-500">Calificación promedio</p>
                  </div>
                </div>
              </div>
              {/* Decorative dot pattern */}
              <div className="absolute -top-4 -left-4 w-20 h-20 opacity-20" style={{backgroundImage: 'radial-gradient(circle, #F1305F 1.5px, transparent 1.5px)', backgroundSize: '10px 10px'}} />
            </div>
            <div>
              <p className="text-sm font-semibold tracking-[0.15em] uppercase text-primary mb-4">
                Nuestra Historia
              </p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold mb-6 leading-tight">
                ¿Por qué<br />elegirnos?
              </h2>
              <p className="text-gray-500 mb-8 leading-relaxed text-lg">
                Disfruta Chiapas nace dentro del Corporativo Axkan para ayudar a
                más personas a conocer el estado con paquetes organizados,
                seguros y con respaldo local.
              </p>
              <div className="space-y-5">
                {[
                  "Equipo local que conoce cada rincón de Chiapas",
                  "Atención personalizada por WhatsApp antes y durante tu viaje",
                  "Hospedaje incluido en hoteles propios del grupo",
                  "Paquetes todo incluido: sin sorpresas ni costos ocultos",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-4">
                    <div className="flex h-7 w-7 items-center justify-center rounded-full bg-secondary/10 text-secondary flex-shrink-0 mt-0.5">
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                      </svg>
                    </div>
                    <p className="text-gray-700 font-medium">{item}</p>
                  </div>
                ))}
              </div>
              <Link
                href="/nosotros"
                className="group mt-10 inline-flex items-center gap-2 rounded-full border-2 border-primary px-8 py-3.5 font-semibold text-primary hover:bg-primary hover:text-white transition-all"
              >
                Conoce Nuestra Historia
                <svg className="h-4 w-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ Testimonios ═══ */}
      <section className="py-24 md:py-32 bg-gradient-to-br from-dark via-dark to-dark/95 text-white relative overflow-hidden">
        {/* Background decorations */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold tracking-[0.15em] uppercase text-secondary mb-3">
              Testimonios
            </p>
            <h2 className="text-3xl md:text-5xl font-extrabold mb-4">
              Lo que Dicen Nuestros Viajeros
            </h2>
            <p className="text-white/50 text-lg max-w-md mx-auto">
              La mejor recomendación es la de quienes ya vivieron la experiencia.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {testimonios.map((t) => (
              <div
                key={t.nombre}
                className="glass rounded-3xl p-8 hover:bg-white/12 transition-all duration-500 hover:-translate-y-2"
              >
                <div className="flex gap-1 mb-6 text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-white/80 mb-8 italic leading-relaxed text-[15px]">
                  &quot;{t.texto}&quot;
                </p>
                <div className="flex items-center gap-3 pt-6 border-t border-white/10">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-primary to-secondary text-white text-sm font-bold">
                    {t.iniciales}
                  </div>
                  <div>
                    <p className="font-semibold text-sm">{t.nombre}</p>
                    <p className="text-xs text-white/40">{t.origen}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA Final ═══ */}
      <section className="relative py-28 md:py-36 overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/cascadas-agua-azul.jpg"
            alt="Cascadas de Agua Azul"
            fill
            className="object-cover animate-ken-burns-alt"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-accent/80" />

        {/* Pattern overlay */}
        <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '32px 32px'}} />

        <div className="relative z-10 mx-auto max-w-3xl px-4 text-center text-white">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm px-5 py-2 mb-8">
            <span className="text-xs font-medium tracking-[0.15em] uppercase">
              Empieza tu aventura
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            ¿Listo para Vivir la Experiencia Chiapas?
          </h2>
          <p className="text-lg md:text-xl mb-12 opacity-90 max-w-xl mx-auto">
            Contáctanos hoy y recibe una cotización personalizada para tu
            próxima aventura. Sin compromiso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="group rounded-full bg-white px-10 py-4 font-semibold text-primary hover:bg-gray-50 transition-all shadow-2xl hover:-translate-y-1"
            >
              Solicitar Cotización
              <svg className="inline-block ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <a
              href="https://wa.me/5219671335224?text=Hola%2C%20quiero%20cotizar%20un%20paquete%20a%20Chiapas"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border-2 border-white px-10 py-4 font-semibold hover:bg-white hover:text-primary transition-all"
            >
              WhatsApp Directo
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
