QUIZ APP < br / >
This is a dynamic quiz application built with Next.js and TypeScript. It provides an interactive way for users to test their knowledge across various categories. < br / >
Live Demo: https://quiz-app-oyead.vercel.app/ < br / >
Features < br / >
Multiple Game Modes: < br / >
Standard Quiz: Go through a predefined set of questions sequentially. < br / >
Random Question Mode: Get a random question from the entire pool.
Category-Based Quiz: Choose a specific category like "Science", "History", or "Geography" to focus your knowledge.< br / >
Interactive UI:< br / >
Immediate visual feedback for correct and incorrect answers.< br / >
Answer options are shuffled for each question to ensure a unique experience every time.< br / >
Score Tracking: Your score is tracked throughout the quiz and displayed upon completion.< br / >
Responsive Design: A clean and modern interface that works on all screen sizes, built with Tailwind CSS.< br / >
Tech Stack< br / >
Framework: Next.js< br / >
Language: TypeScript< br / >
UI Library: React< br / >
Styling: Tailwind CSS< br / >
Getting Started< br / >
To get a local copy up and running, follow these simple steps.< br / >

Prerequisites< br / >
Make sure you have Node.js and a package manager (like npm or yarn) installed.< br / >

Installation & Setup< br / >
Clone the repository:< br / >
git clone https://github.com/oyead/quiz-app.git< br / >
Navigate to the project directory:< br / >
cd quiz-app< br / >
Install NPM packages:< br / >
npm install< br / >
Run the development server:< br / >
npm run dev< br / >
Open http://localhost:3000 with your browser to see the result.< br / >

Project Structure< br / >
Here is an overview of the key directories and files:< br / >

.
├── app/                  # Next.js App Router pages< br / >
│   ├── categories/       # Category selection and specific category quiz pages< br / >
│   ├── quiz/             # Main quiz page< br / >
│   └── random-question/  # Random question mode page< br / >
├── components/           # Reusable React components< br / >
│   ├── Navbar.tsx        # Site navigation bar< br / >
│   └── QuizBox.tsx       # Core component for quiz logic and UI< br / >
└── data/
    └── questions.json    # Static JSON file containing all quiz questions< br / >
How It Works< br / >
The core logic of the application resides in the components/QuizBox.tsx component. It manages the quiz state, including the current question, user score, and selected answers. Questions are sourced from the < br / > data/questions.json file. The component can be configured to run in different modes (sequential or random) and can accept a filtered list of questions for category-specific quizzes.

Deployment< br / >
The easiest way to deploy this Next.js app is to use the Vercel Platform from the creators of Next.js.< br / >

Check out the Next.js deployment documentation for more details.
