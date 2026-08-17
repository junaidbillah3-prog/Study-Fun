import { useEffect, useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { Trophy, Medal, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Leaderboard() {
  const [scores, setScores] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchLeaderboard();
  }, []);

  const fetchLeaderboard = async () => {
    setLoading(true);

    // 1. Join the 'profiles' table using the foreign key relationship
    const { data, error } = await supabase
      .from('leaderboard')
      .select(`
        *,
        profiles (
          username
        )
      `)
      .order('points', { ascending: false })
      .limit(20);

    if (error) {
      console.error('Error fetching leaderboard:', error);
    } else {
      setScores(data || []);
    }
    setLoading(false);
  };

  return (
    <div className="min-h-screen p-8 max-w-4xl mx-auto flex flex-col justify-center">
      <div className="flex justify-between items-center mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-all text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <div className="flex items-center gap-2 text-yellow-400 font-extrabold text-xl">
          <Trophy className="w-6 h-6" /> Lifetime Points Leaderboard
        </div>
      </div>

      <div className="bg-gray-800 border border-gray-700 rounded-3xl p-6 shadow-2xl overflow-hidden">
        {loading ? (
          <p className="text-center text-gray-400 py-8">Loading rankings...</p>
        ) : scores.length === 0 ? (
          <p className="text-center text-gray-400 py-8">No scores recorded yet. Take a quiz to gain points!</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-gray-700 text-gray-400 text-sm">
                  <th className="py-3 px-4">Rank</th>
                  <th className="py-3 px-4">Student</th>
                  <th className="py-3 px-4 text-right">Total Points</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-700/50 text-gray-200 font-medium">
                {scores.map((entry, index) => (
                  <tr key={entry.id} className="hover:bg-gray-700/30 transition-all">
                    <td className="py-4 px-4 flex items-center gap-2">
                      {index === 0 && <Medal className="w-5 h-5 text-yellow-400" />}
                      {index === 1 && <Medal className="w-5 h-5 text-gray-300" />}
                      {index === 2 && <Medal className="w-5 h-5 text-amber-600" />}
                      {index > 2 && <span className="text-gray-500 font-bold pl-2">#{index + 1}</span>}
                    </td>
                    
                    {/* 2. Read live username from profiles with fallback */}
                    <td className="py-4 px-4 font-semibold text-white">
                      {entry.profiles?.username || entry.username || 'Default User'}
                    </td>
                    
                    <td className="py-4 px-4 text-right font-extrabold text-emerald-400 text-lg">
                      {entry.points.toLocaleString()} pts
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}