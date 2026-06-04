import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://germanvpd.com";
const slug = "german-grading-system";
const title = "German University Grading System Explained";
const description =
  "Understand Germany's 1–5 grading scale, what each grade means, how it compares to other countries, and what grade you need for a competitive master's application.";
const publishedAt = "2025-02-10";

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

export default function ArticlePage() {
  return (
    <>
      <SchemaMarkup type="breadcrumb" breadcrumbs={breadcrumbs} />
      <SchemaMarkup type="article" article={{ title, description, datePublished: publishedAt, url: `${siteUrl}/blog/${slug}` }} />

      <article className="py-12">
        <div className="container-content max-w-3xl">
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-400 list-none p-0 m-0">
              <li><Link href="/" className="hover:text-primary-600">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-primary-600">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-700 font-medium">German Grading System</li>
            </ol>
          </nav>

          <div className="mb-8">
            <span className="text-xs font-semibold bg-blue-50 text-blue-700 px-2.5 py-1 rounded-full">Guide</span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-3">{title}</h1>
            <p className="text-slate-500 text-lg leading-relaxed">{description}</p>
            <div className="flex items-center gap-2 text-sm text-slate-400 mt-4">
              <time dateTime={publishedAt}>February 10, 2025</time>
              <span>·</span><span>5 min read</span>
            </div>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed text-base">
            <h2 className="text-2xl font-bold text-slate-900">The German 1–5 Grading Scale</h2>
            <p>
              Germany uses a numerical grading scale that runs from <strong>1.0 (best)</strong> to <strong>5.0 (fail)</strong>. This is the opposite of many countries where higher numbers mean better performance. A 1.0 in Germany is equivalent to an A+ in the US or a First Class in the UK.
            </p>

            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">German Grade</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Classification</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">German Term</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">US Equiv.</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["1.0 – 1.5", "Excellent", "Sehr gut", "A / A+"],
                    ["1.6 – 2.5", "Very Good", "Gut", "B+ / A−"],
                    ["2.6 – 3.5", "Good", "Befriedigend", "B / B−"],
                    ["3.6 – 4.0", "Pass", "Ausreichend", "C"],
                    ["4.1 – 5.0", "Fail", "Nicht bestanden", "F"],
                  ].map(([grade, cls, de, us]) => (
                    <tr key={grade} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-mono font-bold text-slate-800">{grade}</td>
                      <td className="px-4 py-3 text-slate-700">{cls}</td>
                      <td className="px-4 py-3 text-slate-500 italic">{de}</td>
                      <td className="px-4 py-3 text-slate-500">{us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900">How German Professors Grade</h2>
            <p>
              Unlike the US system where A-grades are common, German professors are famously strict. A grade of 1.0 in Germany is genuinely rare. Most students graduate with grades between 1.5 and 2.5. This means a German grade of 2.0 is considered very strong.
            </p>

            <h2 className="text-2xl font-bold text-slate-900">What Grade Do You Need for a Master&apos;s?</h2>
            <p>
              Requirements vary by university and subject, but general guidelines are:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Top universities (TU Munich, RWTH Aachen, etc.):</strong> German grade 2.0 or better</li>
              <li><strong>Most public universities:</strong> German grade 2.5 or better</li>
              <li><strong>Applied sciences universities (FH):</strong> Often 2.5–3.0</li>
            </ul>
            <p>
              Use our <Link href="/calculator" className="text-primary-600 hover:underline font-semibold">free calculator</Link> to find out your German grade and whether you meet admission requirements.
            </p>

            <h2 className="text-2xl font-bold text-slate-900">Grades on Official Documents</h2>
            <p>
              On German university documents, you may also see grades expressed as descriptors without numbers. When reporting your grade to employers or other institutions, always include both the number and the classification (e.g., "2.0 — Gut").
            </p>

            <h2 className="text-2xl font-bold text-slate-900">GPA vs German Grade — Key Differences</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Feature</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Bangladeshi CGPA (4.0 scale)</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">German Grade</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["Best grade", "4.00", "1.0"],
                    ["Lowest passing", "2.00", "4.0"],
                    ["Fail threshold", "Below 2.00", "Above 4.0"],
                    ["Direction", "Higher = Better", "Lower = Better"],
                  ].map(([f, bd, de]) => (
                    <tr key={f} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-700">{f}</td>
                      <td className="px-4 py-3 text-slate-600">{bd}</td>
                      <td className="px-4 py-3 text-slate-600">{de}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="bg-primary-50 rounded-xl p-5 mt-8">
              <h3 className="font-bold text-primary-800 mb-3">Related Articles</h3>
              <ul className="space-y-2 list-none p-0 m-0">
                <li><Link href="/blog/cgpa-to-german-grade" className="text-primary-600 hover:underline text-sm">→ How to Convert CGPA to German Grade</Link></li>
                <li><Link href="/blog/minimum-cgpa-for-germany" className="text-primary-600 hover:underline text-sm">→ Minimum CGPA for Germany Masters</Link></li>
                <li><Link href="/blog/what-is-vpd" className="text-primary-600 hover:underline text-sm">→ What is VPD?</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-gradient-to-r from-primary-700 to-primary-600 rounded-2xl text-white text-center">
            <h3 className="text-xl font-bold mb-2">Find your German grade now</h3>
            <p className="text-primary-100 text-sm mb-4">Free, instant, and uses the official Bavarian Formula.</p>
            <Link href="/calculator" className="btn-primary bg-white text-primary-700 hover:bg-primary-50 inline-flex">Open Calculator</Link>
          </div>
        </div>
      </article>
    </>
  );
}
