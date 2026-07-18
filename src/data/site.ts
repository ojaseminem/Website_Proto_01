/** Studio-wide constants. Emails are placeholders until the domain exists. */
export const site = {
  name: 'Turtle Game Works',
  shortName: 'TGW',
  tagline: 'Worlds worth returning to.',
  description:
    'Turtle Game Works is an independent game studio creating original IP — and the production partner teams trust for full-cycle development, live services, co-development, and outsourcing.',
  emails: {
    hello: 'hello@turtlegameworks.com',
    partnerships: 'partnerships@turtlegameworks.com',
    press: 'press@turtlegameworks.com',
    careers: 'careers@turtlegameworks.com',
    support: 'support@turtlegameworks.com',
  },
  location: 'Pune, India · Remote-friendly', // placeholder
  founded: 2021, // placeholder
} as const;

export const navLinks = [
  { label: 'Projects', href: 'projects/' },
  { label: 'Services', href: 'services/' },
  { label: 'About', href: 'about/' },
  { label: 'Careers', href: 'careers/' },
  { label: 'Support', href: 'support/' },
  { label: 'Contact', href: 'contact/' },
] as const;

export const legalLinks = [
  { label: 'Privacy Policy', href: 'legal/privacy/' },
  { label: 'Terms of Service', href: 'legal/terms/' },
  { label: 'EULA', href: 'legal/eula/' },
  { label: 'Cookie Notice', href: 'legal/cookies/' },
] as const;
