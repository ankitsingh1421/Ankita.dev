import { Card } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      role: "Bachelor's in Computer Science",
      company: "DAV institute of engineering and technology",
      period: "2022 - 2025",
      description: [
        " consistently performing well across five semesters",
        "Strengthened technical foundation in computer science while developing problem-solving and analytical skills",
        "Balanced academic excellence with personal growth, enhancing adaptability and teamwork abilities",
        "Prepared for real-world challenges through collaborative projects and hands-on learning experiences",
      ],
    },
    // {
    //   role: "Web Development Intern",
    //   company: "Teachnook",
    //   period: "June 2024 - July 2024",
    //   description: [
    //     "Gained practical experience in modern web development technologies and frameworks",
    //     "Collaborated with team members to deliver client projects within tight deadlines",
    //     "Applied theoretical knowledge to real-world scenarios, enhancing problem-solving skills",
    //   ],
    // },
    {
      role: "Higher Secondary Education (12th Grade)",
      company: "Shiv jyoti public school , jalandhar",
      period: "2020 - 2022",
      description: [
        "Developed critical thinking and analytical abilities through rigorous academic curriculum",
        "Actively participated in extracurricular activities, cultivating leadership and teamwork skills",
      ],
    },
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-fall bg-clip-text text-transparent">Experience</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            My professional journey and contributions
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-fall hidden md:block"></div>

            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative">
                  {/* Timeline Dot */}
                  <div className="absolute left-8 top-8 w-4 h-4 rounded-full bg-primary border-4 border-background -translate-x-[7px] hidden md:block"></div>

                  <Card className="md:ml-20 p-6 hover:shadow-warm transition-smooth bg-card border-border/50 hover:border-primary/30">
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                      <div>
                        <h3 className="font-display text-2xl font-semibold mb-1">
                          {exp.role}
                        </h3>
                        <div className="flex items-center gap-2 text-primary font-medium">
                          <Briefcase className="w-4 h-4" />
                          <span>{exp.company}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-muted-foreground mt-2 md:mt-0">
                        <Calendar className="w-4 h-4" />
                        <span className="text-sm">{exp.period}</span>
                      </div>
                    </div>

                    <ul className="space-y-2 text-muted-foreground">
                      {exp.description.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex gap-2">
                          <span className="text-primary mt-1.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
