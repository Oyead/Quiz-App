Quiz App


This is a dynamic quiz application built with Next.js and TypeScript. It provides an interactive way for users to test their knowledge across various categories.

Features
Multiple Game Modes:
Standard Quiz: Go through a predefined set of questions sequentially.
Random Question Mode: Get a random question from the entire pool.
Category-Based Quiz: Choose a specific category like "Science", "History", or "Geography" to focus your knowledge.
Interactive UI:
Immediate visual feedback for correct and incorrect answers.
Answer options are shuffled for each question to ensure a unique experience every time.
Score Tracking: Your score is tracked throughout the quiz and displayed upon completion.
Responsive Design: A clean and modern interface that works on all screen sizes, built with Tailwind CSS.
Tech Stack
Framework: Next.js
Language: TypeScript
UI Library: React
Styling: Tailwind CSS
Getting Started
To get a local copy up and running, follow these simple steps.

Prerequisites
Make sure you have Node.js and a package manager (like npm or yarn) installed.

Installation & Setup
Clone the repository:
git clone https://github.com/oyead/quiz-app.git
Navigate to the project directory:
cd quiz-app
Install NPM packages:
npm install
Run the development server:
npm run dev
Open http://localhost:3000 with your browser to see the result.

Project Structure
Here is an overview of the key directories and files:

.
├── app/                  # Next.js App Router pages
│   ├── categories/       # Category selection and specific category quiz pages
│   ├── quiz/             # Main quiz page
│   └── random-question/  # Random question mode page
├── components/           # Reusable React components
│   ├── Navbar.tsx        # Site navigation bar
│   └── QuizBox.tsx       # Core component for quiz logic and UI
└── data/
    └── questions.json    # Static JSON file containing all quiz questions
How It Works
The core logic of the application resides in the components/QuizBox.tsx component. It manages the quiz state, including the current question, user score, and selected answers. Questions are sourced from the data/questions.json file. The component can be configured to run in different modes (sequential or random) and can accept a filtered list of questions for category-specific quizzes.

Deployment
The easiest way to deploy this Next.js app is to use the Vercel Platform from the creators of Next.js.

Check out the Next.js deployment documentation for more details.
