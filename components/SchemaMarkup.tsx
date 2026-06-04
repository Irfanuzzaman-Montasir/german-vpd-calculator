interface BreadcrumbItem {
  name: string;
  url: string;
}

interface SchemaMarkupProps {
  type: "website" | "article" | "faq" | "breadcrumb";
  breadcrumbs?: BreadcrumbItem[];
  article?: {
    title: string;
    description: string;
    datePublished: string;
    url: string;
  };
}

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://germanvpd.com";

export default function SchemaMarkup({ type, breadcrumbs, article }: SchemaMarkupProps) {
  const schemas: object[] = [];

  if (type === "website") {
    schemas.push(
      {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "German VPD Calculator",
        url: siteUrl,
        description:
          "Free German VPD Grade Calculator for Bangladeshi students. Convert CGPA to German grades using the Modified Bavarian Formula.",
        sameAs: [],
      },
      {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: "German VPD Calculator",
        url: siteUrl,
        description:
          "Convert your Bangladeshi CGPA to German university grades using the official Modified Bavarian Formula.",
        potentialAction: {
          "@type": "SearchAction",
          target: `${siteUrl}/?q={search_term_string}`,
          "query-input": "required name=search_term_string",
        },
      }
    );
  }

  if (type === "breadcrumb" && breadcrumbs) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: breadcrumbs.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    });
  }

  if (type === "article" && article) {
    schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.description,
      datePublished: article.datePublished,
      url: article.url,
      author: {
        "@type": "Organization",
        name: "German VPD Calculator",
      },
      publisher: {
        "@type": "Organization",
        name: "German VPD Calculator",
        url: siteUrl,
      },
    });
  }

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
