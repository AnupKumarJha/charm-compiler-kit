import { Button } from "@/components/ui/button";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-24 border-t border-border">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Let's Build Something Amazing
          </h2>
          
          <p className="text-lg text-muted-foreground">
            Interested in working together? Get in touch.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-6">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
              asChild
            >
              <a href="mailto:contact@anup.dev">
                <Mail className="mr-2 h-5 w-5" />
                Email Me
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:border-primary hover:text-primary"
              asChild
            >
              <a href="https://github.com/AnupKumarJha" target="_blank" rel="noopener noreferrer">
                <Github className="mr-2 h-5 w-5" />
                GitHub
              </a>
            </Button>
            
            <Button
              size="lg"
              variant="outline"
              className="border-border hover:border-primary hover:text-primary"
              asChild
            >
              <a href="https://www.linkedin.com/in/anupkumar11/" target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-5 w-5" />
                LinkedIn
              </a>
            </Button>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-border">
          <p className="text-sm text-muted-foreground">
            © 2025 Anup. All rights reserved.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Contact;
