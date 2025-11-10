import React from 'react';
import Spline from '@splinetool/react-spline';
import { ArrowRight, Rocket } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/80 via-slate-950/70 to-slate-950/90 pointer-events-none" />

      <div className="relative mx-auto max-w-6xl px-6 pt-28 pb-24 sm:pt-32 sm:pb-28">
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200 backdrop-blur">
          <Rocket className="h-3.5 w-3.5 text-violet-300" />
          Design Smarter. Launch Faster.
        </div>

        <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-tight sm:text-5xl md:text-6xl">
          Design that moves as fast as your startup.
        </h1>
        <p className="mt-5 max-w-2xl text-slate-300 text-lg">
          Zyner combines AI precision with human creativity to deliver unlimited, high-quality design for startups — from landing pages to product UI, pitch decks, and brand identities. One flat monthly rate, no limits, no delays.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-lg bg-violet-500 px-5 py-3 text-sm font-medium text-white shadow-lg shadow-violet-500/30 transition hover:bg-violet-400"
          >
            Get Started
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="#how"
            className="inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-5 py-3 text-sm font-medium text-white/90 hover:bg-white/10"
          >
            See How It Works
          </a>
        </div>

        <div className="mt-12 flex items-center gap-6 text-sm text-slate-300">
          <div className="flex -space-x-2">
            <img src="https://i.pravatar.cc/32?img=1" alt="Founder 1" className="h-8 w-8 rounded-full border border-white/10" />
            <img src="https://i.pravatar.cc/32?img=2" alt="Founder 2" className="h-8 w-8 rounded-full border border-white/10" />
            <img src="https://i.pravatar.cc/32?img=3" alt="Founder 3" className="h-8 w-8 rounded-full border border-white/10" />
          </div>
          Trusted by 120+ YC & Techstars founders
        </div>
      </div>

      <div className="pointer-events-none absolute -bottom-40 left-1/2 h-80 w-[120vw] -translate-x-1/2 rounded-[100%] bg-[radial-gradient(ellipse_at_center,rgba(168,85,247,0.15),rgba(14,165,233,0.08),transparent_70%)]" />
    </section>
  );
};

export default Hero;
