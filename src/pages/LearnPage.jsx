import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import {
  ArrowLeft,
  BookOpen,
  CheckCircle,
  Lightbulb,
  FileText,
  ChevronRight,
  Download,
  ExternalLink,
  Image as ImageIcon,
} from 'lucide-react';
import MathText from '../components/MathText';
import { NOTES_DATA } from '../data/notes.js';

export default function LearnPage() {
  const { subjectId } = useParams();

  // Retrieve topics for current subject
  const topics = NOTES_DATA[subjectId] || [
    {
      id: 'general-notes',
      title: 'General Overview',
      summary: 'Study summaries for this module.',
      sections: [
        {
          heading: 'Key Concepts',
          blocks: [
            {
              type: 'text',
              content: 'Notes and diagrams for this subject are currently being compiled!',
            },
          ],
        },
      ],
    },
  ];

  // null = showing Topic List Menu; string = showing selected topic reader view
  const [selectedTopicId, setSelectedTopicId] = useState(null);

  const activeTopic = topics.find((t) => t.id === selectedTopicId);

  return (
    <div className="min-h-screen bg-gray-950 text-white p-4 sm:p-6 max-w-4xl mx-auto flex flex-col">
      {/* Top Main Bar */}
      <div className="flex justify-between items-center mb-6 pb-4 border-b border-gray-800">
        <Link
          to="/"
          className="flex items-center gap-2 text-gray-400 hover:text-white text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Dashboard
        </Link>
        <div className="flex items-center gap-2 text-emerald-400 font-extrabold text-lg sm:text-xl">
          <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0" />
          <span className="capitalize">{subjectId?.replace('-', ' ')} Notes</span>
        </div>
      </div>

      {/* ========================================================= */}
      {/* VIEW 1: TOPIC SELECTION MENU (Show when selectedTopicId is null) */}
      {/* ========================================================= */}
      {!activeTopic ? (
        <div className="space-y-6">
          <div className="bg-gray-900/60 border border-gray-800 p-5 rounded-2xl">
            <h2 className="text-xl font-bold text-white mb-1">Select a Topic</h2>
            <p className="text-xs sm:text-sm text-gray-400">
              Choose a topic below to open and read full revision notes and diagrams.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {topics.map((topic) => (
              <button
                key={topic.id}
                onClick={() => setSelectedTopicId(topic.id)}
                className="w-full text-left bg-gray-900/80 border border-gray-800 hover:border-emerald-500/50 hover:bg-gray-800/80 p-5 rounded-2xl transition-all group flex items-center justify-between shadow-md"
              >
                <div className="space-y-1 pr-4">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-500/10 text-emerald-400 group-hover:bg-emerald-500/20 transition-colors">
                      <FileText className="w-5 h-5" />
                    </div>
                    <h3 className="font-bold text-base sm:text-lg text-white group-hover:text-emerald-300 transition-colors">
                      <MathText text={topic.title} />
                    </h3>
                  </div>

                  {topic.summary && (
                    <div className="text-xs sm:text-sm text-gray-400 line-clamp-2 pl-9">
                      <MathText text={topic.summary} />
                    </div>
                  )}

                  {topic.sections && (
                    <div className="text-[11px] text-gray-500 font-medium pl-9 pt-1">
                      {topic.sections.length} Section{topic.sections.length > 1 ? 's' : ''}
                    </div>
                  )}
                </div>

                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-gray-800 group-hover:bg-emerald-500/20 text-gray-400 group-hover:text-emerald-400 transition-all flex-shrink-0">
                  <ChevronRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* ========================================================= */
        /* VIEW 2: FULL READER VIEW (Show when topic is selected) */
        /* ========================================================= */
        <div className="space-y-6">
          {/* Navigation bar inside topic */}
          <div className="flex items-center justify-between bg-gray-900/90 border border-gray-800 p-3 sm:p-4 rounded-xl">
            <button
              onClick={() => setSelectedTopicId(null)}
              className="flex items-center gap-2 text-xs sm:text-sm font-bold text-emerald-400 hover:text-emerald-300 bg-emerald-500/10 hover:bg-emerald-500/20 border border-emerald-500/30 px-3 py-1.5 rounded-lg transition-all"
            >
              <ArrowLeft className="w-4 h-4" /> All Topics
            </button>

            {activeTopic.pdfUrl && (
              <a
                href={activeTopic.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 border border-gray-700 px-3 py-1.5 rounded-lg text-xs font-bold transition-all"
              >
                <Download className="w-3.5 h-3.5 text-emerald-400" /> PDF Summary
                <ExternalLink className="w-3 h-3 text-gray-400" />
              </a>
            )}
          </div>

          {/* Reading Container */}
          <div className="bg-gray-900/80 border border-gray-800 p-5 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-md">
            {/* Topic Header */}
            <div className="pb-5 mb-6 border-b border-gray-800">
              <h1 className="text-2xl sm:text-3xl font-extrabold text-emerald-300 flex items-center gap-3">
                <Lightbulb className="w-7 h-7 text-yellow-400 flex-shrink-0" />
                <MathText text={activeTopic.title} />
              </h1>
              {activeTopic.summary && (
                <div className="text-gray-400 text-sm mt-2">
                  <MathText text={activeTopic.summary} />
                </div>
              )}
            </div>

            {/* Sections Loop */}
            <div className="space-y-6">
              {activeTopic.sections.map((sec, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/40 border border-gray-700/50 p-4 sm:p-6 rounded-xl space-y-4"
                >
                  <h2 className="font-bold text-base sm:text-lg text-white flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                    <MathText text={sec.heading} />
                  </h2>

                  {/* Option 2: Sequential Content Blocks */}
                  {sec.blocks && sec.blocks.length > 0 ? (
                    sec.blocks.map((block, blockIdx) => {
                      if (block.type === 'text') {
                        return (
                          <div
                            key={blockIdx}
                            className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line"
                          >
                            <MathText text={block.content} />
                          </div>
                        );
                      }

                      if (block.type === 'image') {
                        return (
                          <figure
                            key={blockIdx}
                            className="my-4 rounded-xl border border-gray-700/70 bg-gray-950/80 p-2.5 sm:p-4 overflow-hidden"
                          >
                            <div className="relative group flex justify-center">
                              <img
                                src={block.url}
                                alt={block.caption || sec.heading}
                                className="max-h-96 w-auto object-contain rounded-lg transition-transform duration-300 group-hover:scale-[1.01]"
                              />
                            </div>
                            {block.caption && (
                              <figcaption className="text-center text-xs sm:text-sm text-gray-400 mt-2.5 font-medium flex items-center justify-center gap-1.5">
                                <ImageIcon className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                                <MathText text={block.caption} />
                              </figcaption>
                            )}
                          </figure>
                        );
                      }

                      return null;
                    })
                  ) : (
                    /* Legacy single content/image string fallback */
                    <>
                      {sec.content && (
                        <div className="text-gray-300 text-sm sm:text-base leading-relaxed whitespace-pre-line">
                          <MathText text={sec.content} />
                        </div>
                      )}
                      {sec.image && (
                        <figure className="mt-4 rounded-xl border border-gray-700/70 bg-gray-950/80 p-3 overflow-hidden">
                          <div className="relative group flex justify-center">
                            <img
                              src={sec.image}
                              alt={sec.imageCaption || sec.heading}
                              className="max-h-96 w-auto object-contain rounded-lg"
                            />
                          </div>
                          {sec.imageCaption && (
                            <figcaption className="text-center text-xs text-gray-400 mt-2 font-medium flex items-center justify-center gap-1.5">
                              <ImageIcon className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                              <MathText text={sec.imageCaption} />
                            </figcaption>
                          )}
                        </figure>
                      )}
                    </>
                  )}
                </div>
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="mt-8 pt-6 border-t border-gray-800 flex justify-between items-center">
              <button
                onClick={() => setSelectedTopicId(null)}
                className="text-xs sm:text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-1"
              >
                <ArrowLeft className="w-4 h-4" /> Back to Topic List
              </button>

              <button
                onClick={() => {
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-xs text-emerald-400 hover:underline"
              >
                Back to top ↑
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}