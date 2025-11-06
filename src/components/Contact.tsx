import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, Download } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-fall bg-clip-text text-transparent">
                Let's Connect
              </span>
            </h2>
            <p className="text-xl text-muted-foreground">
              Feel free to reach out for collaborations or opportunities
            </p>
          </div>

          <div className="bg-card rounded-2xl p-8 md:p-12 shadow-warm border border-border/50">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div>
                <h3 className="font-semibold text-xl mb-4">Contact Information</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:ankitajoshi4712@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <span>ankitajoshi4712@gmail.com</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/ankita-joshi-03b345337"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Linkedin className="w-5 h-5 text-primary" />
                    </div>
                    <span>LinkedIn Profile</span>
                  </a>
                  {/* <a
                    href="https://github.com/itsKaviya"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-smooth"
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Github className="w-5 h-5 text-primary" />
                    </div>
                    <span>GitHub Profile</span>
                  </a> */}
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="font-semibold text-xl mb-4">Download Resume</h3>
                <p className="text-muted-foreground mb-6">
                  Get a detailed overview of my education, skills, experience, and achievements.
                </p>
                <a
  href="https://drive.google.com/uc?export=download&id=1CWe1r_3nNTm0gdBgyP8w0k2HhS8esJlQ"
  download="ankita_Resume.pdf"
  className="w-full md:w-auto"
>
  Download Resume

                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm transition-smooth w-full md:w-auto"
                  >
                    <Download className="w-5 h-5 mr-2" />
                    Download Resume (PDF)
                  </Button>
                </a>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="text-center text-muted-foreground">
                Open to new opportunities and collaborations. Let's build something amazing together!
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
