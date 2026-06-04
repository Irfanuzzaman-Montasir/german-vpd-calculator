import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://germanvpd.com";

export const metadata: Metadata = {
  title: "About — German VPD Calculator for Bangladesh",
  description:
    "Learn about the German VPD Calculator — a free tool built to help Bangladeshi students convert their CGPA to German university grades using the Modified Bavarian Formula.",
  alternates: { canonical: `${siteUrl}/about` },
};

const breadcrumbs = [
  { name: "Home", url: siteUrl },
  { name: "About", url: `${siteUrl}/about` },
];

export default function AboutPage() {
  return (
    <>
      <SchemaMarkup type="breadcrumb" breadcrumbs={breadcrumbs} />

      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 py-10">
        <div className="container-content">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-sm text-slate-400 list-none p-0 m-0">
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-700 font-medium">About</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            About German VPD Calculator
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            A free, accurate, and fast tool built for Bangladeshi students applying to German universities.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-content max-w-3xl">
          <div className="prose prose-slate max-w-none space-y-6 text-slate-600 text-base leading-relaxed">
            <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
            <p>
              Every year, thousands of Bangladeshi students dream of pursuing higher education in Germany. One of the first challenges they face is converting their CGPA into the German grading system — a process that can be confusing and stressful without the right tools.
            </p>
            <p>
              The <strong className="text-slate-800">German VPD Calculator</strong> was built to remove that friction. It provides instant, accurate CGPA-to-German-grade conversions using the official <strong className="text-slate-800">Modified Bavarian Formula</strong> — the exact same method used by <a href="https://www.uni-assist.de" target="_blank" rel="noopener noreferrer" className="text-primary-600 hover:underline">Uni Assist</a> and most German universities.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">The Formula</h2>
            <p>
              The Modified Bavarian Formula is the internationally recognized standard for converting foreign grades:
            </p>
            <div className="bg-primary-50 border border-primary-200 rounded-xl p-5 font-mono text-primary-800 text-center">
              German Grade = 1 + 3 × (Max − Obtained) / (Max − Min Passing)
            </div>
            <p>
              For most Bangladeshi universities, the default values are: Maximum CGPA = 4.00 and Minimum Passing CGPA = 2.00. You can customize these values if your institution uses a different scale.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">Why We Built This</h2>
            <p>
              Existing grade conversion tools are often cluttered, slow, or require sign-ups. This tool is intentionally minimal — no accounts, no fees, no tracking beyond anonymous analytics. Just a fast, reliable calculator that works on any device, even on slow mobile connections.
            </p>

            <h2 className="text-2xl font-bold text-slate-900 mt-8">Disclaimer</h2>
            <p className="text-sm bg-amber-50 border border-amber-200 rounded-xl p-4 text-amber-800">
              This calculator is for informational purposes only. The results are estimates based on the Modified Bavarian Formula. Always verify your official grade conversion with Uni Assist or the respective German university before submitting your application.
            </p>
          </div>

          <div className="mt-10 flex flex-col sm:flex-row gap-4">
            <Link href="/calculator" className="btn-primary">Try the Calculator</Link>
            <Link href="/blog" className="btn-secondary">Read Our Guides</Link>
          </div>
        </div>
      </section>
    </>
  );
}
