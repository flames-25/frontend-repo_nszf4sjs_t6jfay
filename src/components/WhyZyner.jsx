import React from 'react';
import { Infinity, CalendarClock, Wallet } from 'lucide-react';

const WhyZyner = () => {
  return (
    <section className="relative bg-slate-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <div className="mb-10">
          <h2 className="text-3xl sm:text-4xl font-semibold">The only design team that scales with your startup.</h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <Infinity className="h-8 w-8 text-violet-300" />
            <h3 className="mt-4 text-lg font-medium">Unlimited Requests</h3>
            <p className="mt-2 text-sm text-slate-300">Add as many tasks as you need. We’ll queue, manage, and deliver.</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <CalendarClock className="h-8 w-8 text-violet-300" />
            <h3 className="mt-4 text-lg font-medium">Daily Progress</h3>
            <p className="mt-2 text-sm text-slate-300">No waiting weeks — get updates every 24–48 hours.</p>
          </div>

          <div className="rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur">
            <Wallet className="h-8 w-8 text-violet-300" />
            <h3 className="mt-4 text-lg font-medium">Flat Monthly Rate</h3>
            <p className="mt-2 text-sm text-slate-300">No contracts. No hourly rates. Pause anytime.</p>
          </div>
        </div>

        <div className="mt-10 rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 p-6 text-slate-200">
          “Zyner feels like having an in-house design team, just 10x faster and smarter.”
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  );
};

export default WhyZyner;
