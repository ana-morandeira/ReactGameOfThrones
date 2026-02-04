import { useEffect, useState } from 'react';
import { getAllCharacters } from '../services/characterService';

const HousesPage = () => {
  const [houses, setHouses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchHouses = async () => {
      try {
        const data = await getAllCharacters();
        // Extraemos las familias, limpiamos espacios y eliminamos duplicados
        const houseList = [...new Set(data.map(char => char.family.trim()))]
          .filter(house => house !== "" && house !== "Unknown")
          .sort(); // Las ordenamos alfabéticamente
        
        setHouses(houseList);
      } catch (error) {
        console.error("Error loading houses", error);
      } finally {
        setLoading(false);
      }
    };
    fetchHouses();
  }, []);

  if (loading) return <div className="text-center p-10 text-white">Loading Great Houses...</div>;

  return (
    // src/pages/HousesPage.jsx (Fragmento del return)
<div className="min-h-screen bg-got-dark p-8 font-got">
  <header className="text-center mb-16">
    <h1 className="text-5xl font-extrabold text-got-gold mb-4 tracking-tighter">
      Great Houses
    </h1>
    <div className="h-1 w-24 bg-got-gold mx-auto mb-4 shadow-[0_0_10px_#c5a059]"></div>
  </header>

  <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {houses.map((house, index) => (
      <Link 
        to={`/houses/${house}`} 
        key={index} 
        className="bg-got-iron/30 border border-got-gold/20 p-6 rounded-sm hover:border-got-gold hover:bg-got-iron/50 transition-all group flex items-center justify-between shadow-lg"
      >
        <span className="text-xl font-bold text-gray-200 group-hover:text-got-gold transition-colors tracking-widest">
          {house}
        </span>
        <span className="text-got-gold opacity-0 group-hover:opacity-100 transition-opacity">
          ⚔️
        </span>
      </Link>
    ))}
  </div>
</div>
  );
};

export default HousesPage;