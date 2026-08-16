import { supabase } from '../lib/supabase';
import { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { getRandomQuestions } from '../data/questions';
import { ArrowLeft, RotateCcw, CheckCircle, XCircle, Loader2 } from 'lucide-react';

export default function Quiz() {
  const { subjectId } = useParams();
  const navigate = useNavigate();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [isCompleted, setIsCompleted] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadNewQuiz();
  }, [subjectId]);

  const loadNewQuiz = async () => {
    setIsLoading(true);
    setCurrentIndex(0);
    setScore(0);
    setSelectedOption(null);
    setIsCompleted(false);
    setIsSubmitted(false);

    let loadedQuestions = [];

    // Attempt to fetch from Supabase table filtering by subjectId (e.g. 'life-sciences-p1')
    if (supabase) {
      try {
        const { data, error } = await supabase
          .from('questions')
          .select('*')
          .eq('subject_id', subjectId);

        if (!error && data && data.length > 0) {
          // Shuffle retrieved database records and select up to 10
          loadedQuestions = data
            .sort(() => 0.5 - Math.random())
            .slice(0, 10);
        }
      } catch (err) {
        console.error('Error fetching questions from Supabase:', err);
      }
    }

    // Fallback to local questions repository if Supabase returns no records
    if (loadedQuestions.length === 0) {
      loadedQuestions = getRandomQuestions(subjectId, 10);
    }

    setQuestions(loadedQuestions);
    setIsLoading(false);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        <div className="flex items-center gap-3">
          <Loader2 className="w-6 h-6 animate-spin text-blue-400" />
          <p className="text-lg font-medium text-gray-300">Loading questions...</p>
        </div>
      </div>
    );
  }

  if (!questions.length) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center text-white gap-4">
        <p className="text-lg font-medium text-gray-300">No questions found for this subject.</p>
        <Link
          to="/"
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all"
        >
          Return to Dashboard
        </Link>
      </div>
    );
  }

  const currentQuestion = questions[currentIndex];

  const handleSelectOption = (option) => {
    if (isSubmitted) return;
    setSelectedOption(option);
  };

  const handleSubmitAnswer = () => {
    if (!selectedOption || isSubmitted) return;
    setIsSubmitted(true);
    
    const isCorrect = selectedOption === currentQuestion.answer;
    if (isCorrect) {
      setScore((prev) => prev + 1);
    }
  };

  const handleNextQuestion = async () => {
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex((prev) => prev + 1);
      setSelectedOption(null);
      setIsSubmitted(false);
    } else {
      setIsCompleted(true);

      try {
        const { data: { user } } = await supabase.auth.getUser();
        const displayName = user
          ? (user.user_metadata?.full_name || user.email.split('@')[0])
          : 'Guest Scholar';

        const queryField = user ? 'user_id' : 'username';
        const queryValue = user ? user.id : displayName;

        const { data: existingEntry } = await supabase
          .from('leaderboard')
          .select('*')
          .eq(queryField, queryValue)
          .maybeSingle();

        if (existingEntry) {
          await supabase
            .from('leaderboard')
            .update({
              points: existingEntry.points + score,
              username: displayName,
              updated_at: new Date()
            })
            .eq('id', existingEntry.id);
        } else {
          await supabase
            .from('leaderboard')
            .insert([
              {
                user_id: user ? user.id : null,
                username: displayName,
                points: score
              }
            ]);
        }
      } catch (err) {
        console.error('Error updating cumulative score:', err);
      }
    }
  };

  if (isCompleted) {
    return (
      <div className="min-h-screen p-8 max-w-2xl mx-auto flex flex-col justify-center text-center">
        <div className="bg-gray-800 border border-gray-700 p-8 rounded-3xl shadow-2xl">
          <h2 className="text-4xl font-extrabold text-white mb-4">Quiz Completed!</h2>
          <p className="text-gray-400 mb-6">Here is your score for this session:</p>
          
          <div className="text-6xl font-black text-blue-400 mb-6">
            {score} / {questions.length}
          </div>

          <div className="flex gap-4 justify-center">
            <button
              onClick={loadNewQuiz}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all"
            >
              <RotateCcw className="w-5 h-5" /> Retake (New 10 Questions)
            </button>
            <Link
              to="/"
              className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-all"
            >
              Back to Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8 max-w-3xl mx-auto flex flex-col justify-center">
      {/* Quiz Progress Header */}
      <div className="flex justify-between items-center mb-6">
        <button
          onClick={() => navigate('/')}
          className="flex items-center gap-2 text-gray-400 hover:text-white transition-all text-sm font-semibold"
        >
          <ArrowLeft className="w-4 h-4" /> Exit Quiz
        </button>
        <span className="text-sm font-semibold text-blue-400 bg-blue-500/10 px-3 py-1 rounded-xl border border-blue-500/20">
          Question {currentIndex + 1} of {questions.length}
        </span>
      </div>

      {/* Main Question Card */}
      <div className="bg-gray-800 border border-gray-700 p-8 rounded-3xl shadow-2xl mb-6">
        <h3 className="text-2xl font-bold text-white mb-6 leading-relaxed">
          {currentQuestion.question}
        </h3>

        <div className="space-y-3 mb-6">
          {currentQuestion.options.map((option, idx) => {
            let style = "bg-gray-900 border-gray-700 text-gray-200 hover:border-gray-500";
            
            if (selectedOption === option) {
              style = "bg-blue-600/20 border-blue-500 text-white";
            }
            if (isSubmitted) {
              if (option === currentQuestion.answer) {
                style = "bg-emerald-500/20 border-emerald-500 text-emerald-300 font-bold";
              } else if (selectedOption === option) {
                style = "bg-red-500/20 border-red-500 text-red-300";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelectOption(option)}
                disabled={isSubmitted}
                className={`w-full text-left p-4 rounded-xl border transition-all text-base font-medium flex justify-between items-center ${style}`}
              >
                <span>{option}</span>
                {isSubmitted && option === currentQuestion.answer && (
                  <CheckCircle className="w-5 h-5 text-emerald-400" />
                )}
                {isSubmitted && selectedOption === option && option !== currentQuestion.answer && (
                  <XCircle className="w-5 h-5 text-red-400" />
                )}
              </button>
            );
          })}
        </div>

        {/* Explanation Box */}
        {isSubmitted && currentQuestion.explanation && (
          <div className="p-4 rounded-xl bg-gray-900 border border-gray-700 text-gray-300 text-sm mb-6">
            <strong className="text-blue-400">Explanation: </strong>
            {currentQuestion.explanation}
          </div>
        )}

        {/* Action Buttons */}
        {!isSubmitted ? (
          <button
            onClick={handleSubmitAnswer}
            disabled={!selectedOption}
            className="w-full py-3 bg-blue-600 hover:bg-blue-500 disabled:bg-gray-700 disabled:text-gray-500 text-white font-bold rounded-xl transition-all shadow-lg"
          >
            Submit Answer
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="w-full py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold rounded-xl transition-all shadow-lg"
          >
            {currentIndex + 1 < questions.length ? 'Next Question' : 'View Final Score'}
          </button>
        )}
      </div>
    </div>
  );
}