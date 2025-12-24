import { FileText, Shield, Zap, Users, Search, BarChart3 } from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Smart Document Control",
    description: "Organize, categorize, and manage all your documents with intelligent automation and AI-powered tagging.",
    color: "primary",
  },
  {
    icon: Shield,
    title: "Compliance & Security",
    description: "Meet regulatory requirements with built-in compliance frameworks, encryption, and comprehensive audit trails.",
    color: "chart-2",
  },
  {
    icon: Zap,
    title: "Workflow Automation",
    description: "Automate approval processes, notifications, and document routing to eliminate manual bottlenecks.",
    color: "accent",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Real-time co-editing, commenting, and version history keep everyone aligned and productive.",
    color: "chart-4",
  },
  {
    icon: Search,
    title: "Powerful Search",
    description: "Find any document instantly with full-text search, metadata filters, and AI-powered semantic search.",
    color: "chart-3",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description: "Track document usage, workflow efficiency, and compliance metrics with detailed dashboards.",
    color: "chart-5",
  },
];

const colorMap: Record<string, string> = {
  primary: "bg-primary/10 text-primary",
  "chart-2": "bg-chart-2/20 text-chart-2",
  accent: "bg-accent/20 text-accent",
  "chart-4": "bg-chart-4/20 text-chart-4",
  "chart-3": "bg-chart-3/20 text-chart-3",
  "chart-5": "bg-chart-5/20 text-chart-5",
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-20 lg:py-32 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block px-4 py-1.5 bg-secondary rounded-full text-sm font-medium text-secondary-foreground mb-6">
            Features
          </span>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-bold text-foreground leading-tight mb-6">
            Everything you need to{" "}
            <span className="text-primary">master your documents</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            A complete toolkit designed to streamline document management, ensure compliance, 
            and boost team productivity.
          </p>
        </div>
        
        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className="group bg-card rounded-2xl p-6 lg:p-8 shadow-soft hover:shadow-card transition-all duration-300 hover:-translate-y-1 border border-border/50"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl ${colorMap[feature.color]} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">
                {feature.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
