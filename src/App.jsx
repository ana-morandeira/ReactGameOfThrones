import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import HousesPage from './pages/HousesPage';
import ContinentsPage from './pages/ContinentsPage';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import './App.css';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-got-dark text-gray-200 font-got">
        <Header />
        
        {/* Navbar con letras más grandes y mejor tracking */}
        <nav className="bg-black border-b border-got-gold/30 p-6 flex flex-wrap gap-6 md:gap-12 justify-center items-center shadow-2xl w-full px-6 py-6">
          
          <Link to="/" className="text-got-gold hover:text-white transition-all uppercase tracking-[0.3em] text-lg md:text-xl font-bold">
            Personajes
          </Link>
          
          {/* Separador visual (opcional) */}
          <div className="hidden md:block h-6 w-[1px] bg-got-gold/30"></div>
          
          <Link to="/houses" className="text-got-gold hover:text-white transition-all uppercase tracking-[0.3em] text-lg md:text-xl font-bold">
            Grandes Casas
          </Link>

          <div className="hidden md:block h-6 w-[1px] bg-got-gold/30"></div>

          <Link to="/continents" className="text-got-gold hover:text-white transition-all uppercase tracking-[0.3em] text-lg md:text-xl font-bold">
            Continentes
          </Link>

        </nav>

        <main className="p-4 flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<CharactersPage />} />
            <Route path="/houses" element={<HousesPage />} />
            <Route path="/continents" element={<ContinentsPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;