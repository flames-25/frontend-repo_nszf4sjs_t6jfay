import React from 'react';
import { Globe, Smartphone, Presentation, Sparkles, Puzzle, Timer } from 'lucide-react';

const features = [
  {
    icon: Globe,
    title: 'Landing Pages',
    desc: 'Built to convert — AI-optimized layouts with human-crafted visuals.',
  },
  {
    icon: Smartphone,
    title: 'UI/UX Design',
    desc: 'Smart, scalable interfaces designed to feel intuitive and modern.',
  },
  {
    icon: Presentation,
    title: 'Pitch Decks',
    desc: 'Data-driven storytelling made beautiful.',
  },
  {
    icon: Sparkles,
    title: 'Branding',
    desc: 'From logo to identity, designed for consistency across every channel.',
  },
  {
    icon: Puzzle,
    title: 'Marketing Creatives',
    desc: 'Ads, socials, and graphics that actually perform.',
  },
  {
    icon: Timer,
    title: 'AI-Enhanced Turnarounds',
    desc: '24–48h delivery powered by our design+AI hybrid process.',
  },
];

const Features = () => {
  return (
    <section className="relative bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Unlimited design. Real human quality. AI speed.</h2>
          <p className="mt-3 text-slate-300">
            Every Zyner subscription comes with everything a fast-moving startup needs to look world-class.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20">
                <f.icon className="h-5 w-5 text-violet-300" />
              </div>
              <h3 className="text-lg font-medium">{f.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default Features;
