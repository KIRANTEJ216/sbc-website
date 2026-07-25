import ScrollReveal from "./ScrollReveal";
import StaggerReveal from "./StaggerReveal";

const features = [
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <line x1="3" y1="9" x2="21" y2="9" />
        <line x1="9" y1="21" x2="9" y2="9" />
      </svg>
    ),
    title: "Business Directory",
    description: "Browse 85+ verified member businesses by category, keyword, or location. Find the right partners for your next deal.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    title: "Requests & Opportunities",
    description: "Post business needs or browse open requests with budgets. Express interest and pitch your services directly.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <path d="M8 12l2 2 4-4" />
      </svg>
    ),
    title: "Deal Matching",
    description: "Express interest in opportunities, pitch your expertise, and close deals within the network. Track your deal revenue.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    title: "Meeting Attendance",
    description: "RSVP to monthly networking meetings with QR code check-in. Track attendance history and stay compliant.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
    title: "Live Leaderboard",
    description: "See top-performing members ranked by deal revenue. Compete, celebrate wins, and grow your reputation.",
  },
  {
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
    title: "Direct Messaging",
    description: "Connect one-on-one with members via built-in chat. Discuss opportunities and build relationships.",
  },
];

export default function Features() {
  return (
    <section id="features" className="py-24 sm:py-32 px-4">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl gradient-text mb-4">
              Built for Business Growth
            </h2>
            <p className="text-steel text-lg max-w-2xl mx-auto">
              Everything you need to network, trade, and grow your business in one platform.
            </p>
          </div>
        </ScrollReveal>

        <StaggerReveal className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((f) => (
            <div
              key={f.title}
              className="group stat-accent-top bg-surface border border-border rounded-[1rem] p-6 transition-all duration-300 card-hover-glow shine cursor-default"
            >
              <div className="w-11 h-11 rounded-lg bg-primary-light text-primary flex items-center justify-center mb-4 group-hover:scale-105 transition-transform duration-200">
                {f.icon}
              </div>
              <h3 className="font-heading font-bold text-lg text-charcoal mb-2">{f.title}</h3>
              <p className="text-sm text-steel leading-relaxed">{f.description}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
