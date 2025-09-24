import { Header } from '@/components/header';
import { Footer } from '@/components/footer';
import { ranks } from '@/lib/ranks';
import { RankCard } from '@/components/rank-card';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow container mx-auto px-4 py-12 md:py-16">
        <section className="text-center mb-12 md:mb-16">
          <h1 className="text-4xl md:text-5xl font-bold font-headline tracking-tight text-primary">
            FinalMc Ranks
          </h1>
          <p className="mt-4 text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose your rank to unlock exclusive perks and elevate your gameplay experience.
          </p>
        </section>
        <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {ranks.map((rank) => (
            <RankCard key={rank.name} rank={rank} />
          ))}
        </section>
      </main>
      <Footer />
    </div>
  );
}
