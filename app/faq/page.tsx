import type { Metadata } from "next";
import FAQSection from "@/components/FAQSection";
import SchemaMarkup from "@/components/SchemaMarkup";
import Link from "next/link";
import { faqData } from "@/data/faq";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://germanvpd.com";

export const metadata: Metadata = {
  title: "FAQ — German VPD & CGPA to German Grade Questions",
  description:
    "Answers to the most common questions about converting Bangladeshi CGPA to German grades, Uni Assist VPD, and studying in Germany.",
  alternates: { canonical: `${siteUrl}/faq` },
};

const breadcrumbs = [
  { name: "Home", url: siteUrl },
  { name: "FAQ", url: `${siteUrl}/faq` },
];

// Build JSON-LD FAQ schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqData.map((item) => ({
    "@type": "Question",
    name: item.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: item.answer,
    },
  })),
};

export default function FAQPage() {
  return (
    <>
      <SchemaMarkup type="breadcrumb" breadcrumbs={breadcrumbs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Header */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 py-10">
        <div className="container-content">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-sm text-slate-400 list-none p-0 m-0">
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-700 font-medium">FAQ</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Everything Bangladeshi students need to know about German grades, Uni Assist, and VPD documents.
          </p>
        </div>
      </section>

      {/* FAQ Content */}
      <FAQSection showAll />

      {/* CTA */}
      <section className="py-12 section-surface border-t border-slate-200">
        <div className="container-content text-center">
          <h2 className="text-2xl font-bold text-slate-900 mb-3">Ready to calculate your grade?</h2>
          <p className="text-slate-500 mb-6">Use our free calculator to convert your CGPA to German grade instantly.</p>
          <Link href="/calculator" className="btn-primary inline-flex">
            Open Calculator
          </Link>
        </div>
      </section>
    </>
  );
}
