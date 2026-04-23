"use client";

import { useState } from "react";

const COVERED_BARRIOS = [
  "chapinero",
  "usaquén",
  "usaquen",
  "teusaquillo",
  "suba",
  "engativá",
  "engativa",
  "fontibón",
  "fontibon",
  "kennedy",
  "puente aranda",
  "barrios unidos",
  "la candelaria",
  "santa fe",
  "los mártires",
  "los martires",
  "antonio nariño",
  "antonio narino",
  "rafael uribe uribe",
  "chicó",
  "chico",
  "rosales",
  "la macarena",
  "la soledad",
  "parkway",
  "galerías",
  "galerias",
  "modelia",
  "cedritos",
  "country",
  "santa bárbara",
  "santa barbara",
  "la cabrera",
  "el nogal",
  "el retiro",
  "quinta camacho",
  "la perseverancia",
  "palermo",
  "nicolás de federmán",
  "nicolas de federman",
];

type CoverageStatus = "idle" | "covered" | "check";

export default function CoverageChecker() {
  const [barrio, setBarrio] = useState("");
  const [status, setStatus] = useState<CoverageStatus>("idle");

  function handleCheck() {
    if (!barrio.trim()) return;
    const normalized = barrio.trim().toLowerCase();
    const isCovered = COVERED_BARRIOS.some(
      (b) => normalized.includes(b) || b.includes(normalized)
    );
    setStatus(isCovered ? "covered" : "check");
  }

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          value={barrio}
          onChange={(e) => {
            setBarrio(e.target.value);
            setStatus("idle");
          }}
          onKeyDown={(e) => e.key === "Enter" && handleCheck()}
          placeholder="Escribe tu barrio o localidad"
          className="flex-1 px-4 py-3 rounded-full border-2 border-primary/20 bg-white text-text focus:outline-none focus:border-primary transition-colors"
        />
        <button
          onClick={handleCheck}
          className="px-6 py-3 bg-primary text-white font-semibold rounded-full hover:bg-primary-dark transition-colors cursor-pointer"
        >
          Verificar
        </button>
      </div>

      {status === "covered" && (
        <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-2xl text-center">
          <span className="text-green-700 font-semibold text-lg">
            &#10003; ¡Tenemos cobertura en tu zona!
          </span>
          <p className="text-green-600 text-sm mt-1">
            Puedes hacer tu pedido ahora mismo por WhatsApp.
          </p>
        </div>
      )}

      {status === "check" && (
        <div className="mt-4 p-4 bg-amber-50 border border-amber-200 rounded-2xl text-center">
          <span className="text-amber-700 font-semibold text-lg">
            &#9888; Zona en revisión
          </span>
          <p className="text-amber-600 text-sm mt-1">
            Escríbenos por WhatsApp para confirmar si llegamos a tu barrio.
          </p>
          <a
            href="https://wa.me/0000000000?text=Hola%2C%20quiero%20saber%20si%20tienen%20cobertura%20en%20mi%20zona"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-3 px-5 py-2 bg-secondary text-text font-semibold rounded-full hover:bg-secondary-light transition-colors"
          >
            Consultar por WhatsApp
          </a>
        </div>
      )}
    </div>
  );
}
