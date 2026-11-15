import type { Metadata } from "next";
import Link from "next/link";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://germanvpd.com";
const slug = "study-in-germany-complete-application-guide";
const title = "Study in Germany from Bangladesh: Step-by-Step Application Roadmap & Document Checklist";
const description =
  "A complete, authoritative roadmap for Bangladeshi students planning to pursue Bachelor's or Master's degrees in Germany. Covers full document preparation, Uni-Assist upload procedures, semester deadlines, and course shortlisting.";
const publishedAt = "2025-02-24";

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: `${siteUrl}/blog/${slug}` },
  openGraph: { title, description, type: "article", publishedTime: publishedAt },
};

const breadcrumbs = [
  { name: "Home", url: siteUrl },
  { name: "Blog", url: `${siteUrl}/blog` },
  { name: "Application Guide", url: `${siteUrl}/blog/${slug}` },
];

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Are SSC certificates and transcripts mandatory for German Master's applications?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "While HSC certificates and mark sheets are considered primary school-level entrance qualifications, SSC documents are usually optional supporting records. However, having both scanned in high resolution is recommended to avoid delays.",
      },
    },
    {
      "@type": "Question",
      name: "What should I do if my university does not state the minimum passing grade on my transcript?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You must request an official 'Grading System Certificate' or 'Minimum Passing Grade Certificate' on your university's official letterhead signed and sealed by the Registrar or Controller of Examinations.",
      },
    },
    {
      "@type": "Question",
      name: "When should I apply for a VPD for Winter and Summer semesters?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Uni-Assist takes 4 to 8 weeks (sometimes up to 12 weeks during peak season). For Winter semester (deadlines in July), apply for your VPD by April or May. For Summer semester (deadlines in January), apply by October or November.",
      },
    },
  ],
};

export default function StudyInGermanyRoadmapPage() {
  return (
    <>
      <SchemaMarkup type="breadcrumb" breadcrumbs={breadcrumbs} />
      <SchemaMarkup
        type="article"
        article={{
          title,
          description,
          datePublished: publishedAt,
          url: `${siteUrl}/blog/${slug}`,
        }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <article className="py-12">
        <div className="container-content max-w-3xl">
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-sm text-slate-400 list-none p-0 m-0">
              <li>
                <Link href="/" className="hover:text-primary-600 transition-colors">
                  Home
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/blog" className="hover:text-primary-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-700 font-medium">Application Guide</li>
            </ol>
          </nav>

          {/* Header */}
          <div className="mb-8">
            <span className="text-xs font-semibold bg-emerald-50 text-emerald-700 px-2.5 py-1 rounded-full">
              Comprehensive Guide
            </span>
            <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mt-4 mb-3">
              {title}
            </h1>
            <p className="text-slate-500 text-lg leading-relaxed">{description}</p>
            <div className="flex items-center gap-2 text-sm text-slate-400 mt-4">
              <time dateTime={publishedAt}>February 24, 2025</time>
              <span>·</span>
              <span>10 min read</span>
            </div>
          </div>

          {/* Table of Contents Banner */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl p-5 mb-8">
            <h2 className="text-base font-bold text-slate-800 mb-2">In this guide:</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-primary-700">
              <li><a href="#roadmap" className="hover:underline">1. The 8-Step Application Roadmap</a></li>
              <li><a href="#documents" className="hover:underline">2. Full Document Checklist</a></li>
              <li><a href="#uni-assist-uploads" className="hover:underline">3. Uni-Assist Upload Organization</a></li>
              <li><a href="#timelines" className="hover:underline">4. Semester Timelines & Deadlines</a></li>
              <li><a href="#course-shortlist" className="hover:underline">5. How to Shortlist Courses</a></li>
              <li><a href="#faq" className="hover:underline">6. Frequently Asked Questions</a></li>
            </ul>
          </div>

          {/* Content */}
          <div className="prose prose-slate max-w-none text-slate-700 leading-relaxed space-y-8">
            <section id="roadmap">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                1. The 8-Step Application Roadmap for Germany
              </h2>
              <p>
                Navigating the German university admission route requires a methodical sequence. Following
                a structured step-by-step roadmap prevents missed deadlines and last-minute document rushes:
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 my-6 not-prose">
                {[
                  { step: "01", title: "Prepare Documents", desc: "Attest certificates, prepare syllabus/module catalog, request grading scale certificates, and take IELTS/MOI." },
                  { step: "02", title: "Find Suitable Courses", desc: "Filter programs via DAAD Course Finder, checking ECTS prerequisites, German requirements, and VPD terms." },
                  { step: "03", title: "Choose Application Route", desc: "Identify whether the university requires Direct application (Hochschulstart / university portal) or Uni-Assist VPD." },
                  { step: "04", title: "Submit Application / VPD", desc: "Create your Uni-Assist account, pay evaluation fees, and upload documents with standardized filenames." },
                  { step: "05", title: "Track Missing Documents", desc: "Regularly check email and the Uni-Assist portal for deficiency notifications before the deadline." },
                  { step: "06", title: "Receive Offer & Enroll", desc: "Accept admission offer (Zulassungsbescheid) and pay semester contribution (Semesterbeitrag)." },
                  { step: "07", title: "Prepare Visa File", desc: "Open blocked account (Sperrkonto), health insurance, housing verification, and motivation letter." },
                  { step: "08", title: "Book VFS Slot & Attend", desc: "Submit your student visa application at VFS Global Dhaka / German Embassy." },
                ].map((item) => (
                  <div key={item.step} className="p-4 rounded-xl border border-slate-200 bg-white hover:border-primary-400 transition-colors shadow-sm">
                    <span className="text-xs font-bold px-2 py-0.5 rounded bg-primary-100 text-primary-800">Step {item.step}</span>
                    <h3 className="font-bold text-slate-900 mt-2 text-base">{item.title}</h3>
                    <p className="text-xs text-slate-500 mt-1 leading-normal">{item.desc}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="documents">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                2. Complete Document Checklist for Bangladeshi Applicants
              </h2>

              <h3 className="text-lg font-semibold text-slate-800 mt-4 mb-2">A. School-Level Documents</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><strong>Higher Secondary Certificate (HSC) Certificate &amp; Transcript:</strong> Mandatory as the formal university entrance qualification (Abitur equivalent).</li>
                <li><strong>Secondary School Certificate (SSC) Certificate &amp; Transcript:</strong> Optional supporting records, but recommended to keep on hand.</li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-2">B. Bachelor’s Academic Documents</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><strong>Bachelor’s Certificate:</strong> Original or provisional certificate issued by your university.</li>
                <li><strong>Bachelor’s Academic Transcript:</strong> Complete semester-wise grades and credits.</li>
                <li>
                  <strong>Minimum Passing Grade Certificate:</strong> If your transcript does not explicitly display the minimum grade required to pass (e.g. 2.0 or 2.5 on a 4.0 scale), obtain a signed &amp; sealed letter from your Registrar.
                </li>
                <li>
                  <strong>Course Curriculum / Module Handbook:</strong> An official course syllabus or module catalog detailing course descriptions and contact hours/credits. This is critical for assessing credit equivalence (ECTS).
                </li>
              </ul>

              <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-2">C. Language &amp; Profile Documents</h3>
              <ul className="list-disc pl-5 space-y-1 text-sm">
                <li><strong>Language Proficiency:</strong> IELTS Academic (usually 6.5 minimum) or Medium of Instruction (MOI) Certificate if allowed by the program.</li>
                <li><strong>Europass CV:</strong> Standard chronological format formatted in PDF without empty gaps.</li>
                <li><strong>Letter of Motivation (LOM):</strong> Course-specific statement written in PDF (never upload Word documents).</li>
                <li><strong>Letters of Recommendation (LOR):</strong> 2–3 academic or professional recommendations on official letterheads.</li>
                <li><strong>Passport Data Page:</strong> Clear, color scan of your valid passport page.</li>
                <li><strong>Experience / Extracurriculars:</strong> Internship certificates, full-time work experience letters, published research papers, or thesis copies (if available).</li>
              </ul>
            </section>

            <section id="uni-assist-uploads">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                3. Uni-Assist: Where &amp; How to Upload Your Documents
              </h2>
              <p>
                When uploading to the Uni-Assist portal, proper categorization and professional file naming
                prevent evaluation delays. Use the following standard mapping:
              </p>

              <div className="overflow-x-auto not-prose my-6">
                <table className="w-full text-left text-sm border border-slate-200 rounded-lg overflow-hidden">
                  <thead className="bg-slate-100 text-slate-700 font-semibold text-xs uppercase tracking-wider">
                    <tr>
                      <th className="p-3 border-b">Portal Category</th>
                      <th className="p-3 border-b">Document Type</th>
                      <th className="p-3 border-b">Recommended File Naming</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="p-3 font-medium text-slate-900">CV</td>
                      <td className="p-3">Europass CV (PDF)</td>
                      <td className="p-3 font-mono text-xs text-primary-700">Europass_CV_YourName.pdf</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Language Certificate</td>
                      <td className="p-3">IELTS TRF or MOI Certificate</td>
                      <td className="p-3 font-mono text-xs text-primary-700">IELTS_Certificate_YourName.pdf</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Letter of Motivation</td>
                      <td className="p-3">Course-specific LOM</td>
                      <td className="p-3 font-mono text-xs text-primary-700">LOM_CourseName_UniversityName.pdf</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Passport</td>
                      <td className="p-3">Passport data page</td>
                      <td className="p-3 font-mono text-xs text-primary-700">Passport_Data_Page_YourName.pdf</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">School Certificate</td>
                      <td className="p-3">HSC Certificate &amp; Transcript (optional SSC)</td>
                      <td className="p-3 font-mono text-xs text-primary-700">HSC_Certificate_and_Transcript.pdf</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">University Certificate</td>
                      <td className="p-3">Bachelor Transcript, Degree &amp; Passing Scale</td>
                      <td className="p-3 font-mono text-xs text-primary-700">Bachelors_Transcript_and_Certificate.pdf</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Work Experience / Internship</td>
                      <td className="p-3">Experience letters &amp; internship proofs</td>
                      <td className="p-3 font-mono text-xs text-primary-700">Work_Experience_CompanyName.pdf</td>
                    </tr>
                    <tr>
                      <td className="p-3 font-medium text-slate-900">Work Sample / Others</td>
                      <td className="p-3">Thesis, syllabus, research papers, LORs</td>
                      <td className="p-3 font-mono text-xs text-primary-700">Bachelors_Course_Syllabus.pdf</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section id="timelines">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                4. Semester Timelines &amp; When to Start
              </h2>
              <p>
                German universities run on two main intakes: <strong>Winter Semester</strong> (main intake)
                and <strong>Summer Semester</strong> (secondary intake).
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/50">
                  <span className="text-xs font-bold text-blue-700 uppercase tracking-wider">Main Intake</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 mb-3">Winter Semester</h3>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li><strong>Application Window:</strong> April to July (some open as early as March 15)</li>
                    <li><strong>Typical Deadlines:</strong> June 15 or July 15</li>
                    <li><strong>Classes Begin:</strong> Mid-October</li>
                    <li><strong>VPD Application Time:</strong> April or May (at least 6-8 weeks prior)</li>
                  </ul>
                </div>

                <div className="p-5 rounded-xl border border-amber-200 bg-amber-50/50">
                  <span className="text-xs font-bold text-amber-700 uppercase tracking-wider">Secondary Intake</span>
                  <h3 className="text-lg font-bold text-slate-900 mt-1 mb-3">Summer Semester</h3>
                  <ul className="text-xs text-slate-600 space-y-1.5">
                    <li><strong>Application Window:</strong> October to January</li>
                    <li><strong>Typical Deadlines:</strong> November 15, December 15, or January 15</li>
                    <li><strong>Classes Begin:</strong> Mid-April</li>
                    <li><strong>VPD Application Time:</strong> October to November</li>
                  </ul>
                </div>
              </div>

              <h3 className="text-lg font-semibold text-slate-800 mt-6 mb-2">Milestone Schedule:</h3>
              <ul className="list-disc pl-5 space-y-2 text-sm">
                <li><strong>2–3 months before deadline:</strong> Attest academic records, get syllabus catalog, obtain minimum passing grade certificate, take language tests.</li>
                <li><strong>1–2 months before deadline:</strong> Apply for VPD through Uni-Assist if required by target universities.</li>
                <li><strong>During application window:</strong> Finalize course-specific motivation letters and submit portal applications.</li>
                <li><strong>After admission:</strong> Secure accommodation, arrange the blocked account (Sperrkonto), and schedule the visa appointment immediately.</li>
              </ul>
            </section>

            <section id="course-shortlist">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                5. How to Build Your University Shortlist
              </h2>
              <p>
                Never rely on guesswork when picking universities. Build a tracking spreadsheet capturing:
              </p>
              <ul className="list-disc pl-5 space-y-1.5 text-sm">
                <li><strong>University &amp; City:</strong> Tuition fees (most public universities charge €0 tuition, except Baden-Württemberg at €1,500/semester and some specific Bavarian programs).</li>
                <li><strong>Admission Type:</strong> Restricted (NC - Numerus Clausus) vs. Unrestricted (Zulassungsfrei).</li>
                <li><strong>Application Mode:</strong> Direct university portal vs. Uni-Assist VPD.</li>
                <li><strong>Grade Cutoffs:</strong> Calculate your exact converted German grade using our{" "}
                  <Link href="/" className="text-primary-600 font-semibold underline hover:text-primary-800">
                    Bavarian Formula VPD Calculator
                  </Link>{" "}
                  before selecting programs that require a 2.5 or better.
                </li>
                <li><strong>Language Criteria:</strong> Check if English MOI is permitted or if an IELTS score (6.5 / 7.0) is strictly mandated.</li>
              </ul>
            </section>

            {/* CTA Box */}
            <div className="not-prose my-10 p-6 rounded-2xl bg-gradient-to-r from-primary-900 to-slate-900 text-white shadow-xl">
              <h3 className="text-xl font-bold mb-2">Check Your German Grade Eligibility</h3>
              <p className="text-sm text-slate-300 mb-4 leading-relaxed">
                Before applying for Uni-Assist VPD or shortlisting German universities, determine your exact
                grade conversion with our free, official Modified Bavarian Formula calculator.
              </p>
              <Link
                href="/calculator"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary-500 hover:bg-primary-400 font-semibold text-white transition-colors text-sm shadow-md"
              >
                Open German VPD Calculator →
              </Link>
            </div>

            <section id="faq">
              <h2 className="text-2xl font-bold text-slate-900 mb-4">
                6. Frequently Asked Questions
              </h2>
              <div className="space-y-4 not-prose">
                {faqSchema.mainEntity.map((item, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-xl p-4 bg-white">
                    <h3 className="font-semibold text-slate-900 text-base mb-1.5">{item.name}</h3>
                    <p className="text-sm text-slate-600 leading-relaxed">{item.acceptedAnswer.text}</p>
                  </div>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>
    </>
  );
}
