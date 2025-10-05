import { GraduationCap, Calendar, MapPin, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import profileImage from "@/assets/himanshu-Profile-new.jpg";

const About = () => {
  const journey = [
    {
      year: "2022",
      title: "Academic Foundation & Programming Basics",
      description:
        "Started B.Tech (CSE) at GEHU Bhimtal. Built strong foundations in programming (C++ & Java) and learned basic web technologies (HTML, CSS). Began solving algorithmic problems and using Git/GitHub.",
      skills: ["C++", "Java", "HTML", "CSS", "Git"]
    },
    {
      year: "2023",
      title: "Web Development & Projects",
      description:
        "Focused on front-end development with JavaScript and React. Built portfolio projects, learned responsive design and component-based architecture, and practiced deployment workflows (GitHub Pages / Vercel).",
      skills: ["JavaScript", "React", "Responsive Design", "Vite", "Deployment"]
    },
    {
      year: "2024",
      title: "Applied ML & OCR — Practical Projects",
      description:
        "Built OCR with keyword search using Python, EasyOCR and Gradio. Worked on multilingual text extraction (Hindi + English) and created an interactive web interface for live demos and integration.",
      skills: ["Python", "EasyOCR", "Gradio"]
    },
    {
      year: "2025",
      title: "Full-Stack & AI Projects, Internship",
      description:
        "Worked on Full-Stack AI projects — Imagify (text-to-image SaaS) and Interview.ai (AI mock interviews). Started Front-End internship at Edunet Foundation (IBM SkillsBuild, Aug 2025) focusing on production-ready responsive front-end development and industry workflows.",
      skills: ["React", "Next.js", "Supabase", "Edge Functions", "OpenAI/LLMs"]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            About Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Passionate developer on a mission to transform ideas into seamless digital experiences
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          {/* Profile Image & Basic Info */}
          <div className="space-y-8 animate-slideIn">
            <div className="relative">
              <div className="w-full max-w-md mx-auto">
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-primary rounded-2xl blur-xl opacity-30"></div>
                  <img 
                    src={profileImage}
                    alt="Himanshu Goswami"
                    className="relative w-full h-auto rounded-2xl border-2 border-primary shadow-glow-blue"
                  />
                </div>
              </div>
            </div>

            {/* Quick Info Cards */}
            <div className="space-y-4">
              <Card className="bg-card border border-border">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <GraduationCap className="text-neon-blue" size={24} />
                    <div>
                      <p className="font-semibold">Education</p>
                      <p className="text-sm text-muted-foreground">B.Tech CSE, GEHU Bhimtal (2022 - 2026)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="text-neon-green" size={24} />
                    <div>
                      <p className="font-semibold">Duration</p>
                      <p className="text-sm text-muted-foreground">2022 - 2026</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-card border border-border">
                <CardContent className="p-4">
                  <div className="flex items-center space-x-3">
                    <MapPin className="text-neon-purple" size={24} />
                    <div>
                      <p className="font-semibold">Location</p>
                      <p className="text-sm text-muted-foreground">Bhimtal, Uttarakhand</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Introduction Text */}
          <div className="space-y-6 animate-slideIn delay-200">
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-4">Hello! I'm Himanshu Goswami</h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  I'm a final-year B.Tech Computer Science and Engineering student at GEHU Bhimtal. I build full-stack web apps and AI-powered tools — with projects ranging from OCR systems to text-to-image SaaS and AI mock-interview platforms.
                </p>
                <p>
                  My interests include <span className="text-primary font-semibold">full-stack development</span>, <span className="text-primary font-semibold">applied AI</span>, and <span className="text-primary font-semibold">computer vision</span>. I love turning research ideas into working demos and learning by building.
                </p>
                <p>
                  Outside academics, I participate in hackathons, contribute to open-source, and complete virtual experience programs (Forage, NxtWave). I also actively upskill through online courses and workshops.
                </p>
              </div>
            </div>

            <Card className="bg-gradient-secondary p-6 border-none text-white">
              <div className="flex items-start space-x-3">
                <Target size={24} className="mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">My Mission</h3>
                  <p className="text-sm opacity-90">
                    Build practical, well-engineered applications that solve real problems — and keep learning new tech along the way.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>

        {/* Learning Journey Timeline */}
        <div className="animate-fadeIn">
          <h2 className="text-3xl font-bold text-center bg-gradient-secondary bg-clip-text text-transparent mb-12">
            My Learning Journey
          </h2>
          
          <div className="space-y-8">
            {journey.map((phase, index) => (
              <Card 
                key={phase.year}
                className={`p-6 bg-card border-l-4 ${
                  index % 2 === 0 ? 'border-l-neon-blue' : 'border-l-neon-purple'
                } hover:shadow-glow-blue transition-all duration-300 animate-slideIn`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <CardHeader className="pb-3">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <CardTitle className="text-xl text-foreground">{phase.title}</CardTitle>
                    <span className="text-sm text-primary font-semibold mt-1 md:mt-0">{phase.year}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-muted-foreground">{phase.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {phase.skills.map((skill) => (
                      <span 
                        key={skill}
                        className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
