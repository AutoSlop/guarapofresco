import CoverageChecker from "./components/CoverageChecker";
import ContactForm from "./components/ContactForm";


const WHATSAPP_URL =
  "https://wa.me/0000000000?text=Hola%2C%20quiero%20pedir%20guarapo%20fresco";

const productos = [
  {
    nombre: "Guarapo Tradicional",
    descripcion: "Guarapo fresco recién preparado, perfecto para disfrutar al momento. Puro sabor de caña.",
    precio: "8.000",
    precioLabel: "Desde $8.000 COP",
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
    descripcion: "El mismo guarapo auténtico con un toque cítrico refrescante. Ideal para días calurosos.",
    precio: "9.000",
    precioLabel: "Desde $9.000 COP",
    tag: "Nuevo",
    ilustracion: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 mb-3">
        <path d="M18 12 L16 52 Q16 56 20 56 L44 56 Q48 56 48 52 L46 12 Z" fill="#FFF8EE" stroke="#7A4B2A" strokeWidth="2"/>
        <path d="M17.5 24 L16.5 50 Q16.5 54.5 20 54.5 L44 54.5 Q47.5 54.5 47.5 50 L46.5 24 Z" fill="#D9A441" opacity="0.5"/>
        <circle cx="28" cy="38" r="2" fill="#FFF8EE" opacity="0.6"/>
        <circle cx="36" cy="42" r="1.5" fill="#FFF8EE" opacity="0.5"/>
        <circle cx="42" cy="10" r="7" fill="#E8D44D" opacity="0.75"/>
        <circle cx="42" cy="10" r="4.5" fill="#F5EDA6" opacity="0.55"/>
      </svg>
    ),
  },
  {
    nombre: "Botella 500 ml",
    descripcion: "Guarapo fresco embotellado, perfecto para llevar y disfrutar en cualquier momento.",
    precio: "12.000",
    precioLabel: "Desde $12.000 COP",
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
    descripcion: "La presentación familiar. Guarapo fresco para compartir en casa, oficina o reuniones.",
    precio: "20.000",
    precioLabel: "Desde $20.000 COP",
    tag: "Familiar",
    ilustracion: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 mb-3">
        <rect x="22" y="4" width="20" height="8" rx="3" fill="#7A4B2A" opacity="0.7"/>
        <path d="M18 16 Q18 12 24 12 L40 12 Q46 12 46 16 L46 56 Q46 60 40 60 L24 60 Q18 60 18 56 Z" fill="#FFF8EE" stroke="#7A4B2A" strokeWidth="2"/>
        <path d="M20 28 L20 54 Q20 58 24.5 58 L39.5 58 Q44 58 44 54 L44 28 Z" fill="#D9A441" opacity="0.5"/>
        <circle cx="30" cy="42" r="2" fill="#FFF8EE" opacity="0.5"/>
        <circle cx="36" cy="48" r="1.5" fill="#FFF8EE" opacity="0.4"/>
        <rect x="23" y="34" width="18" height="14" rx="3" fill="#7A4B2A" opacity="0.1"/>
        <text x="32" y="43" textAnchor="middle" fill="#7A4B2A" fontSize="6" fontWeight="bold" opacity="0.4">1L</text>
      </svg>
    ),
  },
  {
    nombre: "Pack para Reuniones",
    descripcion: "Guarapo fresco para compartir en grupo. Ideal para oficinas, cumpleaños y encuentros.",
    precio: null,
    precioLabel: "Cotiza por WhatsApp",
    tag: "Grupal",
    ilustracion: (
      <svg viewBox="0 0 64 64" fill="none" className="w-14 h-14 mb-3">
        <rect x="8" y="10" width="12" height="4" rx="2" fill="#7A4B2A" opacity="0.6"/>
        <path d="M6 18 Q6 14 10 14 L18 14 Q22 14 22 18 L22 50 Q22 54 18 54 L10 54 Q6 54 6 50 Z" fill="#FFF8EE" stroke="#7A4B2A" strokeWidth="1.5"/>
        <path d="M7 26 L7 48 Q7 52 10.5 52 L17.5 52 Q21 52 21 48 L21 26 Z" fill="#D9A441" opacity="0.5"/>
        <rect x="26" y="10" width="12" height="4" rx="2" fill="#7A4B2A" opacity="0.6"/>
        <path d="M24 18 Q24 14 28 14 L36 14 Q40 14 40 18 L40 50 Q40 54 36 54 L28 54 Q24 54 24 50 Z" fill="#FFF8EE" stroke="#7A4B2A" strokeWidth="1.5"/>
        <path d="M25 26 L25 48 Q25 52 28.5 52 L35.5 52 Q39 52 39 48 L39 26 Z" fill="#D9A441" opacity="0.5"/>
        <rect x="44" y="10" width="12" height="4" rx="2" fill="#7A4B2A" opacity="0.6"/>
        <path d="M42 18 Q42 14 46 14 L54 14 Q58 14 58 18 L58 50 Q58 54 54 54 L46 54 Q42 54 42 50 Z" fill="#FFF8EE" stroke="#7A4B2A" strokeWidth="1.5"/>
        <path d="M43 26 L43 48 Q43 52 46.5 52 L53.5 52 Q57 52 57 48 L57 26 Z" fill="#D9A441" opacity="0.5"/>
      </svg>
    ),
  },
];

const beneficios = [
  {
    icon: "🌿",
    titulo: "Auténtico",
    descripcion: "Guarapo de caña real, sin conservantes ni azúcar añadida. El sabor tradicional que conoces.",
  },
  {
    icon: "⚡",
    titulo: "Recién preparado",
    descripcion: "Preparamos tu pedido cuando lo confirmas. Sin espera, sin guarapo viejo.",
  },
  {
    icon: "🚚",
    titulo: "Entrega rápida",
    descripcion: "Llegamos sellados y fríos a tu puerta en zonas de cobertura en Bogotá.",
  },
  {
    icon: "📱",
    titulo: "Pedido fácil por WhatsApp",
    descripcion: "Haz tu pedido en minutos por WhatsApp. Sin apps, sin registro, sin complicaciones.",
  },
];

const pasos = [
  { numero: "1", titulo: "Valida cobertura en Bogotá", descripcion: "Confirma que tu barrio esté en nuestra zona de entrega antes de hacer tu pedido." },
  { numero: "2", titulo: "Hacemos tu guarapo bajo pedido", descripcion: "Preparamos tu guarapo fresco al momento, con ingredientes naturales y sin conservantes." },
  { numero: "3", titulo: "Entregamos rápido y frío", descripcion: "Te lo llevamos sellado, frío y listo para disfrutar en tu puerta." },
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
            <a href="#como-funciona" className="hover:text-primary transition-colors">Cómo funciona</a>
            <a href="#cobertura" className="hover:text-primary transition-colors">Cobertura</a>
            <a href="#confianza" className="hover:text-primary transition-colors">Confianza</a>
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
                <span className="inline-block px-4 py-1.5 bg-secondary/15 text-secondary text-sm font-semibold rounded-full">Entrega rápida en Bogotá</span>
                <span className="inline-block px-4 py-1.5 bg-secondary/15 text-secondary text-sm font-semibold rounded-full">Producto fresco y sellado</span>
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
            <div className="flex flex-shrink-0 items-center justify-center w-48 h-48 md:w-72 md:h-72 lg:w-80 lg:h-80 mx-auto md:mx-0">
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
              Nuestros productos
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
                      <span className="text-lg font-bold text-primary">
                        {p.precioLabel}
                      </span>
                    </div>
                    <a
                      href={`https://wa.me/0000000000?text=${encodeURIComponent(p.precio ? `Hola, quiero pedir: ${p.nombre} ($${p.precio} COP)` : `Hola, quiero cotizar guarapo para una reunión`)}`}
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

        {/* Beneficios */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-12">
              ¿Por qué GuarapoFresco?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {beneficios.map((b) => (
                <div key={b.titulo} className="bg-white rounded-2xl p-6 border border-primary/5 text-center">
                  <span className="text-3xl mb-4 block">{b.icon}</span>
                  <h3 className="text-lg font-bold text-primary mb-2">{b.titulo}</h3>
                  <p className="text-text-light text-sm">{b.descripcion}</p>
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

        {/* Cómo pedir */}
        <section id="como-funciona" className="py-20">
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

        {/* Cobertura */}
        <section id="cobertura" className="py-20 bg-bg-warm">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Entrega en zonas seleccionadas de Bogotá
            </h2>
            <p className="text-text-light mb-8 max-w-xl mx-auto">
              Entrega rápida en zonas seleccionadas. Cupos limitados por día para garantizar frescura. Confirma tu dirección antes de pagar.
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8 max-w-2xl mx-auto">
              {["Chapinero", "Teusaquillo", "Parkway", "Quinta Camacho", "Usaquén", "Cedritos", "Suba"].map((barrio) => (
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
                    <span className="text-xl mt-0.5">🌿</span>
                    <span>Caña de azúcar de calidad, seleccionada cuidadosamente.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">🍃</span>
                    <span>100% natural: sin conservantes, colorantes ni azúcar añadida.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">🔥</span>
                    <span>Preparación bajo pedido: tu guarapo se hace cuando lo pides.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">✨</span>
                    <span>Proceso higiénico y controlado en cada paso.</span>
                  </li>
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-8 border border-primary/5">
                <h3 className="text-xl font-bold text-primary mb-4">Cadena de frío y conservación</h3>
                <ul className="space-y-3 text-text-light">
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">📦</span>
                    <span>Empaque térmico que mantiene la temperatura durante el envío.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">🔒</span>
                    <span>Envases sellados para preservar frescura y sabor.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">❄️</span>
                    <span>Mantener refrigerado al recibir.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-xl mt-0.5">⏰</span>
                    <span className="font-semibold">Consumir preferiblemente el mismo día para disfrutar el mejor sabor.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonios */}
        <section className="py-20">
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

        {/* Pedidos por WhatsApp */}
        <section id="pedidos" className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              Pide tu guarapo por WhatsApp
            </h2>
            <p className="text-center text-text-light mb-4 max-w-xl mx-auto">
              Haz tu pedido en minutos. Solo escríbenos por WhatsApp con tu producto, dirección y listo.
            </p>
            <p className="text-center text-secondary font-bold text-lg mb-2">
              Oferta de lanzamiento: 2 botellas de 500 ml por COP $22.000
            </p>
            <p className="text-center text-text-light text-sm mb-10">
              Cupos limitados por día para garantizar frescura. No te quedes sin el tuyo.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
              {/* Mensaje prellenado */}
              <div className="bg-white rounded-2xl p-8 border border-primary/5">
                <h3 className="text-lg font-bold text-primary mb-3">Mensaje listo para enviar</h3>
                <div className="bg-bg-warm rounded-xl p-4 mb-4 text-sm text-text-light leading-relaxed">
                  <p className="italic">&ldquo;Hola, quiero pedir guarapo fresco. Me interesa [producto]. Mi dirección es [tu dirección en Bogotá]. Gracias.&rdquo;</p>
                </div>
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block w-full text-center px-8 py-4 bg-primary text-white text-lg font-bold rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
                >
                  Pide tu guarapo hoy
                </a>
              </div>
              {/* Formulario de interés */}
              <div className="bg-white rounded-2xl p-8 border border-primary/5">
                <h3 className="text-lg font-bold text-primary mb-3">Déjanos tus datos</h3>
                <p className="text-text-light text-sm mb-4">Si prefieres que te contactemos, déjanos tu info y te escribimos por WhatsApp.</p>
                <ContactForm />
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Sticky mobile CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-bg/95 backdrop-blur-md border-t border-primary/10 px-4 py-3">
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block w-full text-center px-6 py-3 bg-primary text-white text-base font-bold rounded-full shadow-lg shadow-primary/20"
        >
          Pide tu guarapo hoy
        </a>
      </div>

      {/* Floating WhatsApp button (desktop) */}
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Pedir por WhatsApp"
        className="hidden md:flex fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full items-center justify-center shadow-lg hover:bg-[#1DA851] transition-colors"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Footer */}
      <footer className="bg-primary text-white/80 py-10 pb-24 md:pb-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col md:flex-row items-start justify-between gap-8">
            <div>
              <span className="text-xl font-bold text-white">
                Guarapo<span className="text-secondary">Fresco</span>
              </span>
              <p className="text-sm mt-1">Frescura y tradición en cada sorbo.</p>
              <p className="text-sm mt-2 text-white/60">Guarapo auténtico, hecho bajo pedido y entregado en Bogotá. Tradición colombiana, preparada al momento.</p>
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
              <a href="#productos" className="hover:text-white transition-colors">Productos</a>
              <a href="#cobertura" className="hover:text-white transition-colors">Cobertura</a>
              <a href="#confianza" className="hover:text-white transition-colors">Confianza</a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                WhatsApp: Pide aquí
              </a>
              <span>Bogotá, Colombia</span>
              <span>Entrega local en zonas seleccionadas</span>
              <p className="text-white/60 text-xs mt-1">Pedidos y atención directa por WhatsApp.</p>
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
