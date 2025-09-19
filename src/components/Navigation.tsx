import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, User, Code, Briefcase, Trophy, Mail, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Home", icon: Home },
    { path: "/about", label: "About", icon: User },
    { path: "/experience", label: "Experience", icon: Briefcase },
    { path: "/projects", label: "Projects", icon: Code },
    { path: "/certificates", label: "Certificates", icon: Trophy },
    { path: "/contact", label: "Contact", icon: Mail },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full z-50 bg-card/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center group-hover:shadow-glow-blue transition-all duration-300">
              <span className="text-white font-bold text-lg">HG</span>
            </div>
            <span className="text-xl font-bold bg-gradient-primary bg-clip-text text-transparent">
              Himanshu Goswami
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                className={`flex items-center space-x-1 px-3 py-2 rounded-lg transition-all duration-300 ${
                  isActive(path)
                    ? "text-primary bg-primary/10 shadow-glow-blue"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <Icon size={16} />
                <span>{label}</span>
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button & theme toggle */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2">
            {navItems.map(({ path, label, icon: Icon }) => (
              <Link
                key={path}
                to={path}
                onClick={() => setIsOpen(false)}
                className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 ${
                  isActive(path)
                    ? "text-primary bg-primary/10 shadow-glow-blue"
                    : "text-muted-foreground hover:text-primary hover:bg-primary/5"
                }`}
              >
                <Icon size={20} />
                <span>{label}</span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;