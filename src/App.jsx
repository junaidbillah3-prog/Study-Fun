import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { InlineMath, BlockMath } from 'react-katex';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import Leaderboard from './pages/Leaderboard';
import MemeMode from './pages/MemeMode';
import 'katex/dist/katex.min.css';
import About from './pages/About';

export function MathExample() {
  return (
    <div>
      <p>The function is <InlineMath math="f(x) = 2^x + \sqrt{x}" />.</p>
      <BlockMath math="P \implies (Q \land \neg R)" />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/quiz/:subjectId" element={<Quiz />} />
        <Route path="/meme-mode/:subjectId" element={<MemeMode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;