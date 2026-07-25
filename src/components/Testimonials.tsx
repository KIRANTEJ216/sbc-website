"use client";

import ScrollReveal from "@/components/ScrollReveal";

const testimonials = [
  {
    name: "Rohan Mehta",
    role: "Founder, TechFlow Solutions",
    content: "Joining this community was the best business decision I made this year. I closed three major deals in my first month alone.",
    rating: 5,
    seed: "testimonial-1",
  },
  {
    name: "Shweta Kapoor",
    role: "CEO, Kapoor Designs",
    content: "The quality of members here is unmatched. Every conversation leads to something meaningful. No time wasted.",
    rating: 5,
    seed: "testimonial-2",
  },
  {
    name: "Arjun Nair",
    role: "Director, Nair Logistics",
    content: "I have been part of many business networks, but none come close to the genuine collaboration I find here.",
    rating: 5,
    seed: "testimonial-3",
  },
  {
    name: "Pooja Verma",
    role: "Partner, Verma Associates",
    content: "The deal room alone is worth the membership. I found my ideal business partner within two weeks.",
    rating: 4,
    seed: "testimonial-4",
  },
  {
    name: "Karan Joshi",
    role: "Founder, Joshi Media",
    content: "Finally a business community that actually delivers on its promises. The referral network is incredible.",
    rating: 5,
    seed: "testimonial-5",
  },
  {
    name: "Divya Singh",
    role: "CEO, Singh Healthcare",
    content: "I was skeptical at first, but the vetting process ensures you are surrounded by serious professionals only.",
    rating: 5,
    seed: "testimonial-6",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <svg
          key={i}
          className={`w-4 h-4 ${i < rating ? "text-gold" : "text-border"}`}
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="relative py-28 sm:py-36 px-4 overflow-hidden border-b border-border/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px]" />

      <div className="relative z-10 max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border/60 bg-surface/50 mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-gold" />
              <span className="text-text-muted text-xs uppercase tracking-widest font-medium">Testimonials</span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4">
              What Our{" "}
              <span className="gradient-gold">Members Say</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-xl mx-auto">
              Real stories from real business owners
            </p>
          </div>
        </ScrollReveal>

        <div className="relative overflow-hidden">
          <div className="flex gap-6 marquee" style={{ width: "max-content" }}>
            {[...testimonials, ...testimonials].map((t, i) => (
              <div
                key={`${t.name}-${i}`}
                className="glass rounded-[1.25rem] p-6 border border-border/60 w-[340px] sm:w-[380px] flex-shrink-0 card-hover-glow transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full overflow-hidden border border-border/60">
                    <img
                      src={`https://picsum.photos/seed/${t.seed}/80/80`}
                      alt={t.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <p className="text-sm font-heading font-semibold text-text-primary">{t.name}</p>
                    <p className="text-text-muted text-xs">{t.role}</p>
                  </div>
                </div>
                <StarRating rating={t.rating} />
                <p className="text-text-secondary text-sm mt-3 leading-relaxed">&ldquo;{t.content}&rdquo;</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}