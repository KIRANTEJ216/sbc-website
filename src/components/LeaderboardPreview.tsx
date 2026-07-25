import ScrollReveal from "./ScrollReveal";
import StaggerReveal from "./StaggerReveal";

interface RankMedalProps {
  rank: number;
}

function RankMedal({ rank }: RankMedalProps) {
  const cls =
    rank === 1 ? "gold" : rank === 2 ? "silver" : rank === 3 ? "bronze" : "default";
  return (
    <span className={`rank-medal ${cls}`}>
      {rank <= 3 ? ["🥇", "🥈", "🥉"][rank - 1] : `#${rank}`}
    </span>
  );
}

const members = [
  { company: "TechNova Solutions", owner: "Rajesh Kumar", revenue: "₹12,50,000" },
  { company: "GreenLeaf Ventures", owner: "Anita Sharma", revenue: "₹8,75,000" },
  { company: "Pinnacle Media", owner: "Vikram Patel", revenue: "₹6,20,000" },
  { company: "SwiftLogistics", owner: "Priya Singh", revenue: "₹4,95,000" },
  { company: "CloudBase Tech", owner: "Arun Nair", revenue: "₹3,80,000" },
];

export default function LeaderboardPreview() {
  return (
    <section id="leaderboard" className="py-24 sm:py-32 px-4 bg-premium-warm">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-12">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl gradient-text mb-4">
              Top Performers
            </h2>
            <p className="text-steel text-lg">
              Our highest-earning members this quarter
            </p>
          </div>
        </ScrollReveal>

        <div className="bg-surface border border-border rounded-[1rem] overflow-hidden">
          <StaggerReveal>
            {members.map((m, i) => (
              <div
                key={m.company}
                className={`flex items-center gap-4 px-5 py-4 ${
                  i < members.length - 1 ? "border-b border-border" : ""
                } ${
                  i < 3 ? "gradient-border" : ""
                } hover:bg-muted-bg/50 transition-colors cursor-default`}
              >
                <RankMedal rank={i + 1} />
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-sm shrink-0">
                  {m.company.charAt(0)}
                </div>
                <div className="min-w-0 flex-1">
                  <div className="font-heading font-semibold text-sm text-charcoal truncate">
                    {m.company}
                  </div>
                  <div className="text-xs text-muted truncate">{m.owner}</div>
                </div>
                <div className="font-heading font-bold text-sm gradient-accent-text">
                  {m.revenue}
                </div>
              </div>
            ))}
          </StaggerReveal>
        </div>

        <ScrollReveal>
          <div className="text-center mt-8">
            <a
              href="#"
              className="text-sm font-semibold text-primary hover:text-primary-hover transition-colors inline-flex items-center gap-1"
            >
              View Full Directory
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
