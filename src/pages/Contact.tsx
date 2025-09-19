import { useState } from "react";
import { Mail, Phone, MapPin, Send, Github, Linkedin, MessageSquare, User, FileText, Code } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="text-neon-blue" size={24} />,
      label: "Email",
      value: "himanshugoswami697@gmail.com",
      link: "mailto:himanshugoswami697@gmail.com",
      description: "Drop me a line anytime"
    },
    {
      icon: <MessageSquare className="text-neon-green" size={24} />,
      label: "Telegram",
      value: "@himanshugoswami",
      link: "https://t.me/himanshugoswami697",
      description: "Quick chat and updates"
    },
    {
      icon: <MapPin className="text-neon-purple" size={24} />,
      label: "Location",
      value: "Bhimtal, Uttarakhand, India",
      link: "#",
      description: "Available for remote work"
    }
  ];

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github size={24} />,
      url: "https://github.com/Himanshu697",
      color: "hover:text-foreground",
      description: "Check out my code"
    },
    {
      name: "LinkedIn",
      icon: <Linkedin size={24} />,
      url: "https://www.linkedin.com/in/himanshu-goswami-30903826b/",
      color: "hover:text-neon-blue",
      description: "Let's connect professionally"
    },
    {
      name: "LeetCode",
      icon: <Code size={24} />,
      url: "https://leetcode.com/u/Himanshu231_56/",
      color: "hover:text-neon-green",
      description: "See my coding solutions"
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message Sent!",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16 animate-fadeIn">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Contact Me
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Let's discuss your next project or just say hello. I'm always excited to connect with fellow developers and potential collaborators.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="animate-slideIn">
            <Card className="bg-card border border-border">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-foreground">
                  <Send className="text-primary" size={24} />
                  Send Me a Message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-foreground">Name</Label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-foreground">Email</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border"
                      />
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      placeholder="What's this about?"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project or just say hello..."
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background border-border resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    className="w-full bg-gradient-primary hover:shadow-glow-blue transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className="space-y-8 animate-slideIn delay-200">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
              {contactInfo.map((contact, index) => (
                <Card 
                  key={contact.label}
                  className="bg-card border border-border hover:border-primary hover:shadow-glow-blue transition-all duration-300 animate-fadeIn"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      {contact.icon}
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground mb-1">{contact.label}</h3>
                        <p className="text-muted-foreground text-sm mb-2">{contact.description}</p>
                        {contact.link !== "#" ? (
                          <a 
                            href={contact.link}
                            className="text-primary hover:text-primary/80 transition-colors duration-300 font-medium"
                          >
                            {contact.value}
                          </a>
                        ) : (
                          <p className="text-primary font-medium">{contact.value}</p>
                        )}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Social Links */}
            <div>
              <h2 className="text-2xl font-bold text-foreground mb-6">Connect With Me</h2>
              <div className="grid gap-4">
                {socialLinks.map((social, index) => (
                  <Card 
                    key={social.name}
                    className="bg-card border border-border hover:border-primary hover:shadow-glow-blue transition-all duration-300 animate-fadeIn"
                    style={{ animationDelay: `${(index + 3) * 100}ms` }}
                  >
                    <CardContent className="p-6">
                      <a 
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center space-x-4 group"
                      >
                        <div className={`text-muted-foreground group-hover:text-primary transition-colors duration-300 ${social.color}`}>
                          {social.icon}
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                            {social.name}
                          </h3>
                          <p className="text-muted-foreground text-sm">{social.description}</p>
                        </div>
                      </a>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="p-6 border border-border bg-card">
              <h3 className="text-xl font-bold mb-4 text-foreground">Quick Actions</h3>
              <div className="space-y-3">
                <Button 
                  variant="outline"
                  className="w-full border border-border text-foreground hover:bg-primary hover:text-white justify-start"
                  asChild
                >
                  <a href="#" download>
                    <FileText className="mr-2" size={16} />
                    Download My Resume
                  </a>
                </Button>
                <Button 
                  variant="outline"
                  className="w-full border border-border text-foreground hover:bg-primary hover:text-white justify-start"
                  asChild
                >
                  <a href="/projects">
                    <User className="mr-2" size={16} />
                    View My Projects
                  </a>
                </Button>
              </div>
            </Card>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center animate-fadeIn">
          <Card className="bg-card border border-border p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to Start a Project?
            </h3>
            <p className="text-muted-foreground mb-6">
              I'm available for freelance work, collaborations, and full-time opportunities. 
              Let's create something amazing together!
            </p>
            <Button 
              className="bg-gradient-primary hover:shadow-glow-blue transition-all duration-300"
              asChild
            >
              <a href="mailto:himanshugoswami697@gmail.com">
                <Mail className="mr-2" size={16} />
                Let's Talk Business
              </a>
            </Button>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
