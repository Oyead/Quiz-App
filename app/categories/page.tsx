import Link from "next/link";
import questions from "@/data/questions.json";

const uniqueCategories = [...new Set(questions.map(q => q.category))];

const CategoriesPage = () => {
  return (
    <div className="min-h-screen bg-white text-black p-8">
      <h1 className="text-3xl font-bold mb-6">Choose a Category</h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {uniqueCategories.map((category, index) => (
          <Link
            key={index}
            href={`/categories/${encodeURIComponent(category)}`}
            className="bg-amber-200 hover:bg-amber-300 p-4 rounded-xl text-center font-medium"
          >
            {category}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default CategoriesPage;
