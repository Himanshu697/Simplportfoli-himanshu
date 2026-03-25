import { ExternalLink, Github, Brain, Zap, Search, Code, Languages, Eye } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Imagify AI",
      description: "AI-powered image generator from text prompts using Clipdrop API.",
      icon: <Brain className="text-neon-blue" size={24} />,
      tech: ["React", "TypeScript", "Vite", "Supabase", "Deno", "Vercel"],
      features: ["Text-to-Image Generation", "Credit-Based System", "User Authentication"],
      github: "https://github.com/Himanshu697/imagify-ai-app",
      live: "https://imagify-ai-app.vercel.app/",
      image: "🎨",
      status: "Completed"
    },
    {
      id: 2,
      title: "AvtarPrepAI",
      description: "Realistic AI-powered interview simulation platform with feedback.",
      icon: <Zap className="text-neon-green" size={24} />,
      tech: ["React", "Python", "FastAPI", "OpenAI"],
      features: ["Voice Recognition", "Real-time Feedback", "Performance Analytics"],
      github: "https://github.com/Himanshu697/aiinterview",
      live: "https://github.com/Himanshu697/aiinterview",
      image: "🎯",
      status: "In Progress"
    },
    {
      id: 3,
      title: "CPU Scheduling Algorithms",
      description: "Visualizer for CPU scheduling algorithms like FCFS & Round Robin.",
      icon: <Search className="text-neon-purple" size={24} />,
      tech: ["React", "TypeScript", "TailwindCSS"],
      features: ["Algorithm Comparison", "Gantt Chart Visualization", "Metrics Calculation"],
      github: "https://github.com/Himanshu697/Cpu-Scheduling",
      live: "https://cpu-scheduling-omega.vercel.app/",
      image: "⚙️",
      status: "Completed"
    },
    {
      id: 4,
      title: "OCR Translator Tool",
      description: "OCR tool for Hindi & English text extraction + translation.",
      icon: <Languages className="text-neon-pink" size={24} />,
      tech: ["Python", "Gradio", "EasyOCR"],
      features: ["Multi-language OCR", "Keyword Search", "Live Deployment"],
      github: "https://github.com/Himanshu697/OCR-image",
      live: "https://huggingface.co/spaces/Himanshu-9877/OCR",
      image: "📸",
      status: "Completed"
    },
    {
      id: 5,
      title: "Classic Snake Game",
      description: "A simple snake game using HTML, CSS & JS.",
      icon: <Code className="text-neon-blue" size={24} />,
      tech: ["HTML", "CSS", "JavaScript"],
      features: ["Dynamic Grid", "Score Counter", "Game Over State"],
      github: "https://github.com/Himanshu697/snake",
      live: "https://github.com/Himanshu697/snake",
      image: "🐍",
      status: "Completed"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Responsive portfolio with dark mode & AI chatbot.",
      icon: <Eye className="text-neon-green" size={24} />,
      tech: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
      features: ["Responsive Design", "Dark Theme", "AI Chatbot Integration"],
      github: "https://github.com/Himanshu697/Simplportfoli-himanshu",
      live: "https://github.com/Himanshu697/Simplportfoli-himanshu",
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
    <div className="min-h-screen bg-white dark:bg-black pt-20 transition-colors duration-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Projects & Innovations
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my creative and technical projects built with modern tools & AI integration
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((proj, index) => (
            <Card
              key={proj.id}
              className="bg-card border border-border hover:border-primary hover:shadow-glow-blue transition-all duration-300 animate-slideIn group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {proj.icon}
                    <div className="text-3xl">{proj.image}</div>
                  </div>
                  <Badge className={getStatusColor(proj.status)}>{proj.status}</Badge>
                </div>

                <div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {proj.title}
                  </CardTitle>
                  <p className="text-muted-foreground text-sm mt-2 leading-relaxed">
                    {proj.description}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {proj.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="border-primary/30 text-primary text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {proj.features.map((feat, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-muted-foreground text-sm">
                        <span className="text-primary text-xs">●</span> {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={proj.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" /> Code
                    </a>
                  </Button>

                  <Button
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href={proj.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" /> Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Collaboration Section */}
        <div className="mt-16 text-center">
          <Card className="bg-muted/30 border border-border p-8 max-w-2xl mx-auto rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Interested in Collaborating?
            </h3>
            <p className="mb-6 text-muted-foreground">
              I'm always open to new opportunities, ideas, and collaborations. Let's build something impactful together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90" asChild>
                <a href="/contact">Get In Touch</a>
              </Button>
              <Button
                variant="outline"
                className="border-primary/30 text-primary hover:bg-primary/10"
                asChild
              >
                <a href="https://github.com/Himanshu697" target="_blank" rel="noopener noreferrer">
                  <Github className="mr-2" size={16} /> View All Projects
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
