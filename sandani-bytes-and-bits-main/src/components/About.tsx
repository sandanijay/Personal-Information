import { Card } from "@/components/ui/card";

const About = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Card className="p-8 border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Education & Passion</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  Currently pursuing my undergraduate degree in Computer Science at Sabragamuwa University of Sri Lanka. 
                  My journey in technology is driven by an insatiable curiosity and passion for learning.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  As a cybersecurity enthusiast, I'm constantly exploring new ways to protect digital assets and 
                  understand the evolving landscape of cyber threats. I believe in the power of technology to 
                  create positive change in the world.
                </p>
              </Card>
            </div>
            <div>
              <Card className="p-8 border-2 border-accent/20 hover:border-accent/40 transition-all duration-300">
                <h3 className="text-2xl font-semibold mb-4 text-primary">Achievement & Growth</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  I have successfully completed over 5 diverse projects, each teaching me valuable lessons 
                  about software development, problem-solving, and innovation.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Always trying to learn new things and stay updated with the latest technological advancements. 
                  My goal is to become a well-rounded developer with strong cybersecurity expertise.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;