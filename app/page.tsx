import HomePageButton from "@/components/HomePageButton"

export default function Home() {
  return (
    <div className="bg-white min-h-screen text-black text-center py-10 px-4 text-5xl flex flex-col items-center justify-center gap-4">
      <p className="font-semibold">Hello!</p>
      <p className="py-6 font-semibold">Welcome to Quiz Site</p>
      <p className="text-5xl font-semibold">Test your knowledge and challenge your friends</p>
      <HomePageButton />
    </div>
  );
}
