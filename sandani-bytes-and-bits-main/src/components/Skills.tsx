import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const programmingLanguages = [
    { name: "Java", level: "Advanced" },
    { name: "Python", level: "Advanced" },
    { name: "JavaScript", level: "Intermediate" },
    { name: "HTML", level: "Advanced" },
    { name: "CSS", level: "Advanced" }
  ];

  const currentlyLearning = [
    { name: "TypeScript", status: "In Progress" },
    { name: "MongoDB", status: "In Progress" }
  ];

  const frameworks = [
    "React",
    "Node.js"
  ];

  const tools = [
    "VS Code",
    "IntelliJ IDEA",
    "GitHub"
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Technical Skills
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            <Card className="p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Programming Languages</h3>
              <div className="space-y-3">
                {programmingLanguages.map((lang, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{lang.name}</span>
                    <Badge variant="secondary">{lang.level}</Badge>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Currently Learning</h3>
              <div className="space-y-3">
                {currentlyLearning.map((skill, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <span className="font-medium">{skill.name}</span>
                    <Badge variant="outline" className="border-accent/30 text-accent">
                      {skill.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-primary">Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {frameworks.map((framework, index) => (
                  <Badge key={index} className="bg-primary/10 text-primary border-primary/20">
                    {framework}
                  </Badge>
                ))}
              </div>
            </Card>

            <Card className="p-8 border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
              <h3 className="text-2xl font-semibold mb-6 text-accent">Development Tools</h3>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool, index) => (
                  <Badge key={index} variant="outline" className="border-accent/30 text-accent">
                    {tool}
                  </Badge>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;