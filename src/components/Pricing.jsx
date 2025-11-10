import React from 'react';
import { Check, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: 'Starter',
    ideal: 'Early-stage founders',
    price: '$2,495',
    features: [
      '1 active task',
      'AI-powered workflow',
      'Unlimited revisions',
    ],
    highlighted: false,
  },
  {
    name: 'Growth',
    ideal: 'Funded startups',
    price: '$3,495',
    features: [
      '2 active tasks',
      'Daily updates',
      'AI insights',
    ],
    highlighted: true,
  },
  {
    name: 'Scale',
    ideal: 'Larger teams',
    price: '$5,195',
    features: [
      '3 active tasks',
      'Multi-brand support',
      'Premium turnaround',
    ],
    highlighted: false,
  },
];

const Pricing = () => {
  return (
    <section id="pricing" className="relative bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10 text-center">
          <h2 className="text-3xl sm:text-4xl font-semibold">Simple, flexible pricing for every stage.</h2>
          <p className="mt-3 text-slate-300 max-w-2xl mx-auto">
            Startups, YC founders, and growth teams trust Zyner because it’s flexible, predictable, and founder-friendly.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className={`rounded-2xl border p-6 backdrop-blur ${
                t.highlighted
                  ? 'border-violet-400/40 bg-violet-500/10 shadow-[0_0_40px_rgba(168,85,247,0.25)]'
                  : 'border-white/10 bg-white/5'
              }`}
            >
              <div className="flex items-baseline justify-between">
                <div>
                  <h3 className="text-xl font-semibold">{t.name}</h3>
                  <p className="mt-1 text-sm text-slate-300">{t.ideal}</p>
                </div>
                <div className="text-2xl font-semibold">{t.price}<span className="text-sm text-slate-400">/mo</span></div>
              </div>

              <ul className="mt-6 space-y-3">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 text-sm">
                    <Check className="h-4 w-4 text-violet-300" />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#start"
                className={`mt-6 inline-flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition ${
                  t.highlighted
                    ? 'bg-violet-500 text-white hover:bg-violet-400'
                    : 'border border-white/15 bg-white/5 text-white/90 hover:bg-white/10'
                }`}
              >
                Start your 14-day risk-free trial
                <ArrowRight className="h-4 w-4" />
              </a>
            </div>
          ))}
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default Pricing;
