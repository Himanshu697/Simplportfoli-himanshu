import { Award, Calendar, ExternalLink, Download, Trophy, Medal, Star, Cloud, Code, Database, Brain } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Front-End Web Development Internship",
      issuer: "Edunet Foundation (IBM SkillsBuild)",
      date: "Aug 2025",
      type: "Internship",
      description: "Successfully completed front-end web development internship focusing on HTML, CSS, and JavaScript. Gained hands-on experience with IBM SkillsBuild platform and earned AICTE & Edunet Foundation Certification.",
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "IBM SkillsBuild"],
      icon: <Trophy className="text-neon-blue" size={24} />,
      image: "🏆",
      credentialId: "EDUNET-IBM-2025",
      verificationUrl: "https://drive.google.com/file/d/1f0jNagbRx8jslRtqqGhypNQ6vZzsob9z/view",
      status: "In Progress"
    },
    {
      id: 2,
      title: "Google Cloud Computing",
      issuer: "IIT Kharagpur (NPTEL)",
      date: "2024",
      type: "Certification",
      description: "Comprehensive course covering cloud computing fundamentals, Google Cloud Platform services, and cloud architecture principles.",
      skills: ["Google Cloud Platform", "Cloud Computing", "Cloud Architecture", "DevOps"],
      icon: <Cloud className="text-neon-green" size={24} />,
      image: "☁️",
      credentialId: "NPTEL-GCP-IIT-KGP",
      verificationUrl: "https://drive.google.com/file/d/11dJi46tZDdhBVpqMfTD1gFuWoBw3yfep/view"
    },
    {
      id: 3,
      title: "Python Programming",
      issuer: "Udemy",
      date: "2024",
      type: "Course",
      description: "Completed comprehensive Python programming course covering fundamentals, advanced concepts, and practical applications.",
      skills: ["Python", "Data Structures", "OOP", "Problem Solving", "Scripting"],
      icon: <Code className="text-neon-purple" size={24} />,
      image: "🐍",
      credentialId: "UC-a68f82a7-dc9c-4bcc-ac65-74c97bce7470",
      verificationUrl: "https://www.udemy.com/certificate/UC-a68f82a7-dc9c-4bcc-ac65-74c97bce7470/"
    },
    {
      id: 4,
      title: "AWS Cloud Practitioner Essentials",
      issuer: "AWS (Skill Builder)",
      date: "2024",
      type: "Certification",
      description: "Foundational AWS certification covering cloud concepts, AWS services, security, architecture, and pricing models.",
      skills: ["AWS", "Cloud Computing", "EC2", "S3", "Cloud Security"],
      icon: <Cloud className="text-neon-pink" size={24} />,
      image: "🚀",
      credentialId: "AWS-CPE-SKILLBUILDER",
      verificationUrl: "https://drive.google.com/file/d/1EG4sRgtjYOvKO6HzPzFRZxfwlaLtDNKC/view"
    },
    {
      id: 5,
      title: "SQL and Relational Databases",
      issuer: "IBM SkillsBuild",
      date: "2024",
      type: "Course",
      description: "Comprehensive training in SQL querying, database design, and relational database management systems.",
      skills: ["SQL", "Database Design", "MySQL", "Data Modeling", "Query Optimization"],
      icon: <Database className="text-neon-blue" size={24} />,
      image: "🗄️",
      credentialId: "IBM-SQL-SKILLSBUILD",
      verificationUrl: "https://drive.google.com/file/d/17Icawn42ymocMlRbQXdqgq5Edp9WbW1f/view"
    },
    {
      id: 6,
      title: "Hands-on AI Workshop",
      issuer: "OpenAI & NxtWave",
      date: "Aug 2025",
      type: "Workshop",
      description: "7-hour intensive workshop focused on building advanced AI solutions using LLMs, prompt engineering, and model optimization techniques.",
      skills: ["AI/ML", "LLMs", "Prompt Engineering", "Model Optimization", "OpenAI"],
      icon: <Brain className="text-neon-green" size={24} />,
      image: "🤖",
      credentialId: "9SWJAFDQDQ",
      verificationUrl: "https://cdn1.ccbp.in/misc/workshop-openai-nxtwave-buildathon-genai-online-workshop-participation/9SWJAFDQDQ.png"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-neon-blue text-white";
      case "Certification":
        return "bg-neon-green text-white";
      case "Course":
        return "bg-neon-purple text-white";
      case "Workshop":
        return "bg-neon-pink text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const stats = [
    { label: "Certificates", value: "6+", icon: Award },
    { label: "Skills Acquired", value: "25+", icon: Star },
    { label: "Learning Hours", value: "200+", icon: Calendar }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Achievements & Certifications
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My journey of continuous learning and professional development in technology
          </p>
        </div>

        {/* Stats */}
        <div className="grid md:grid-cols-3 gap-6 mb-12 animate-slideIn">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <Card 
                key={stat.label}
                className="bg-card border border-border text-center p-6 hover:border-primary hover:shadow-glow-blue transition-all duration-300"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Icon className="mx-auto mb-4 text-primary" size={32} />
                <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-muted-foreground">{stat.label}</div>
              </Card>
            );
          })}
        </div>

        {/* Certificates Grid */}
        <div className="grid lg:grid-cols-2 gap-8">
          {certificates.map((cert, index) => (
            <Card 
              key={cert.id}
              className="bg-card border border-border hover:border-primary hover:shadow-glow-blue transition-all duration-300 animate-slideIn group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <CardHeader className="space-y-4">
                <div className="flex items-start justify-between">
                  <div className="flex items-center space-x-3">
                    {cert.icon}
                    <div className="text-3xl">{cert.image}</div>
                  </div>
                  <div className="flex flex-col items-end gap-2">
                    <Badge className={getTypeColor(cert.type)}>{cert.type}</Badge>
                    {cert.status && (
                      <Badge variant="outline" className="border-yellow-500 text-yellow-600">{cert.status}</Badge>
                    )}
                  </div>
                </div>
                
                <div>
                  <CardTitle className="text-xl text-foreground group-hover:text-primary transition-colors duration-300">
                    {cert.title}
                  </CardTitle>
                  <div className="flex items-center gap-2 mt-2 text-sm text-muted-foreground">
                    <span className="font-medium text-primary">{cert.issuer}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Calendar size={14} />
                      {cert.date}
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <p className="text-muted-foreground text-sm leading-relaxed">{cert.description}</p>
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge key={skill} variant="outline" className="border-primary/30 text-primary text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
                <div className="bg-muted/30 rounded-lg p-3 space-y-2">
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium">Credential ID: </span>
                    <span className="font-mono">{cert.credentialId}</span>
                  </div>
                </div>
                <div className="flex gap-3 pt-2">
                  <Button variant="outline" size="sm" className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                    <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      {cert.status === "In Progress" ? "View Progress" : "Verify"}
                    </a>
                  </Button>
                  {cert.status !== "In Progress" && (
                    <Button size="sm" className="flex-1 bg-primary hover:bg-primary/90" asChild>
                      <a href="#" download>
                        <Download size={16} className="mr-2" />
                        Download
                      </a>
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certificates;
