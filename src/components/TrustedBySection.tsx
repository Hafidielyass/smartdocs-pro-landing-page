const logos = [
  { name: "TechCorp", initials: "TC" },
  { name: "GlobalFinance", initials: "GF" },
  { name: "MediHealth", initials: "MH" },
  { name: "AeroSpace", initials: "AS" },
  { name: "AutoDrive", initials: "AD" },
  { name: "EnergyPlus", initials: "E+" },
];

export function TrustedBySection() {
  return (
    <section className="py-12 lg:py-16 bg-card border-y border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Trusted by <strong className="text-foreground">leading global brands</strong>
        </p>
        
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {logos.map((logo) => (
            <div
              key={logo.name}
              className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
            >
              <div className="w-10 h-10 rounded-lg bg-muted flex items-center justify-center font-bold text-muted-foreground">
                {logo.initials}
              </div>
              <span className="text-lg font-semibold text-muted-foreground">{logo.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
