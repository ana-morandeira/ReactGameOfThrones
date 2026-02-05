import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import HousesPage from './pages/HousesPage';
import ContinentsPage from './pages/ContinentsPage';
import Footer from './components/footer/Footer';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-got-dark text-gray-200 font-got">
        <nav className="bg-black border-b border-got-gold/30 p-6 flex gap-8 justify-center items-center shadow-2xl w-full px-4 md:px-8 py-4">
          <Link to="/" className="text-got-gold hover:text-white transition-all uppercase tracking-[0.2em] text-sm font-bold">
            Personajes
          </Link>
          <div className="h-4 w-[1px] bg-got-gold/30"></div>
          <Link to="/houses" className="text-got-gold hover:text-white transition-all uppercase tracking-[0.2em] text-sm font-bold">
            Casas
          </Link>
          <Link to="/continents" className="text-got-gold hover:text-white transition-all uppercase tracking-[0.2em] text-sm font-bold">
  Continents
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