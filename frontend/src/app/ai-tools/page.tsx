"use client";

import ProtectedRoute from "../../components/ProtectedRoute";
import Sidebar from "../../components/Sidebar";
import { FileText, MessageSquare, Lightbulb, CodeSquare } from "lucide-react";

export default function AIToolsPage() {
  const tools = [
    {
      title: "Resume Analyzer",
      description: "Drop your PDF and let our AI roast your resume. Get actionable feedback on exactly what hiring managers are filtering out.",
      icon: FileText,
      borderColor: "border-brand-blue",
      bgColor: "bg-brand-blue",
      shadowColor: "hover:shadow-[6px_6px_0px_#3B82F6]",
      iconColor: "text-white",
      status: "Available"
    },
    {
      title: "Mock Interviewer",
      description: "Practice answering behavioral and technical questions against a relentless AI recruiter tailored to your target company.",
      icon: MessageSquare,
      borderColor: "border-brand-red",
      bgColor: "bg-brand-red",
      shadowColor: "hover:shadow-[6px_6px_0px_#EF4444]",
      iconColor: "text-white",
      status: "Beta"
    },
    {
      title: "Project Idea Generator",
      description: "Stuck in tutorial hell? Generate production-ready project architectures tailored specifically to your current stack.",
      icon: Lightbulb,
      borderColor: "border-brand-yellow",
      bgColor: "bg-brand-yellow",
      shadowColor: "hover:shadow-[6px_6px_0px_#FACC15]",
      iconColor: "text-black",
      status: "Available"
    },
    {
      title: "Code Review Bot",
      description: "Paste your spaghetti code and get an instant, brutal code review enforcing extreme best practices and optimization principles.",
      icon: CodeSquare,
      borderColor: "border-white",
      bgColor: "bg-white",
      shadowColor: "hover:shadow-[6px_6px_0px_#fff]",
      iconColor: "text-black",
      status: "Coming Soon"
    }
  ];

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-6xl mx-auto space-y-8">
            <header className="mb-8 border-b-2 border-[#333] pb-6">
              <h1 className="text-4xl font-black uppercase tracking-widest text-white drop-shadow-[2px_2px_0px_#EF4444]">
                The AI Forge
              </h1>
              <p className="text-muted font-bold mt-4 text-lg">
                Supercharge your career prep with merciless AI assistants.
              </p>
            </header>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {tools.map((tool, index) => (
                <div 
                  key={index} 
                  className={`neo-card bg-[#1f1f1f] p-8 flex flex-col justify-between ${tool.borderColor} hover:-translate-y-2 ${tool.shadowColor} transition-all`}
                >
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <div className={`w-14 h-14 ${tool.bgColor} neo-border rounded-full flex items-center justify-center shadow-[2px_2px_0px_#000]`}>
                        <tool.icon className={tool.iconColor} size={28} />
                      </div>
                      <span className={`text-xs font-black uppercase tracking-widest px-3 py-1 neo-border ${
                        tool.status === "Available" ? "bg-brand-green text-black" : 
                        tool.status === "Beta" ? "bg-brand-yellow text-black" : 
                        "bg-[#333] text-white"
                      }`}>
                        {tool.status}
                      </span>
                    </div>
                    
                    <h2 className="text-2xl font-black text-white uppercase tracking-widest mb-3">
                      {tool.title}
                    </h2>
                    <p className="text-muted font-bold leading-relaxed mb-8">
                      {tool.description}
                    </p>
                  </div>

                  <button 
                    disabled={tool.status === "Coming Soon"}
                    className={`neo-button w-full py-4 text-lg ${
                      tool.status === "Coming Soon" 
                        ? "bg-[#333] text-gray-500 cursor-not-allowed shadow-none border-[#444]" 
                        : "bg-white text-black hover:-translate-y-1 block shadow-[4px_4px_0px_#000]"
                    }`}
                  >
                    {tool.status === "Coming Soon" ? "LOCKED" : "LAUNCH TOOL"}
                  </button>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
