import { useEffect, useState } from 'react';
import { getAllCharacters } from '../services/characterService';
import CharacterCard from '../components/CharacterCard';

const HousesPage = () => {
  const [characters, setCharacters] = useState([]);
  const [houses, setHouses] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getAllCharacters();
        setCharacters(data);
        
        // 1. Unificamos nombres (quitamos "House " del inicio) y eliminamos duplicados
        const houseList = [...new Set(data.map(char => {
          let family = char.family.trim();
          return family.replace(/^House /i, ""); // "House Stark" -> "Stark"
        }))]
        .filter(house => house !== "" && house !== "None" && house !== "Unknown")
        .sort();
        
        setHouses(houseList);
      } catch (error) {
        console.error("Error loading data", error);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  // 2. Filtro mejorado: buscamos si el nombre de la casa está contenido en la familia del personaje
  const houseMembers = characters.filter(char => 
    selectedHouse && char.family.toLowerCase().includes(selectedHouse.toLowerCase())
  );

  if (loading) return <div className="text-center p-10 text-got-gold font-got">Loading Westeros...</div>;

  return (
    <div className="min-h-screen bg-got-dark p-4 md:p-8 font-got">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-got-gold mb-4 tracking-tighter uppercase">
          Great Houses
        </h1>
        <div className="h-1 w-24 bg-got-gold mx-auto shadow-[0_0_15px_#c5a059]"></div>
      </header>

      {/* Grid de Casas (Botones) */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
        {houses.map((house, index) => (
          <button 
            key={index} 
            onClick={() => setSelectedHouse(house === selectedHouse ? null : house)}
            className={`p-6 border rounded-xl transition-all duration-300 flex items-center justify-between shadow-lg ${
              selectedHouse === house 
              ? "bg-got-gold text-black border-white scale-105" 
              : "bg-got-iron/30 border-got-gold/20 text-gray-200 hover:border-got-gold hover:bg-got-iron/50"
            }`}
          >
            <span className="text-xl font-bold tracking-widest uppercase">{house}</span>
            <span className="text-sm">{selectedHouse === house ? "▲" : "▼"}</span>
          </button>
        ))}
      </div>

      {/* Sección de Miembros Desplegable */}
      {selectedHouse && (
        <section className="max-w-7xl mx-auto transition-all duration-500">
          <h2 className="text-3xl font-bold text-got-gold mb-8 text-center border-b border-got-gold/30 pb-4 uppercase tracking-widest">
            Members of {selectedHouse}
          </h2>
          
          {houseMembers.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {houseMembers.map(char => (
                <CharacterCard key={char.id} character={char} />
              ))}
            </div>
          ) : (
            <p className="text-center text-gray-500 italic">No members found for this house.</p>
          )}
        </section>
      )}
    </div>
  );
};

export default HousesPage;