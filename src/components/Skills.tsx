import { Card } from "@/components/ui/card";
import { Code2, Database, Globe, Smartphone, Brain, Wrench } from "lucide-react";

const Skills = () => {
 const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["C++",  "Python",  "PHP"],
    },
    
    {
      icon: Database,
      title: "Databases & Tools",
      skills: ["SQL",  "VS Code"],
    },
    {
      icon: Smartphone,
      title: "Technical Skills",
      skills: ["OOP in C++", "DBMS", "Project Management", "Hardware-Software Integration"],
    },
    {
      icon: Wrench,
      title: "Soft Skills",
      skills: ["Leadership", "Effective Communication", "Critical Thinking", "Project Planning", "Poster Designing"],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-fall bg-clip-text text-transparent">Skills</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and capabilities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <Card
                key={index}
                className="p-6 hover:shadow-warm transition-smooth bg-card border-border/50 hover:border-primary/30"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-primary/10">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg mb-3">{category.title}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 bg-accent/10 text-accent-foreground rounded-full text-sm font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Skills;
