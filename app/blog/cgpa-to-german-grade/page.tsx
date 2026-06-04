import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://germanvpd.com";
const slug = "cgpa-to-german-grade";
const title = "How to Convert Bangladeshi CGPA to German Grade";
const description =
  "A step-by-step guide to converting your Bangladeshi university CGPA into the German grading system using the Modified Bavarian Formula — the official method used by Uni Assist.";
const publishedAt = "2025-01-15";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/blog/${slug}` },
  openGraph: { title, description, type: "article", publishedTime: publishedAt },
};

const breadcrumbs = [
  { name: "Home", url: siteUrl },
  { name: "Blog", url: `${siteUrl}/blog` },
  { name: title, url: `${siteUrl}/blog/${slug}` },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What CGPA is needed for German universities?",
      acceptedAnswer: { "@type": "Answer", text: "Most German universities require a minimum German grade of 2.5 (equivalent to roughly 3.0 CGPA on a 4.0 scale in Bangladesh). Competitive programs may require 2.0 or better." },
    },
    {
      "@type": "Question",
      name: "Is the Bavarian Formula the same as Uni Assist formula?",
      acceptedAnswer: { "@type": "Answer", text: "Yes. Uni Assist uses the Modified Bavarian Formula to convert international grades into the German grading system." },
    },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <SchemaMarkup type="breadcrumb" breadcrumbs={breadcrumbs} />
      <SchemaMarkup
        type="article"
        article={{ title, description, datePublished: publishedAt, url: `${siteUrl}/blog/${slug}` }}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="py-12">
        <div className="container-content max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-400 list-none p-0 m-0">
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-primary-600 transition-colors">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-700 font-medium truncate">Convert CGPA</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">Guide</span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-3">
              {title}
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">{description}</p>
            <div className="flex items-center gap-2 text-sm text-slate-400 mt-4">
              <time dateTime={publishedAt}>January 15, 2025</time>
              <span>·</span>
              <span>6 min read</span>
            </div>
          </div>

          {/* Content */}
          <div className="prose-content space-y-6 text-slate-600 leading-relaxed text-base">
            <h2 className="text-2xl font-bold text-slate-900">Why CGPA Conversion Matters</h2>
            <p>
              When Bangladeshi students apply to German universities, their CGPA from institutions like BUET, DU, BRAC University, or NSU is not directly comparable to the German 1–4 grading scale. German universities and Uni Assist need your grade in their own system to evaluate your application fairly.
            </p>
            <p>
              The standard method for this conversion is the <strong>Modified Bavarian Formula</strong> — an internationally recognized formula that maps your CGPA proportionally onto the German scale.
            </p>

            <h2 className="text-2xl font-bold text-slate-900">Step 1: Understand the German Grading Scale</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">German Grade</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Classification</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">German Term</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["1.0 – 1.5", "Excellent", "Sehr gut"],
                    ["1.6 – 2.5", "Very Good", "Gut"],
                    ["2.6 – 3.5", "Good", "Befriedigend"],
                    ["3.6 – 4.0", "Pass", "Ausreichend"],
                    ["4.1 – 5.0", "Fail", "Nicht bestanden"],
                  ].map(([grade, cls, de]) => (
                    <tr key={grade} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono font-semibold text-slate-800">{grade}</td>
                      <td className="px-4 py-3 text-slate-700">{cls}</td>
                      <td className="px-4 py-3 text-slate-500 italic">{de}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900">Step 2: Apply the Modified Bavarian Formula</h2>
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-5 font-mono text-primary-800 text-center text-lg">
              German Grade = 1 + 3 × (Max − Obtained) / (Max − Min Passing)
            </div>
            <p>Where:</p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Max</strong> = Maximum CGPA of your university (usually 4.00 in Bangladesh)</li>
              <li><strong>Obtained</strong> = Your actual CGPA</li>
              <li><strong>Min Passing</strong> = Minimum passing CGPA (usually 2.00 in Bangladesh)</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900">Step 3: Worked Example</h2>
            <p>Let&apos;s say you have a CGPA of 3.50 on a 4.00 scale with a 2.00 minimum:</p>
            <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 font-mono text-sm space-y-2">
              <p>= 1 + 3 × (4.00 − 3.50) / (4.00 − 2.00)</p>
              <p>= 1 + 3 × 0.50 / 2.00</p>
              <p>= 1 + 3 × 0.25</p>
              <p className="font-bold text-primary-700">= 1.75 — Very Good</p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900">Step 4: Use Our Free Calculator</h2>
            <p>
              Instead of calculating manually, use our{" "}
              <Link href="/calculator" className="text-primary-600 hover:underline font-semibold">
                German VPD Calculator
              </Link>{" "}
              to get your result instantly. Just enter your CGPA, maximum CGPA, and minimum passing CGPA.
            </p>

            <h2 className="text-2xl font-bold text-slate-900">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "What CGPA is needed for German universities?",
                  a: "Most German universities require a minimum German grade of 2.5 (equivalent to roughly 3.0 CGPA on a 4.0 scale). Competitive programs may require 2.0 or better.",
                },
                {
                  q: "Is the Bavarian Formula the same as the Uni Assist formula?",
                  a: "Yes. Uni Assist uses the Modified Bavarian Formula to convert international grades into the German grading system.",
                },
              ].map((item) => (
                <div key={item.q} className="bg-slate-50 rounded-xl p-5">
                  <h3 className="font-bold text-slate-800 mb-2">{item.q}</h3>
                  <p className="text-slate-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>

            {/* Internal links */}
            <div className="bg-primary-50 rounded-xl p-5 mt-8">
              <h3 className="font-bold text-primary-800 mb-3">Related Articles</h3>
              <ul className="space-y-2 list-none p-0 m-0">
                <li><Link href="/blog/what-is-vpd" className="text-primary-600 hover:underline text-sm">→ What is VPD in Germany?</Link></li>
                <li><Link href="/blog/what-is-uni-assist" className="text-primary-600 hover:underline text-sm">→ What is Uni Assist?</Link></li>
                <li><Link href="/blog/german-grading-system" className="text-primary-600 hover:underline text-sm">→ German Grading System Explained</Link></li>
                <li><Link href="/blog/minimum-cgpa-for-germany" className="text-primary-600 hover:underline text-sm">→ Minimum CGPA for Germany Masters</Link></li>
              </ul>
            </div>
          </div>

          {/* CTA */}
          <div className="mt-10 p-6 bg-gradient-to-r from-primary-700 to-primary-600 rounded-2xl text-white text-center">
            <h3 className="text-xl font-bold mb-2">Ready to convert your CGPA?</h3>
            <p className="text-primary-100 text-sm mb-4">Use our free calculator for instant results.</p>
            <Link href="/calculator" className="btn-primary bg-white text-primary-700 hover:bg-primary-50 inline-flex">
              Open Calculator
            </Link>
          </div>
        </div>
      </article>
    </>
  );
}
