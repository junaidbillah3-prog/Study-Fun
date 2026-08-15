import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { questionBank } from '../data/questions';
import { ArrowLeft, CheckCircle2, XCircle, Award, RotateCcw } from 'lucide-react';

export default function Quiz() {
  const { subjectId } = useParams();
  const questions = questionBank[subjectId] || [];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  if (questions.length === 0) {
    return (
      <div className="min-h-screen p-8 flex flex-col items-center justify-center text-center">
        <h1 className="text-3xl font-bold text-red-400 mb-4">No questions found for this subject.</h1>
        <Link to="/" className="text-blue-400 hover:underline flex items-center gap-2">
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
      </div>
    );
  }

  const currentQ = questions[currentIndex];

  const handleSelect = (index) => {
    if (isSubmitted) return;
    setSelectedOption(index);
  };

  const handleSubmit = () => {
    if (selectedOption === null) return;
    setIsSubmitted(true);
    if (selectedOption === currentQ.correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    setSelectedOption(null);
    setIsSubmitted(false);
    if (currentIndex + 1 < questions.length) {
      setCurrentIndex(currentIndex + 1);
    } else {
      setIsFinished(true);
    }
  };

  const handleRestart = () => {
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsSubmitted(false);
    setScore(0);
    setIsFinished(false);
  };

  if (isFinished) {
    const percentage = Math.round((score / questions.length) * 100);
    return (
      <div className="min-h-screen p-8 max-w-2xl mx-auto flex flex-col items-center justify-center text-center">
        <div className="p-6 rounded-3xl bg-gray-800/60 border border-gray-700 backdrop-blur-md shadow-2xl w-full">
          <Award className="w-16 h-16 text-yellow-400 mx-auto mb-4" />
          <h1 className="text-4xl font-extrabold text-white mb-2">Quiz Completed!</h1>
          <p className="text-gray-400 mb-6">Here is how you performed on {subjectId.replace('-', ' ')}:</p>
          
          <div className="text-6xl font-black text-blue-400 mb-4">
            {score} / {questions.length}
          </div>
          <p className="text-xl font-semibold text-gray-200 mb-8">{percentage}% Score</p>

          <div className="flex gap-4 justify-center">
            <button
              onClick={handleRestart}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg"
            >
              <RotateCcw className="w-5 h-5" /> Try Again
            </button>
            <Link
              to="/"
              className="flex items-center gap-2 px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-bold rounded-xl transition-all shadow-lg"
            >
              <ArrowLeft className="w-5 h-5" /> Dashboard
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-6 max-w-3xl mx-auto flex flex-col justify-center">
      <div className="flex justify-between items-center mb-6">
        <Link to="/" className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors">
          <ArrowLeft className="w-5 h-5" /> Back to Dashboard
        </Link>
        <span className="text-sm font-semibold px-4 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-gray-300">
          Question {currentIndex + 1} of {questions.length}
        </span>
      </div>

      <div className="p-8 rounded-3xl bg-gray-800/50 border border-gray-700 backdrop-blur-md shadow-2xl">
        <h2 className="text-2xl font-bold text-white mb-6 leading-snug">{currentQ.question}</h2>

        <div className="space-y-3 mb-8">
          {currentQ.options.map((option, idx) => {
            let styling = "border-gray-700 bg-gray-900/50 hover:bg-gray-800 text-gray-200";
            
            if (selectedOption === idx) {
              styling = "border-blue-500 bg-blue-500/20 text-white shadow-md shadow-blue-500/10";
            }

            if (isSubmitted) {
              if (idx === currentQ.correct) {
                styling = "border-emerald-500 bg-emerald-500/20 text-emerald-200 font-medium";
              } else if (selectedOption === idx && idx !== currentQ.correct) {
                styling = "border-red-500 bg-red-500/20 text-red-200 font-medium";
              } else {
                styling = "border-gray-800 bg-gray-900/30 text-gray-500 opacity-50";
              }
            }

            return (
              <button
                key={idx}
                onClick={() => handleSelect(idx)}
                disabled={isSubmitted}
                className={`w-full text-left p-4 rounded-2xl border transition-all flex items-center justify-between ${styling}`}
              >
                <span>{option}</span>
                {isSubmitted && idx === currentQ.correct && <CheckCircle2 className="w-5 h-5 text-emerald-400" />}
                {isSubmitted && selectedOption === idx && idx !== currentQ.correct && <XCircle className="w-5 h-5 text-red-400" />}
              </button>
            );
          })}
        </div>

        {isSubmitted && (
          <div className="mb-8 p-4 rounded-2xl bg-gray-900/80 border border-gray-700/60">
            <p className="text-sm font-semibold text-gray-400 mb-1">Explanation:</p>
            <p className="text-gray-300 text-sm leading-relaxed">{currentQ.explanation}</p>
          </div>
        )}

        <div className="flex justify-end">
          {!isSubmitted ? (
            <button
              onClick={handleSubmit}
              disabled={selectedOption === null}
              className={`px-8 py-3 rounded-xl font-bold transition-all shadow-lg ${
                selectedOption === null
                  ? 'bg-gray-700 text-gray-500 cursor-not-allowed'
                  : 'bg-blue-600 hover:bg-blue-500 text-white'
              }`}
            >
              Submit Answer
            </button>
          ) : (
            <button
              onClick={handleNext}
              className="px-8 py-3 rounded-xl font-bold bg-emerald-600 hover:bg-emerald-500 text-white transition-all shadow-lg"
            >
              {currentIndex + 1 < questions.length ? 'Next Question' : 'View Results'}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}