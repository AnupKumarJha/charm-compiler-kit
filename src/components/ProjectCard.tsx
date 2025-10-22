import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

interface ProjectCardProps {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  delay?: number;
}

const ProjectCard = ({ id, icon, title, description, tags, delay = 0 }: ProjectCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/project/${id}`);
  };

  return (
    <Card
      className="group relative overflow-hidden border-border bg-card hover:border-primary/50 transition-all duration-300 hover:shadow-glow animate-fade-in-up cursor-pointer"
      style={{ animationDelay: `${delay}ms` }}
      onClick={handleClick}
    >
      <div className="absolute inset-0 gradient-card opacity-50 group-hover:opacity-100 transition-opacity duration-300" />
      
      <div className="relative p-8 space-y-4">
        <div className="w-20 h-20 flex items-center justify-center text-5xl animate-float">
          {icon}
        </div>
        
        <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h3>
        
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag) => (
            <Badge
              key={tag}
              variant="secondary"
              className="bg-secondary/50 text-secondary-foreground border border-border"
            >
              {tag}
            </Badge>
          ))}
        </div>
        
        <div className="flex items-center gap-2 text-primary hover:gap-3 transition-all duration-300 font-medium pt-2">
          Learn More
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Card>
  );
};

export default ProjectCard;
