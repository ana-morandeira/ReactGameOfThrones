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
    <div className="min-h-screen bg-got-dark p-8 font-got">
      <header className="text-center mb-16">
        <h1 className="text-6xl font-extrabold text-got-gold mb-4 tracking-[0.3em] uppercase">
          Known World
        </h1>
        <p className="text-gray-400 italic tracking-widest text-sm mb-6">
          Exploring the vast lands of the Lore
        </p>
        <div className="h-1 w-32 bg-got-gold mx-auto shadow-[0_0_15px_#c5a059]"></div>
      </header>

      {/* Grid de Continentes */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {continents.map((continent) => (
          <div key={continent.id} className="flex flex-col gap-4">
            <div 
              onClick={() => setSelectedContinent(selectedContinent?.id === continent.id ? null : continent)}
              className={`group relative p-16 bg-got-iron/10 border-2 rounded-2xl transition-all duration-500 hover:scale-[1.05] flex flex-col items-center justify-center overflow-hidden cursor-pointer ${
                selectedContinent?.id === continent.id 
                ? "border-got-gold shadow-[0_0_50px_rgba(197,160,89,0.6)] bg-got-iron/30" 
                : "border-got-gold/10 hover:border-got-gold hover:shadow-[0_0_40px_rgba(197,160,89,0.3)]"
              }`}
            >
              {/* Número de fondo */}
              <span className="absolute inset-0 flex items-center justify-center text-[12rem] font-bold text-got-gold/5 italic select-none pointer-events-none group-hover:text-got-gold/10 transition-colors">
                {continent.id}
              </span>
              
              <div className="relative z-10 text-center">
                <h2 className="text-5xl font-bold text-white tracking-[0.2em] uppercase mb-4 group-hover:text-got-gold transition-colors">
                  {continent.name}
                </h2>
                <div className="h-[2px] w-12 bg-got-gold/40 mx-auto mb-4 group-hover:w-24 transition-all duration-500"></div>
                <p className="text-[10px] text-got-gold/60 uppercase tracking-[0.4em] font-bold">
                  {selectedContinent?.id === continent.id ? "Close Details" : "View Details"}
                </p>
              </div>
            </div>

            {/* Panel de Información de la API (Solo si está seleccionado) */}
            {selectedContinent?.id === continent.id && (
              <div className="p-6 bg-black/40 border-t-4 border-got-gold rounded-b-2xl animate-in fade-in slide-in-from-top-4 duration-500">
                <h3 className="text-got-gold uppercase tracking-widest text-sm font-bold mb-4">API Metadata:</h3>
                <div className="grid grid-cols-2 gap-4 text-left border border-got-gold/20 p-4 rounded-lg bg-got-iron/10">
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase">Field: ID</p>
                    <p className="text-xl text-white"># {selectedContinent.id}</p>
                  </div>
                  <div>
                    <p className="text-[10px] text-gray-500 uppercase">Field: Name</p>
                    <p className="text-xl text-white">{selectedContinent.name}</p>
                  </div>
                </div>
                <p className="mt-4 text-xs text-gray-400 italic">
                  "This land is officially recognized by the Citadel as {selectedContinent.name}."
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinentsPage;