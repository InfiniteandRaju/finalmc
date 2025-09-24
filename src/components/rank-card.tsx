import type { Rank, Perk } from '@/lib/ranks';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { CurrencyConverter } from './currency-converter';

function PerkItem({ perk }: { perk: Perk }) {
  return (
    <li className="flex items-center gap-3">
      <perk.icon className="h-5 w-5 text-primary flex-shrink-0" />
      <span className="text-muted-foreground">{perk.description}</span>
    </li>
  );
}

export function RankCard({ rank }: { rank: Rank }) {
  return (
    <Card className={cn("flex flex-col transition-all hover:shadow-xl hover:-translate-y-1", rank.highlight && "border-primary ring-2 ring-primary shadow-lg bg-card")}>
      <CardHeader className="pb-4">
        <CardTitle className="text-3xl font-bold font-headline" style={{ color: rank.highlight ? 'hsl(var(--primary))' : 'hsl(var(--foreground))' }}>
          {rank.name}
        </CardTitle>
        <CardDescription className="pt-1">{rank.description}</CardDescription>
      </CardHeader>
      <CardContent className="flex-grow">
        <ul className="space-y-4">
          {rank.perks.map((perk, index) => (
            <PerkItem key={index} perk={perk} />
          ))}
        </ul>
      </CardContent>
      <CardFooter className="flex flex-col items-stretch gap-4 pt-6 mt-auto">
        <div className="text-center">
          <p className="text-4xl font-bold font-headline">₹{rank.price}</p>
          <p className="text-sm text-muted-foreground">One-time payment</p>
        </div>
        <div className="text-center">
            <CurrencyConverter priceInRupees={rank.price} />
        </div>
        <Button asChild className="w-full" size="lg" variant={rank.highlight ? 'default' : 'secondary'}>
          <a href={rank.purchaseUrl} target="_blank" rel="noopener noreferrer">
            Purchase Rank
          </a>
        </Button>
      </CardFooter>
    </Card>
  );
}
