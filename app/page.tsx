import type { Metadata } from "next";
import Link from "next/link";
import Calculator from "@/components/Calculator";
import FormulaExplainer from "@/components/FormulaExplainer";
import FAQSection from "@/components/FAQSection";
import BlogPreview from "@/components/BlogPreview";
import AdPlaceholder from "@/components/AdPlaceholder";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://germanvpd.com";

export const metadata: Metadata = {
  title: "German VPD Calculator for Bangladesh | CGPA to German Grade Converter",
  description:
    "Convert your Bangladeshi CGPA into German university grades instantly using the official Modified Bavarian Formula. Free German VPD Calculator.",
  alternates: { canonical: siteUrl },
};

const stats = [
  { value: "100%", label: "Free to use" },
  { value: "4.0", label: "Max German scale" },
  { value: "Official", label: "Bavarian Formula" },
  { value: "Instant", label: "Results" },
];

const gradeScale = [
  { range: "1.0 – 1.5", label: "Excellent", color: "bg-emerald-500" },
  { range: "1.6 – 2.5", label: "Very Good", color: "bg-blue-500" },
  { range: "2.6 – 3.5", label: "Good", color: "bg-amber-500" },
  { range: "3.6 – 4.0", label: "Pass", color: "bg-orange-400" },
];

export default function HomePage() {
  return (
    <>
      {/* ── Hero ── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-primary-950 to-primary-900 text-white">
        {/* Background decoration */}
        <div className="absolute inset-0 opacity-10" aria-hidden="true">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-400 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-primary-300 rounded-full blur-3xl" />
        </div>

        <div className="relative container-content pt-14 pb-16 lg:pt-20 lg:pb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left — Hero text */}
            <div className="animate-fade-in-up">
              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-primary-800/60 border border-primary-700/50 rounded-full px-3.5 py-1.5 text-xs font-medium text-primary-200 mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" aria-hidden="true" />
                Free · No signup · Instant results
              </div>

              <h1 className="text-4xl sm:text-5xl font-black leading-tight tracking-tight text-white mb-4">
                German VPD
                <br />
                <span className="text-primary-300">Grade Calculator</span>
                <br />
                <span className="text-2xl sm:text-3xl font-bold text-slate-300">for Bangladesh</span>
              </h1>

              <p className="text-slate-300 text-lg leading-relaxed mb-6 max-w-lg">
                Convert your CGPA to the German grading system used by{" "}
                <strong className="text-white">Uni Assist</strong> and German universities —
                using the official <strong className="text-white">Modified Bavarian Formula</strong>.
              </p>

              {/* Grade scale badges */}
              <div className="flex flex-wrap gap-2 mb-8">
                {gradeScale.map((g) => (
                  <div
                    key={g.range}
                    className="flex items-center gap-1.5 bg-white/10 rounded-lg px-3 py-1.5 text-xs font-medium"
                  >
                    <span className={`w-2 h-2 rounded-full ${g.color}`} aria-hidden="true" />
                    {g.range} = {g.label}
                  </div>
                ))}
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {stats.map((stat) => (
                  <div key={stat.label} className="bg-white/10 rounded-xl p-3 text-center">
                    <div className="text-xl font-bold text-white">{stat.value}</div>
                    <div className="text-xs text-slate-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — Calculator (above the fold) */}
            <div className="animate-fade-in-up animation-delay-200">
              <Calculator />
            </div>
          </div>
        </div>
      </section>

      {/* ── Ad placeholder — below calculator ── */}
      <div className="container-content py-4">
        <AdPlaceholder slot="below-calculator" />
      </div>

      {/* ── Formula Explainer ── */}
      <FormulaExplainer />

      {/* ── FAQ Section ── */}
      <FAQSection />

      {/* ── Blog Preview ── */}
      <BlogPreview />

      {/* ── CTA Banner ── */}
      <section className="py-16 bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="container-content text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Apply to German Universities?</h2>
          <p className="text-primary-100 text-lg mb-8 max-w-xl mx-auto">
            Use our calculator to find your German grade, then read our guides to understand what it means for your application.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link href="/calculator" className="btn-primary bg-white text-primary-700 hover:bg-primary-50">
              Calculate My Grade
            </Link>
            <Link href="/blog/cgpa-to-german-grade" className="btn-secondary border-white text-white hover:bg-primary-600">
              Read the Guide
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
