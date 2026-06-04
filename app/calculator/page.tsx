import type { Metadata } from "next";
import Calculator from "@/components/Calculator";
import AdPlaceholder from "@/components/AdPlaceholder";
import SchemaMarkup from "@/components/SchemaMarkup";
import Link from "next/link";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://germanvpd.com";

export const metadata: Metadata = {
  title: "German VPD Calculator — Convert CGPA to German Grade",
  description:
    "Free online German VPD calculator for Bangladeshi students. Enter your CGPA and get your German grade instantly using the Modified Bavarian Formula.",
  alternates: { canonical: `${siteUrl}/calculator` },
};

const breadcrumbs = [
  { name: "Home", url: siteUrl },
  { name: "Calculator", url: `${siteUrl}/calculator` },
];

export default function CalculatorPage() {
  return (
    <>
      <SchemaMarkup type="breadcrumb" breadcrumbs={breadcrumbs} />

      {/* Page header */}
      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 py-10">
        <div className="container-content">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-sm text-slate-400 list-none p-0 m-0">
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-700 font-medium">Calculator</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            German VPD Grade Calculator
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Instantly convert your Bangladeshi CGPA to a German grade using the official Modified Bavarian Formula — the same method used by Uni Assist.
          </p>
        </div>
      </section>

      {/* Main content */}
      <section className="py-12">
        <div className="container-content">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Calculator */}
            <div className="lg:col-span-2">
              <Calculator />

              {/* Below calculator ad */}
              <div className="mt-6">
                <AdPlaceholder slot="calculator-below" />
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-6">
              {/* Sidebar ad */}
              <AdPlaceholder slot="calculator-sidebar" minHeight="250px" label="Advertisement" />

              {/* Quick reference */}
              <div className="bg-white rounded-2xl border border-slate-200 p-5">
                <h2 className="text-base font-bold text-slate-800 mb-4">German Grade Scale</h2>
                <div className="space-y-3">
                  {[
                    { range: "1.0 – 1.5", label: "Excellent", de: "Sehr gut", dot: "bg-emerald-500" },
                    { range: "1.6 – 2.5", label: "Very Good", de: "Gut", dot: "bg-blue-500" },
                    { range: "2.6 – 3.5", label: "Good", de: "Befriedigend", dot: "bg-amber-500" },
                    { range: "3.6 – 4.0", label: "Pass", de: "Ausreichend", dot: "bg-orange-400" },
                    { range: "4.1 – 5.0", label: "Fail", de: "Nicht bestanden", dot: "bg-red-400" },
                  ].map((g) => (
                    <div key={g.range} className="flex items-center gap-2.5">
                      <span className={`w-2.5 h-2.5 rounded-full shrink-0 ${g.dot}`} aria-hidden="true" />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between text-sm">
                          <span className="font-semibold text-slate-700">{g.range}</span>
                          <span className="text-slate-500">{g.label}</span>
                        </div>
                        <div className="text-xs text-slate-400">{g.de}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Tip */}
              <div className="bg-primary-50 border border-primary-100 rounded-2xl p-5">
                <h3 className="text-sm font-bold text-primary-800 mb-2">💡 Did you know?</h3>
                <p className="text-sm text-primary-700 leading-relaxed">
                  Most Bangladeshi universities use a 4.00 scale with a 2.00 minimum passing CGPA — these are the default values in the calculator.
                </p>
                <Link href="/blog/cgpa-to-german-grade" className="text-xs font-semibold text-primary-600 mt-3 inline-block hover:underline">
                  Learn more →
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </>
  );
}
