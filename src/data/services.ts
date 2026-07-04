/** Service pillars. Placeholder copy — refine with real case studies later. */
export interface Service {
  slug: string;
  title: string;
  tagline: string;
  description: string;
  capabilities: string[];
  engagement: string;
  placeholder: true;
}

export const services: Service[] = [
  {
    slug: 'full-production',
    title: 'Full-Cycle Production',
    tagline: 'Concept to launch, one accountable team.',
    description:
      'We take titles from a one-page pitch to a shipped product — pre-production, vertical slice, production, certification, and launch. Because we ship our own IP, we run partner productions with the same ownership mentality: milestone discipline, honest scoping, and no surprises at cert.',
    capabilities: [
      'Pre-production, prototyping & vertical slice',
      'Full production across engineering, art, design & audio',
      'Platform certification & release management (PC, console, mobile)',
      'Post-launch stabilization & content roadmaps',
    ],
    engagement: 'Fixed-scope milestones or dedicated long-term team.',
    placeholder: true,
  },
  {
    slug: 'live-services',
    title: 'Live Services & LiveOps',
    tagline: 'Games that stay alive — and keep earning trust.',
    description:
      'Running a live game is a different craft from shipping one. We operate live titles end-to-end: economy design, seasonal content cadences, events, telemetry, and community operations — tuned for retention that respects players.',
    capabilities: [
      'Economy & progression design, monetization audits',
      'Seasonal events, battle-pass & content pipelines',
      'Telemetry, dashboards & A/B experimentation',
      'Community management & player support workflows',
    ],
    engagement: 'Ongoing operations retainer with defined SLAs.',
    placeholder: true,
  },
  {
    slug: 'co-development',
    title: 'Co-Development',
    tagline: 'Embedded pods that feel like your own team.',
    description:
      'Feature pods that integrate into your codebase, your pipeline, and your standups. Engine-agnostic (Unity, Unreal, custom), senior-weighted, and structured to hand back clean, documented systems — not dependencies on us.',
    capabilities: [
      'Feature & systems development in your codebase',
      'Engine-agnostic: Unity, Unreal & proprietary tech',
      'Porting, optimization & platform compliance',
      'Clean handback: documentation & knowledge transfer',
    ],
    engagement: 'Embedded pods, scaled per milestone.',
    placeholder: true,
  },
  {
    slug: 'outsourcing',
    title: 'Art & Engineering Outsourcing',
    tagline: 'Reliable capacity, studio-quality output.',
    description:
      'Overflow capacity without the overflow chaos. Character and environment art, UI implementation, tools, build systems, and porting — delivered against your style guides and technical budgets, reviewed before it ever reaches you.',
    capabilities: [
      'Character, environment & prop art',
      'UI/UX implementation & motion design',
      'Tools, pipelines & build engineering',
      'QA support & compatibility passes',
    ],
    engagement: 'Per-asset, per-sprint, or capacity reservation.',
    placeholder: true,
  },
];
