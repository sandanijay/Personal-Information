import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-background to-accent/10 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent animate-fade-in">
            Sandani Jayawardhana
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-4 animate-fade-in-delay-1">
            Computer Science Student & Cybersecurity Enthusiast
          </p>
          <p className="text-lg text-muted-foreground mb-8 animate-fade-in-delay-2">
            Sabragamuwa University of Sri Lanka
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-delay-3">
            <Button size="lg" className="text-lg px-8 py-3">
              View Projects
            </Button>
            <Button variant="outline" size="lg" className="text-lg px-8 py-3">
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;