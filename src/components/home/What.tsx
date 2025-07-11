// components/InsightAISection.tsx
"use client";

import Image from "next/image";
import { Check, Play } from "lucide-react";

export default function InsightAISection() {
  const bullets = [
    "Cut manual access reviews by up to 80 %",
    "Automate least‑privilege RBAC across teams & clouds",
    "Monitor sensitive‑data flows with AI anomaly detection",
    "Ship privacy updates faster with pre‑built policy templates",
    "Stay audit‑ready with continuous compliance reports",
  ];

  return (
    <section className="relative isolate overflow-hidden bg-purple-900 text-white py-16">
      <div className="mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 px-6 lg:flex-row">
        {/* ---------- LEFT ---------- */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-4xl font-semibold sm:text-5xl">
            What is InsightAI
          </h2>

          <p className="mt-6 text-lg leading-relaxed text-zinc-300">
            InsightAI is an end‑to‑end access‑intelligence platform that
            centralises role‑based access control&nbsp;(RBAC),
            privacy compliance, and real‑time security analytics in a single
            workspace—so your engineering teams can focus on building, not
            auditing.
          </p>

          {/* CTA */}
          <button className="mt-8 rounded-full bg-sky-400 px-8 py-4 text-lg font-medium text-zinc-900 transition hover:bg-sky-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-300">
            Book a live demo
          </button>

          {/* Bullet list */}
          <ul className="mt-10 space-y-4">
            {bullets.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-1 h-5 w-5 shrink-0 text-sky-400" />
                <span className="text-base leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* ---------- RIGHT ---------- */}
        <div className="relative w-full max-w-xl lg:w-1/2">
          {/* Dashboard screenshot */}
          <Image
            src="/insightai-dashboard.png" // ↙️ place your mock‑up in /public
            alt="InsightAI dashboard preview"
            width={1200}
            height={800}
            className="rounded-lg object-cover shadow-2xl"
            priority
          />

          {/* Play button overlay */}
          <button
            className="group absolute inset-0 mx-auto my-auto flex h-24 w-24 items-center justify-center rounded-full bg-white/10 backdrop-blur hover:bg-white/20"
            aria-label="Play video"
          >
            <Play className="h-12 w-12 text-white transition group-hover:scale-105" />
          </button>
        </div>
      </div>

      {/* Subtle top gradient like in the ref design */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-48 bg-gradient-to-b from-zinc-900 to-transparent"
      />
    </section>
  );
}
