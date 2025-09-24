import Link from 'next/link';
import { Logo } from './icons';

export function Header() {
  return (
    <header className="border-b sticky top-0 bg-background/95 backdrop-blur z-10">
      <div className="container mx-auto px-4 h-16 flex items-center">
        <Link href="/" className="flex items-center gap-2 font-bold text-lg font-headline">
          <Logo className="h-6 w-6 text-primary" />
          <span>FinalMc Ranks</span>
        </Link>
      </div>
    </header>
  );
}
