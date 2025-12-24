const logos = [
  { name: "Ramaqs consulting", initials: "/ramaqs-logo.jpg" },
  { name: "Mlean", initials: "/mlean-logo.png" },
  { name: "Tyutau", initials: "/tyutau-logo.png" },
];

export function TrustedBySection() {
  return (
    <section className="py-12 lg:py-16 bg-card border-y border-border/50">
      <div className="container mx-auto px-4 lg:px-8">
        <p className="text-center text-sm text-muted-foreground mb-8">
          Collaborators —{" "}
          <strong className="text-foreground">
            building better documents together
          </strong>
        </p>

        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-16">
          {logos.map((logo) => {
            const isImage =
              typeof logo.initials === "string" &&
              /\.(png|jpe?g|svg|gif)$/i.test(logo.initials);

            return (
              <div
                key={logo.name}
                className="flex items-center gap-2 opacity-60 hover:opacity-100 transition-opacity"
              >
                <div className="w-10 h-10 rounded-lg bg-muted overflow-hidden flex items-center justify-center">
                  {isImage ? (
                    <img
                      src={logo.initials}
                      alt={logo.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <span className="font-bold text-muted-foreground">
                      {logo.initials}
                    </span>
                  )}
                </div>
                <span className="text-lg font-semibold text-muted-foreground">
                  {logo.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
