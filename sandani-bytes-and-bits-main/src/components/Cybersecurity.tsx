import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Cybersecurity = () => {
  const cyberSkills = [
    "Network Security",
    "Ethical Hacking",
    "Vulnerability Assessment",
    "Digital Forensics",
    "Risk Management",
    "Security Protocols",
    "Penetration Testing",
    "Incident Response"
  ];

  const cyberInterests = [
    {
      title: "Threat Analysis",
      description: "Analyzing emerging cyber threats and developing countermeasures"
    },
    {
      title: "Secure Coding",
      description: "Implementing security best practices in software development"
    },
    {
      title: "Privacy Protection",
      description: "Ensuring data privacy and compliance with security standards"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-cyber-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-cyber-grid-pattern opacity-10"></div>
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-cyber-primary to-cyber-secondary bg-clip-text text-transparent">
            Cybersecurity Expertise
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Passionate about securing the digital world through innovative security solutions
          </p>
          
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            <Card className="p-8 border-2 border-cyber-primary/20 hover:border-cyber-primary/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-primary/10">
              <h3 className="text-2xl font-semibold mb-6 text-cyber-primary flex items-center gap-2">
                <span className="w-2 h-2 bg-cyber-primary rounded-full animate-pulse"></span>
                Security Skills
              </h3>
              <div className="flex flex-wrap gap-2">
                {cyberSkills.map((skill, index) => (
                  <Badge key={index} variant="outline" className="border-cyber-primary/30 text-cyber-primary hover:bg-cyber-primary/10">
                    {skill}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-2 border-cyber-secondary/20 hover:border-cyber-secondary/40 transition-all duration-300 hover:shadow-lg hover:shadow-cyber-secondary/10">
              <h3 className="text-2xl font-semibold mb-6 text-cyber-secondary flex items-center gap-2">
                <span className="w-2 h-2 bg-cyber-secondary rounded-full animate-pulse"></span>
                Focus Areas
              </h3>
              <div className="space-y-4">
                {cyberInterests.map((interest, index) => (
                  <div key={index} className="border-l-2 border-cyber-secondary/30 pl-4">
                    <h4 className="font-semibold text-cyber-secondary mb-1">{interest.title}</h4>
                    <p className="text-muted-foreground text-sm">{interest.description}</p>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          <Card className="p-8 border-2 border-cyber-accent/20 hover:border-cyber-accent/40 transition-all duration-300 bg-gradient-to-r from-cyber-accent/5 to-cyber-primary/5">
            <h3 className="text-2xl font-semibold mb-4 text-center text-cyber-accent">Security Philosophy</h3>
            <p className="text-center text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              "In an interconnected world, cybersecurity isn't just about protecting systems—it's about 
              safeguarding trust, privacy, and the digital future we're building together. Every line of 
              code, every security protocol, and every vulnerability assessment contributes to a safer 
              digital ecosystem for everyone."
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Cybersecurity;