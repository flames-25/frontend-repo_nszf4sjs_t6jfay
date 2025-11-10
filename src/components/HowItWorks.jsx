import React from 'react';
import { CheckCircle2, Sparkles, Layers } from 'lucide-react';

const steps = [
  {
    title: 'Submit your request',
    desc: 'Tell us what you need: a landing page, UI, or a pitch deck.',
    icon: CheckCircle2,
  },
  {
    title: 'AI drafts the foundation',
    desc: 'Our AI creates instant wireframes, layouts, and moodboards.',
    icon: Sparkles,
  },
  {
    title: 'Designers refine it',
    desc: 'Your dedicated team polishes every detail until it fits your brand.',
    icon: Layers,
  },
  {
    title: 'Get daily updates',
    desc: 'Track progress, review, and request unlimited changes.',
    icon: CheckCircle2,
  },
];

const HowItWorks = () => {
  return (
    <section id="how" className="relative bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">Where AI efficiency meets human design sense.</h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            At Zyner, every design starts with our AI design assistant — trained on hundreds of successful startup projects — that rapidly analyzes your brand, competitors, and goals. Then, your dedicated human design team refines and delivers every asset to perfection.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, idx) => (
            <div key={idx} className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-full bg-violet-500/20">
                <s.icon className="h-5 w-5 text-violet-300" />
              </div>
              <h3 className="text-lg font-medium">{s.title}</h3>
              <p className="mt-2 text-sm text-slate-300">{s.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-10">
          <a href="#demo" className="inline-flex rounded-lg border border-white/15 bg-white/5 px-4 py-2 text-sm text-white/90 hover:bg-white/10">
            Experience it in action →
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default HowItWorks;
