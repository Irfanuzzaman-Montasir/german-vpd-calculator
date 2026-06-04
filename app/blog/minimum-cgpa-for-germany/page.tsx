import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://germanvpd.com";
const slug = "minimum-cgpa-for-germany";
const title = "Minimum CGPA Required for Germany Masters";
const description =
  "What CGPA do you need to get into a German university for a master's degree? We break down requirements by university type, subject area, and program ranking.";
const publishedAt = "2025-02-18";

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
    { "@type": "Question", name: "What is the minimum CGPA for Germany masters from Bangladesh?", acceptedAnswer: { "@type": "Answer", text: "Most German universities require a German grade of 2.5 or better, which is equivalent to approximately 3.0 CGPA on a 4.0 scale in Bangladesh. Top universities may require a German grade of 2.0 or better (approximately 3.5 CGPA)." } },
    { "@type": "Question", name: "Can I get into German university with a 2.5 CGPA?", acceptedAnswer: { "@type": "Answer", text: "A 2.5 CGPA on a 4.0 scale converts to approximately a German grade of 2.75, which is in the 'Good' range. This may meet minimum requirements at some universities, but competitive programs typically require a stronger profile." } },
  ],
};

export default function ArticlePage() {
  return (
    <>
      <SchemaMarkup type="breadcrumb" breadcrumbs={breadcrumbs} />
      <SchemaMarkup type="article" article={{ title, description, datePublished: publishedAt, url: `${siteUrl}/blog/${slug}` }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <article className="py-12">
        <div className="container-content max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-400 list-none p-0 m-0">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-primary-600">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-700 font-medium">Minimum CGPA for Germany</li>
            </ol>
          </nav>

          <div className="mb-8">
            <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full">Admissions</span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-3">{title}</h1>
            <p className="text-slate-500 text-lg leading-relaxed">{description}</p>
            <div className="flex items-center gap-2 text-sm text-slate-400 mt-4">
              <time dateTime={publishedAt}>February 18, 2025</time>
              <span>·</span><span>8 min read</span>
            </div>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed text-base">
            <h2 className="text-2xl font-bold text-slate-900">The Short Answer</h2>
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-5">
              <p className="text-primary-800 font-semibold">
                Most German universities require a German grade of <strong>2.5 or better</strong> (equivalent to ~3.0 CGPA on a 4.0 Bangladesh scale). Top-ranked universities typically require <strong>2.0 or better</strong> (~3.5 CGPA).
              </p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900">CGPA to German Grade — Quick Reference</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Bangladesh CGPA (4.0 scale)</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">German Grade</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Classification</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Competitiveness</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["3.75 – 4.00", "1.0 – 1.38", "Excellent", "🟢 Very Strong"],
                    ["3.50 – 3.74", "1.38 – 1.75", "Excellent/Very Good", "🟢 Strong"],
                    ["3.20 – 3.49", "1.75 – 2.20", "Very Good", "🟡 Competitive"],
                    ["3.00 – 3.19", "2.20 – 2.50", "Very Good/Good", "🟡 Meets Most"],
                    ["2.75 – 2.99", "2.50 – 2.88", "Good", "🟠 Minimum Range"],
                    ["2.50 – 2.74", "2.88 – 3.25", "Good", "🔴 May Struggle"],
                    ["Below 2.50", "Above 3.25", "Pass or below", "🔴 Very Difficult"],
                  ].map(([cgpa, german, cls, competitive]) => (
                    <tr key={cgpa} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono font-semibold text-slate-800">{cgpa}</td>
                      <td className="px-4 py-3 text-slate-700 font-mono">{german}</td>
                      <td className="px-4 py-3 text-slate-600">{cls}</td>
                      <td className="px-4 py-3">{competitive}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-xs text-slate-400">* Calculated using Max CGPA 4.0, Min Passing 2.0. Use the <Link href="/calculator" className="text-primary-600 hover:underline">calculator</Link> for exact values.</p>

            <h2 className="text-2xl font-bold text-slate-900">Requirements by University Type</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { type: "TU9 Universities", examples: "TU Munich, RWTH Aachen, TU Berlin", req: "German grade ≤ 2.0", cgpa: "≥ 3.50 CGPA", color: "border-blue-300 bg-blue-50" },
                { type: "Top Public Universities", examples: "LMU Munich, Heidelberg, Hamburg", req: "German grade ≤ 2.5", cgpa: "≥ 3.00 CGPA", color: "border-emerald-300 bg-emerald-50" },
                { type: "Regional Universities", examples: "Various state universities", req: "German grade ≤ 3.0", cgpa: "≥ 2.75 CGPA", color: "border-amber-300 bg-amber-50" },
                { type: "Applied Sciences (FH)", examples: "Various FH/HAW institutions", req: "German grade ≤ 3.0", cgpa: "≥ 2.75 CGPA", color: "border-orange-300 bg-orange-50" },
              ].map((u) => (
                <div key={u.type} className={`rounded-xl border p-4 ${u.color}`}>
                  <h3 className="font-bold text-slate-800 text-sm mb-1">{u.type}</h3>
                  <p className="text-xs text-slate-500 mb-2">{u.examples}</p>
                  <p className="text-sm font-semibold text-slate-700">{u.req}</p>
                  <p className="text-xs text-slate-500">Bangladesh equiv: {u.cgpa}</p>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900">Other Factors That Matter</h2>
            <p>CGPA alone is not the only factor. German universities also consider:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>German language proficiency</strong> (B2/C1 for German-taught programs)</li>
              <li><strong>English proficiency</strong> (IELTS 6.5+ or TOEFL 90+ for English-taught programs)</li>
              <li><strong>Motivation letter</strong> (SOP) — critically important</li>
              <li><strong>Relevant work or research experience</strong></li>
              <li><strong>Letters of recommendation</strong></li>
              <li><strong>Subject relevance</strong> of your bachelor&apos;s degree</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
            <div className="space-y-4">
              {[
                { q: "What is the minimum CGPA for Germany masters from Bangladesh?", a: "Most German universities require a German grade of 2.5 or better, which is equivalent to approximately 3.0 CGPA on a 4.0 scale. Top universities may require a German grade of 2.0 or better (~3.5 CGPA)." },
                { q: "Can I get into German university with a 2.5 CGPA?", a: "A 2.5 CGPA on a 4.0 scale converts to approximately a German grade of 2.75. This may meet minimum requirements at some universities, but a stronger academic profile and supporting documents will be essential." },
              ].map((item) => (
                <div key={item.q} className="bg-slate-50 rounded-xl p-5">
                  <h3 className="font-bold text-slate-800 mb-2">{item.q}</h3>
                  <p className="text-slate-600 text-sm">{item.a}</p>
                </div>
              ))}
            </div>

            <div className="bg-primary-50 rounded-xl p-5 mt-8">
              <h3 className="font-bold text-primary-800 mb-3">Related Articles</h3>
              <ul className="space-y-2 list-none p-0 m-0">
                <li><Link href="/blog/cgpa-to-german-grade" className="text-primary-600 hover:underline text-sm">→ How to Convert CGPA to German Grade</Link></li>
                <li><Link href="/blog/german-grading-system" className="text-primary-600 hover:underline text-sm">→ German Grading System Explained</Link></li>
                <li><Link href="/blog/what-is-uni-assist" className="text-primary-600 hover:underline text-sm">→ What is Uni Assist?</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-gradient-to-r from-primary-700 to-primary-600 rounded-2xl text-white text-center">
            <h3 className="text-xl font-bold mb-2">Check your German grade now</h3>
            <p className="text-primary-100 text-sm mb-4">See if your CGPA meets the requirements for German universities.</p>
            <Link href="/calculator" className="btn-primary bg-white text-primary-700 hover:bg-primary-50 inline-flex">Calculate My Grade</Link>
          </div>
        </div>
      </article>
    </>
  );
}
