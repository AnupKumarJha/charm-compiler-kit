import ProjectCard from "./ProjectCard";

const Projects = () => {
  const projects = [
    {
      icon: "🤖",
      title: "Automated Customer Support & Triage System",
      description: "An AI agent that integrates with ticketing platforms to answer customer queries using RAG and intelligently route complex issues to human agents.",
      tags: ["AI Agent", "RAG", "HITL"],
    },
    {
      icon: "🎙️",
      title: "Proactive Voice-Based Lead Qualification Agent",
      description: "A voice-native AI agent that places outbound calls to leads, qualifies them through natural conversation, and schedules meetings automatically.",
      tags: ["Voice AI", "STT/TTS", "Lead Qualification"],
    },
    {
      icon: "📧",
      title: "AI Sales Development Representative (SDR) Agent",
      description: "A multi-step autonomous agent that identifies leads in CRM, performs web research, crafts personalized emails, and logs all activity automatically.",
      tags: ["AI SDR", "LangGraph", "Sales Automation"],
    },
    {
      icon: "📚",
      title: "Intelligent Knowledge Base for Internal Docs",
      description: "A secure, internal Q&A system that ingests company documentation and allows employees to ask complex questions in natural language with cited answers.",
      tags: ["RAG", "Knowledge Base", "Enterprise Search"],
    },
  ];

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Innovative AI solutions built to solve real business challenges
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => (
            <ProjectCard
              key={project.title}
              {...project}
              delay={index * 100}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
