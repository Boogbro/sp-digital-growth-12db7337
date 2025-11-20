import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { MapPin, Cpu, CalendarCheck, Megaphone, BarChart3, Sparkles, ArrowRight } from "lucide-react";

const features = [
  {
    id: 0,
    icon: MapPin,
    title: "Exclusive Territory",
    description:
      "Own your market completely. We lock your service area so you never face competition from other contractors using our system.",
    // Placeholder for Veo video
    videoUrl: "https://cdn.pixabay.com/video/2020/03/31/34989-406336366_large.mp4",
  },
  {
    id: 1,
    icon: Cpu,
    title: "AI Qualification",
    description:
      "Our proprietary AI conducts 12-point qualification calls, verifying budget, timeline, and authority before they ever reach you.",
    videoUrl: "https://cdn.pixabay.com/video/2023/05/17/163465-827665986_large.mp4",
  },
  {
    id: 2,
    icon: CalendarCheck,
    title: "Calendar Integration",
    description:
      "Qualified appointments flow directly into your team's schedule automatically. Wake up to a booked calendar.",
    videoUrl: "https://cdn.pixabay.com/video/2020/05/11/38355-418798446_large.mp4",
  },
  {
    id: 3,
    icon: Megaphone,
    title: "Local Authority",
    description:
      "We position you as the undisputed market leader using hyper-local targeting and authority amplification.",
    videoUrl: "https://cdn.pixabay.com/video/2019/04/20/22976-331944758_large.mp4",
  },
  {
    id: 4,
    icon: BarChart3,
    title: "Live Analytics",
    description:
      "Real-time dashboards showing appointment quality, show rates, and exact ROI metrics. Know your numbers instantly.",
    videoUrl: "https://cdn.pixabay.com/video/2020/04/16/36166-410634250_large.mp4",
  },
  {
    id: 5,
    icon: Sparkles,
    title: "White-Glove Setup",
    description:
      "Our dedicated onboarding team builds your entire infrastructure and gets you live in 14 days with full technical support.",
    videoUrl: "https://cdn.pixabay.com/video/2020/08/02/46184-447724604_large.mp4",
  },
];

const GrowthInfrastructure = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  // Auto-rotate through features if user isn't interacting (optional)
  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActiveIndex((current) => (current + 1) % features.length);
          return 0;
        }
        return prev + 1;
      });
    }, 50); // Speed of rotation

    return () => clearInterval(timer);
  }, [activeIndex]);

  const handleManualSelect = (index: number) => {
    setActiveIndex(index);
    setProgress(0); // Reset progress on manual click
  };

  return (
    <section id="infrastructure" className="py-24 px-6 relative bg-background overflow-hidden">
      {/* Ambient Background Glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[128px] pointer-events-none" />

      <div className="container max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Column: Interactive List */}
          <div className="lg:col-span-5 flex flex-col space-y-4 md:space-y-8 relative z-10">
            <div className="mb-8">
              <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-4">
                Growth <br />
                <span className="gradient-text">Infrastructure</span>
              </h2>
              <p className="text-muted-foreground text-lg">Select a module to explore the system.</p>
            </div>

            <div className="space-y-2">
              {features.map((feature, index) => {
                const isActive = activeIndex === index;
                return (
                  <div
                    key={feature.id}
                    onMouseEnter={() => handleManualSelect(index)}
                    className={cn(
                      "group cursor-pointer transition-all duration-500 ease-in-out",
                      isActive ? "translate-x-4" : "hover:translate-x-2",
                    )}
                  >
                    <h3
                      className={cn(
                        "text-3xl md:text-5xl font-bold transition-all duration-500",
                        isActive
                          ? "gradient-text opacity-100"
                          : "text-muted-foreground/20 hover:text-muted-foreground/60",
                      )}
                    >
                      {feature.title}
                    </h3>

                    {/* Mobile-only description (shows below title on small screens) */}
                    <div
                      className={cn(
                        "lg:hidden overflow-hidden transition-all duration-500",
                        isActive ? "max-h-40 mt-4 opacity-100" : "max-h-0 opacity-0",
                      )}
                    >
                      <p className="text-sm text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: Visual Preview Area */}
          <div className="lg:col-span-7 relative h-[500px] hidden lg:block">
            <div className="sticky top-24 w-full h-full">
              <div className="relative w-full h-full rounded-3xl overflow-hidden border border-white/10 bg-card/20 backdrop-blur-sm shadow-2xl shadow-black/50">
                {/* Dynamic Content Transition */}
                {features.map((feature, index) => (
                  <div
                    key={feature.id}
                    className={cn(
                      "absolute inset-0 w-full h-full transition-all duration-700 ease-in-out",
                      activeIndex === index ? "opacity-100 scale-100 z-10" : "opacity-0 scale-110 z-0",
                    )}
                  >
                    {/* Video/Image Background */}
                    <div className="absolute inset-0 bg-black">
                      <video
                        src={feature.videoUrl}
                        autoPlay
                        muted
                        loop
                        playsInline
                        className="w-full h-full object-cover opacity-60"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                    </div>

                    {/* Floating Info Card (Overlay) */}
                    <div className="absolute bottom-8 left-8 right-8 p-6 glass rounded-2xl border border-white/10 animate-fade-in-up">
                      <div className="flex items-start gap-4">
                        <div className="p-3 rounded-xl bg-primary/10 border border-primary/20 text-primary">
                          <feature.icon className="w-6 h-6" />
                        </div>
                        <div className="space-y-2">
                          <h4 className="text-xl font-semibold text-foreground">{feature.title}</h4>
                          <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
                        </div>
                        <div className="ml-auto mt-2 opacity-0 group-hover:opacity-100">
                          <ArrowRight className="w-5 h-5 text-primary" />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Loading/Progress Bar at top of card */}
                <div className="absolute top-0 left-0 w-full h-1 bg-white/5">
                  <div
                    className="h-full bg-primary transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GrowthInfrastructure;
