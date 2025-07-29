import { useState } from "react";
import { Code, Database, Brain, Globe, Wrench, Laptop } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Skills = () => {
  const [selectedCategory, setSelectedCategory] = useState("core");

  const skillCategories = {
    core: {
      title: "Core Skills",
      icon: Code,
      color: "text-neon-blue",
      skills: [
        { name: "C++", level: 70, projects: ["Compiler Visualization", "DSA Problems"] },
        { name: "Java", level: 65, projects: ["Backend Applications", "OOP Projects"] },
        { name: "Python", level: 58, projects: ["AI Models", "Data Processing"] },
        { name: "JavaScript", level: 82, projects: ["Web Applications", "Interactive UIs"] },
        { name: "React.js", level: 80, projects: ["Portfolio", "Dashboard Apps"] },
        { name: "Node.js", level: 75, projects: ["REST APIs", "Backend Services"] },
        { name: "MongoDB", level: 70, projects: ["Database Design", "Full-Stack Apps"] },
        { name: "HTML/CSS", level: 85, projects: ["Responsive Design", "UI Components"] }
      ]
    },
    intermediate: {
      title: "Intermediate Skills", 
      icon: Database,
      color: "text-neon-green",
      skills: [
        { name: "Express.js", level: 70, projects: ["API Development", "Web Servers"] },
        { name: "Tailwind CSS", level: 75, projects: ["Modern UIs", "Component Libraries"] },
        { name: "Git & GitHub", level: 68, projects: ["Version Control", "Collaboration"] },
        { name: "REST APIs", level: 82, projects: ["Backend Integration", "Data Fetching"] },
        { name: "MySQL", level: 75, projects: ["Relational Databases", "Data Management"] },
        { name: "Postman", level: 70, projects: ["API Testing", "Documentation"] }
      ]
    },
    exploring: {
      title: "Currently Exploring",
      icon: Brain, 
      color: "text-neon-purple",
      skills: [
        { name: "OpenCV", level: 60, projects: ["OCR Systems", "Image Processing"] },
        { name: "Coqui TTS", level: 55, projects: ["Voice Synthesis", "Audio Processing"] },
        { name: "Transformers", level: 65, projects: ["NLP Models", "AI Integration"] },
        { name: "TypeScript", level: 70, projects: ["Type-Safe Applications", "Modern React"] },
        { name: "Next.js", level: 60, projects: ["SSR Applications", "Full-Stack React"] },
        { name: "Docker", level: 50, projects: ["Containerization", "DevOps"] }
      ]
    }
  };

  const tools = [
    { name: "VS Code", icon: "💻", category: "Editor" },
    { name: "Git", icon: "📝", category: "Version Control" },
    { name: "Figma", icon: "🎨", category: "Design" },
    { name: "Postman", icon: "🚀", category: "API Testing" },
    { name: "Chrome DevTools", icon: "🔧", category: "Debugging" },
    { name: "NPM/Yarn", icon: "📦", category: "Package Manager" }
  ];

  const currentCategory = skillCategories[selectedCategory as keyof typeof skillCategories];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Skills & Tools
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My technical expertise and the tools I use to bring ideas to life
          </p>
        </div>

        {/* Skills Categories */}
        <Tabs defaultValue="core" className="animate-slideIn">
          <TabsList className="grid w-full grid-cols-3 mb-8 bg-card">
            {Object.entries(skillCategories).map(([key, category]) => {
              const Icon = category.icon;
              return (
                <TabsTrigger 
                  key={key} 
                  value={key}
                  className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
                >
                  <Icon size={18} />
                  <span className="hidden sm:inline">{category.title}</span>
                </TabsTrigger>
              );
            })}
          </TabsList>

          {Object.entries(skillCategories).map(([key, category]) => {
            const Icon = category.icon;
            return (
              <TabsContent key={key} value={key} className="space-y-6">
                <Card className="bg-card border border-border">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <Icon className={category.color} size={24} />
                      {category.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid md:grid-cols-2 gap-6">
                      {category.skills.map((skill, index) => (
                        <div 
                          key={skill.name} 
                          className="space-y-3 animate-fadeIn"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <div className="flex justify-between items-center">
                            <span className="font-semibold text-foreground">{skill.name}</span>
                            <span className="text-sm text-primary font-medium">{skill.level}%</span>
                          </div>
                          <Progress value={skill.level} className="h-2" />
                          <div className="flex flex-wrap gap-1">
                            {skill.projects.map((project) => (
                              <Badge 
                                key={project}
                                variant="outline" 
                                className="text-xs border-primary/30 text-muted-foreground"
                              >
                                {project}
                              </Badge>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
            );
          })}
        </Tabs>

        {/* Tools & Technologies */}
        <div className="mt-16 animate-fadeIn">
          <h2 className="text-3xl font-bold text-center bg-gradient-secondary bg-clip-text text-transparent mb-8">
            Development Tools
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {tools.map((tool, index) => (
              <Card 
                key={tool.name}
                className="p-4 text-center bg-card border border-border hover:border-primary hover:shadow-glow-blue transition-all duration-300 animate-fadeIn"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="text-2xl mb-2">{tool.icon}</div>
                <h3 className="font-semibold text-sm text-foreground">{tool.name}</h3>
                <p className="text-xs text-muted-foreground mt-1">{tool.category}</p>
              </Card>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 grid md:grid-cols-3 gap-8 animate-slideIn">
          <Card className="bg-gradient-primary p-6 text-white border-none">
            <Globe size={32} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Frontend Expert</h3>
            <p className="text-sm opacity-90">
              Crafting beautiful, responsive user interfaces with modern frameworks and design principles.
            </p>
          </Card>
          
          <Card className="bg-gradient-secondary p-6 text-white border-none">
            <Wrench size={32} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">Backend Developer</h3>
            <p className="text-sm opacity-90">
              Building robust server-side applications, APIs, and database solutions for scalable systems.
            </p>
          </Card>
          
          <Card className="bg-gradient-accent p-6 text-white border-none">
            <Laptop size={32} className="mb-4" />
            <h3 className="text-xl font-bold mb-2">AI Enthusiast</h3>
            <p className="text-sm opacity-90">
              Exploring machine learning, computer vision, and AI integration in modern web applications.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Skills;