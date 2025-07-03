import React from "react";
import Link from "next/link";

const HomePageButton = () => {
  return (
    <div className="flex justify-center py-6">
      <Link href="/quiz">
        <button className="px-6 py-3 sm:px-8 sm:py-4 text-base sm:text-lg bg-black text-white rounded-2xl transition hover:bg-gray-800">
          Click here to start
        </button>
      </Link>
    </div>
  );
};

export default HomePageButton;
