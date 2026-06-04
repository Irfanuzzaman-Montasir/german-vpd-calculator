export interface BlogPost {
  slug: string;
  title: string;
  description: string;
  publishedAt: string;
  readTime: string;
  category: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "cgpa-to-german-grade",
    title: "How to Convert Bangladeshi CGPA to German Grade",
    description:
      "A step-by-step guide to converting your Bangladeshi university CGPA into the German grading system using the Modified Bavarian Formula — the official method used by Uni Assist.",
    publishedAt: "2025-01-15",
    readTime: "6 min read",
    category: "Guide",
  },
  {
    slug: "what-is-vpd",
    title: "What is VPD in Germany?",
    description:
      "Everything Bangladeshi students need to know about VPD (Vorprüfungsdokumentation) — what it is, who needs it, how to get it, and how much it costs.",
    publishedAt: "2025-01-20",
    readTime: "5 min read",
    category: "Explained",
  },
  {
    slug: "what-is-uni-assist",
    title: "What is Uni Assist?",
    description:
      "Uni Assist is the central portal for international students applying to German universities. Learn how it works, which universities use it, and how to submit your application.",
    publishedAt: "2025-02-01",
    readTime: "7 min read",
    category: "Explained",
  },
  {
    slug: "german-grading-system",
    title: "German University Grading System Explained",
    description:
      "Understand Germany's 1–5 grading scale, what each grade means, how it compares to other countries, and what grade you need for a competitive master's application.",
    publishedAt: "2025-02-10",
    readTime: "5 min read",
    category: "Guide",
  },
  {
    slug: "minimum-cgpa-for-germany",
    title: "Minimum CGPA Required for Germany Masters",
    description:
      "What CGPA do you need to get into a German university for a master's degree? We break down requirements by university type, subject area, and program ranking.",
    publishedAt: "2025-02-18",
    readTime: "8 min read",
    category: "Admissions",
  },
];
