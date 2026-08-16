import { useState } from 'react';
import { Edit3, X } from 'lucide-react';
import { supabase } from '../lib/supabase';

export default function UsernameModal({ isOpen, onClose, user, onUsernameUpdated }) {
  const currentUsername =
    user?.user_metadata?.username ||
    user?.user_metadata?.full_name ||
    user?.email?.split('@')[0] ||
    '';

  const [username, setUsername] = useState(currentUsername);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  if (!isOpen) return null;

  const handleUpdateUsername = async (e) => {
    e.preventDefault();
    const cleanUsername = username.trim();

    if (!cleanUsername) {
      setError('Username cannot be empty.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);

    try {
      // 1. Update user metadata in Supabase Auth
      const { data, error: authError } = await supabase.auth.updateUser({
        data: { username: cleanUsername }
      });

      if (authError) throw authError;

      // 2. Update existing entry in the leaderboard table
      if (user?.id) {
        const { error: dbError } = await supabase
          .from('leaderboard')
          .update({ username: cleanUsername })
          .eq('user_id', user.id);

        if (dbError) console.error('Error updating leaderboard username:', dbError);
      }

      setSuccess('Username updated successfully!');
      if (onUsernameUpdated) onUsernameUpdated(data.user);

      setTimeout(() => {
        onClose();
      }, 1200);
    } catch (err) {
      setError(err.message || 'Failed to update username.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <div className="bg-gray-800 border border-gray-700 p-8 rounded-3xl max-w-md w-full relative shadow-2xl">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 text-gray-400 hover:text-white"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-2">
          <Edit3 className="w-6 h-6 text-blue-400" />
          <h2 className="text-2xl font-bold text-white">Edit Username</h2>
        </div>
        <p className="text-sm text-gray-400 mb-6">
          Choose how your name appears on the leaderboard.
        </p>

        {error && (
          <div className="mb-4 p-3 rounded-xl bg-red-500/20 border border-red-500/30 text-red-300 text-sm">
            {error}
          </div>
        )}

        {success && (
          <div className="mb-4 p-3 rounded-xl bg-emerald-500/20 border border-emerald-500/30 text-emerald-300 text-sm">
            {success}
          </div>
        )}

        <form onSubmit={handleUpdateUsername} className="space-y-4">
          <div>
            <label className="block text-xs font-semibold text-gray-400 uppercase mb-1">
              Display Username
            </label>
            <input
              type="text"
              required
              maxLength={20}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              placeholder="e.g. MatricMaster"
              className="w-full bg-gray-900 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500 text-sm"
            />
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="w-1/2 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-all"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="w-1/2 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg"
            >
              {loading ? 'Saving...' : 'Save'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}