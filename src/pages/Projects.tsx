import { ExternalLink, Github, Eye, Zap, Brain, Search, Code, Languages } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "AI Job Automation Platform",
      description: "An intelligent platform that automates job application processes using AI. Features include resume optimization, cover letter generation, and application tracking.",
      longDescription: "Built a comprehensive job automation system that leverages machine learning to match candidates with suitable positions, automatically generates personalized cover letters, and tracks application status across multiple platforms.",
      icon: <Brain className="text-neon-blue" size={24} />,
      tech: ["React", "Node.js", "OpenAI API", "MongoDB", "Express"],
      features: ["AI Resume Analysis", "Auto Cover Letter Generation", "Job Matching Algorithm", "Application Tracking"],
      github: "https://github.com/himanshugoswami",
      live: "https://demo.com",
      image: "🤖",
      status: "Completed"
    },
    {
      id: 2,
      title: "AI Interview Simulator",
      description: "A realistic interview simulation platform powered by AI that provides personalized feedback and helps candidates prepare for technical interviews.",
      longDescription: "Developed an advanced interview preparation tool that uses natural language processing to conduct mock interviews, analyze responses, and provide detailed feedback on technical and behavioral questions.",
      icon: <Zap className="text-neon-green" size={24} />,
      tech: ["React", "Python", "FastAPI", "OpenAI", "Speech Recognition"],
      features: ["Voice Recognition", "Real-time Feedback", "Question Bank", "Performance Analytics"],
      github: "https://github.com/himanshugoswami",
      live: "https://demo.com",
      image: "🎯",
      status: "In Progress"
    },
    {
      id: 3,
      title: "Resume ATS Checker",
      description: "An ATS-optimized resume analyzer that helps job seekers improve their resumes to pass through Applicant Tracking Systems effectively.",
      longDescription: "Created a sophisticated resume parsing and analysis tool that evaluates resumes against ATS criteria, suggests improvements, and provides keyword optimization recommendations.",
      icon: <Search className="text-neon-purple" size={24} />,
      tech: ["React", "Node.js", "PDF Parser", "NLP", "TailwindCSS"],
      features: ["ATS Score Calculation", "Keyword Analysis", "Format Optimization", "Industry Benchmarking"],
      github: "https://github.com/himanshugoswami",
      live: "https://demo.com",
      image: "📄",
      status: "Completed"
    },
    {
      id: 4,
      title: "Compiler Visualization Tool",
      description: "An educational tool that visualizes the compilation process, helping students understand how code transforms from source to executable.",
      longDescription: "Developed an interactive compiler visualization platform that breaks down the compilation process into digestible steps, showing lexical analysis, parsing, and code generation phases.",
      icon: <Code className="text-neon-pink" size={24} />,
      tech: ["React", "D3.js", "WebAssembly", "C++", "JavaScript"],
      features: ["Step-by-Step Visualization", "Interactive Code Editor", "Real-time Parsing", "Educational Content"],
      github: "https://github.com/himanshugoswami",
      live: "https://demo.com",
      image: "⚙️",
      status: "Completed"
    },
    {
      id: 5,
      title: "OCR Translator Tool",
      description: "A powerful OCR application that extracts text from images and provides real-time translation capabilities across multiple languages.",
      longDescription: "Built a comprehensive OCR solution using computer vision and machine learning that can accurately extract text from various image formats and translate it instantly.",
      icon: <Languages className="text-neon-blue" size={24} />,
      tech: ["Python", "OpenCV", "Tesseract", "Google Translate API", "Flask"],
      features: ["Multi-language OCR", "Real-time Translation", "Batch Processing", "PDF Support"],
      github: "https://github.com/himanshugoswami",
      live: "https://demo.com",
      image: "📸",
      status: "Completed"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "A modern, responsive portfolio website built with React and TypeScript, featuring dark theme, animations, and an AI chatbot.",
      longDescription: "Designed and developed a comprehensive portfolio website showcasing projects, skills, and experience with modern web technologies and smooth user experience.",
      icon: <Eye className="text-neon-green" size={24} />,
      tech: ["React", "TypeScript", "TailwindCSS", "Framer Motion", "Vite"],
      features: ["Responsive Design", "Dark Theme", "Smooth Animations", "AI Chatbot Integration"],
      github: "https://github.com/himanshugoswami",
      live: "https://himanshugoswami.dev",
      image: "💼",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-neon-green text-white";
      case "In Progress":
        return "bg-neon-blue text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Projects
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my technical projects and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={project.id}
              className="bg-card border border-border hover:border-primary hover:shadow-glow-blue transition-all duration-300 animate-slideIn group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {project.icon}
                    <div className="text-4xl">{project.image}</div>
                  </div>
                  <Badge className={getStatusColor(project.status)}>
                    {project.status}
                  </Badge>
                </div>
                
                <div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </CardTitle>
                  <p className="text-muted-foreground mt-2 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech}
                        variant="outline" 
                        className="border-primary/30 text-primary text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.slice(0, 3).map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="text-primary text-xs">●</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center animate-fadeIn">
          <Card className="bg-gradient-accent p-8 border-none text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaborating?</h3>
            <p className="mb-6 opacity-90">
              I'm always excited to work on new projects and explore innovative solutions. 
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                variant="secondary"
                className="bg-white text-background hover:bg-white/90"
                asChild
              >
                <a href="/contact">
                  Get In Touch
                </a>
              </Button>
              <Button 
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-background"
                asChild
              >
                <a href="https://github.com/Himanshu697" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={16} />
                  View All Projects
                </a>
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Projects;