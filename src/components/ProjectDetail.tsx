import { useParams, useNavigate } from "react-router-dom";
import { ArrowLeft, ExternalLink, CheckCircle, TrendingUp, Users, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { projects, Project } from "./Projects";

const ProjectDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-muted-foreground mb-8">The project you're looking for doesn't exist.</p>
          <Button onClick={() => navigate("/")} variant="outline">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <div className="border-b border-border">
        <div className="container mx-auto px-6 py-4">
          <Button 
            variant="ghost" 
            onClick={() => navigate("/")}
            className="mb-4"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Projects
          </Button>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Projects</span>
            <span>/</span>
            <span className="text-foreground">{project.title}</span>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-secondary/5" />
        <div className="container mx-auto px-6 relative">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="w-24 h-24 mx-auto flex items-center justify-center text-6xl animate-float">
              {project.icon}
            </div>
            
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                {project.description}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-2">
              {project.tags.map((tag) => (
                <Badge
                  key={tag}
                  variant="secondary"
                  className="bg-secondary/50 text-secondary-foreground border border-border px-4 py-2"
                >
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild={Boolean(project.cta.primaryLink)}
              >
                {project.cta.primaryLink ? (
                  <a href={project.cta.primaryLink} target="_blank" rel="noopener noreferrer">
                    {project.cta.primary}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                ) : (
                  <>
                    {project.cta.primary}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild={Boolean(project.cta.secondaryLink)}
              >
                {project.cta.secondaryLink ? (
                  <a href={project.cta.secondaryLink} target="_blank" rel="noopener noreferrer">
                    {project.cta.secondary}
                  </a>
                ) : (
                  project.cta.secondary
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
            <Card className="p-8 border-border bg-card">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-destructive/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h3 className="text-2xl font-bold">The Problem</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.problem}
                </p>
              </div>
            </Card>

            <Card className="p-8 border-border bg-card">
              <div className="space-y-4">
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">💡</span>
                </div>
                <h3 className="text-2xl font-bold">Our Solution</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {project.solution}
                </p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Impact Metrics */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Measurable Impact</h2>
              <p className="text-muted-foreground">
                Real results from real implementations
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {project.impact.map((metric, index) => (
                <Card key={index} className="p-8 text-center border-border bg-card">
                  <div className="space-y-4">
                    <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-8 w-8 text-primary" />
                    </div>
                    <div className="space-y-2">
                      <div className="text-3xl font-bold text-primary">{metric.value}</div>
                      <div className="text-sm font-medium text-muted-foreground">{metric.metric}</div>
                      <p className="text-sm text-muted-foreground">{metric.description}</p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Key Features</h2>
              <p className="text-muted-foreground">
                Comprehensive capabilities that drive results
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {project.features.map((feature, index) => (
                <Card key={index} className="p-6 border-border bg-card hover:border-primary/50 transition-all duration-300">
                  <div className="flex gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">{feature.icon}</span>
                    </div>
                    <div className="space-y-2">
                      <h3 className="text-lg font-semibold">{feature.title}</h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Technology Stack</h2>
              <p className="text-muted-foreground">
                Built with cutting-edge technologies for maximum performance
              </p>
            </div>

            <div className="space-y-8">
              {project.techStack.map((category, index) => (
                <Card key={index} className="p-6 border-border bg-card">
                  <div className="space-y-4">
                    <h3 className="text-xl font-semibold">{category.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {category.technologies.map((tech) => (
                        <Badge
                          key={tech}
                          variant="outline"
                          className="bg-background border-border"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Case Study */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Case Study</h2>
              <p className="text-muted-foreground">
                Real-world implementation and results
              </p>
            </div>

            <Card className="p-8 border-border bg-card">
              <div className="space-y-8">
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-destructive/10 rounded-full flex items-center justify-center">
                      <span className="text-sm">🚨</span>
                    </div>
                    <h3 className="text-xl font-semibold">Challenge</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-11">
                    {project.caseStudy.challenge}
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                      <span className="text-sm">🎯</span>
                    </div>
                    <h3 className="text-xl font-semibold">Approach</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-11">
                    {project.caseStudy.approach}
                  </p>
                </div>

                <Separator />

                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500/10 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-4 w-4 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold">Results</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-11">
                    {project.caseStudy.results}
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary/10 via-transparent to-secondary/10">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Ready to Get Started?</h2>
              <p className="text-muted-foreground text-lg">
                Transform your business with AI-powered solutions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90"
                asChild={Boolean(project.cta.primaryLink)}
              >
                {project.cta.primaryLink ? (
                  <a href={project.cta.primaryLink} target="_blank" rel="noopener noreferrer">
                    {project.cta.primary}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </a>
                ) : (
                  <>
                    {project.cta.primary}
                    <ExternalLink className="h-4 w-4 ml-2" />
                  </>
                )}
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild={Boolean(project.cta.secondaryLink)}
              >
                {project.cta.secondaryLink ? (
                  <a href={project.cta.secondaryLink} target="_blank" rel="noopener noreferrer">
                    {project.cta.secondary}
                  </a>
                ) : (
                  project.cta.secondary
                )}
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
