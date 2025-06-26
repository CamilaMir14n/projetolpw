import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Activities from './pages/Activities';
import Ebooks from './pages/Ebooks';
import './App.css';

export default function App() {
  return (
    <Router>
      <div className="background-pattern">
        <div className="content-container">
          <img
            src="/assets/ilustracao.png"
            alt="Ilustração"
            style={{ width: '120px', margin: '0 auto 24px', display: 'block' }}
          />
          <nav className="nav">
            <Link to="/" className="nav-btn">Perfil</Link>
            <Link to="/activities" className="nav-btn">Sugestões de Atividades</Link>
            <Link to="/ebooks" className="nav-btn">Atividades</Link>
          </nav>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/activities" element={<Activities />} />
            <Route path="/ebooks" element={<Ebooks />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}
