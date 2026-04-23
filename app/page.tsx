import CoverageChecker from "./components/CoverageChecker";

const WHATSAPP_URL =
  "https://wa.me/0000000000?text=Hola%2C%20quiero%20pedir%20guarapo%20fresco";

const productos = [
  {
    nombre: "Guarapo Tradicional",
    descripcion: "Guarapo fresco recién preparado, perfecto para disfrutar al momento.",
    precio: "8.000",
    tag: null,
  },
  {
    nombre: "Guarapo con Limón",
    descripcion: "El clásico guarapo con un toque cítrico refrescante. Ideal para días calurosos.",
    precio: "12.000",
    tag: "Nuevo",
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
    nombre: "Pack para Reuniones",
    descripcion: "Combo especial para oficinas, reuniones o eventos pequeños. Incluye varias presentaciones.",
    precio: "45.000",
    tag: "Ideal grupos",
  },
];

const beneficios = [
  {
    icon: "✨",
    titulo: "Auténtico",
    descripcion: "Guarapo de caña 100% natural, sin aditivos ni conservantes. Sabor tradicional de verdad.",
  },
  {
    icon: "🫗",
    titulo: "Fresco",
    descripcion: "Preparado bajo pedido para que siempre lo recibas recién hecho y con todo su sabor.",
  },
  {
    icon: "🤝",
    titulo: "Confiable",
    descripcion: "Proceso higiénico, empaque sellado y cadena de frío desde la preparación hasta tu puerta.",
  },
  {
    icon: "🚀",
    titulo: "Entrega local rápida",
    descripcion: "Recibe tu pedido el mismo día en las zonas con cobertura en Bogotá.",
  },
];

const pasos = [
  { numero: "1", titulo: "Elige tu presentación", descripcion: "Escoge entre vaso, botella o pack. Tenemos opciones para todos los gustos." },
  { numero: "2", titulo: "Validamos cobertura", descripcion: "Confirma que llegamos a tu barrio en Bogotá antes de hacer tu pedido." },
  { numero: "3", titulo: "Preparamos y entregamos", descripcion: "Tu guarapo se prepara al momento y te lo llevamos frío y rápido a tu puerta." },
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
            <a href="#como-funciona" className="hover:text-primary transition-colors">Cómo funciona</a>
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
          <div className="max-w-6xl mx-auto px-4 py-20 md:py-32">
            <div className="inline-block px-4 py-1.5 mb-6 bg-secondary/15 text-secondary text-sm font-semibold rounded-full">
              Nuevo en Bogotá — Lanzamiento especial
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
        <section id="productos" className="py-20 bg-bg-warm">
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
                      Pedir ahora
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Promo Lanzamiento */}
        <section className="py-8 bg-secondary">
          <div className="max-w-4xl mx-auto px-4">
            <div className="p-6 text-center">
              <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-bold rounded-full mb-4">
                Oferta de Lanzamiento
              </span>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                2 botellas de 500 ml por COP $22.000
              </h3>
              <p className="text-white/80 mb-6">
                Comparte o guarda para después. Precio especial por tiempo limitado.
              </p>
              <a
                href={`https://wa.me/0000000000?text=${encodeURIComponent("Hola, quiero pedir la promo: 2 botellas de 500 ml por $22.000 COP")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-full hover:bg-bg transition-colors"
              >
                Pedir promo por WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* Cómo funciona */}
        <section id="como-funciona" className="py-20">
          <div className="max-w-6xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-primary mb-4">
              ¿Cómo funciona?
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
              Valida tu cobertura antes del pago. Estas son algunas de nuestras zonas de entrega:
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

        {/* Ocasión de consumo */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Para cada momento
            </h2>
            <p className="text-text-light mb-12 max-w-xl mx-auto">
              Guarapo fresco ideal para cualquier ocasión.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-primary/5">
                <div className="text-4xl mb-4">🏠</div>
                <h3 className="text-lg font-bold text-primary mb-2">En casa</h3>
                <p className="text-text-light text-sm">Disfruta un guarapo fresco y natural sin salir de tu hogar.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-primary/5">
                <div className="text-4xl mb-4">💼</div>
                <h3 className="text-lg font-bold text-primary mb-2">En la oficina</h3>
                <p className="text-text-light text-sm">Una bebida auténtica para recargar energía durante tu jornada.</p>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm border border-primary/5">
                <div className="text-4xl mb-4">🤝</div>
                <h3 className="text-lg font-bold text-primary mb-2">Reuniones pequeñas</h3>
                <p className="text-text-light text-sm">Sorprende a tus invitados con una bebida tradicional y diferente.</p>
              </div>
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
              <p className="text-sm mt-2 text-white/60">Atención local en Bogotá — pedidos y soporte por WhatsApp.</p>
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
              <span>Tel: +00 000 000 0000</span>
              <a href="mailto:info@example.com" className="hover:text-white transition-colors">
                info@example.com
              </a>
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
