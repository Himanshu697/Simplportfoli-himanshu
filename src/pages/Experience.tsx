import { Briefcase, Calendar, MapPin, ExternalLink } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const Experience = () => {
  const experiences = [
    {
      id: 1,
      role: "Front-End Web Development Intern",
      company: "Edunet Foundation (IBM SkillsBuild)",
      type: "Internship",
      duration: "Aug 2025 - Present",
      location: "Remote",
      description:
        "Currently working on developing responsive front-end projects using HTML, CSS, and JavaScript. Engaging with IBM SkillsBuild platform courses and technical sessions to strengthen core front-end skills.",
      responsibilities: [
        "Developing responsive front-end projects using HTML, CSS, and JavaScript",
        "Engaging in IBM SkillsBuild platform courses and technical sessions",
        "Collaborating with mentors through weekly sessions",
        "Preparing for project presentation and submission",
        "Working towards AICTE & Edunet Foundation Certification",
      ],
      skills: [
        "HTML",
        "CSS",
        "JavaScript",
        "Responsive Design",
        "IBM SkillsBuild",
        "Frontend Development",
      ],
      color: "border-neon-blue",
    },
    {
      id: 2,
      role: "Campus Ambassador",
      company: "Internshala",
      type: "Leadership Program",
      duration: "2023",
      location: "Remote",
      description:
        "Recognized for outstanding performance as a campus ambassador, promoting internship opportunities and organizing career development events among fellow students.",
      responsibilities: [
        "Campus outreach and student engagement",
        "Promoting internship opportunities to students",
        "Organizing career development events",
        "Student career guidance and mentoring",
        "Brand ambassador activities and networking",
      ],
      skills: [
        "Leadership",
        "Communication",
        "Event Management",
        "Marketing",
        "Student Engagement",
      ],
      color: "border-neon-green",
    },
  ];

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Experience
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            My professional journey and key accomplishments in various roles
          </p>
        </div>

        {/* Experience Cards */}
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card
              key={exp.id}
              className={`bg-card border-2 ${exp.color} hover:shadow-neon transition-all duration-300 animate-slideIn`}
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <CardHeader className="pb-4">
                <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                  <div className="space-y-2">
                    <CardTitle className="text-2xl text-foreground flex items-center gap-2">
                      <Briefcase className="text-primary" size={24} />
                      {exp.role}
                    </CardTitle>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                      <h3 className="text-lg font-semibold text-primary">
                        {exp.company}
                      </h3>
                      <Badge variant="secondary" className="w-fit">
                        {exp.type}
                      </Badge>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar size={16} />
                      <span>{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {exp.description}
                </p>

                {/* Responsibilities */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Key Responsibilities:
                  </h4>
                  <ul className="grid md:grid-cols-2 gap-2">
                    {exp.responsibilities.map((responsibility, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-muted-foreground"
                      >
                        <span className="text-primary mt-1.5 text-xs">●</span>
                        <span className="text-sm">{responsibility}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Skills */}
                <div>
                  <h4 className="font-semibold text-foreground mb-3">
                    Technologies & Skills:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {exp.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-primary/30 text-primary hover:bg-primary/10"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fadeIn">
          <Card className="bg-gradient-accent p-8 border-none text-white max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Let's Work Together</h3>
            <p className="mb-6 opacity-90">
              I'm always open to new opportunities and exciting projects. Let's
              discuss how we can create something amazing together!
            </p>
            <Button
              variant="outline"
              className="bg-white text-black border-white hover:bg-white/90 hover:text-black font-semibold"
              asChild
            >
              <a href="/contact">
                <ExternalLink className="mr-2" size={16} />
                Get In Touch
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Experience;
