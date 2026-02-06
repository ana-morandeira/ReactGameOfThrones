import { useEffect, useState } from 'react';
import { getAllContinents } from '../services/characterService';

const ContinentsPage = () => {
  const [continents, setContinents] = useState([]);
  const [selectedContinent, setSelectedContinent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getAllContinents()
      .then(setContinents)
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center p-10 text-got-gold font-got italic">Consulting the Maesters...</div>;

  return (
    <div className="min-h-screen bg-got-dark p-4 md:p-8 font-got">
      <header className="text-center mb-10 md:mb-16 mt-6">
        {/* Título adaptativo: más pequeño en móvil para evitar saltos de línea feos */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold text-got-gold mb-4 tracking-[0.2em] md:tracking-[0.3em] uppercase">
          Known World
        </h1>
        <p className="text-gray-400 italic tracking-widest text-xs md:text-sm mb-6 px-4">
          Exploring the vast lands of the Lore
        </p>
        <div className="h-1 w-24 md:w-32 bg-got-gold mx-auto shadow-[0_0_15px_#c5a059]"></div>
      </header>

      {/* Grid de Continentes: 1 columna en móvil, 2 en escritorio */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
        {continents.map((continent) => (
          <div key={continent.id} className="flex flex-col gap-4">
            <div 
              onClick={() => setSelectedContinent(selectedContinent?.id === continent.id ? null : continent)}
              className={`group relative p-8 md:p-16 bg-got-iron/10 border-2 rounded-2xl transition-all duration-500 hover:scale-[1.02] md:hover:scale-[1.05] flex flex-col items-center justify-center overflow-hidden cursor-pointer ${
                selectedContinent?.id === continent.id 
                ? "border-got-gold shadow-[0_0_50px_rgba(197,160,89,0.6)] bg-got-iron/30" 
                : "border-got-gold/10 hover:border-got-gold hover:shadow-[0_0_40px_rgba(197,160,89,0.3)]"
              }`}
            >
              {/* Número de fondo adaptativo */}
              <span className="absolute inset-0 flex items-center justify-center text-[7rem] md:text-[12rem] font-bold text-got-gold/5 italic select-none pointer-events-none group-hover:text-got-gold/10 transition-colors">
                {continent.id}
              </span>
              
              <div className="relative z-10 text-center">
                {/* Nombre adaptativo */}
                <h2 className="text-3xl md:text-5xl font-bold text-white tracking-[0.1em] md:tracking-[0.2em] uppercase mb-4 group-hover:text-got-gold transition-colors">
                  {continent.name}
                </h2>
                <div className="h-[2px] w-12 bg-got-gold/40 mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>
                <p className="text-[10px] text-got-gold/60 uppercase tracking-[0.4em] font-bold">
                  {selectedContinent?.id === continent.id ? "Close Details" : "View Details"}
                </p>
              </div>
            </div>

            {/* Panel de Información adaptativo */}
            {selectedContinent?.id === continent.id && (
              <div className="p-5 md:p-8 bg-got-iron/40 border-t-2 border-got-gold rounded-b-2xl animate-in fade-in zoom-in duration-500 shadow-inner">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-got-gold/30 pb-4 mb-6 gap-2">
                  <h3 className="text-got-gold font-got text-lg md:text-xl tracking-[0.1em] md:tracking-[0.2em] uppercase">
                    {CONTINENT_LORE[continent.name]?.alias || "Territorio sin Explorar"}
                  </h3>
                  <span className="text-got-gold/40 font-mono text-[10px] md:text-xs uppercase tracking-widest">
                    Códice #{continent.id}
                  </span>
                </div>

                <p className="text-gray-300 italic text-base md:text-lg leading-relaxed mb-6 font-serif px-2 md:px-4 border-l-2 border-got-gold/20">
                  "{CONTINENT_LORE[continent.name]?.description || "La información sobre estas tierras es escasa en nuestras bibliotecas."}"
                </p>

                {/* Grid interno de datos: 1 columna en móvil muy pequeño */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 bg-black/30 p-4 rounded-lg border border-got-gold/10">
                  <div className="text-left">
                    <h4 className="text-[9px] md:text-[10px] text-got-gold uppercase tracking-[0.3em] mb-2">Bastiones Clave</h4>
                    <p className="text-white text-xs md:text-sm font-semibold tracking-wide leading-tight">
                      {CONTINENT_LORE[continent.name]?.notablePlaces || "Información Restringida"}
                    </p>
                  </div>
                  <div className="text-left sm:text-right">
                    <h4 className="text-[9px] md:text-[10px] text-got-gold uppercase tracking-[0.3em] mb-2">Estado</h4>
                    <p className="text-green-500/80 text-xs md:text-sm font-bold animate-pulse">
                      ABIERTO PARA EXPLORACIÓN
                    </p>
                  </div>
                </div>

                <div className="mt-8 text-center">
                   <div className="h-[1px] w-full bg-gradient-to-r from-transparent via-got-gold/30 to-transparent mb-4"></div>
                   <p className="text-[8px] md:text-[9px] text-got-gold/40 uppercase tracking-[0.3em] md:tracking-[0.5em]">
                     Documentado por la Orden de los Maestres
                   </p>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinentsPage;

const CONTINENT_LORE = {
  "Westeros": {
    alias: "Los Siete Reinos",
    description: "Hogar del Trono de Hierro. Desde el imponente Muro en el norte hasta los desiertos de Dorne en el sur.",
    notablePlaces: "Desembarco del Rey, Invernalia, Rocadragón",
  },
  "Essos": {
    alias: "El Continente Oriental",
    description: "Una vasta tierra de magia, ciudades libres y el Mar de Hierba. Cuna de las antiguas ruinas de Valyria.",
    notablePlaces: "Braavos, Meereen, Volantis",
  },
  "Sothoryos": {
    alias: "El Infierno Verde",
    description: "Una tierra misteriosa y plagada de enfermedades, cubierta por selvas densas y criaturas extrañas.",
    notablePlaces: "Zamettar, Yeen",
  },
  "Ulthos": {
    alias: "Las Tierras de la Sombra",
    description: "Un territorio oscuro y boscoso al sur de Asshai. Poco se sabe de él incluso para los Archimaestres.",
    notablePlaces: "Territorios Desconocidos",
  }
};