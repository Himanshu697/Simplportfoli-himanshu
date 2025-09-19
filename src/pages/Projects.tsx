import { ExternalLink, Github, Eye, Zap, Brain, Search, Code, Languages } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import React from "react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "Imagify AI",
      description: "AI-powered image generator from text prompts using Clipdrop API.",
      icon: <Brain className="text-blue-500" size={24} />,
      tech: ["React", "TypeScript", "Vite", "Supabase", "Deno", "Vercel"],
      features: ["Text-to-Image Generation", "Credit-Based System", "User Authentication"],
      github: "https://github.com/Himanshu697/imagify-ai-app",
      live: "https://imagify-ai-app.vercel.app/",
      image: "🎨",
      status: "Completed"
    },
    {
      id: 2,
      title: "AI Interview Simulator",
      description: "Realistic AI-powered interview simulation platform with feedback.",
      icon: <Zap className="text-green-500" size={24} />,
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
      icon: <Search className="text-purple-500" size={24} />,
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
      icon: <Languages className="text-blue-500" size={24} />,
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
      icon: <Code className="text-pink-500" size={24} />,
      tech: ["HTML", "CSS", "JavaScript"],
      features: ["Dynamic Grid", "Score Counter", "Game Over State"],
      github: "https://github.com/Himanshu697/snake",
      live: "https://himanshugoswami.github.io/snake-game/",
      image: "🐍",
      status: "Completed"
    },
    {
      id: 6,
      title: "Portfolio Website",
      description: "Responsive portfolio with dark mode & AI chatbot.",
      icon: <Eye className="text-green-500" size={24} />,
      tech: ["React", "TypeScript", "TailwindCSS", "Framer Motion"],
      features: ["Responsive Design", "Dark Theme", "AI Chatbot Integration"],
      github: "https://github.com/Himanshu697/Simplportfoli-himanshu",
      live: "https://himanshugoswami.dev",
      image: "💼",
      status: "Completed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Completed":
        return "bg-green-500 text-white";
      case "In Progress":
        return "bg-blue-500 text-white";
      default:
        return "bg-gray-300 text-gray-800";
    }
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Projects</h1>
          <p className="text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            A showcase of my technical projects and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Card 
              key={project.id}
              className="bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 hover:border-blue-500 hover:shadow-xl transition-all duration-300"
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
                  <CardTitle className="text-xl text-gray-800 dark:text-gray-200">{project.title}</CardTitle>
                  <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Tech Stack */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">Tech Stack:</h4>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="outline" 
                        className="border-blue-300 text-blue-600 dark:border-blue-500 dark:text-blue-400 text-xs"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div>
                  <h4 className="font-semibold text-gray-800 dark:text-gray-200 mb-2 text-sm">Key Features:</h4>
                  <ul className="space-y-1">
                    {project.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm">
                        <span className="text-blue-500 text-xs">●</span>
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
                    className="flex-1 border-blue-300 text-blue-600 hover:bg-blue-600 hover:text-white dark:border-blue-500 dark:text-blue-400 dark:hover:bg-blue-600 dark:hover:text-white" 
                    asChild
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={16} className="mr-2" /> Code
                    </a>
                  </Button>
                  <Button 
                    size="sm" 
                    className="flex-1 bg-blue-600 hover:bg-blue-700 text-white dark:bg-blue-500 dark:hover:bg-blue-600" 
                    asChild
                  >
                    <a href={project.live} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" /> Live Demo
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <Card className="bg-blue-600 dark:bg-blue-700 p-8 border-none text-white max-w-2xl mx-auto rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Interested in Collaborating?</h3>
            <p className="mb-6 opacity-90">
              I'm always excited to work on new projects and explore innovative solutions. 
              Let's build something amazing together!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              {/* Get In Touch */}
              <Button 
                className="bg-white text-blue-600 hover:bg-gray-100 dark:bg-gray-100 dark:text-blue-700 font-semibold" 
                asChild
              >
                <a href="/contact">Get In Touch</a>
              </Button>

              {/* View All Projects */}
              <Button 
                className="border-2 border-white text-white hover:bg-white hover:text-blue-600 dark:border-gray-200 dark:text-gray-200 dark:hover:bg-gray-200 dark:hover:text-blue-700 font-semibold" 
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
