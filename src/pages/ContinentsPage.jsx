import { useEffect, useState } from 'react';
import { getAllContinents } from '../services/characterService';

const ContinentsPage = () => {
  const [continents, setContinents] = useState([]);

  useEffect(() => {
    getAllContinents().then(setContinents);
  }, []);

  return (
    <div className="min-h-screen bg-got-dark p-8 font-got text-center">
      <h1 className="text-5xl text-got-gold mb-12 tracking-widest uppercase">Known World</h1>
      
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        {continents.map((cont) => (
          <div 
            key={cont.id} 
            className="p-10 bg-got-iron/30 border-2 border-got-gold/20 rounded-xl transition-all duration-300 hover:scale-105 hover:border-got-gold hover:shadow-[0_0_40px_rgba(197,160,89,0.5)]"
          >
            <h2 className="text-3xl font-bold text-white tracking-widest uppercase">{cont.name}</h2>
            <p className="text-got-gold mt-2 text-sm">ID: {cont.id}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContinentsPage;