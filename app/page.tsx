import CoverageChecker from "./components/CoverageChecker";

const WHATSAPP_URL =
  "https://wa.me/0000000000?text=Hola%2C%20quiero%20pedir%20guarapo%20fresco";

const productos = [
  {
    nombre: "Vaso Individual",
    descripcion: "Guarapo fresco recién preparado, perfecto para disfrutar al momento. Puro sabor de caña.",
    precio: "8.000",
    tag: null,
    ilustracion: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 mb-3">
        <path d="M18 12 L16 52 Q16 56 20 56 L44 56 Q48 56 48 52 L46 12 Z" fill="#FFF8EE" stroke="#7A4B2A" strokeWidth="2"/>
        <path d="M17.5 24 L16.5 50 Q16.5 54.5 20 54.5 L44 54.5 Q47.5 54.5 47.5 50 L46.5 24 Z" fill="#D9A441" opacity="0.5"/>
        <circle cx="28" cy="38" r="2" fill="#FFF8EE" opacity="0.6"/>
        <circle cx="36" cy="42" r="1.5" fill="#FFF8EE" opacity="0.5"/>
      </svg>
    ),
  },
  {
    nombre: "Promo Lanzamiento",
    descripcion: "2 botellas de 500 ml de guarapo fresco. Ideal para compartir o guardar para después.",
    precio: "22.000",
    tag: "Promo",
    ilustracion: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 mb-3">
        <rect x="14" y="8" width="14" height="5" rx="2" fill="#7A4B2A" opacity="0.6"/>
        <path d="M12 16 Q12 13 16 13 L26 13 Q30 13 30 16 L30 52 Q30 56 26 56 L16 56 Q12 56 12 52 Z" fill="#FFF8EE" stroke="#7A4B2A" strokeWidth="2"/>
        <path d="M13 26 L13 50 Q13 54.5 16.5 54.5 L25.5 54.5 Q29 54.5 29 50 L29 26 Z" fill="#D9A441" opacity="0.5"/>
        <rect x="36" y="8" width="14" height="5" rx="2" fill="#7A4B2A" opacity="0.6"/>
        <path d="M34 16 Q34 13 38 13 L48 13 Q52 13 52 16 L52 52 Q52 56 48 56 L38 56 Q34 56 34 52 Z" fill="#FFF8EE" stroke="#7A4B2A" strokeWidth="2"/>
        <path d="M35 26 L35 50 Q35 54.5 38.5 54.5 L47.5 54.5 Q51 54.5 51 50 L51 26 Z" fill="#D9A441" opacity="0.5"/>
      </svg>
    ),
  },
  {
    nombre: "Botella 500 ml",
    descripcion: "Guarapo fresco embotellado, perfecto para llevar y disfrutar en cualquier momento.",
    precio: "12.000",
    tag: "Popular",
    ilustracion: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 mb-3">
        <rect x="24" y="8" width="16" height="6" rx="2" fill="#7A4B2A" opacity="0.6"/>
        <path d="M22 18 Q22 14 26 14 L38 14 Q42 14 42 18 L42 54 Q42 58 38 58 L26 58 Q22 58 22 54 Z" fill="#FFF8EE" stroke="#7A4B2A" strokeWidth="2"/>
        <path d="M23 28 L23 52 Q23 56.5 26.5 56.5 L37.5 56.5 Q41 56.5 41 52 L41 28 Z" fill="#D9A441" opacity="0.5"/>
        <circle cx="30" cy="40" r="1.5" fill="#FFF8EE" opacity="0.5"/>
        <circle cx="34" cy="46" r="1" fill="#FFF8EE" opacity="0.4"/>
      </svg>
    ),
  },
  {
    nombre: "Botella 1 Litro",
    descripcion: "Ideal para compartir en familia o guardar para todo el día.",
    precio: "20.000",
    tag: null,
    ilustracion: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 mb-3">
        <rect x="22" y="4" width="20" height="7" rx="2" fill="#7A4B2A" opacity="0.6"/>
        <path d="M18 16 Q18 11 24 11 L40 11 Q46 11 46 16 L46 56 Q46 60 40 60 L24 60 Q18 60 18 56 Z" fill="#FFF8EE" stroke="#7A4B2A" strokeWidth="2"/>
        <path d="M19.5 26 L19.5 54 Q19.5 58.5 24 58.5 L40 58.5 Q44.5 58.5 44.5 54 L44.5 26 Z" fill="#D9A441" opacity="0.5"/>
        <circle cx="28" cy="40" r="2" fill="#FFF8EE" opacity="0.5"/>
        <circle cx="36" cy="48" r="1.5" fill="#FFF8EE" opacity="0.4"/>
        <circle cx="32" cy="36" r="1" fill="#FFF8EE" opacity="0.5"/>
      </svg>
    ),
  },
];

const beneficios = [
  {
    icon: "🫗",
    titulo: "Hecho bajo pedido",
    descripcion: "Tu guarapo se prepara en el momento, nunca de stock. Frescura real en cada sorbo.",
  },
  {
    icon: "🚀",
    titulo: "Entrega rápida en Bogotá",
    descripcion: "Llegamos el mismo día a zonas seleccionadas de Bogotá. Sin demoras innecesarias.",
  },
  {
    icon: "📦",
    titulo: "Empaque limpio y seguro",
    descripcion: "Envases sellados con cadena de frío. Tu guarapo llega en perfectas condiciones.",
  },
  {
    icon: "✨",
    titulo: "Compra fácil por WhatsApp",
    descripcion: "Haz tu pedido en segundos por WhatsApp. Sin apps, sin registros. Simple, directo y rápido.",
  },
];

const pasos = [
  { numero: "1", titulo: "Elige tu presentación", descripcion: "Escoge entre vaso, botella o promo. Tenemos opciones para todos los gustos." },
  { numero: "2", titulo: "Confirma tu zona", descripcion: "Valida que tenemos cobertura en tu barrio de Bogotá antes de pedir." },
  { numero: "3", titulo: "Recibe fresco en 25–45 min", descripcion: "Preparamos tu guarapo al momento y te lo llevamos frío y sellado a tu puerta." },
];

const testimonios = [
  {
    nombre: "Carolina M.",
    barrio: "Chapinero",
    texto: "¡Increíble! No pensé que iba a encontrar guarapo tan bueno en Bogotá. Llegó frío y con un sabor que me recordó al campo. Repetiré seguro.",
  },
  {
    nombre: "Andrés R.",
    barrio: "Usaquén",
    texto: "Pedí la botella de 1 litro para una reunión familiar y todos quedaron encantados. El proceso fue super fácil por WhatsApp.",
  },
  {
    nombre: "Luisa F.",
    barrio: "Teusaquillo",
    texto: "Me encanta que es bajo pedido. Se nota la frescura. Además, la entrega fue mucho más rápida de lo que esperaba. 100% recomendado.",
  },
];

const faqs = [
  {
    pregunta: "¿Cuánto demora la entrega?",
    respuesta:
      "Realizamos entregas el mismo día para pedidos confirmados antes de las 12 del mediodía en zonas con cobertura. Pedidos después de esa hora se entregan al día siguiente.",
  },
  {
    pregunta: "¿Qué zonas cubren en Bogotá?",
    respuesta:
      "Actualmente cubrimos localidades como Chapinero, Usaquén, Teusaquillo, Suba, Engativá, Fontibón, Kennedy, Barrios Unidos y más. Usa nuestro validador de cobertura o consúltanos por WhatsApp.",
  },
  {
    pregunta: "¿Qué métodos de pago aceptan?",
    respuesta:
      "Aceptamos transferencia bancaria (Nequi, Daviplata, Bancolombia) y pago contra entrega en efectivo. Te confirmamos los detalles al hacer tu pedido por WhatsApp.",
  },
  {
    pregunta: "¿Cómo conservo el guarapo?",
    respuesta:
      "Mantén tu guarapo refrigerado y consúmelo preferiblemente el mismo día de la entrega para disfrutar su máximo sabor y frescura. Una vez abierto, consume dentro de las siguientes 4 horas.",
  },
  {
    pregunta: "¿Puedo hacer pedidos para reuniones o eventos?",
    respuesta:
      "¡Claro! Hacemos pedidos especiales para reuniones, oficinas y eventos pequeños. Escríbenos por WhatsApp con la cantidad de personas y te armamos un combo a medida.",
  },
];

export default function Home() {
  return (
    <>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-bg/90 backdrop-blur-md border-b border-primary/10">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <a href="#" className="text-xl font-bold text-primary">
            Guarapo<span className="text-secondary">Fresco</span>
          </a>
          <nav className="hidden md:flex items-center gap-6 text-sm text-text-light">
            <a href="#" className="hover:text-primary transition-colors">Inicio</a>
            <a href="#productos" className="hover:text-primary transition-colors">Productos</a>
            <a href="#cobertura" className="hover:text-primary transition-colors">Cobertura</a>
            <a href="#pedidos" className="hover:text-primary transition-colors">Pedidos</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors"
          >
            Pedir por WhatsApp
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-gradient-to-b from-bg-warm to-bg">
          <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1">
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="inline-block px-4 py-1.5 bg-secondary/15 text-secondary text-sm font-semibold rounded-full">Hecho bajo pedido</span>
                <span className="inline-block px-4 py-1.5 bg-secondary/15 text-secondary text-sm font-semibold rounded-full">Entrega local rápida</span>
                <span className="inline-block px-4 py-1.5 bg-secondary/15 text-secondary text-sm font-semibold rounded-full">Sabor tradicional</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight max-w-4xl">
                Guarapo fresco hecho al momento y entregado en Bogotá
              </h1>
              <p className="mt-6 text-lg md:text-xl text-text-light max-w-2xl leading-relaxed">
                Pide tu guarapo auténtico, recién preparado y con entrega local rápida. Sin filas, sin improvisación y con sabor tradicional de verdad.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row gap-4">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                >
                  Pide tu guarapo hoy
                </a>
                <a
                  href="#productos"
                  className="px-8 py-4 border-2 border-primary text-primary text-lg font-semibold rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  Ver productos
                </a>
              </div>
            </div>
            {/* Ilustración decorativa de caña y guarapo */}
            <div className="hidden md:flex flex-shrink-0 items-center justify-center w-72 h-72 lg:w-80 lg:h-80">
              <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
                {/* Botella grande (izquierda) */}
                <rect x="68" y="52" width="28" height="10" rx="3" fill="#7A4B2A" opacity="0.7"/>
                <path d="M60 68 Q60 62 70 62 L94 62 Q104 62 104 68 L104 260 Q104 272 94 272 L70 272 Q60 272 60 260 Z" fill="#FFF8EE" stroke="#7A4B2A" strokeWidth="2.5"/>
                <path d="M63 110 L63 256 Q63 268 72 268 L92 268 Q101 268 101 256 L101 110 Z" fill="#D9A441" opacity="0.55"/>
                <circle cx="78" cy="180" r="3" fill="#FFF8EE" opacity="0.5"/>
                <circle cx="88" cy="210" r="2" fill="#FFF8EE" opacity="0.4"/>
                <circle cx="74" cy="230" r="2.5" fill="#FFF8EE" opacity="0.45"/>
                {/* Etiqueta botella */}
                <rect x="65" y="150" width="34" height="40" rx="4" fill="#7A4B2A" opacity="0.12"/>
                <text x="82" y="174" textAnchor="middle" fill="#7A4B2A" fontSize="8" fontWeight="bold" opacity="0.5">GF</text>

                {/* Vaso (centro) */}
                <path d="M140 100 L132 262 Q132 278 146 278 L198 278 Q212 278 212 262 L204 100 Z" fill="#FFF8EE" stroke="#7A4B2A" strokeWidth="2.5"/>
                <path d="M139 140 L134 258 Q134 274 146 274 L198 274 Q210 274 210 258 L205 140 Z" fill="#D9A441" opacity="0.55"/>
                <path d="M139 140 L205 140" stroke="#D9A441" strokeWidth="2" opacity="0.7"/>
                {/* Burbujas vaso */}
                <circle cx="158" cy="200" r="4" fill="#FFF8EE" opacity="0.5"/>
                <circle cx="180" cy="225" r="3" fill="#FFF8EE" opacity="0.45"/>
                <circle cx="168" cy="180" r="3" fill="#FFF8EE" opacity="0.4"/>
                <circle cx="190" cy="195" r="2.5" fill="#FFF8EE" opacity="0.35"/>

                {/* Botella pequeña (derecha) */}
                <rect x="232" y="90" width="22" height="8" rx="3" fill="#7A4B2A" opacity="0.7"/>
                <path d="M226 104 Q226 98 234 98 L256 98 Q264 98 264 104 L264 264 Q264 274 256 274 L234 274 Q226 274 226 264 Z" fill="#FFF8EE" stroke="#7A4B2A" strokeWidth="2.5"/>
                <path d="M229 140 L229 260 Q229 270 236 270 L254 270 Q261 270 261 260 L261 140 Z" fill="#D9A441" opacity="0.55"/>
                <circle cx="242" cy="200" r="2" fill="#FFF8EE" opacity="0.45"/>
                <circle cx="250" cy="230" r="1.5" fill="#FFF8EE" opacity="0.4"/>
                {/* Etiqueta botella pequeña */}
                <rect x="231" y="170" width="28" height="32" rx="3" fill="#7A4B2A" opacity="0.12"/>
                <text x="245" y="190" textAnchor="middle" fill="#7A4B2A" fontSize="7" fontWeight="bold" opacity="0.5">GF</text>

                {/* Rodaja de limón decorativa */}
                <circle cx="125" cy="88" r="18" fill="#E8D44D" opacity="0.75"/>
                <circle cx="125" cy="88" r="12" fill="#F5EDA6" opacity="0.55"/>
                <line x1="125" y1="76" x2="125" y2="100" stroke="#E8D44D" strokeWidth="1" opacity="0.4"/>
                <line x1="113" y1="88" x2="137" y2="88" stroke="#E8D44D" strokeWidth="1" opacity="0.4"/>

                {/* Hoja de caña decorativa */}
                <path d="M50 40 Q30 20 35 55 Q40 35 50 40" fill="#6B8E4E" opacity="0.6"/>
                <path d="M270 60 Q290 40 285 75 Q280 55 270 60" fill="#6B8E4E" opacity="0.5"/>

                {/* Gotitas frescas */}
                <path d="M148 90 Q150 82 152 90 Q150 94 148 90" fill="#87CEEB" opacity="0.5"/>
                <path d="M198 92 Q200 84 202 92 Q200 96 198 92" fill="#87CEEB" opacity="0.4"/>
                <path d="M108 80 Q110 72 112 80 Q110 84 108 80" fill="#87CEEB" opacity="0.35"/>
              </svg>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-bg to-transparent" />
        </section>

        {/* Catálogo */}
        <section id="productos" className="py-20 bg-bg-warm">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              Nuestro Catálogo
            </h2>
            <p className="text-center text-text-light mb-12 max-w-xl mx-auto">
              Guarapo fresco de caña, sin conservantes, sin azúcar añadida. Escoge tu favorito.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {productos.map((p) => (
                <div
                  key={p.nombre}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-primary/5 flex flex-col hover:shadow-md transition-shadow"
                >
                  {p.tag && (
                    <span className="self-start px-3 py-1 bg-secondary/15 text-secondary text-xs font-bold rounded-full mb-3">
                      {p.tag}
                    </span>
                  )}
                  {p.ilustracion}
                  <h3 className="text-xl font-bold text-primary mb-2">{p.nombre}</h3>
                  <p className="text-text-light text-sm mb-4 flex-1">{p.descripcion}</p>
                  <div className="flex items-end justify-between mt-auto">
                    <div>
                      <span className="text-2xl font-bold text-primary">
                        ${p.precio}
                      </span>
                      <span className="text-text-light text-sm ml-1">COP</span>
                    </div>
                    <a
                      href={`https://wa.me/0000000000?text=${encodeURIComponent(`Hola, quiero pedir: ${p.nombre} ($${p.precio} COP)`)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors"
                    >
                      Pedir por WhatsApp
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promo Lanzamiento */}
        <section className="py-6 bg-primary">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <p className="text-white text-lg md:text-xl font-bold">
              🎉 Promo de lanzamiento: <span className="text-secondary">2 botellas de 500 ml por COP $22.000</span>
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 px-6 py-2 bg-secondary text-primary font-semibold rounded-full hover:bg-secondary-light transition-colors text-sm"
            >
              Pedir promo por WhatsApp
            </a>
          </div>
        </section>

        {/* Por qué GuarapoFresco */}
        <section id="beneficios" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              ¿Por qué GuarapoFresco?
            </h2>
            <p className="text-center text-text-light mb-12 max-w-xl mx-auto">
              No es guarapo cualquiera. Es guarapo hecho para ti, en el momento justo.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {beneficios.map((b) => (
                <div
                  key={b.titulo}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-primary/5 hover:shadow-md transition-shadow"
                >
                  <div className="text-4xl mb-4">{b.icon}</div>
                  <h3 className="text-lg font-bold text-primary mb-2">{b.titulo}</h3>
                  <p className="text-text-light text-sm leading-relaxed">{b.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Cobertura */}
        <section id="cobertura" className="py-20 bg-bg-warm">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Entrega en zonas seleccionadas de Bogotá
            </h2>
            <p className="text-text-light mb-8 max-w-xl mx-auto">
              Confirma tu cobertura por WhatsApp antes de pagar. Estas son algunas de nuestras zonas de entrega:
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-2xl mx-auto">
              {["Chapinero", "Teusaquillo", "Parkway", "Quinta Camacho", "Usaquén", "Cedritos"].map((barrio) => (
                <span key={barrio} className="px-4 py-2 bg-white border border-primary/10 rounded-full text-primary font-semibold text-sm">
                  {barrio}
                </span>
              ))}
            </div>
            <p className="text-text-light text-sm mb-8">
              Valida tu cobertura antes de hacer tu pedido:
            </p>
            <CoverageChecker />
          </div>
        </section>

        {/* Confianza y Conservación */}
        <section id="confianza" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              Calidad y frescura garantizadas
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white rounded-2xl p-8 border border-primary/5">
                <h3 className="text-xl font-bold text-primary mb-4">Ingredientes y preparación</h3>
                <ul className="space-y-3 text-text-light">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-0.5">&#10003;</span>
                    <span>Caña de azúcar de calidad, seleccionada cuidadosamente.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-0.5">&#10003;</span>
                    <span>100% natural: sin conservantes, colorantes ni azúcar añadida.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-0.5">&#10003;</span>
                    <span>Preparación bajo pedido: tu guarapo se hace cuando lo pides.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-0.5">&#10003;</span>
                    <span>Proceso higiénico y controlado en cada paso.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-primary/5">
                <h3 className="text-xl font-bold text-primary mb-4">Cadena de frío y conservación</h3>
                <ul className="space-y-3 text-text-light">
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-0.5">&#10003;</span>
                    <span>Empaque térmico que mantiene la temperatura durante el envío.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-0.5">&#10003;</span>
                    <span>Envases sellados para preservar frescura y sabor.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-0.5">&#10003;</span>
                    <span>Mantener refrigerado al recibir.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-secondary font-bold mt-0.5">&#10003;</span>
                    <span className="font-semibold">Consumir preferiblemente el mismo día para disfrutar el mejor sabor.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Cómo pedir */}
        <section id="como-funciona" className="py-20 bg-bg-warm">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              ¿Cómo pedir?
            </h2>
            <p className="text-center text-text-light mb-12 max-w-xl mx-auto">
              Pedir tu guarapo fresco es muy sencillo. Solo 3 pasos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              {pasos.map((p) => (
                <div key={p.numero} className="text-center">
                  <div className="w-14 h-14 bg-primary text-white text-2xl font-bold rounded-full flex items-center justify-center mx-auto mb-4">
                    {p.numero}
                  </div>
                  <h3 className="text-lg font-bold text-primary mb-2">{p.titulo}</h3>
                  <p className="text-text-light text-sm">{p.descripcion}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-20 bg-bg-warm">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              Lo que dicen nuestros clientes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {testimonios.map((t) => (
                <div
                  key={t.nombre}
                  className="bg-white rounded-2xl p-6 shadow-sm border border-primary/5"
                >
                  <div className="flex gap-1 mb-4 text-secondary">
                    {[...Array(5)].map((_, i) => (
                      <span key={i}>&#9733;</span>
                    ))}
                  </div>
                  <p className="text-text-light text-sm leading-relaxed mb-4 italic">
                    &ldquo;{t.texto}&rdquo;
                  </p>
                  <div>
                    <p className="font-bold text-primary text-sm">{t.nombre}</p>
                    <p className="text-text-light text-xs">{t.barrio}, Bogotá</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="py-20 bg-bg-warm">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.pregunta}
                  className="bg-white rounded-2xl border border-primary/5 group"
                >
                  <summary className="px-6 py-4 cursor-pointer font-semibold text-primary list-none flex items-center justify-between">
                    {faq.pregunta}
                    <span className="text-secondary text-xl ml-4 group-open:rotate-45 transition-transform">
                      +
                    </span>
                  </summary>
                  <div className="px-6 pb-4 text-text-light text-sm leading-relaxed">
                    {faq.respuesta}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Final / Pedidos */}
        <section id="pedidos" className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ¿Listo para probar el mejor guarapo de Bogotá?
            </h2>
            <p className="text-text-light mb-8 max-w-xl mx-auto">
              Haz tu pedido ahora por WhatsApp y recibe guarapo fresco directo a tu puerta.
            </p>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-10 py-4 bg-primary text-white text-lg font-bold rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
            >
              Pide tu guarapo hoy
            </a>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-primary text-white/80 py-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div>
              <span className="text-xl font-bold text-white">
                Guarapo<span className="text-secondary">Fresco</span>
              </span>
              <p className="text-sm mt-1">Guarapo auténtico, hecho al momento en Bogotá.</p>
              <p className="text-sm mt-2 text-white/60">La bebida tradicional de la caña, modernizada para ti en Bogotá.</p>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-4 px-6 py-3 bg-secondary text-primary font-semibold rounded-full hover:bg-secondary-light transition-colors"
              >
                Pedir por WhatsApp
              </a>
            </div>
            <div className="flex flex-col gap-3 text-sm">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp: Pide aquí
              </a>
              <span>Bogotá, Colombia</span>
              <p className="text-white/60 text-xs mt-1">Pedidos y atención local por WhatsApp.</p>
              <div className="flex gap-4 mt-2">
                <a href="#" className="hover:text-white transition-colors">Instagram</a>
                <a href="#" className="hover:text-white transition-colors">Facebook</a>
                <a href="#" className="hover:text-white transition-colors">TikTok</a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50">
            &copy; {new Date().getFullYear()} GuarapoFresco. Todos los derechos reservados. Bogotá, Colombia.
          </div>
        </div>
      </footer>
    </>
  );
}
