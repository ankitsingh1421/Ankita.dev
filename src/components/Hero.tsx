import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";
import profilePhoto from "@/assets/ankita.jpeg";

const Hero = () => {
  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 25% 25%, hsl(var(--primary)) 2px, transparent 2px),
                           radial-gradient(circle at 75% 75%, hsl(var(--accent)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 md:gap-20">
          {/* Profile Image */}
          <div className="relative">
            <div className="absolute inset-0 gradient-fall rounded-full blur-2xl opacity-30 animate-pulse"></div>
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden shadow-warm ring-4 ring-primary/20">
              <img
                src={profilePhoto}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Hero Content */}
          <div className="text-center md:text-left max-w-2xl">
            <div className="inline-block mb-4 px-4 py-2 bg-primary/10 rounded-full">
              <span className="text-primary font-semibold text-sm">Welcome to my portfolio</span>
            </div>
            
            <h1 className="font-display text-5xl md:text-7xl font-bold mb-6 leading-tight">
              <span className="bg-gradient-fall bg-clip-text text-transparent">
                Hello, I'm
              </span>
              <br />
              <span className="text-foreground">Ankita Joshi</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Master student at LPU <br/>
              Aspiring Full-Stack Developer & Cloud Engineer.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8 max-w-xl">
            I'm a motivated Computer Science student driven by curiosity and creativity. My core interests 
            lie in Full-Stack Development and Cloud Computing, where I aim to design innovative, 
            user-friendly solutions that make technology more accessible and visually appealing.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-warm transition-smooth"
                onClick={() => {
                  const element = document.querySelector("#projects");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                View My Work
              </Button>
              
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-smooth"
                onClick={() => {
                  const element = document.querySelector("#contact");
                  element?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Get In Touch
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>
  );
};
export default Hero;