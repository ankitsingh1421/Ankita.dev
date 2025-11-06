import { Card } from "@/components/ui/card";
import { Award, BookOpen } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Certified in PYTHON PROGRAMMING",
      issuer: "Webdox Institute",
      date: "october 2024",
    },
    {
      title: "AWS Certified Cloud Practitioner",
      issuer: "Amazon Web Services (AWS)",
      date: "May 2024",
    },
    {
      title: "AMCAT Certified - English comprehension",
      issuer: "Lovely Professional University",
      date: "October 2025",
    },
  ];

  const courses = [
    {
      title: "AWS and Cloud Computing",
      platform: "coursera",
      status: "Completed - June 2024 - July 2024",
    },
    {
      title: "Python Programming ",
      platform: "infosys springboard",
      status: "Completed - June 2023",
    },
  ];

  return (
    <section id="certifications" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-fall bg-clip-text text-transparent">
              Certifications & Courses
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Continuous learning and professional development
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-primary/10">
                <Award className="w-6 h-6 text-primary" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="p-5 hover:shadow-warm transition-smooth bg-card border-border/50 hover:border-primary/30"
                >
                  <h4 className="font-semibold text-lg mb-2">{cert.title}</h4>
                  <p className="text-muted-foreground text-sm">{cert.issuer}</p>
                  <p className="text-primary text-sm font-medium mt-1">{cert.date}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Courses */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 rounded-lg bg-accent/10">
                <BookOpen className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-semibold">Courses</h3>
            </div>
            <div className="space-y-4">
              {courses.map((course, index) => (
                <Card
                  key={index}
                  className="p-5 hover:shadow-warm transition-smooth bg-card border-border/50 hover:border-primary/30"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h4 className="font-semibold text-lg mb-2">{course.title}</h4>
                      <p className="text-muted-foreground text-sm">{course.platform}</p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-medium ${
                        course.status === "Completed"
                          ? "bg-primary/10 text-primary"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {course.status}
                    </span>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
