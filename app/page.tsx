import TypeHeroCard from "@/app/TypeHeroCard";
import LeetCodeCard from "@/app/LeetCodeCard";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className='w-screen-lg grid gap-8 grid-cols-1 md:grid-cols-2'>
        <TypeHeroCard />
        <LeetCodeCard />
     </div>
    </main>
  );
}
