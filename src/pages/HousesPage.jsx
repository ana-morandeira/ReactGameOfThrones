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
    <div className="min-h-screen bg-slate-100 p-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-extrabold text-slate-900 mb-2">Great Houses of Westeros</h1>
        <p className="text-slate-600 italic">"The man who passes the sentence should swing the sword."</p>
      </header>

      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {houses.map((house, index) => (
          <div 
            key={index} 
            className="bg-white p-6 rounded-lg border-l-8 border-blue-600 shadow-sm hover:shadow-md transition-shadow flex items-center justify-between"
          >
            <span className="text-xl font-bold text-slate-800">{house}</span>
            <div className="h-8 w-8 bg-slate-200 rounded-full flex items-center justify-center">
               <span className="text-xs text-slate-500 font-mono">ID</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default HousesPage;