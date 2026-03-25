import { useState } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Message {
  id: string;
  content: string;
  isUser: boolean;
  timestamp: Date;
}

const FloatingChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hi! I'm Himanshu's AI assistant. Ask me anything about his skills, projects, or experience!",
      isUser: false,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");

  const predefinedResponses: Record<string, string> = {
    skills:
      "Himanshu's core skills include: C++, Java, Python, HTML, CSS, JavaScript, React, Node.js, MongoDB, Express, Tailwind CSS, Git, REST APIs. He's also exploring OpenCV, Coqui TTS, Transformers, and TypeScript.",
    projects:
      "Some of Himanshu's notable projects include: AI Job Automation Platform, AI Interview Simulator, Resume ATS Checker, Compiler Visualization Tool, and OCR Translator Tool.",
    experience:
      "Himanshu has worked as an Internshala Student Partner (Campus Ambassador) and as a Web Developer Intern at Oasis Infobyte, where he built temperature converters, landing pages, and personal websites.",
    education:
      "Himanshu is a final-year B.Tech CSE student at GEHU Bhimtal (2021-2025), with a focus on full-stack development, compiler tools, OCR, and AI.",
    resume:
      "You can download Himanshu's resume from the main page using the 'Download Resume' button!",
    contact:
      "You can reach Himanshu through the contact page, LinkedIn, GitHub, or Telegram. Check the contact section for all details!",
  };

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();

    if (lowerMessage.includes("skill") || lowerMessage.includes("technology") || lowerMessage.includes("tech stack")) {
      return predefinedResponses.skills;
    }
    if (lowerMessage.includes("project") || lowerMessage.includes("work") || lowerMessage.includes("built")) {
      return predefinedResponses.projects;
    }
    if (lowerMessage.includes("experience") || lowerMessage.includes("internship") || lowerMessage.includes("job")) {
      return predefinedResponses.experience;
    }
    if (lowerMessage.includes("education") || lowerMessage.includes("study") || lowerMessage.includes("college")) {
      return predefinedResponses.education;
    }
    if (lowerMessage.includes("resume") || lowerMessage.includes("cv")) {
      return predefinedResponses.resume;
    }
    if (lowerMessage.includes("contact") || lowerMessage.includes("reach") || lowerMessage.includes("connect")) {
      return predefinedResponses.contact;
    }

    return "That's a great question! I can help you with information about Himanshu's skills, projects, experience, education, or how to contact him. What would you like to know?";
  };

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);

    setTimeout(() => {
      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: generateResponse(inputValue),
        isUser: false,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
    }, 800);

    setInputValue("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") handleSendMessage();
  };

  return (
    <>
      {/* Floating Chat Button */}
      <Button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-10 right-8 w-14 h-14 rounded-full bg-gradient-primary shadow-glow-blue hover:shadow-glow-purple transition-all duration-300 animate-float z-[9999] ${
          isOpen ? "hidden" : "flex"
        }`}
        size="icon"
      >
        <MessageCircle size={24} />
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-10 right-8 w-80 h-96 bg-card border border-border shadow-2xl z-[9999] animate-fadeIn">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 border-b border-border">
            <CardTitle className="text-sm font-medium">
              Ask Himanshu's AI
            </CardTitle>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="h-6 w-6"
            >
              <X size={16} />
            </Button>
          </CardHeader>

          <CardContent className="flex flex-col h-full p-4 pt-0">
            <ScrollArea className="flex-1 pr-4">
              <div className="space-y-4">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex ${
                      message.isUser ? "justify-end" : "justify-start"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] p-3 rounded-lg text-sm ${
                        message.isUser
                          ? "bg-primary text-primary-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      {message.content}
                    </div>
                  </div>
                ))}
              </div>
            </ScrollArea>

            <div className="flex items-center space-x-2 pt-3">
              <Input
                placeholder="Ask anything..."
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                onKeyPress={handleKeyPress}
                className="flex-1"
              />
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="bg-primary hover:bg-primary/90"
              >
                <Send size={16} />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default FloatingChatbot;
