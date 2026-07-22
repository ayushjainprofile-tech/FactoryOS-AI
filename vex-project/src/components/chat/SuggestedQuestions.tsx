import React from "react";

interface SuggestedQuestionsProps {
  questions: string[];
  onQuestionClick: (question: string) => void;
}

export const SuggestedQuestions: React.FC<SuggestedQuestionsProps> = ({ questions, onQuestionClick }) => {
  if (questions.length === 0) return null;

  return (
    <div className="max-w-2xl w-full mx-auto px-4 mt-2">
      <span className="text-[10px] uppercase font-bold text-slate-400 block mb-2">Suggested follow-ups</span>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
        {questions.slice(0, 4).map((q, idx) => (
          <button
            key={idx}
            onClick={() => onQuestionClick(q)}
            className="text-left text-xs text-[#374151] hover:text-[#4F46E5] bg-white hover:bg-slate-50 border border-[#E5E7EB] hover:border-[#C7D2FE] p-3 rounded-xl shadow-xs transition-all duration-200"
          >
            {q}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SuggestedQuestions;
