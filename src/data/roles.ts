import { site } from './site';

/** Open roles. Placeholders — replace with the real ATS/listings. */
export interface Role {
  slug: string;
  title: string;
  discipline: string;
  location: string;
  type: 'Full-time' | 'Contract';
  summary: string[];
  applyEmail: string;
  placeholder: true;
}

export const roles: Role[] = [
  {
    slug: 'senior-gameplay-engineer',
    title: 'Senior Gameplay Engineer',
    discipline: 'Engineering',
    location: 'Remote / Hyderabad',
    type: 'Full-time',
    summary: [
      'Own core gameplay systems on an original IP in production',
      '5+ years shipping games in Unity or Unreal',
      'Comfortable profiling, debugging and mentoring',
    ],
    applyEmail: site.emails.careers,
    placeholder: true,
  },
  {
    slug: 'lead-technical-artist',
    title: 'Lead Technical Artist',
    discipline: 'Art',
    location: 'Remote / Hyderabad',
    type: 'Full-time',
    summary: [
      'Bridge art vision and engine reality across two productions',
      'Deep shader, pipeline and performance-budget experience',
      'You’ve led artists and engineers through a full ship cycle',
    ],
    applyEmail: site.emails.careers,
    placeholder: true,
  },
  {
    slug: 'senior-producer',
    title: 'Senior Producer',
    discipline: 'Production',
    location: 'Remote',
    type: 'Full-time',
    summary: [
      'Run milestone delivery for a co-development partnership',
      'Fluent in both internal dev rhythms and external client care',
      'Calm under cert deadlines; allergic to surprise scope',
    ],
    applyEmail: site.emails.careers,
    placeholder: true,
  },
  {
    slug: 'liveops-manager',
    title: 'LiveOps Manager',
    discipline: 'Live Services',
    location: 'Remote / Hyderabad',
    type: 'Full-time',
    summary: [
      'Own the seasonal cadence for a live cozy-crafting title',
      'Experience with economy tuning, events and telemetry',
      'Player-first instincts — retention through respect',
    ],
    applyEmail: site.emails.careers,
    placeholder: true,
  },
];
