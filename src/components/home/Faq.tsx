// components/home/FAQSection.tsx
"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

type FAQ = {
  question: string;
  answer: string;
};

const faqs: FAQ[] = [
  {
    question: "Why should you choose InsightAI as your RBAC & privacy platform?",
    answer:
      "InsightAI automates least‑privilege access, monitors sensitive data flows with AI, and keeps you audit‑ready with real‑time compliance reports—all from a single dashboard.",
  },
  {
    question: "What solutions does InsightAI offer?",
    answer:
      "We provide role‑based access control (RBAC), anomaly detection powered by LLMs, privacy‑policy management, and continuous compliance analytics tailored for cloud‑native teams.",
  },
  {
    question: "Which industries need strong AML / access controls?",
    answer:
      "Finance, fintech, healthcare, crypto exchanges, and any SaaS handling personal or payment data must comply with AML/KYC and data‑protection regulations—InsightAI simplifies that journey.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) =>
    setOpenIndex(idx === openIndex ? null : idx);

  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 className="mb-12 text-center text-4xl font-semibold text-zinc-900">
          FAQ
        </h2>

        <ul className="divide-y divide-zinc-200">
          {faqs.map((item, idx) => {
            const isOpen = idx === openIndex;
            return (
              <li key={item.question}>
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between py-6 text-left"
                >
                  <span className="text-lg font-medium text-zinc-900">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`h-6 w-6 shrink-0 text-zinc-600 transition-transform duration-200 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <p className="pb-6 pl-1 pr-8 text-base leading-relaxed text-zinc-700">
                    {item.answer}
                  </p>
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;
