import { Target, Brain, Calendar, TrendingUp, ArrowUpRight } from "lucide-react";
import { cn } from "@/lib/utils";

const steps = [
  {
    number: "01",
    icon: Target,
    title: "Market Intelligence & Targeting",
    description: "We analyze 47+ data points to identify high-intent homeowners in your service area.",
    className: "md:col-span-2", // Spans 2 columns
    gradient: "from-blue-500/20 via-indigo-500/10 to-transparent",
  },
  {
    number: "02",
    icon: Brain,
    title: "AI-Powered Pre-Qualification",
    description: "Our proprietary AI conducts 12-point qualification calls before they ever reach your calendar.",
    className: "md:col-span-1", // Spans 1 column
    gradient: "from-purple-500/20 via-pink-500/10 to-transparent",
  },
  {
    number: "03",
    icon: Calendar,
    title: "Exclusive Territory Scheduling",
    description: "Qualified prospects book directly into your team's calendar. No sharing, no competition.",
    className: "md:col-span-1", // Spans 1 column
    gradient: "from-emerald-500/20 via-teal-500/10 to-transparent",
  },
  {
    number: "04",
    icon: TrendingUp,
    title: "Local Authority Amplification",
    description: "We make you the obvious choice in your market, boosting close rates by 34%.",
    className: "md:col-span-2", // Spans 2 columns
    gradient: "from-orange-500/20 via-amber-500/10 to-transparent",
  },
];

const SystemProcess = () => {
  return (
    <section id="system-process" className="py-24 px-6 relative overflow-hidden bg-background">
      {/* Ambient Background Glows */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[128px] pointer-events-none" />

      <div className="container relative z-10 max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-16 md:mb-24 max-w-3xl">
          <h2 className="text-4xl md:text-7xl font-bold tracking-tight mb-6">
            The <span className="gradient-text">System</span>
          </h2>
          <p className="text-xl text-muted-foreground leading-relaxed max-w-xl">
            How We Deliver Premium Appointments. A completely done-for-you infrastructure designed for speed and scale.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className={cn(
                  "group relative overflow-hidden rounded-3xl border border-white/10 bg-card/30 backdrop-blur-sm transition-all duration-500 hover:border-white/20 hover:bg-card/40 hover:shadow-2xl hover:shadow-primary/5",
                  step.className,
                )}
              >
                {/* Internal Gradient Highlight */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-br pointer-events-none",
                    step.gradient,
                  )}
                />

                <div className="relative h-full flex flex-col justify-between p-8 md:p-10 min-h-[320px]">
                  {/* Top Section: Icon & Number */}
                  <div className="flex justify-between items-start mb-8">
                    <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                      <Icon className="w-6 h-6 text-foreground/80" />
                    </div>
                    <span className="text-sm font-mono text-muted-foreground/50 tracking-widest">{step.number}</span>
                  </div>

                  {/* Abstract Visual Decorations based on index to mimic screenshots */}
                  <div className="absolute right-0 top-0 w-full h-full pointer-events-none overflow-hidden">
                    {/* Visual for Card 01 (Targeting) */}
                    {index === 0 && (
                      <div className="absolute -right-12 -top-12 w-64 h-64 border border-white/5 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-700">
                        <div className="w-48 h-48 border border-white/5 rounded-full flex items-center justify-center">
                          <div className="w-32 h-32 bg-primary/5 rounded-full blur-2xl" />
                        </div>
                      </div>
                    )}

                    {/* Visual for Card 03 (Calendar) */}
                    {index === 2 && (
                      <div className="absolute right-8 top-8 opacity-20 group-hover:opacity-40 transition-opacity">
                        <div className="flex gap-2">
                          <div className="w-2 h-2 rounded-full bg-foreground" />
                          <div className="w-2 h-2 rounded-full bg-foreground" />
                          <div className="w-2 h-2 rounded-full bg-foreground" />
                        </div>
                      </div>
                    )}

                    {/* Visual for Card 04 (Growth) */}
                    {index === 3 && (
                      <div className="absolute right-0 bottom-0 w-1/2 h-full opacity-[0.03] group-hover:opacity-[0.07] transition-opacity">
                        <svg viewBox="0 0 200 100" className="w-full h-full">
                          <path
                            d="M0 100 C 50 100, 50 20, 100 20 S 150 80, 200 0"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                          />
                        </svg>
                      </div>
                    )}
                  </div>

                  {/* Content Section */}
                  <div className="relative z-10">
                    <h3 className="text-2xl md:text-3xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                      {step.title}
                    </h3>
                    <p className="text-muted-foreground text-base md:text-lg leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                      {step.description}
                    </p>
                  </div>

                  {/* Corner Action Icon */}
                  <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-500">
                    <ArrowUpRight className="w-6 h-6 text-primary" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SystemProcess;
