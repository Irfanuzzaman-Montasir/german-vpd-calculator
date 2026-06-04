import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://germanvpd.com";

export const metadata: Metadata = {
  title: "Contact — German VPD Calculator",
  description:
    "Get in touch with the German VPD Calculator team. Report issues, suggest improvements, or ask questions about CGPA to German grade conversion.",
  alternates: { canonical: `${siteUrl}/contact` },
};

const breadcrumbs = [
  { name: "Home", url: siteUrl },
  { name: "Contact", url: `${siteUrl}/contact` },
];

export default function ContactPage() {
  return (
    <>
      <SchemaMarkup type="breadcrumb" breadcrumbs={breadcrumbs} />

      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 py-10">
        <div className="container-content">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-sm text-slate-400 list-none p-0 m-0">
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-700 font-medium">Contact</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Contact Us
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Have a question, found an issue, or want to suggest a feature? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      <section className="py-14">
        <div className="container-content max-w-2xl">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-10">
            {[
              {
                icon: (
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                ),
                title: "Email Us",
                description: "For questions, feedback, or partnership inquiries.",
                action: (
                  <a
                    href="mailto:contact@germanvpd.com"
                    className="text-primary-600 font-semibold text-sm hover:underline mt-2 inline-block"
                  >
                    contact@germanvpd.com
                  </a>
                ),
              },
              {
                icon: (
                  <svg width="24" height="24" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                ),
                title: "FAQ",
                description: "Check if your question is already answered in our FAQ.",
                action: (
                  <Link href="/faq" className="text-primary-600 font-semibold text-sm hover:underline mt-2 inline-block">
                    Browse FAQ →
                  </Link>
                ),
              },
            ].map((card) => (
              <div key={card.title} className="card">
                <div className="w-12 h-12 bg-primary-50 rounded-xl flex items-center justify-center text-primary-600 mb-4">
                  {card.icon}
                </div>
                <h2 className="text-base font-bold text-slate-900 mb-1">{card.title}</h2>
                <p className="text-sm text-slate-500">{card.description}</p>
                {card.action}
              </div>
            ))}
          </div>

          <div className="bg-slate-50 rounded-2xl border border-slate-200 p-6">
            <h2 className="text-lg font-bold text-slate-800 mb-4">Send a Message</h2>
            <p className="text-sm text-slate-500 mb-4">
              This is a static website. To send us a message, please email us directly at{" "}
              <a href="mailto:contact@germanvpd.com" className="text-primary-600 hover:underline">
                contact@germanvpd.com
              </a>
              . We typically respond within 1–2 business days.
            </p>
            <a href="mailto:contact@germanvpd.com" className="btn-primary inline-flex">
              <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Send Email
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
