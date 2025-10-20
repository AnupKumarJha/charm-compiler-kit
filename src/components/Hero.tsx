import { Button } from "@/components/ui/button";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  const scrollToProjects = () => {
    const element = document.getElementById("projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="space-y-6 animate-fade-in-up">
          <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight">
            Hi, I'm <span className="text-primary">Anup</span>
          </h1>
          
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold gradient-primary bg-clip-text text-transparent">
            AI Engineer & Builder
          </h2>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mt-6">
            Building intelligent systems that bridge AI capabilities with real-world business needs
          </p>
          
          <div className="flex gap-4 justify-center mt-8">
            <Button
              onClick={scrollToProjects}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            >
              View My Work
              <ArrowDown className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
