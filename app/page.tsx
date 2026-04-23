import CoverageChecker from "./components/CoverageChecker";

const WHATSAPP_URL =
  "https://wa.me/0000000000?text=Hola%2C%20quiero%20pedir%20guarapo%20fresco";

const productos = [
  {
    nombre: "Guarapo Tradicional",
    descripcion: "Vaso de guarapo puro, recién preparado con caña de azúcar seleccionada.",
    precio: "8.000",
    tag: null,
  },
  {
    nombre: "Guarapo con Limón",
    descripcion: "Guarapo fresco con un toque cítrico de limón natural.",
    precio: "9.000",
    tag: null,
  },
  {
    nombre: "Botella 500 ml",
    descripcion: "Guarapo fresco embotellado, perfecto para llevar y disfrutar en cualquier momento.",
    precio: "12.000",
    tag: "Popular",
  },
  {
    nombre: "Botella 1 Litro",
    descripcion: "Ideal para compartir en familia o guardar para todo el día.",
    precio: "20.000",
    tag: null,
  },
  {
    nombre: "Promo 2×500 ml",
    descripcion: "Dos botellas de 500 ml a precio especial. Comparte o guarda para después.",
    precio: "22.000",
    tag: "Promo",
  },
];

const beneficios = [
  {
    icon: "🫗",
    titulo: "Hecho bajo pedido",
    descripcion: "Preparamos tu guarapo solo cuando lo pides. Nada almacenado, siempre fresco.",
  },
  {
    icon: "🚀",
    titulo: "Entrega rápida",
    descripcion: "Recibe tu pedido el mismo día en las zonas con cobertura en Bogotá.",
  },
  {
    icon: "✨",
    titulo: "Sabor auténtico",
    descripcion: "Caña de azúcar de calidad, sin aditivos, sin conservantes artificiales.",
  },
  {
    icon: "📦",
    titulo: "Empaque seguro",
    descripcion: "Envases sellados y aislados para mantener la frescura hasta tu puerta.",
  },
];

const pasos = [
  { numero: "1", titulo: "Elige", descripcion: "Escoge tu guarapo favorito del catálogo." },
  { numero: "2", titulo: "Confirma cobertura", descripcion: "Verifica que llegamos a tu barrio." },
  { numero: "3", titulo: "Pide por WhatsApp", descripcion: "Envíanos tu pedido y te confirmamos." },
  { numero: "4", titulo: "Recibe frío", descripcion: "Te lo llevamos fresco y listo para disfrutar." },
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
    pregunta: "¿El guarapo tiene aditivos o conservantes?",
    respuesta:
      "No. Nuestro guarapo es 100% natural, hecho con caña de azúcar seleccionada. No usamos conservantes, colorantes ni azúcar añadida.",
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
            <a href="#beneficios" className="hover:text-primary transition-colors">Beneficios</a>
            <a href="#catalogo" className="hover:text-primary transition-colors">Catálogo</a>
            <a href="#cobertura" className="hover:text-primary transition-colors">Cobertura</a>
            <a href="#como-funciona" className="hover:text-primary transition-colors">Cómo funciona</a>
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
          <div className="max-w-6xl mx-auto px-4 py-20 md:py-32 text-center">
            <div className="inline-block px-4 py-1.5 mb-6 bg-secondary/15 text-secondary text-sm font-semibold rounded-full">
              Nuevo en Bogotá — Lanzamiento especial
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-primary leading-tight max-w-4xl mx-auto">
              Guarapo fresco hecho al momento y entregado en Bogotá
            </h1>
            <p className="mt-6 text-lg md:text-xl text-text-light max-w-2xl mx-auto leading-relaxed">
              Pide tu guarapo auténtico, recién preparado y con entrega local rápida. Sin filas, sin improvisación y con sabor tradicional de verdad.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-primary text-white text-lg font-semibold rounded-full hover:bg-primary-dark transition-colors shadow-lg shadow-primary/20"
              >
                Pide tu guarapo hoy
              </a>
              <a
                href="#cobertura"
                className="px-8 py-4 border-2 border-primary text-primary text-lg font-semibold rounded-full hover:bg-primary hover:text-white transition-colors"
              >
                Ver cobertura
              </a>
            </div>
          </div>
          {/* Decorative elements */}
          <div className="absolute -bottom-1 left-0 right-0 h-16 bg-gradient-to-t from-bg to-transparent" />
        </section>

        {/* Beneficios */}
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

        {/* Catálogo */}
        <section id="catalogo" className="py-20 bg-bg-warm">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              Nuestro Catálogo
            </h2>
            <p className="text-center text-text-light mb-12 max-w-xl mx-auto">
              Guarapo fresco de caña, sin conservantes, sin azúcar añadida. Escoge tu favorito.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                      Pedir
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promo de lanzamiento */}
        <section className="py-16">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-r from-primary to-primary-dark rounded-3xl p-8 md:p-12 text-center text-white">
              <div className="inline-block px-4 py-1.5 mb-4 bg-white/20 text-white text-sm font-semibold rounded-full">
                Oferta de lanzamiento
              </div>
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Promo especial: 2 botellas de 500 ml por $22.000 COP
              </h2>
              <p className="text-white/80 mb-6 max-w-xl mx-auto">
                Ahorra $2.000 en tu primer pedido. Comparte con un amigo o guarda para después. Disponible por tiempo limitado.
              </p>
              <a
                href={`https://wa.me/0000000000?text=${encodeURIComponent("Hola, quiero la promo de 2 botellas de 500 ml por $22.000")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-secondary text-text font-bold rounded-full hover:bg-secondary-light transition-colors shadow-lg"
              >
                Aprovechar promo
              </a>
            </div>
          </div>
        </section>

        {/* Cobertura */}
        <section id="cobertura" className="py-20 bg-bg-warm">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              ¿Llegamos a tu barrio?
            </h2>
            <p className="text-text-light mb-10 max-w-xl mx-auto">
              Verifica si tu zona en Bogotá está dentro de nuestra cobertura de entrega.
            </p>
            <CoverageChecker />
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              ¿Cómo funciona?
            </h2>
            <p className="text-center text-text-light mb-12 max-w-xl mx-auto">
              Pedir tu guarapo fresco es muy sencillo. Solo 4 pasos.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
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

        {/* Confianza y Conservación */}
        <section className="py-20 bg-bg-warm">
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
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <span className="text-xl font-bold text-white">
                Guarapo<span className="text-secondary">Fresco</span>
              </span>
              <p className="text-sm mt-1">Guarapo auténtico, hecho al momento en Bogotá.</p>
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 text-sm">
              <a href="mailto:info@example.com" className="hover:text-white transition-colors">
                info@example.com
              </a>
              <span className="hidden sm:inline">·</span>
              <a href="tel:+000000000000" className="hover:text-white transition-colors">
                +00 000 000 0000
              </a>
              <span className="hidden sm:inline">·</span>
              <span>123 Main Street, Bogotá, Colombia</span>
            </div>
          </div>
          <div className="mt-8 pt-6 border-t border-white/10 text-center text-xs text-white/50">
            &copy; {new Date().getFullYear()} GuarapoFresco. Todos los derechos reservados.
          </div>
        </div>
      </footer>
    </>
  );
}
