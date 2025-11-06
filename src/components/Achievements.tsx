import { Card } from "@/components/ui/card";
import { Trophy, Target } from "lucide-react";

const Achievements = () => {
  const competitions = [
    {
      title: "Certificate of Merit",
      description: "Recognized for outstanding academic performance and dedication at Vellore Institute of Technology.",
      year: "2022-2024",
    },
    {
      title: "CGPA of 9.58",
      description: "Achieved exceptional academic excellence throughout the computer science program at VIT Vellore.",
      year: "2022-2025",
    },
    {
      title: "2nd Runner Up - Poster Designing Competition",
      description: "Secured 3rd place among 50+ participants in a university-level poster designing contest, showcasing creativity and design skills at LPU.",
      year: "2025",
    },
    {
      title: "Certificate of Excellence - Hackathon101",
      description: "Awarded for innovative solutions and teamwork during the Hackathon101 event organized by LPU .",
      year: "2025",
    },
  ];

  const achievements = [
    {
      title: "Academic Excellence",
      description: "Maintained consistently high grades throughout education from 10th grade to bachelor's degree",
    },
    {
      title: "Well-Rounded Development",
      description: "Cultivated strong ethical foundation and personal growth through active participation in extracurricular activities",
    },
    {
      title: "Multilingual Proficiency",
      description: "Fluent in Tamil (First Language), Advanced English (C1), and Intermediate Hindi (B1)",
    },
    {
      title: "Creative Pursuits",
      description: "Passionate about painting, poster designing, music, dancing, reading, and gardening.",
    },
  ];

  return (
    <section id="achievements" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-fall bg-clip-text text-transparent">
              Competitions & Achievements
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Recognition and milestones in my journey
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Competitions */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Trophy className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Competitions</h3>
            </div>
            <div className="space-y-4">
              {competitions.map((comp, index) => (
                <Card
                  key={index}
                  className="p-5 hover:shadow-warm transition-smooth bg-card border-border/50 hover:border-primary/30"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h4 className="font-semibold text-lg flex-1">{comp.title}</h4>
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {comp.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground text-sm">{comp.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <Target className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Other Achievements</h3>
            </div>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="p-5 hover:shadow-warm transition-smooth bg-card border-border/50 hover:border-primary/30"
                >
                  <h4 className="font-semibold text-lg mb-2">{achievement.title}</h4>
                  <p className="text-muted-foreground text-sm">{achievement.description}</p>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Achievements;
