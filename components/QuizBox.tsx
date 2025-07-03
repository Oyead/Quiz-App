'use client';
import React, { useState, useEffect } from "react";
import questions from "@/data/questions.json";

function shuffle<T>(array: T[]): T[] {
  const shuffled = [...array];
  let currentIndex = shuffled.length;

  while (currentIndex !== 0) {
    const randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;
    [shuffled[currentIndex], shuffled[randomIndex]] = [
      shuffled[randomIndex],
      shuffled[currentIndex],
    ];
  }

  return shuffled;
}

type QuizBoxProps = {
  questions?: typeof import('@/data/questions.json');
  mode?: "sequential" | "random";
};

const QuizBox: React.FC<QuizBoxProps> = ({ questions: questionsProp, mode = "sequential" }) => {
  const questionsToUse = questionsProp ?? questions;

  const [questionPool, setQuestionPool] = useState([...questionsToUse]);
  const [currentQuestion, setCurrentQuestion] = useState(questionsToUse[0]);
  const [shuffledAnswers, setShuffledAnswers] = useState<string[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  useEffect(() => {
    if (currentQuestion) {
      const answers = [
        currentQuestion.A,
        currentQuestion.B,
        currentQuestion.C,
        currentQuestion.D,
      ];
      setShuffledAnswers(shuffle(answers));
      setSelectedAnswer(null);
    }
  }, [currentQuestion]);

  const handleClick = (answer: string) => {
    if (!selectedAnswer) {
      setSelectedAnswer(answer);
      if (answer === currentQuestion.answer) {
        setScore(prev => prev + 1);
      }
    }
  };

  const handleNext = () => {
    if (questionPool.length === 0) {
      setShowScore(true);
      return;
    }

    let nextQuestion;

    if (mode === "random") {
      const index = Math.floor(Math.random() * questionPool.length);
      nextQuestion = questionPool[index];
      const newPool = questionPool.filter((_, i) => i !== index);
      setQuestionPool(newPool);
    } else {
      nextQuestion = questionPool[0];
      const newPool = questionPool.slice(1);
      setQuestionPool(newPool);
    }

    setCurrentQuestion(nextQuestion);
  };

  if (showScore) {
    return (
      <div className="text-center p-6 sm:p-8 bg-black text-white rounded-lg max-w-xl mx-auto mt-8 shadow-lg">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4">Quiz Finished!</h1>
        <p className="text-lg sm:text-xl">
          Your score: <span className="font-semibold">{score}</span> / {questions.length}
        </p>
      </div>
    );
  }

  if (!currentQuestion) {
    return <div className="p-4 text-center">Loading...</div>;
  }

  return (
    <div className="bg-[#2a2424] text-white p-6 sm:p-8 rounded-lg shadow-md w-full max-w-3xl mx-auto mt-6">
      <p className="font-semibold text-yellow-400 mb-2 text-sm sm:text-base">
        Question {currentQuestion.id}
      </p>
      <h2 className="text-xl sm:text-2xl font-semibold mb-6">
        {currentQuestion.question}
      </h2>

      <ul className="space-y-3 mb-8">
        {shuffledAnswers.map((item, index) => (
          <li key={index}>
            <button
              onClick={() => handleClick(item)}
              className={`w-full p-3 sm:p-4 rounded-lg text-left text-sm sm:text-base transition-colors ${
                selectedAnswer
                  ? item === currentQuestion.answer
                    ? "bg-green-500"
                    : item === selectedAnswer
                    ? "bg-red-600"
                    : "bg-blue-300"
                  : "bg-blue-400 hover:bg-blue-300"
              }`}
              disabled={!!selectedAnswer}
            >
              {item}
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={handleNext}
        className={`w-full py-2 px-4 rounded-lg text-sm sm:text-base ${
          selectedAnswer
            ? "bg-blue-600 hover:bg-blue-700 text-white"
            : "bg-gray-300 text-gray-500 cursor-not-allowed"
        }`}
        disabled={!selectedAnswer}
      >
        {questionPool.length === 0 ? "Finish" : "Next Question"}
      </button>
    </div>
  );
};

export default QuizBox;
