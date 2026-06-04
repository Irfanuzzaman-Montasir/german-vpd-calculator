"use client";

import { useState } from "react";
import { faqData } from "@/data/faq";

interface FAQSectionProps {
  showAll?: boolean;
}

export default function FAQSection({ showAll = false }: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const items = showAll ? faqData : faqData.slice(0, 4);

  return (
    <section className="py-16 bg-white" id="faq" aria-labelledby="faq-heading">
      <div className="container-content">
        <h2 id="faq-heading" className="section-heading">Frequently Asked Questions</h2>
        <p className="section-subheading">
          Everything Bangladeshi students need to know about converting CGPA to German grades.
        </p>

        <div className="max-w-2xl mx-auto space-y-3" itemScope itemType="https://schema.org/FAQPage">
          {items.map((item, index) => (
            <div
              key={index}
              className="border border-slate-200 rounded-xl overflow-hidden transition-shadow hover:shadow-sm"
              itemScope
              itemProp="mainEntity"
              itemType="https://schema.org/Question"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full text-left px-5 py-4 flex items-start justify-between gap-3 bg-white hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === index}
                id={`faq-q-${index}`}
                aria-controls={`faq-a-${index}`}
              >
                <span
                  className="font-semibold text-slate-800 text-sm leading-relaxed"
                  itemProp="name"
                >
                  {item.question}
                </span>
                <svg
                  className={`shrink-0 w-5 h-5 text-primary-500 transition-transform duration-200 mt-0.5 ${openIndex === index ? "rotate-180" : ""}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              {openIndex === index && (
                <div
                  id={`faq-a-${index}`}
                  role="region"
                  aria-labelledby={`faq-q-${index}`}
                  className="px-5 pb-5 bg-slate-50 border-t border-slate-100"
                  itemScope
                  itemProp="acceptedAnswer"
                  itemType="https://schema.org/Answer"
                >
                  <p className="text-slate-600 text-sm leading-relaxed pt-3" itemProp="text">
                    {item.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        {!showAll && (
          <div className="text-center mt-8">
            <a href="/faq" className="btn-secondary inline-flex">
              View All FAQs
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
