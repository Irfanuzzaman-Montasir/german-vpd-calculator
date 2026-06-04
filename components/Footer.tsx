import Link from "next/link";

const footerLinks = {
  Tools: [
    { href: "/calculator", label: "VPD Calculator" },
    { href: "/faq", label: "FAQ" },
  ],
  Learn: [
    { href: "/blog/cgpa-to-german-grade", label: "CGPA to German Grade" },
    { href: "/blog/what-is-vpd", label: "What is VPD?" },
    { href: "/blog/what-is-uni-assist", label: "What is Uni Assist?" },
    { href: "/blog/german-grading-system", label: "German Grading System" },
    { href: "/blog/minimum-cgpa-for-germany", label: "CGPA for Germany Masters" },
  ],
  Pages: [
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
    { href: "/blog", label: "Blog" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-900 text-slate-300">
      {/* Ad placeholder — footer banner */}
      <div className="border-b border-slate-800">
        <div className="container-content py-4">
          <div
            className="ad-placeholder bg-slate-800/50 border-slate-700 text-slate-600 min-h-[60px]"
            data-ad-slot="footer-banner"
            aria-hidden="true"
          >
            Advertisement
          </div>
        </div>
      </div>

      <div className="container-content py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 font-bold text-white text-lg mb-3 hover:no-underline">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden="true">
                <rect width="32" height="32" rx="8" fill="#2563EB"/>
                <text x="16" y="22" textAnchor="middle" fill="white" fontSize="14" fontWeight="700" fontFamily="Inter,sans-serif">DE</text>
              </svg>
              German VPD
            </Link>
            <p className="text-sm text-slate-400 leading-relaxed">
              Free German grade calculator for Bangladeshi students. Convert your CGPA instantly using the official Modified Bavarian Formula.
            </p>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {category}
              </h3>
              <ul className="space-y-2 list-none m-0 p-0">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors hover:no-underline"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {currentYear} German VPD Calculator. All rights reserved.</p>
          <p>
            This tool is for informational purposes only. Always verify with{" "}
            <a
              href="https://www.uni-assist.de"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors"
            >
              Uni Assist
            </a>{" "}
            for official results.
          </p>
        </div>
      </div>
    </footer>
  );
}
