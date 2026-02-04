import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import HousesPage from './pages/HousesPage';
import HouseDetailPage from './pages/HouseDetailPage'; // ¡No olvides este import!

function App() {
  return (
    <Router>
      {/* Contenedor principal con fuente y fondo GoT */}
      <div className="min-h-screen bg-got-dark text-gray-200 font-got">
        
        {/* Navbar Estilo Desembarco del Rey */}
        <nav className="bg-black border-b border-got-gold/30 p-6 flex gap-8 justify-center items-center shadow-2xl">
          <Link to="/" className="text-got-gold hover:text-white transition-all uppercase tracking-[0.2em] text-sm font-bold">
            Characters
          </Link>
          <div className="h-4 w-[1px] bg-got-gold/30"></div> {/* Separador elegante */}
          <Link to="/houses" className="text-got-gold hover:text-white transition-all uppercase tracking-[0.2em] text-sm font-bold">
            Houses
          </Link>
        </nav>

        {/* Sección de contenido */}
        <main className="p-4">
          <Routes>
            <Route path="/" element={<CharactersPage />} />
            <Route path="/houses" element={<HousesPage />} />
            <Route path="/houses/:houseName" element={<HouseDetailPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;