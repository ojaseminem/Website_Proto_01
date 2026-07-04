import { site } from './site';

/**
 * Per-game support panels — the structure Google Play, the App Store and
 * Steam expect a support URL to provide: a reachable contact, data-deletion
 * instructions, and refund guidance. Placeholders until titles are real.
 */
export interface GameSupport {
  slug: string;
  title: string;
  email: string;
  responseTime: string;
  stores: string[];
  dataDeletion: string;
  refunds: string;
  placeholder: true;
}

export const gameSupport: GameSupport[] = [
  {
    slug: 'moss-and-ember',
    title: 'Moss & Ember',
    email: 'support+moss-ember@turtlegameworks.com',
    responseTime: 'within 2 business days',
    stores: ['Google Play', 'App Store', 'Steam'],
    dataDeletion:
      'To request deletion of your Moss & Ember account and associated data, email us from the address linked to your account with the subject “Data deletion request — Moss & Ember”. We confirm within 2 business days and complete deletion within 30 days. Purchase records required by law are retained per our Privacy Policy.',
    refunds:
      'Purchases are handled by the store you bought from. Request refunds through Google Play, the App Store, or Steam directly; their policies apply. If a purchase didn’t arrive in-game, contact us and we’ll make it right.',
    placeholder: true,
  },
];

export const faqs = [
  {
    q: 'How do I report a bug?',
    a: 'Email the game’s support address with your device or PC specs, what you expected, and what happened instead. Screenshots or clips help enormously. We read everything — bug reports are how our games get better.',
  },
  {
    q: 'I purchased something and didn’t receive it.',
    a: 'First, restart the game — most delivery hiccups resolve on reconnect. If it still hasn’t arrived after 24 hours, email support with your store receipt and we’ll restore it or refund it.',
  },
  {
    q: 'How do I request a refund?',
    a: 'Refunds go through the store where you purchased: Google Play, the App Store, or Steam. Each has its own window and policy. If a store declines and you believe something went genuinely wrong, write to us and we’ll review it.',
  },
  {
    q: 'How do I delete my account and data?',
    a: 'Every live game’s panel above includes data-deletion instructions. In short: email the game’s support address from the account’s email with a deletion request, and we’ll complete it within 30 days.',
  },
  {
    q: 'Can I use your games’ footage in videos or streams?',
    a: 'Yes — streaming, videos and monetized content featuring our games are welcome, as long as you don’t imply we endorse you or resell game access. See the EULA for the fine print.',
  },
  {
    q: 'I have a business or partnership question.',
    a: 'Support handles player issues only. For co-development, outsourcing or publishing conversations, write to ' +
      site.emails.partnerships +
      ' — it goes straight to the studio leads.',
  },
] as const;
