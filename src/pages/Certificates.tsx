import { Award, Calendar, ExternalLink, Download, Trophy, Medal, Star } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Certificates = () => {
  const certificates = [
    {
      id: 1,
      title: "Web Development Internship",
      issuer: "Oasis Infobyte",
      date: "2023",
      type: "Internship",
      description: "Successfully completed a comprehensive web development internship focusing on frontend technologies and responsive design.",
      skills: ["HTML", "CSS", "JavaScript", "React"],
      icon: <Trophy className="text-neon-blue" size={24} />,
      image: "🏆",
      credentialId: "OIB-WD-2023-001",
      verificationUrl: "#"
    },
    {
      id: 2,
      title: "Campus Ambassador Program",
      issuer: "Internshala",
      date: "2023",
      type: "Leadership",
      description: "Recognized for outstanding performance as a campus ambassador, promoting internship opportunities and organizing career development events.",
      skills: ["Leadership", "Communication", "Event Management"],
      icon: <Medal className="text-neon-green" size={24} />,
      image: "🥇",
      credentialId: "IS-CA-2023-045",
      verificationUrl: "#"
    },
    {
      id: 3,
      title: "React Development Course",
      issuer: "Online Platform",
      date: "2023",
      type: "Course",
      description: "Completed an advanced React development course covering hooks, state management, and modern React patterns.",
      skills: ["React", "Hooks", "State Management", "Component Design"],
      icon: <Star className="text-neon-purple" size={24} />,
      image: "⚛️",
      credentialId: "REACT-ADV-2023",
      verificationUrl: "#"
    },
    {
      id: 4,
      title: "JavaScript Algorithms and Data Structures",
      issuer: "FreeCodeCamp",
      date: "2022",
      type: "Certification",
      description: "Comprehensive certification covering fundamental programming concepts, algorithms, and data structures in JavaScript.",
      skills: ["JavaScript", "Algorithms", "Data Structures", "Problem Solving"],
      icon: <Award className="text-neon-pink" size={24} />,
      image: "📜",
      credentialId: "FCC-JS-2022-789",
      verificationUrl: "#"
    },
    {
      id: 5,
      title: "Git & GitHub Mastery",
      issuer: "GitHub Education",
      date: "2022",
      type: "Course",
      description: "Mastered version control systems, collaborative development workflows, and open-source contribution practices.",
      skills: ["Git", "GitHub", "Version Control", "Collaboration"],
      icon: <Trophy className="text-neon-blue" size={24} />,
      image: "🔧",
      credentialId: "GH-EDU-2022-456",
      verificationUrl: "#"
    },
    {
      id: 6,
      title: "Hackathon Participation Certificate",
      issuer: "TechFest 2023",
      date: "2023",
      type: "Competition",
      description: "Participated in a 48-hour hackathon, developing an innovative AI-powered solution for social impact.",
      skills: ["Innovation", "Team Collaboration", "AI/ML", "Rapid Prototyping"],
      icon: <Medal className="text-neon-green" size={24} />,
      image: "🚀",
      credentialId: "TF-HACK-2023-123",
      verificationUrl: "#"
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Internship":
        return "bg-neon-blue text-white";
      case "Leadership":
        return "bg-neon-green text-white";
      case "Course":
        return "bg-neon-purple text-white";
      case "Certification":
        return "bg-neon-pink text-white";
      case "Competition":
        return "bg-gradient-primary text-white";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  const stats = [
    { label: "Certificates", value: "6+", icon: Award },
    { label: "Skills Acquired", value: "20+", icon: Star },
    { label: "Years Learning", value: "3+", icon: Calendar }
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
            My journey of continuous learning and professional development
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
                  <Badge className={getTypeColor(cert.type)}>
                    {cert.type}
                  </Badge>
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
                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {cert.description}
                </p>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-foreground mb-2 text-sm">Skills Covered:</h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill) => (
                      <Badge 
                        key={skill}
                        variant="outline" 
                        className="border-primary/30 text-primary text-xs"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Credential Info */}
                <div className="bg-muted/30 rounded-lg p-3 space-y-2">
                  <div className="text-xs text-muted-foreground">
                    <span className="font-medium">Credential ID: </span>
                    <span className="font-mono">{cert.credentialId}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-2">
                  <Button 
                    variant="outline" 
                    size="sm"
                    className="flex-1 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground"
                    asChild
                  >
                    <a href={cert.verificationUrl} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={16} className="mr-2" />
                      Verify
                    </a>
                  </Button>
                  <Button 
                    size="sm"
                    className="flex-1 bg-primary hover:bg-primary/90"
                    asChild
                  >
                    <a href="#" download>
                      <Download size={16} className="mr-2" />
                      Download
                    </a>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Achievement Timeline */}
        <div className="mt-16 animate-fadeIn">
          <h2 className="text-3xl font-bold text-center bg-gradient-secondary bg-clip-text text-transparent mb-12">
            Learning Timeline
          </h2>
          
          <div className="relative max-w-4xl mx-auto">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-border"></div>
            
            <div className="space-y-12">
              {[
                { year: "2022", title: "Foundation Year", achievements: ["Started Programming", "First Certifications", "Git Mastery"] },
                { year: "2023", title: "Growth Year", achievements: ["Web Development Internship", "Campus Ambassador", "Hackathon Participation"] },
                { year: "2024", title: "Innovation Year", achievements: ["AI Projects", "Advanced Certifications", "Portfolio Development"] }
              ].map((period, index) => (
                <div 
                  key={period.year}
                  className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} animate-slideIn`}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="flex-1"></div>
                  
                  {/* Timeline Dot */}
                  <div className="relative z-10 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-glow-blue"></div>
                  
                  <div className="flex-1">
                    <Card className={`mx-8 bg-card border border-border ${index % 2 === 0 ? '' : 'text-right'}`}>
                      <CardContent className="p-6">
                        <h3 className="text-lg font-bold text-primary mb-2">{period.year} - {period.title}</h3>
                        <ul className="space-y-1">
                          {period.achievements.map((achievement) => (
                            <li key={achievement} className="text-sm text-muted-foreground">
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certificates;