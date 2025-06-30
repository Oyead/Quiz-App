'use client';
import { useParams } from 'next/navigation';
import questions from '@/data/questions.json';
import QuizBox from '@/components/QuizBox';

const CategoryQuizPage = () => {
  const { category } = useParams();

  const filteredQuestions = questions.filter(
    (q) => q.category.toLowerCase() === decodeURIComponent(category as string).toLowerCase()
  );

  return (
    <div className="p-8 text-black">
      <h1 className="text-2xl font-bold mb-4 capitalize">Category: {category}</h1>
      {filteredQuestions.length > 0 ? (
        <QuizBox questions={filteredQuestions} />
      ) : (
        <p>No questions available for this category.</p>
      )}
    </div>
  );
};

export default CategoryQuizPage;
