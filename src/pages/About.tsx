import { GraduationCap, Calendar, MapPin, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import profileImage from "@/assets/himanshu-profile-new.jpg";

const About = () => {
  const journey = [
    {
      year: "2021 - 1st Year",
      title: "Foundation Building",
      description: "Started my journey with programming fundamentals in C++ and Java. Learned basic web technologies and got introduced to the world of software development.",
      skills: ["C++", "Java", "HTML", "CSS"]
    },
    {
      year: "2022 - 2nd Year", 
      title: "Web Development Focus",
      description: "Dove deep into frontend development with JavaScript and React. Built my first web projects and learned about responsive design principles.",
      skills: ["JavaScript", "React", "Responsive Design", "Git"]
    },
    {
      year: "2023 - 3rd Year",
      title: "Full-Stack Development",
      description: "Expanded to backend development with Node.js and databases. Started building complete web applications and learned about API development.",
      skills: ["Node.js", "MongoDB", "REST APIs", "Express"]
    },
    {
      year: "2024 - 4th Year",
      title: "AI & Innovation",
      description: "Currently exploring AI integration, computer vision with OpenCV, and advanced technologies like TypeScript and modern frameworks.",
      skills: ["AI/ML", "OpenCV", "TypeScript", "Advanced React"]
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
                      <p className="text-sm text-muted-foreground">B.Tech CSE, GEHU Bhimtal</p>
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
                      <p className="text-sm text-muted-foreground">Bhimtal, India</p>
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
                  I'm a final-year B.Tech Computer Science Engineering student at GEHU Bhimtal, passionate about 
                  creating innovative solutions through technology. My journey in software development began in 2021, 
                  and since then, I've been on an exciting path of continuous learning and building.
                </p>
                <p>
                  My interests span across <span className="text-primary font-semibold">full-stack web development</span>, 
                  <span className="text-primary font-semibold"> compiler tools</span>, 
                  <span className="text-primary font-semibold"> OCR technology</span>, and 
                  <span className="text-primary font-semibold"> artificial intelligence</span>. 
                  I believe in the power of technology to solve real-world problems and create meaningful impact.
                </p>
                <p>
                  Beyond academics, I actively participate in hackathons, contribute to open-source projects, 
                  and engage in internships to gain practical experience. I'm always eager to learn new technologies 
                  and collaborate on exciting projects that push the boundaries of what's possible.
                </p>
              </div>
            </div>

            <Card className="bg-gradient-secondary p-6 border-none text-white">
              <div className="flex items-start space-x-3">
                <Target size={24} className="mt-1 flex-shrink-0" />
                <div>
                  <h3 className="font-semibold mb-2">My Mission</h3>
                  <p className="text-sm opacity-90">
                    To leverage cutting-edge technologies and create scalable, user-friendly applications 
                    that make a positive difference in people's lives while continuously evolving as a developer.
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