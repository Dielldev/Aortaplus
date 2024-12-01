import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Biochem from './pages/biochem';
import Medi from './pages/medi';
import Orl from './pages/orl';
import Surgery from './pages/surgery';
import Pedri from './pages/Pedri';
import Cardio from './pages/cardio';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/biochem" element={<Biochem />} />
        <Route path="/medi" element={<Medi />} />
        <Route path="/orl" element={<Orl />} />
        <Route path="/surgery" element={<Surgery />} />
        <Route path="/Pedri" element={<Pedri />} />
        <Route path="/cardio" element={<Cardio />} />
      </Routes>
    </Router>
  );
}

export default App;
