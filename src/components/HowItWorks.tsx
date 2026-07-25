import ScrollReveal from "./ScrollReveal";

const steps = [
  {
    number: 1,
    title: "Create Your Profile",
    description: "Sign up and create your business profile with company details, category, and what you're looking for.",
  },
  {
    number: 2,
    title: "Browse & Connect",
    description: "Explore the directory of verified businesses and find opportunities that match your expertise.",
  },
  {
    number: 3,
    title: "Pitch & Deal",
    description: "Express interest in opportunities, pitch your services, and close business deals within the network.",
  },
  {
    number: 4,
    title: "Grow Together",
    description: "Track your deal revenue on the leaderboard, build your reputation, and grow your network.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 sm:py-32 px-4">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="font-heading font-extrabold text-3xl sm:text-4xl lg:text-5xl gradient-text mb-4">
              How It Works
            </h2>
            <p className="text-steel text-lg max-w-2xl mx-auto">
              Get started in four simple steps
            </p>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, i) => (
            <ScrollReveal key={step.number} threshold={0.2}>
              <div className="text-center relative">
                <div className="w-14 h-14 mx-auto rounded-full bg-gradient-to-br from-[#2A11A6] via-[#B536C5] to-[#552559] flex items-center justify-center mb-5 animate-[gradient-shift_4s_ease_infinite] shadow-btn">
                  <span className="text-white font-bold text-lg">{step.number}</span>
                </div>
                <h3 className="font-heading font-bold text-lg text-charcoal mb-2">{step.title}</h3>
                <p className="text-sm text-steel leading-relaxed max-w-xs mx-auto">{step.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
