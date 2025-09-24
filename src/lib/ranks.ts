import type { LucideIcon } from 'lucide-react';
import { Crown, Gem, Shield, Swords, Heart, Sparkles, Feather, Star } from 'lucide-react';

export type Perk = {
  icon: LucideIcon;
  description: string;
};

export type Rank = {
  name: string;
  price: number;
  description: string;
  perks: Perk[];
  purchaseUrl: string;
  highlight?: boolean;
};

export const ranks: Rank[] = [
  {
    name: 'NOBLE',
    price: 80,
    description: 'Start your journey with essential perks.',
    perks: [
      { icon: Crown, description: '[Noble] chat tag' },
      { icon: Sparkles, description: 'Access to /glow command' },
      { icon: Heart, description: 'Basic in-game kit' },
    ],
    purchaseUrl: 'https://store.raimc.fun/package/noble',
  },
  {
    name: 'PRIME',
    price: 100,
    description: 'A step up for the dedicated player.',
    perks: [
      { icon: Crown, description: '[Prime] chat tag' },
      { icon: Gem, description: '1 Player Vault (/pv)' },
      { icon: Shield, description: 'Weekly /kit prime' },
      { icon: Heart, description: 'Enhanced in-game kit' },
    ],
    purchaseUrl: 'https://store.raimc.fun/package/prime',
  },
  {
    name: 'GOD',
    price: 250,
    description: 'Ascend to a new level of power and convenience.',
    highlight: true,
    perks: [
      { icon: Crown, description: '[God] chat tag & color' },
      { icon: Gem, description: '3 Player Vaults' },
      { icon: Feather, description: 'Ability to /fly in hubs' },
      { icon: Sparkles, description: 'Exclusive particle effects' },
    ],
    purchaseUrl: 'https://store.raimc.fun/package/god',
  },
  {
    name: 'DEADLIEST',
    price: 350,
    description: 'Become a formidable force on the server.',
    perks: [
        { icon: Crown, description: '[Deadliest] animated tag' },
        { icon: Gem, description: '5 Player Vaults' },
        { icon: Star, description: 'Custom join message' },
        { icon: Swords, description: 'All perks from previous ranks' },
    ],
    purchaseUrl: 'https://store.raimc.fun/package/deadliest',
  },
  {
    name: 'LEGEND',
    price: 500,
    description: 'The ultimate rank for true legends.',
    perks: [
        { icon: Crown, description: '[Legend] unique animated tag' },
        { icon: Gem, description: '10 Player Vaults' },
        { icon: Swords, description: 'Early access to beta features' },
        { icon: Heart, description: 'Monthly store coupon' },
    ],
    purchaseUrl: 'https://store.raimc.fun/package/legend',
  },
];
