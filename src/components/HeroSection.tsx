import { Button } from "@/components/ui/button";
import { ArrowRight, Play } from "lucide-react";
import dashboardPreview from "@/assets/dashboard-preview.png";

export function HeroSection() {
  return (
    <section className="relative pt-24 lg:pt-32 pb-16 lg:pb-24 gradient-hero overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
          {/* Left Content */}
          <div className="max-w-xl animate-fade-up">
            <span className="inline-block px-4 py-1.5 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-6">
              #1 Document Management Solution
            </span>

            <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground leading-tight mb-6">
              Document chaos is real.{" "}
              <span className="text-primary">We fix it.</span>
            </h1>

            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Seamlessly integrated with{" "}
              <strong className="text-primary">mlean mPS</strong>, our software
              streamlines your entire document workflow—from creation to
              compliance—
              <strong className="text-foreground">
                {" "}
                reducing manual work
              </strong>{" "}
              and{" "}
              <strong className="text-foreground">
                eliminating version confusion
              </strong>
              .
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="xl" className="group">
                Log In
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              {/* <Button variant="heroOutline" size="xl" className="group">
                <Play className="w-5 h-5" />
                Watch Video
              </Button> */}
            </div>

            {/* Trust badge */}
            <div className="mt-8 flex items-center gap-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-10 h-10 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-xs font-semibold text-secondary-foreground"
                  >
                    {String.fromCharCode(64 + i)}
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <span className="font-semibold text-foreground">500+</span>
                <span className="text-muted-foreground">
                  {" "}
                  companies trust SmartDocs Pro
                </span>
              </div>
            </div>
          </div>

          {/* Right Content - Dashboard Preview */}
          <div className="relative animate-slide-in-right animation-delay-200">
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-primary/10 rounded-2xl blur-2xl transform scale-95" />

              {/* Dashboard image */}
              <div className="relative rounded-2xl overflow-hidden shadow-elevated border border-border/50 bg-card">
                <img
                  src={dashboardPreview}
                  alt="SmartDocs Pro Dashboard - Document management interface showing folder structure, document grid view, and collaboration features"
                  className="w-full h-auto"
                />
              </div>

              {/* Floating card */}
              <div className="absolute -bottom-6 -left-6 bg-card rounded-xl shadow-card border border-border/50 p-4 animate-float">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-chart-2/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-chart-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">
                      98% Compliance
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Audit-ready documents
                    </p>
                  </div>
                </div>
              </div>

              {/* Second floating card */}
              <div className="absolute -top-4 -right-4 bg-card rounded-xl shadow-card border border-border/50 p-4 animate-float animation-delay-400">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-accent"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
                    </svg>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">3x Faster</p>
                    <p className="text-sm text-muted-foreground">
                      Document processing
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
