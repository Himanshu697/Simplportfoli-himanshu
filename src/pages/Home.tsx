import { Download, MessageCircle, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import profileImage from "@/assets/himanshu-profile-new.jpg";

const Home = () => {
  const skills = [
    "Full-Stack Development",
    "AI & Machine Learning",
    "React & Node.js",
    "Python & Java",
    "OCR & Computer Vision",
    "API Development"
  ];

  const handleDownloadResume = () => {
    window.open(
      "https://drive.google.com/file/d/1PzaCL55fT8au4-MCuOv69LLyKrRZEvSn/view?usp=drivesdk",
      "_blank"
    );
  };

  const scrollToSkills = () => {
    const skillsSection = document.getElementById("skills-preview");
    skillsSection?.scrollIntoView({ behavior: "smooth" });
  };

  // Ask Me Anything -> mailto (pre-filled subject & body)
  const mailtoLink =
    "mailto:himanshugoswami697@gmail.com?subject=Question%20from%20Portfolio&body=Hi%20Himanshu%2C%0A%0AI%20have%20a%20question%20about%20your%20portfolio...%0A%0ARegards%2C%0A";

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-24 sm:pt-28">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background pointer-events-none">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--neon-blue))_0%,transparent_20%)] opacity-20 animate-pulse"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,hsl(var(--neon-purple))_0%,transparent_20%)] opacity-20 animate-pulse delay-1000"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,hsl(var(--neon-green))_0%,transparent_20%)] opacity-20 animate-pulse delay-2000"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="space-y-8 animate-slideIn">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  <span className="block text-foreground">Hey, There</span>
                  <span className="block bg-gradient-primary bg-clip-text text-transparent">
                    I Am Himanshu
                  </span>
                </h1>

                <p className="text-xl md:text-2xl text-primary font-semibold">
                  Full-Stack Developer & AI Innovator
                </p>

                <p className="text-lg text-muted-foreground max-w-lg">
                  I build scalable AI-powered applications using modern web technologies. Passionate about creating seamless digital experiences.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={handleDownloadResume}
                  className="bg-gradient-primary hover:shadow-glow-blue transition-all duration-300 text-lg px-8 py-6 rounded-xl"
                >
                  <Download className="mr-2" size={20} />
                  Download Resume
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 text-lg px-8 py-6 rounded-xl"
                >
                  <a href={mailtoLink}>
                    <MessageCircle className="mr-2" size={20} />
                    Ask Me Anything
                  </a>
                </Button>
              </div>

              {/* Skills Preview */}
              <div className="flex flex-wrap gap-2">
                {skills.map((skill, index) => (
                  <span
                    key={skill}
                    className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20 animate-fadeIn"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Profile Image */}
            <div className="flex justify-center lg:justify-end animate-fadeIn">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-primary rounded-full blur-2xl opacity-30 animate-glow"></div>

                {/* original size + hover behavior preserved, responsive */}
                <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-primary shadow-glow-blue transform transition-all duration-500 group hover:scale-[1.03]">
                  <img
                    src={profileImage}
                    alt="Himanshu Goswami"
                    className="w-full h-full object-cover transition-transform duration-700 transform group-hover:scale-105"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 bg-neon-purple text-white px-4 py-2 rounded-full text-sm font-semibold animate-float delay-1000">
                  AI Expert
                </div>
                <div className="absolute -bottom-4 -left-4 bg-neon-green text-white px-4 py-2 rounded-full text-sm font-semibold animate-float delay-2000">
                  Full-Stack
                </div>
              </div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <Button variant="ghost" size="icon" onClick={scrollToSkills} className="text-muted-foreground hover:text-primary">
              <ChevronDown size={24} />
            </Button>
          </div>
        </div>
      </section>

      {/* Skills Preview Section */}
      <section id="skills-preview" className="py-20 bg-card/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold bg-gradient-secondary bg-clip-text text-transparent mb-4">
              What I Do Best
            </h2>
            <p className="text-lg text-muted-foreground">
              Transforming ideas into seamless digital experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Frontend Development",
                description: "Creating responsive, interactive user interfaces with React, TypeScript, and modern CSS frameworks.",
                icon: "💻",
                color: "border-neon-blue"
              },
              {
                title: "Backend & APIs",
                description: "Building scalable server-side applications with Node.js, Express, and robust database solutions.",
                icon: "⚙️",
                color: "border-neon-green"
              },
              {
                title: "AI Integration",
                description: "Implementing machine learning models, OCR systems, and AI-powered features in web applications.",
                icon: "🤖",
                color: "border-neon-purple"
              }
            ].map((service, index) => (
              <Card
                key={service.title}
                className={`p-6 bg-card border-2 ${service.color} hover:shadow-neon transition-all duration-300 animate-fadeIn`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">{service.title}</h3>
                <p className="text-muted-foreground">{service.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
