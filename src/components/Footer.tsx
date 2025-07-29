import { Github, Linkedin, Instagram, Code } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Footer = () => {
  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      url: "https://github.com/Himanshu697",
      color: "hover:text-foreground"
    },
    {
      name: "LinkedIn", 
      icon: Linkedin,
      url: "https://www.linkedin.com/in/himanshu-goswami-30903826b/",
      color: "hover:text-neon-blue"
    },
    {
      name: "LeetCode",
      icon: Code,
      url: "https://leetcode.com/u/Himanshu231_56/",
      color: "hover:text-neon-green"
    },
    {
      name: "Instagram",
      icon: Instagram, 
      url: "https://instagram.com/himanshugoswami",
      color: "hover:text-neon-pink"
    }
  ];

  return (
    <footer className="border-t border-border bg-card/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start space-y-2">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">HG</span>
              </div>
              <span className="text-lg font-semibold bg-gradient-primary bg-clip-text text-transparent">
                Himanshu Goswami
              </span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 Himanshu Goswami. All rights reserved.
            </p>
          </div>

          {/* Social Links & Theme Toggle */}
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            {socialLinks.map(({ name, icon: Icon, url, color }) => (
              <Button
                key={name}
                variant="ghost"
                size="icon"
                asChild
                className={`text-muted-foreground transition-all duration-300 ${color} hover:shadow-neon`}
              >
                <a 
                  href={url} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  aria-label={name}
                >
                  <Icon size={20} />
                </a>
              </Button>
            ))}
          </div>
        </div>

        {/* Bottom text */}
        <div className="mt-6 pt-6 border-t border-border text-center">
          <p className="text-sm text-muted-foreground">
            Built with ❤️ using React, TypeScript & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;