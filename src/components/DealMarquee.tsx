const deals = [
  { from: "TechNova Solutions", to: "BuildRight Constructions", amount: "₹85,000" },
  { from: "GreenLeaf Ventures", to: "FreshCart Grocers", amount: "₹1,20,000" },
  { from: "Pinnacle Media", to: "Apex Digital", amount: "₹45,000" },
  { from: "SwiftLogistics", to: "UrbanBrew Cafe", amount: "₹2,10,000" },
  { from: "CloudBase Tech", to: "EduPrime Academy", amount: "₹95,000" },
  { from: "Heritage Interiors", to: "Luxe Stays Hospitality", amount: "₹3,50,000" },
  { from: "Zenith Insurance", to: "MediCore Labs", amount: "₹65,000" },
  { from: "Stellar Payments", to: "ShopLocal India", amount: "₹1,75,000" },
];

export default function DealMarquee() {
  return (
    <section className="py-12 bg-premium-warm border-y border-border overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 mb-6">
        <p className="text-center font-heading font-bold text-xl sm:text-2xl text-charcoal">
          <span className="gradient-accent-text">₹4.2 Crore+</span> Total Business Value Generated
        </p>
      </div>
      <div className="marquee-bounce flex gap-6 w-max">
        {[...deals, ...deals].map((deal, i) => (
          <div
            key={i}
            className="flex items-center gap-3 bg-surface border border-border rounded-full px-5 py-2.5 whitespace-nowrap shrink-0"
          >
            <span className="text-sm font-medium text-charcoal">{deal.from}</span>
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-primary shrink-0">
              <path d="M1 8h14M9 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span className="text-sm text-steel">{deal.to}</span>
            <span className="w-1 h-1 rounded-full bg-muted" />
            <span className="text-sm font-semibold text-accent">{deal.amount}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
