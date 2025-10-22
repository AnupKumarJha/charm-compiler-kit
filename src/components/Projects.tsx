import ProjectCard from "./ProjectCard";

export interface Project {
  id: string;
  icon: string;
  title: string;
  description: string;
  tags: string[];
  problem: string;
  solution: string;
  impact: {
    metric: string;
    value: string;
    description: string;
  }[];
  features: {
    title: string;
    description: string;
    icon: string;
  }[];
  techStack: {
    category: string;
    technologies: string[];
  }[];
  caseStudy: {
    challenge: string;
    approach: string;
    results: string;
  };
  cta: {
    primary: string;
    secondary: string;
  };
}

export const projects: Project[] = [
  {
    id: "customer-support-triage",
    icon: "🤖",
    title: "Automated Customer Support & Triage System",
    description: "An AI agent that integrates with ticketing platforms to answer customer queries using RAG and intelligently route complex issues to human agents.",
    tags: ["AI Agent", "RAG", "HITL"],
    problem: "Customer support teams are overwhelmed with repetitive queries, leading to slow response times and frustrated customers.",
    solution: "An intelligent AI agent that automatically handles common inquiries while seamlessly escalating complex issues to human agents.",
    impact: [
      { metric: "Response Time", value: "85%", description: "Faster initial response to customer queries" },
      { metric: "Resolution Rate", value: "92%", description: "Of common issues resolved without human intervention" },
      { metric: "Agent Efficiency", value: "60%", description: "More time for complex problem-solving" }
    ],
    features: [
      {
        title: "Intelligent Query Classification",
        description: "Automatically categorizes incoming tickets and determines appropriate response strategy",
        icon: "🎯"
      },
      {
        title: "RAG-Powered Responses",
        description: "Leverages retrieval-augmented generation for accurate, contextual answers",
        icon: "🧠"
      },
      {
        title: "Seamless Human Handoff",
        description: "Smooth transition to human agents when complex issues are detected",
        icon: "🤝"
      },
      {
        title: "Multi-Platform Integration",
        description: "Works with popular ticketing systems like Zendesk, Freshdesk, and ServiceNow",
        icon: "🔗"
      }
    ],
    techStack: [
      {
        category: "AI/ML",
        technologies: ["OpenAI GPT-4", "LangChain", "Vector Databases", "Embeddings"]
      },
      {
        category: "Backend",
        technologies: ["Python", "FastAPI", "PostgreSQL", "Redis"]
      },
      {
        category: "Integration",
        technologies: ["REST APIs", "Webhooks", "OAuth 2.0", "SDK"]
      }
    ],
    caseStudy: {
      challenge: "A SaaS company with 50,000+ customers was receiving 2,000+ support tickets daily, with average response time of 4 hours.",
      approach: "Implemented an AI agent that handles 70% of common queries automatically while maintaining high accuracy through continuous learning.",
      results: "Reduced average response time to 15 minutes, improved customer satisfaction by 40%, and allowed support team to focus on strategic initiatives."
    },
    cta: {
      primary: "Schedule Demo",
      secondary: "View Technical Specs"
    }
  },
  {
    id: "voice-lead-qualification",
    icon: "🎙️",
    title: "Proactive Voice-Based Lead Qualification Agent",
    description: "A voice-native AI agent that places outbound calls to leads, qualifies them through natural conversation, and schedules meetings automatically.",
    tags: ["Voice AI", "STT/TTS", "Lead Qualification"],
    problem: "Sales teams struggle with manual lead qualification, spending hours on unqualified prospects and missing high-value opportunities.",
    solution: "An autonomous voice AI agent that conducts natural conversations to qualify leads and automatically schedule meetings with qualified prospects.",
    impact: [
      { metric: "Qualification Rate", value: "75%", description: "Of leads properly qualified through AI conversations" },
      { metric: "Time Saved", value: "8 hours", description: "Per sales rep per day on manual qualification" },
      { metric: "Meeting Conversion", value: "45%", description: "Of qualified leads convert to scheduled meetings" }
    ],
    features: [
      {
        title: "Natural Voice Conversations",
        description: "Engages leads with human-like conversations using advanced speech synthesis",
        icon: "🗣️"
      },
      {
        title: "Intelligent Qualification Logic",
        description: "Uses conversation analysis to determine lead quality and interest level",
        icon: "📊"
      },
      {
        title: "Automatic Scheduling",
        description: "Integrates with calendar systems to book meetings with qualified prospects",
        icon: "📅"
      },
      {
        title: "Real-time Analytics",
        description: "Provides detailed insights on conversation quality and qualification metrics",
        icon: "📈"
      }
    ],
    techStack: [
      {
        category: "Voice AI",
        technologies: ["OpenAI Whisper", "ElevenLabs", "WebRTC", "Speech Recognition"]
      },
      {
        category: "Conversation AI",
        technologies: ["LangChain", "Conversation Memory", "Intent Recognition", "Sentiment Analysis"]
      },
      {
        category: "Integration",
        technologies: ["Salesforce", "HubSpot", "Calendly", "Zoom API"]
      }
    ],
    caseStudy: {
      challenge: "A B2B company was spending 60% of sales time on unqualified leads, resulting in low conversion rates and frustrated sales team.",
      approach: "Deployed voice AI agents to pre-qualify leads through natural conversations, filtering out unqualified prospects before human interaction.",
      results: "Increased sales team productivity by 300%, improved lead quality by 65%, and achieved 45% higher conversion rates on qualified leads."
    },
    cta: {
      primary: "Request Demo",
      secondary: "See Integration Guide"
    }
  },
  {
    id: "ai-sdr-agent",
    icon: "📧",
    title: "AI Sales Development Representative (SDR) Agent",
    description: "A multi-step autonomous agent that identifies leads in CRM, performs web research, crafts personalized emails, and logs all activity automatically.",
    tags: ["AI SDR", "LangGraph", "Sales Automation"],
    problem: "SDRs spend 80% of their time on administrative tasks instead of building relationships, leading to missed opportunities and burnout.",
    solution: "An autonomous AI SDR that handles the entire lead research and outreach process, allowing human SDRs to focus on high-value conversations.",
    impact: [
      { metric: "Outreach Volume", value: "500%", description: "Increase in personalized outreach per SDR" },
      { metric: "Response Rate", value: "35%", description: "Higher than industry average of 8%" },
      { metric: "Time Efficiency", value: "90%", description: "Reduction in manual research and writing time" }
    ],
    features: [
      {
        title: "Intelligent Lead Research",
        description: "Automatically researches prospects using web scraping and social media analysis",
        icon: "🔍"
      },
      {
        title: "Personalized Email Generation",
        description: "Creates highly personalized emails based on prospect's interests and pain points",
        icon: "✍️"
      },
      {
        title: "Multi-Channel Outreach",
        description: "Coordinates email, LinkedIn, and phone outreach for maximum impact",
        icon: "📱"
      },
      {
        title: "Activity Tracking",
        description: "Automatically logs all interactions and updates CRM with detailed notes",
        icon: "📝"
      }
    ],
    techStack: [
      {
        category: "AI Framework",
        technologies: ["LangGraph", "OpenAI GPT-4", "Custom Prompts", "Memory Management"]
      },
      {
        category: "Research Tools",
        technologies: ["Web Scraping", "Social Media APIs", "Company Databases", "News APIs"]
      },
      {
        category: "CRM Integration",
        technologies: ["Salesforce", "HubSpot", "Pipedrive", "Custom APIs"]
      }
    ],
    caseStudy: {
      challenge: "A growing SaaS company needed to scale their SDR team but struggled with hiring and training, resulting in inconsistent outreach quality.",
      approach: "Implemented AI SDR agents that handle research, personalization, and outreach while maintaining human oversight for complex scenarios.",
      results: "Achieved 500% increase in outreach volume, 35% response rate (vs 8% industry average), and reduced SDR hiring costs by 70%."
    },
    cta: {
      primary: "Book Consultation",
      secondary: "Download ROI Calculator"
    }
  },
  {
    id: "knowledge-base-ai",
    icon: "📚",
    title: "Intelligent Knowledge Base for Internal Docs",
    description: "A secure, internal Q&A system that ingests company documentation and allows employees to ask complex questions in natural language with cited answers.",
    tags: ["RAG", "Knowledge Base", "Enterprise Search"],
    problem: "Employees waste hours searching through scattered documentation, leading to duplicated work and inconsistent information across teams.",
    solution: "An intelligent knowledge base that understands company documentation and provides instant, accurate answers with proper citations and context.",
    impact: [
      { metric: "Search Time", value: "85%", description: "Reduction in time spent searching for information" },
      { metric: "Knowledge Access", value: "95%", description: "Of employees can find needed information within 30 seconds" },
      { metric: "Information Accuracy", value: "98%", description: "Accuracy rate with proper source citations" }
    ],
    features: [
      {
        title: "Intelligent Document Ingestion",
        description: "Automatically processes and indexes various document formats with semantic understanding",
        icon: "📄"
      },
      {
        title: "Natural Language Queries",
        description: "Understands complex questions and provides contextual answers with source citations",
        icon: "💬"
      },
      {
        title: "Real-time Updates",
        description: "Continuously syncs with document repositories to ensure information is always current",
        icon: "🔄"
      },
      {
        title: "Access Control",
        description: "Role-based permissions ensure sensitive information is only accessible to authorized users",
        icon: "🔒"
      }
    ],
    techStack: [
      {
        category: "RAG System",
        technologies: ["Vector Databases", "Embeddings", "Retrieval Algorithms", "Ranking Models"]
      },
      {
        category: "Document Processing",
        technologies: ["PDF Parsing", "OCR", "Text Extraction", "Format Conversion"]
      },
      {
        category: "Security",
        technologies: ["OAuth 2.0", "RBAC", "Encryption", "Audit Logging"]
      }
    ],
    caseStudy: {
      challenge: "A 500-person company had critical information scattered across 15+ systems, causing 40% of employees to recreate existing solutions.",
      approach: "Built a centralized AI knowledge base that ingests all company documentation and provides instant, accurate answers with proper citations.",
      results: "Eliminated 85% of information search time, reduced duplicate work by 60%, and improved cross-team collaboration significantly."
    },
    cta: {
      primary: "Start Free Trial",
      secondary: "View Security Whitepaper"
    }
  }
];

const Projects = () => {
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
              key={project.id}
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
