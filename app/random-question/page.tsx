'use client';
import React from 'react';
import QuizBox from '@/components/QuizBox';

const Page = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-3xl mx-auto p-4">
        <QuizBox  mode="random" />
      </div>
    </div>
  );
};

export default Page;