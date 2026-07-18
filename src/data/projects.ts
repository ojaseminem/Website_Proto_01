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
    featured: false,
    supported: false,
    placeholder: true,
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const supportedProjects = projects.filter((p) => p.supported);
