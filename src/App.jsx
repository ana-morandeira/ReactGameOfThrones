import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import CharactersPage from './pages/CharactersPage';
import HousesPage from './pages/HousesPage';



function App() {
  return (
    <Router>
      <nav className="bg-slate-900 text-white p-4 flex gap-6 justify-center">
        <Link to="/" className="hover:text-blue-400 font-bold">Characters</Link>
        <Link to="/houses" className="hover:text-blue-400 font-bold">Houses</Link>
      </nav>

      <Routes>
        <Route path="/" element={<CharactersPage />} />
        <Route path="/houses" element={<HousesPage />} />
      </Routes>
    </Router>
  );
}

export default App;