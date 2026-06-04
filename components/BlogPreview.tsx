import Link from "next/link";
import { blogPosts } from "@/data/blog-posts";

const categoryColor: Record<string, string> = {
  Guide: "bg-blue-50 text-blue-700",
  Explained: "bg-purple-50 text-purple-700",
  Admissions: "bg-emerald-50 text-emerald-700",
};

export default function BlogPreview() {
  const featured = blogPosts.slice(0, 3);

  return (
    <section className="py-16 section-surface" id="blog">
      <div className="container-content">
        <h2 className="section-heading">Learn More</h2>
        <p className="section-subheading">
          In-depth guides for Bangladeshi students preparing to apply to German universities.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="card flex flex-col group hover:no-underline"
            >
              {/* Category + read time */}
              <div className="flex items-center justify-between mb-4">
                <span className={`text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColor[post.category] || "bg-slate-100 text-slate-600"}`}>
                  {post.category}
                </span>
                <span className="text-xs text-slate-400">{post.readTime}</span>
              </div>

              {/* Title */}
              <h3 className="text-slate-900 font-bold text-base leading-snug group-hover:text-primary-600 transition-colors flex-1 mb-3">
                {post.title}
              </h3>

              {/* Excerpt */}
              <p className="text-slate-500 text-sm leading-relaxed line-clamp-2 mb-4">
                {post.description}
              </p>

              {/* CTA */}
              <div className="flex items-center gap-1 text-primary-600 text-sm font-semibold mt-auto">
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

        <div className="text-center mt-10">
          <Link href="/blog" className="btn-secondary inline-flex">
            View All Articles
          </Link>
        </div>
      </div>
    </section>
  );
}
