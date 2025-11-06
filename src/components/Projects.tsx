import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Github } from "lucide-react";

const Projects = () => {
  const githubProfile = "https://github.com/itsKaviya";

  const projects = [
   {
  title: "Personal Finance Tracker",
  description:
    "Developed a responsive finance tracking application using modern frontend technologies, featuring interactive dashboards and real-time expense visualization.",
  technologies: ["HTML", "CSS", "JavaScript", "Frontend Development"],
},
{
  title: "Inventory Management System",
  description:
    "Built a full-stack inventory management system to handle stock, suppliers, and transactions efficiently, integrating frontend, backend, and database technologies for seamless operation.",
  technologies: ["React", "Node.js", "Express", "MongoDB", "Full-Stack Development"],
},

    {
  title: "Personal WordPress Website on AWS",
  description:
    "Created and hosted a fully functional WordPress website on AWS EC2 with a custom domain name, ensuring scalability, performance, and secure configuration.",
  technologies: ["WordPress", "AWS EC2", "Domain Hosting", "Web Deployment"],
},

    {
      title: "Travel & Tourism Website with Quiz App",
      description:
        "Created a full-stack travel website with integrated quiz application using HTML, CSS, and JavaScript, deployed on cloud platform with backend functions.",
      technologies: ["HTML", "CSS", "JavaScript", "Cloud Platform"],
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-fall bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcasing my work and the innovative solutions I've built
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card
              key={index}
              className="p-6 hover:shadow-warm transition-smooth bg-card border-border/50 hover:border-primary/30 group"
            >
              <div className="flex items-start justify-between mb-4">
                <h3 className="font-display text-2xl font-semibold group-hover:text-primary transition-smooth">
                  {project.title}
                </h3>
                {/* <div className="flex gap-2">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg hover:bg-primary/10 transition-smooth"
                    aria-label="View on GitHub"
                  >
                    <Github className="w-5 h-5 text-muted-foreground hover:text-primary" />
                  </a>
                </div> */}
              </div>

              <p className="text-muted-foreground mb-4 leading-relaxed">
                {project.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, techIndex) => (
                  <Badge
                    key={techIndex}
                    variant="secondary"
                    className="bg-secondary/20 text-secondary-foreground border-secondary/30"
                  >
                    {tech}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
