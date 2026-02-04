import { useEffect, useState } from 'react';
import { getAllCharacters } from './services/characterService';
import CharacterCard from './components/CharacterCard';

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await getAllCharacters();
        setCharacters(data);
      } catch (error) {
        console.error("Error loading characters");
      }
    };
    loadData();
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 py-10 px-4">
      <h1 className="text-4xl md:text-6xl font-extrabold text-center text-white mb-12 tracking-tighter">
        Game of Thrones <span className="text-blue-500">API</span>
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {characters.map((char) => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}

export default App;