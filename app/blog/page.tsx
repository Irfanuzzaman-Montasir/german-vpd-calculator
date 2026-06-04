import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";
import SchemaMarkup from "@/components/SchemaMarkup";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://germanvpd.com";

export const metadata: Metadata = {
  title: "Blog — Guides for Bangladeshi Students Applying to Germany",
  description:
    "In-depth guides about German grades, VPD, Uni Assist, and studying in Germany — written for Bangladeshi students.",
  alternates: { canonical: `${siteUrl}/blog` },
};

const breadcrumbs = [
  { name: "Home", url: siteUrl },
  { name: "Blog", url: `${siteUrl}/blog` },
];

const categoryColor: Record<string, string> = {
  Guide: "bg-blue-50 text-blue-700",
  Explained: "bg-purple-50 text-purple-700",
  Admissions: "bg-emerald-50 text-emerald-700",
};

export default function BlogListPage() {
  return (
    <>
      <SchemaMarkup type="breadcrumb" breadcrumbs={breadcrumbs} />

      <section className="bg-gradient-to-b from-slate-50 to-white border-b border-slate-200 py-10">
        <div className="container-content">
          <nav aria-label="Breadcrumb" className="mb-4">
            <ol className="flex items-center gap-1.5 text-sm text-slate-400 list-none p-0 m-0">
              <li><Link href="/" className="hover:text-primary-600 transition-colors">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li className="text-slate-700 font-medium">Blog</li>
            </ol>
          </nav>
          <h1 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight mb-2">
            Study in Germany — Guides &amp; Resources
          </h1>
          <p className="text-slate-500 text-lg max-w-2xl">
            Everything Bangladeshi students need to know about German grades, VPD, Uni Assist, and university applications.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="container-content">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="card flex flex-col group hover:no-underline"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColor[post.category] || "bg-slate-100 text-slate-600"}`}>
                    {post.category}
                  </span>
                  <div className="flex items-center gap-3 text-xs text-slate-400">
                    <time dateTime={post.publishedAt}>
                      {new Date(post.publishedAt).toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "short",
                        day: "numeric",
                      })}
                    </time>
                    <span>·</span>
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <h2 className="text-slate-900 font-bold text-lg leading-snug group-hover:text-primary-600 transition-colors mb-3">
                  {post.title}
                </h2>

                <p className="text-slate-500 text-sm leading-relaxed flex-1 mb-4">
                  {post.description}
                </p>

                <div className="flex items-center gap-1 text-primary-600 text-sm font-semibold">
                  Read article
                  <svg
                    className="w-4 h-4 transition-transform group-hover:translate-x-1"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
