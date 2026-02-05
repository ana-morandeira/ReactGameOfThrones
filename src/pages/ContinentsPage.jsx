import { useEffect, useState } from 'react';
import { getAllContinents } from '../services/characterService';

const ContinentsPage = () => {
  const [continents, setContinents] = useState([]);
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
        <h1 className="text-5xl font-extrabold text-got-gold mb-4 tracking-[0.2em] uppercase">
          Known World
        </h1>
        <p className="text-gray-400 italic">Exploring the vast lands of the Lore</p>
        <div className="h-1 w-32 bg-got-gold mx-auto mt-6 shadow-[0_0_15px_#c5a059]"></div>
      </header>

      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        {continents.map((continent) => (
          <div 
            key={continent.id} 
            className="group relative p-12 bg-got-iron/20 border-2 border-got-gold/20 rounded-2xl transition-all duration-300 hover:scale-[1.05] hover:border-4 hover:border-got-gold hover:shadow-[0_0_50px_rgba(197,160,89,0.5)] flex flex-col items-center justify-center overflow-hidden"
          >
            {/* Número de ID como decoración de fondo */}
            <span className="absolute -top-4 -left-4 text-9xl font-bold text-got-gold/5 italic select-none">
              {continent.id}
            </span>
            
            <h2 className="text-4xl font-bold text-white tracking-widest uppercase mb-2 group-hover:text-got-gold transition-colors">
              {continent.name}
            </h2>
            
            <div className="w-16 h-[2px] bg-got-gold/40 group-hover:w-32 transition-all duration-500"></div>
            
            <p className="mt-4 text-xs text-got-gold/60 uppercase tracking-widest">
              Explore Territory
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinentsPage;