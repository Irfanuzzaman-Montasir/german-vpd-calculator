import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://germanvpd.com";
const slug = "what-is-uni-assist";
const title = "What is Uni Assist?";
const description =
  "Uni Assist is the central portal for international students applying to German universities. Learn how it works, which universities use it, and how to submit your application.";
const publishedAt = "2025-02-01";

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
              <li className="text-slate-700 font-medium">What is Uni Assist?</li>
            </ol>
          </nav>

          <div className="mb-8">
            <span className="text-xs font-semibold bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full">Explained</span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-3">{title}</h1>
            <p className="text-slate-500 text-lg leading-relaxed">{description}</p>
            <div className="flex items-center gap-2 text-sm text-slate-400 mt-4">
              <time dateTime={publishedAt}>February 1, 2025</time>
              <span>·</span><span>7 min read</span>
            </div>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed text-base">
            <h2 className="text-2xl font-bold text-slate-900">What is Uni Assist?</h2>
            <p>
              <strong>Uni Assist</strong> (Hochschulstart) is a non-profit organization that acts as a central processing center for international student applications to German universities. Instead of submitting your documents directly to each university, you submit them once to Uni Assist, which verifies, assesses, and forwards your application.
            </p>
            <p>
              Over <strong>170 German universities</strong> are members of Uni Assist, making it the most important gateway for international applicants to Germany.
            </p>

            <h2 className="text-2xl font-bold text-slate-900">What Does Uni Assist Do?</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verifies the authenticity of your academic documents</li>
              <li>Checks your academic background and degree equivalency</li>
              <li>Converts your grades using the <Link href="/blog/cgpa-to-german-grade" className="text-primary-600 hover:underline">Modified Bavarian Formula</Link></li>
              <li>Issues a <Link href="/blog/what-is-vpd" className="text-primary-600 hover:underline">VPD (Vorprüfungsdokumentation)</Link></li>
              <li>Forwards your application to the universities you selected</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900">How to Apply Through Uni Assist</h2>
            <div className="space-y-4">
              {[
                { n: "1", t: "Register at uni-assist.de", d: "Create a free account and complete your personal profile." },
                { n: "2", t: "Select your universities", d: "Search for Uni Assist member universities and add them to your application." },
                { n: "3", t: "Upload your documents", d: "Certified transcripts, degree certificates, language certificates, passport copy, and motivational letter." },
                { n: "4", t: "Pay the fee", d: "€75 for first university, €30 for each additional one in the same application round." },
                { n: "5", t: "Track your application", d: "Use your Uni Assist portal to monitor document processing status." },
              ].map((s) => (
                <div key={s.n} className="flex gap-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{s.n}</div>
                  <div><h3 className="font-semibold text-slate-800">{s.t}</h3><p className="text-slate-500 text-sm">{s.d}</p></div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900">Documents Required from Bangladesh</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Document</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {[
                    ["University transcripts", "Certified copies, all semesters"],
                    ["Degree certificate", "Bachelor's degree or provisional certificate"],
                    ["HSC & SSC certificates", "Higher and Secondary School certificates"],
                    ["English/German proficiency", "IELTS, TOEFL, TestDaF, DSH, or Goethe"],
                    ["Passport copy", "Valid passport photo page"],
                  ].map(([doc, note]) => (
                    <tr key={doc} className="hover:bg-slate-50">
                      <td className="px-4 py-3 font-medium text-slate-700">{doc}</td>
                      <td className="px-4 py-3 text-slate-500">{note}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900">Important Deadlines</h2>
            <p>
              Uni Assist has strict application windows. Most German universities have two main intake periods:
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li><strong>Winter Semester (October start):</strong> Apply to Uni Assist by May 31</li>
              <li><strong>Summer Semester (April start):</strong> Apply to Uni Assist by November 30</li>
            </ul>
            <p className="text-sm text-amber-700 bg-amber-50 border border-amber-200 rounded-xl p-4">
              ⚠️ These are general guidelines. Always check the specific deadline for each university you apply to.
            </p>

            <div className="bg-primary-50 rounded-xl p-5 mt-8">
              <h3 className="font-bold text-primary-800 mb-3">Related Articles</h3>
              <ul className="space-y-2 list-none p-0 m-0">
                <li><Link href="/blog/what-is-vpd" className="text-primary-600 hover:underline text-sm">→ What is VPD in Germany?</Link></li>
                <li><Link href="/blog/cgpa-to-german-grade" className="text-primary-600 hover:underline text-sm">→ How to Convert CGPA to German Grade</Link></li>
                <li><Link href="/blog/german-grading-system" className="text-primary-600 hover:underline text-sm">→ German Grading System Explained</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-gradient-to-r from-primary-700 to-primary-600 rounded-2xl text-white text-center">
            <h3 className="text-xl font-bold mb-2">Know your German grade before you apply</h3>
            <p className="text-primary-100 text-sm mb-4">Use our free calculator — takes under 30 seconds.</p>
            <Link href="/calculator" className="btn-primary bg-white text-primary-700 hover:bg-primary-50 inline-flex">Calculate Now</Link>
          </div>
        </div>
      </article>
    </>
  );
}
