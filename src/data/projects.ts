/**
 * Project catalogue. Everything here is `placeholder: true` — swap for real
 * titles before launch (grep for `placeholder`).
 */
export interface Project {
  slug: string;
  title: string;
  genre: string;
  role: 'Original IP' | 'Co-Development';
  status: 'In Production' | 'Live' | 'Announced' | 'Unannounced';
  platforms: string[];
  blurb: string;
  /** CSS gradient used as poster art — no fake screenshots. */
  art: string;
  featured: boolean;
  /** Live titles appear on the Support page with their own panel. */
  supported: boolean;
  placeholder: true;
}

export const projects: Project[] = [
  {
    slug: 'tidebound',
    title: 'Tidebound',
    genre: 'Narrative Action-Adventure',
    role: 'Original IP',
    status: 'In Production',
    platforms: ['PC', 'Console'],
    blurb:
      'A hand-built coastal world where the tide rewrites the map every night. Our flagship original — slow to anger, impossible to put down.',
    art: 'linear-gradient(160deg, #0e3a4a 0%, #1d6a73 55%, #3fc9be 130%)',
    featured: true,
    supported: false,
    placeholder: true,
  },
  {
    slug: 'moss-and-ember',
    title: 'Moss & Ember',
    genre: 'Cozy Crafting Sim',
    role: 'Original IP',
    status: 'Live',
    platforms: ['Mobile', 'PC'],
    blurb:
      'Tend a hearth at the edge of an old-growth forest. Live since 2024 with seasonal events, a player-run bazaar, and a community we adore.',
    art: 'linear-gradient(160deg, #24351c 0%, #4f6b35 55%, #e8a95f 135%)',
    featured: true,
    supported: true,
    placeholder: true,
  },
  {
    slug: 'ironshell-tactics',
    title: 'Ironshell Tactics',
    genre: 'Squad Tactics Roguelike',
    role: 'Original IP',
    status: 'Announced',
    platforms: ['PC'],
    blurb:
      'Six shells, one shot. A turn-based tactics roguelike about armored expeditions into a sunken city — announced, playable soon.',
    art: 'linear-gradient(160deg, #1b2430 0%, #37475c 55%, #93aeaa 135%)',
    featured: true,
    supported: false,
    placeholder: true,
  },
  {
    slug: 'project-drift',
    title: 'Project DRIFT',
    genre: 'Co-Development Partnership',
    role: 'Co-Development',
    status: 'Unannounced',
    platforms: [],
    blurb:
      'An embedded co-development engagement with a partner studio we can’t name yet. More soon — our NDAs have NDAs.',
    art: 'linear-gradient(160deg, #10131d 0%, #2c2440 60%, #6c5a8f 140%)',
    featured: false,
    supported: false,
    placeholder: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const supportedProjects = projects.filter((p) => p.supported);
