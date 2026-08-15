import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Quiz from './pages/Quiz';
import Leaderboard from './pages/Leaderboard';


<Route path="/leaderboard" element={<Leaderboard />} />

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/quiz/:subjectId" element={<Quiz />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;