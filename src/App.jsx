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
  <div className="min-h-screen bg-gray-100 p-8">
    <h1 className="text-3xl font-bold text-center mb-10 text-slate-800">
      Game of Thrones API
    </h1>
    
    {/* Este es el contenedor que hace la magia del grid */}
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
      {characters.map((char) => (
        <CharacterCard key={char.id} character={char} />
      ))}
    </div>
  </div>
);
}git

export default App;