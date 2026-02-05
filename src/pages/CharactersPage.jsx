import { useEffect, useState } from 'react';
import { getAllCharacters } from '../services/characterService';
import CharacterCard from '../components/CharacterCard';

const CharactersPage = () => {
  const [characters, setCharacters] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    getAllCharacters().then(setCharacters);
  }, []);

  const filtered = characters.filter(char => 
    char.fullName.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-got-dark py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-5xl font-got text-got-gold mb-8 tracking-widest uppercase">
            Juego de Tronos
          </h1>
          
          <input 
            type="text"
            placeholder="Busca tu personaje"
            className="w-full max-w-md px-6 py-3 bg-got-iron/20 border border-got-gold/30 rounded-full text-gray-200 focus:outline-none focus:border-got-gold focus:ring-1 focus:ring-got-gold transition-all"
            onChange={(e) => setSearch(e.target.value)}
          />
        </header>

      {/* Cambia el contenedor de tus cartas por esto */}
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
  {characters.map(character => (
    <CharacterCard key={character.id} character={character} />
  ))}
</div>
      </div>
    </div>
  );
};

export default CharactersPage;