import Link from "next/link";

const quickLinks = [
  { href: "#mission", label: "Mission" },
  { href: "#values", label: "Core Values" },
  { href: "#board", label: "Advisory Board" },
  { href: "#team", label: "Digital Team" },
];

const resources = [
  { href: "#", label: "Member Guidebook" },
  { href: "#", label: "FAQ" },
  { href: "#", label: "Privacy Policy" },
  { href: "#", label: "Terms of Service" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-10">
          <div className="sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5 mb-4">
              <div className="w-9 h-9 rounded-lg bg-accent flex items-center justify-center shadow-glow shrink-0">
                <span className="text-white font-bold text-sm">SB</span>
              </div>
              <span className="font-heading font-bold text-lg text-text-primary">
                SB <span className="text-text-muted font-normal">Connect</span>
              </span>
            </div>
            <p className="text-sm text-text-muted leading-relaxed max-w-xs">
              No Politics Only Business. Join 85+ verified businesses and grow your professional network.
            </p>
            <div className="flex gap-2 mt-5">
              {["LinkedIn", "Twitter", "Instagram", "YouTube"].map((name) => (
                <a
                  key={name}
                  href="#"
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-text-muted hover:bg-accent hover:text-white transition-all duration-200 text-xs font-medium"
                  aria-label={name}
                >
                  {name.charAt(0)}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm text-text-primary mb-4 uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm text-text-primary mb-4 uppercase tracking-wider">
              Resources
            </h4>
            <ul className="space-y-3">
              {resources.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-muted hover:text-accent transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm text-text-primary mb-4 uppercase tracking-wider">
              Contact
            </h4>
            <ul className="space-y-3 text-sm text-text-muted">
              <li>hello@visionarycollective.in</li>
              <li>Bengaluru, Karnataka</li>
              <li>+91 12345 67890</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-sm text-text-primary mb-4 uppercase tracking-wider">
              Join Us
            </h4>
            <p className="text-sm text-text-muted mb-4 leading-relaxed">
              Get early access to India&apos;s most ambitious business community.
            </p>
            <Link
              href="#cta"
              className="inline-flex text-sm font-semibold text-white bg-accent hover:bg-accent-hover px-5 py-2.5 rounded-[0.75rem] transition-all duration-300"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>

      <div className="border-t border-border px-4 py-5">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            No Politics Only Business.
          </p>
          <p className="text-xs text-text-muted">
            Developed by{" "}
            <a
              href="https://flologixautomations.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-accent hover:text-accent-hover transition-colors"
            >
              FloLogixAutomations
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}