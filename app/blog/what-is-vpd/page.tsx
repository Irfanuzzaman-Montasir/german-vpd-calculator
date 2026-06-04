import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://germanvpd.com";
const slug = "what-is-vpd";
const title = "What is VPD in Germany?";
const description =
  "Everything Bangladeshi students need to know about VPD (Vorprüfungsdokumentation) — what it is, who needs it, how to get it, and how much it costs.";
const publishedAt = "2025-01-20";

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
    { "@type": "Question", name: "How much does a VPD cost?", acceptedAnswer: { "@type": "Answer", text: "A VPD from Uni Assist costs approximately €75 for the first university application and €30 for each additional university in the same application round." } },
    { "@type": "Question", name: "How long does it take to get a VPD?", acceptedAnswer: { "@type": "Answer", text: "Processing time is typically 6–12 weeks. It is recommended to apply at least 3 months before your application deadline." } },
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
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link href="/blog" className="hover:text-primary-600 transition-colors">Blog</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-700 font-medium">What is VPD?</li>
            </ol>
          </nav>

          <div className="mb-8">
            <span className="text-xs font-semibold bg-purple-50 text-purple-700 px-2.5 py-1 rounded-full">Explained</span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-3">{title}</h1>
            <p className="text-slate-500 text-lg leading-relaxed">{description}</p>
            <div className="flex items-center gap-2 text-sm text-slate-400 mt-4">
              <time dateTime={publishedAt}>January 20, 2025</time>
              <span>·</span><span>5 min read</span>
            </div>
          </div>

          <div className="space-y-6 text-slate-600 leading-relaxed text-base">
            <h2 className="text-2xl font-bold text-slate-900">VPD — Definition</h2>
            <p>
              <strong>VPD</strong> stands for <em>Vorprüfungsdokumentation</em>, which translates from German as <strong>"preliminary examination documentation."</strong> It is an official document issued by <Link href="/blog/what-is-uni-assist" className="text-primary-600 hover:underline">Uni Assist</Link> that:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Verifies that your foreign academic credentials are authentic</li>
              <li>Converts your grades into the German grading system using the Modified Bavarian Formula</li>
              <li>Provides German universities with a standardized academic profile</li>
            </ul>

            <h2 className="text-2xl font-bold text-slate-900">Who Needs a VPD?</h2>
            <p>
              You need a VPD if you are applying to a German university that is a member of Uni Assist <strong>and</strong> requires international applicants to submit their documents through Uni Assist. Not all German universities require a VPD — some have their own application portals.
            </p>
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-5">
              <p className="text-amber-800 font-semibold text-sm">⚠️ Always check the specific requirements of each university. The requirement varies by institution and program.</p>
            </div>

            <h2 className="text-2xl font-bold text-slate-900">How to Get a VPD</h2>
            <div className="space-y-4">
              {[
                { step: "1", title: "Create a Uni Assist account", desc: "Register at uni-assist.de and create your applicant profile." },
                { step: "2", title: "Upload your documents", desc: "Submit certified copies of your transcripts, degree certificates, and translation (if not in German or English)." },
                { step: "3", title: "Pay the fee", desc: "Approximately €75 for the first application, €30 for each additional university in the same round." },
                { step: "4", title: "Wait for processing", desc: "Processing takes 6–12 weeks. Apply at least 3 months before your deadline." },
                { step: "5", title: "Receive your VPD", desc: "Once processed, your VPD is sent directly to the universities you applied to." },
              ].map((s) => (
                <div key={s.step} className="flex gap-4">
                  <div className="w-8 h-8 bg-primary-600 text-white rounded-full flex items-center justify-center font-bold text-sm shrink-0">{s.step}</div>
                  <div>
                    <h3 className="font-semibold text-slate-800">{s.title}</h3>
                    <p className="text-slate-500 text-sm">{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <h2 className="text-2xl font-bold text-slate-900">VPD Cost for Bangladeshi Students</h2>
            <div className="overflow-x-auto rounded-xl border border-slate-200">
              <table className="w-full text-sm">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Application Type</th>
                    <th className="text-left px-4 py-3 font-semibold text-slate-700">Fee</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr><td className="px-4 py-3">First university</td><td className="px-4 py-3 font-semibold">€75</td></tr>
                  <tr><td className="px-4 py-3">Each additional university (same round)</td><td className="px-4 py-3 font-semibold">€30</td></tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-slate-900">FAQ</h2>
            <div className="space-y-4">
              {[
                { q: "How much does a VPD cost?", a: "A VPD from Uni Assist costs approximately €75 for the first university application and €30 for each additional university in the same round." },
                { q: "How long does it take to get a VPD?", a: "Processing time is typically 6–12 weeks. It is recommended to apply at least 3 months before your application deadline." },
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
                <li><Link href="/blog/what-is-uni-assist" className="text-primary-600 hover:underline text-sm">→ What is Uni Assist?</Link></li>
                <li><Link href="/blog/cgpa-to-german-grade" className="text-primary-600 hover:underline text-sm">→ How to Convert CGPA to German Grade</Link></li>
                <li><Link href="/blog/minimum-cgpa-for-germany" className="text-primary-600 hover:underline text-sm">→ Minimum CGPA for Germany Masters</Link></li>
              </ul>
            </div>
          </div>

          <div className="mt-10 p-6 bg-gradient-to-r from-primary-700 to-primary-600 rounded-2xl text-white text-center">
            <h3 className="text-xl font-bold mb-2">Calculate your German grade now</h3>
            <p className="text-primary-100 text-sm mb-4">Know your grade before applying. It&apos;s free.</p>
            <Link href="/calculator" className="btn-primary bg-white text-primary-700 hover:bg-primary-50 inline-flex">Open Calculator</Link>
          </div>
        </div>
      </article>
    </>
  );
}
