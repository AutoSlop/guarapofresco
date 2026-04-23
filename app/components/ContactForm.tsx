"use client";

export default function ContactForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-3">
      <input
        type="text"
        placeholder="Tu nombre"
        className="w-full px-4 py-3 rounded-full border-2 border-primary/20 bg-white text-text focus:outline-none focus:border-primary transition-colors"
      />
      <input
        type="tel"
        placeholder="Tu WhatsApp (ej. 310 123 4567)"
        className="w-full px-4 py-3 rounded-full border-2 border-primary/20 bg-white text-text focus:outline-none focus:border-primary transition-colors"
      />
      <input
        type="text"
        placeholder="Tu barrio en Bogotá"
        className="w-full px-4 py-3 rounded-full border-2 border-primary/20 bg-white text-text focus:outline-none focus:border-primary transition-colors"
      />
      <button
        type="submit"
        className="w-full px-6 py-3 bg-secondary text-primary font-semibold rounded-full hover:bg-secondary-light transition-colors cursor-pointer"
      >
        Quiero que me contacten
      </button>
    </form>
  );
}
