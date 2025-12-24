import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import solutionIllustration from "@/assets/solution-illustration.png";

export function SolutionSection() {
  return (
    <section id="solution" className="py-20 lg:py-32 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <div className="order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/5 rounded-3xl transform rotate-3" />
              <img
                src={solutionIllustration}
                alt="Document workflow automation illustration showing connected document nodes and automated processes"
                className="relative rounded-2xl shadow-card w-full"
              />
            </div>
          </div>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <span className="inline-block px-4 py-1.5 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-6">
              Our Solution
            </span>

            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-6">
              Powered by <span className="text-primary">mlean mPS</span>{" "}
              integration
            </h2>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              SmartDocs Pro works hand-in-hand with{" "}
              <strong className="text-foreground">mlean mPS</strong> to deliver
              a complete document management solution for lean manufacturing
              environments. From intelligent classification to automated
              workflows and compliance tracking—we handle it all so your team
              can focus on what matters.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                "Automatic version control & audit trails",
                "Role-based access with enterprise security",
                "Seamless integration with existing tools",
                "AI-powered document classification",
              ].map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <div className="mt-1 w-5 h-5 rounded-full bg-chart-2/20 flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-chart-2"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3"
                    >
                      <polyline points="20,6 9,17 4,12" />
                    </svg>
                  </div>
                  <span className="text-foreground">{feature}</span>
                </li>
              ))}
            </ul>

            <Button variant="hero" size="lg" className="group">
              Explore the Platform
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
