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
      "InsightAI automates least-privilege access, monitors sensitive data flows with AI, and keeps you audit-ready with real-time compliance reports—all from a single dashboard.",
  },
  {
    question: "What solutions does InsightAI offer?",
    answer:
      "We provide role-based access control (RBAC), anomaly detection powered by LLMs, privacy-policy management, and continuous compliance analytics tailored for cloud-native teams.",
  },
  {
    question: "Which industries need strong AML / access controls?",
    answer:
      "Finance, fintech, healthcare, crypto exchanges, and any SaaS handling personal or payment data must comply with AML/KYC and data-protection regulations—InsightAI simplifies that journey.",
  },
];

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (idx: number) => setOpenIndex(idx === openIndex ? null : idx);

  return (
    <section className="py-8 lg:py-12 bg-gray-50">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        {/* Title + Subtitle */}
        <div className="text-center py-4">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">
            Frequently Asked Questions
          </h2>
          <p className="mt-3 text-sm lg:text-lg text-gray-600 max-w-2xl mx-auto">
            Answers to common questions about InsightAI, our platform, and how we
            help teams stay compliant and secure.
          </p>
        </div>

        {/* FAQ List */}
        <ul className="divide-y divide-gray-300">
          {faqs.map((item, idx) => {
            const isOpen = idx === openIndex;
            return (
              <li key={item.question}>
                <button
                  onClick={() => toggle(idx)}
                  className="flex w-full items-center justify-between py-5 text-left cursor-pointer"
                >
                  <span className="text-base sm:text-lg font-medium text-gray-900">
                    {item.question}
                  </span>

                  <ChevronDown
                    className={`h-6 w-6 shrink-0 text-gray-500 transition-transform duration-500 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {/* Animated Answer */}
                <div
                  className={`overflow-hidden transition-all duration-500 ease-in-out ${
                    isOpen ? "max-h-40 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <p className="pb-5 pl-1 pr-8 text-gray-700 text-sm sm:text-base leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default FAQSection;
