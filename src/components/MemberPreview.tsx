import ScrollReveal from "./ScrollReveal";
import StaggerReveal from "./StaggerReveal";

const members = [
  { name: "Rajesh Kumar", company: "TechNova Solutions", category: "Technology" },
  { name: "Anita Sharma", company: "GreenLeaf Ventures", category: "Sustainability" },
  { name: "Vikram Patel", company: "Pinnacle Media", category: "Media & PR" },
  { name: "Priya Singh", company: "SwiftLogistics", category: "Logistics" },
];

const categoryColors: Record<string, string> = {
  Technology: "bg-primary-light text-primary",
  Sustainability: "bg-accent-light text-accent",
  "Media & PR": "bg-warning-light text-warning",
  Logistics: "bg-primary-light text-primary",
};

export default function MemberPreview() {
  return (
    <section id="directory" className="py-24 sm:py-32 px-4 bg-premium-warm">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl gradient-text mb-4">
              Our Members
            </h2>
            <p className="text-steel text-lg">
              Connect with verified businesses across industries
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {members.map((m) => (
            <div
              key={m.company}
              className="bg-surface border border-border rounded-[1rem] p-6 text-center transition-all duration-300 card-hover-glow shine cursor-default"
            >
              <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-xl mb-4">
                {m.company.charAt(0)}
              </div>
              <h3 className="font-heading font-semibold text-charcoal mb-0.5">{m.name}</h3>
              <p className="text-sm text-steel mb-3">{m.company}</p>
              <span
                className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${
                  categoryColors[m.category] || "bg-muted-bg text-steel"
                }`}
              >
                {m.category}
              </span>
            </div>
          ))}
        </StaggerReveal>

        <ScrollReveal>
          <div className="text-center mt-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 text-sm font-semibold text-primary hover:text-primary-hover transition-colors"
            >
              Browse Full Directory
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M5 3l4 4-4 4" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
