"use client";

import { Code, Bug, AlertTriangle, Box, Bot, BookOpen } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

export default function QuickActions() {
  const { openModal, searchQuery } = useDashboard();

  const actions = [
    { title: "Visualizer", icon: Code, color: "text-brand-blue", bg: "hover:bg-brand-blue hover:text-foreground" },
    { title: "Debug Playground", icon: Bug, color: "text-brand-red", bg: "hover:bg-brand-red hover:text-foreground" },
    { title: "Error Explainer", icon: AlertTriangle, color: "text-brand-yellow", bg: "hover:bg-brand-yellow hover:text-black" },
    { title: "Sandbox", icon: Box, color: "text-brand-green", bg: "hover:bg-brand-green hover:text-foreground" },
    { title: "AI Mentor", icon: Bot, color: "text-foreground", bg: "hover:bg-foreground hover:text-background" },
    { title: "Concept Library", icon: BookOpen, color: "text-brand-blue", bg: "hover:bg-brand-blue hover:text-foreground" },
  ];

  const filtered = actions.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-2">
        <span className="w-3 h-3 bg-brand-red rounded-full inline-block"></span>
        Quick Actions
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {filtered.map((action, i) => (
          <div 
            key={i} 
            onClick={() => openModal(action.title)}
            className={`neo-card neo-card-dark p-4 flex flex-col items-center justify-center gap-3 cursor-pointer transition-all duration-200 group ${action.bg}`}
          >
            <action.icon size={32} className={`${action.color} group-hover:text-current transition-colors`} />
            <span className="font-bold text-sm text-center">{action.title}</span>
          </div>
        ))}
        {filtered.length === 0 && (
          <p className="text-muted col-span-full">No actions found for "{searchQuery}"</p>
        )}
      </div>
    </div>
  );
}
