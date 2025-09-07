import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Description of your first project will go here. This showcases your technical skills and problem-solving abilities.",
      technologies: ["Java", "HTML", "CSS"],
      status: "Completed"
    },
    {
      title: "Project 2", 
      description: "Description of your second project will go here. This demonstrates your growth and learning journey.",
      technologies: ["Python", "JavaScript"],
      status: "Completed"
    },
    {
      title: "Project 3",
      description: "Description of your third project will go here. This highlights your diverse skill set and adaptability.",
      technologies: ["React", "Node.js"],
      status: "Completed"
    },
    {
      title: "Project 4",
      description: "Description of your fourth project will go here. This shows your ability to work with modern technologies.",
      technologies: ["TypeScript", "MongoDB"],
      status: "In Progress"
    },
    {
      title: "Project 5",
      description: "Description of your fifth project will go here. This represents your latest work and current focus.",
      technologies: ["Cybersecurity", "Python"],
      status: "Completed"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            Projects Showcase
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Showcasing 5+ completed projects that demonstrate my technical expertise
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="p-6 border-2 border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-lg group">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-semibold text-primary group-hover:text-accent transition-colors">
                    {project.title}
                  </h3>
                  <Badge variant={project.status === "Completed" ? "default" : "outline"}>
                    {project.status}
                  </Badge>
                </div>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                  View Details
                </Button>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">
              Want to see more projects? Check out my GitHub repository
            </p>
            <Button size="lg" className="text-lg px-8 py-3">
              View All Projects on GitHub
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;