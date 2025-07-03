import HomePageButton from "@/components/HomePageButton";

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black flex flex-col items-center justify-center px-4 py-10 gap-6 text-center">
      <p className="text-2xl sm:text-3xl md:text-4xl font-semibold">Hello!</p>
      <p className="text-xl sm:text-2xl md:text-3xl font-semibold py-2">
        Welcome to Quiz Site
      </p>
      <p className="text-xl sm:text-2xl md:text-4xl font-semibold max-w-3xl px-2">
        Test your knowledge and challenge your friends
      </p>

      <HomePageButton />
    </div>
  );
}
