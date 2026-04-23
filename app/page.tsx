import CoverageChecker from "./components/CoverageChecker";

const WHATSAPP_URL =
  "https://wa.me/0000000000?text=Hola%2C%20quiero%20pedir%20guarapo%20fresco";

const productos = [
  {
    nombre: "Guarapo Tradicional",
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
    nombre: "Guarapo con Limón",
    descripcion: "Guarapo fresco con un toque cítrico de limón. Refrescante y auténtico.",
    precio: "12.000",
    tag: "Nuevo",
    ilustracion: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 mb-3">
        <path d="M18 12 L16 52 Q16 56 20 56 L44 56 Q48 56 48 52 L46 12 Z" fill="#FFF8EE" stroke="#7A4B2A" strokeWidth="2"/>
        <path d="M17.5 24 L16.5 50 Q16.5 54.5 20 54.5 L44 54.5 Q47.5 54.5 47.5 50 L46.5 24 Z" fill="#D9A441" opacity="0.5"/>
        <circle cx="38" cy="10" r="8" fill="#E8D44D" opacity="0.8"/>
        <circle cx="38" cy="10" r="5.5" fill="#F5EDA6" opacity="0.6"/>
        <circle cx="28" cy="38" r="2" fill="#FFF8EE" opacity="0.6"/>
        <circle cx="36" cy="42" r="1.5" fill="#FFF8EE" opacity="0.5"/>
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
    titulo: "Sabor auténtico y fresco",
    descripcion: "Caña de azúcar 100% natural, sin conservantes ni azúcar añadida. Sabor tradicional de verdad.",
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
            <a href="#productos" className="hover:text-primary transition-colors">Productos</a>
            <a href="#como-funciona" className="hover:text-primary transition-colors">Cómo pedir</a>
            <a href="#cobertura" className="hover:text-primary transition-colors">Cobertura</a>
            <a href="#confianza" className="hover:text-primary transition-colors">Conservación</a>
            <a href="#faq" className="hover:text-primary transition-colors">FAQ</a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-primary text-white text-sm font-semibold rounded-full hover:bg-primary-dark transition-colors"
          >
            Pedir ahora
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
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 border-2 border-primary text-primary text-lg font-semibold rounded-full hover:bg-primary hover:text-white transition-colors"
                >
                  Escríbenos por WhatsApp
                </a>
              </div>
            </div>
            {/* Ilustración decorativa de caña y guarapo */}
            <div className="hidden md:flex flex-shrink-0 items-center justify-center w-72 h-72 lg:w-80 lg:h-80">
              <svg viewBox="0 0 320 320" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full drop-shadow-lg">
                {/* Vaso */}
                <path d="M120 100 L110 260 Q110 280 130 280 L190 280 Q210 280 210 260 L200 100 Z" fill="#FFF8EE" stroke="#7A4B2A" strokeWidth="3"/>
                {/* Guarapo en el vaso */}
                <path d="M118 140 L112 255 Q112 275 130 275 L190 275 Q208 275 208 255 L202 140 Z" fill="#D9A441" opacity="0.6"/>
                <path d="M118 140 L202 140" stroke="#D9A441" strokeWidth="2" opacity="0.8"/>
                {/* Burbujas */}
                <circle cx="145" cy="200" r="4" fill="#FFF8EE" opacity="0.6"/>
                <circle cx="170" cy="220" r="3" fill="#FFF8EE" opacity="0.5"/>
                <circle cx="155" cy="180" r="3.5" fill="#FFF8EE" opacity="0.5"/>
                <circle cx="180" cy="195" r="2.5" fill="#FFF8EE" opacity="0.4"/>
                {/* Cañas de azúcar */}
                <rect x="60" y="40" width="12" height="220" rx="6" fill="#7A4B2A" opacity="0.7"/>
                <rect x="60" y="80" width="12" height="3" fill="#5E3A20" opacity="0.5"/>
                <rect x="60" y="130" width="12" height="3" fill="#5E3A20" opacity="0.5"/>
                <rect x="60" y="180" width="12" height="3" fill="#5E3A20" opacity="0.5"/>
                {/* Hojas de caña */}
                <path d="M72 50 Q95 30 90 60 Q85 45 72 50" fill="#6B8E4E" opacity="0.7"/>
                <path d="M60 65 Q35 45 40 75 Q45 60 60 65" fill="#6B8E4E" opacity="0.6"/>
                <path d="M72 40 Q100 20 95 55" stroke="#6B8E4E" strokeWidth="1.5" fill="none" opacity="0.5"/>
                {/* Segunda caña */}
                <rect x="245" y="60" width="10" height="200" rx="5" fill="#7A4B2A" opacity="0.5"/>
                <rect x="245" y="100" width="10" height="3" fill="#5E3A20" opacity="0.4"/>
                <rect x="245" y="150" width="10" height="3" fill="#5E3A20" opacity="0.4"/>
                <path d="M255 70 Q280 50 275 80 Q270 65 255 70" fill="#6B8E4E" opacity="0.5"/>
                {/* Rodaja de limón */}
                <circle cx="225" cy="120" r="22" fill="#E8D44D" opacity="0.8"/>
                <circle cx="225" cy="120" r="16" fill="#F5EDA6" opacity="0.6"/>
                <line x1="225" y1="104" x2="225" y2="136" stroke="#E8D44D" strokeWidth="1" opacity="0.5"/>
                <line x1="209" y1="120" x2="241" y2="120" stroke="#E8D44D" strokeWidth="1" opacity="0.5"/>
                {/* Gotitas frescas */}
                <path d="M130 90 Q132 82 134 90 Q132 94 130 90" fill="#87CEEB" opacity="0.5"/>
                <path d="M185 95 Q187 87 189 95 Q187 99 185 95" fill="#87CEEB" opacity="0.4"/>
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
                      Pedir ahora
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

        {/* CTA Final */}
        <section className="py-20">
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
              <p className="text-sm mt-2 text-white/60">Frescura real de la caña, directo a tu puerta.</p>
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
