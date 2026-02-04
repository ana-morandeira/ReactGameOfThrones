import { useEffect, useState } from 'react';
import { getAllCharacters } from './services/characterService';
import CharacterCard from './components/CharacterCard'; // Lo crearás después

function App() {
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const loadData = async () => {
      const data = await getAllCharacters();
      setCharacters(data);
    };
    loadData();
  }, []);

  return (
    <div className="container">
      <h1>Game of Thrones Characters</h1>
      <div className="character-grid">
        {characters.map(char => (
          <CharacterCard key={char.id} character={char} />
        ))}
      </div>
    </div>
  );
}

export default App;