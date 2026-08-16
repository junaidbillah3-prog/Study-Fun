import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import Leaderboard from './pages/Leaderboard';
import MemeMode from './pages/MemeMode';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/leaderboard" element={<Leaderboard />} />
        <Route path="/" element={<Dashboard />} />
        <Route path="/quiz/:subjectId" element={<Quiz />} />
        <Route path="/meme-mode/:subjectId" element={<MemeMode />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;