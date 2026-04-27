"use client";

import { Code, Bug, AlertTriangle, Box, Bot, BookOpen } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

export default function QuickActions() {
  const { openModal, searchQuery } = useDashboard();

  const actions = [
    { title: "Visualizer", icon: Code, color: "text-brand-blue", tint: "bg-brand-blue/5 hover:bg-brand-blue/15", accent: "border-brand-blue", shadow: "hover:shadow-[6px_6px_0px_#1d4ed8]" },
    { title: "Debugger", icon: Bug, color: "text-brand-red", tint: "bg-brand-red/5 hover:bg-brand-red/15", accent: "border-brand-red", shadow: "hover:shadow-[6px_6px_0px_#b91c1c]" },
    { title: "Explainer", icon: AlertTriangle, color: "text-brand-yellow", tint: "bg-brand-yellow/5 hover:bg-brand-yellow/15", accent: "border-brand-yellow", shadow: "hover:shadow-[6px_6px_0px_#ca8a04]" },
    { title: "Sandbox", icon: Box, color: "text-brand-green", tint: "bg-brand-green/5 hover:bg-brand-green/15", accent: "border-brand-green", shadow: "hover:shadow-[6px_6px_0px_#047857]" },
    { title: "Mentor", icon: Bot, color: "text-brand-blue", tint: "bg-brand-blue/5 hover:bg-brand-blue/15", accent: "border-brand-blue", shadow: "hover:shadow-[6px_6px_0px_#1d4ed8]" },
    { title: "Library", icon: BookOpen, color: "text-brand-blue", tint: "bg-brand-blue/5 hover:bg-brand-blue/15", accent: "border-brand-blue", shadow: "hover:shadow-[6px_6px_0px_#1d4ed8]" },
  ];

  const filtered = actions.filter(a => a.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="mb-10">
      <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-2">
        <span className="w-2 h-8 bg-brand-red inline-block"></span>
        Quick Actions
      </h2>
      <div className="flex gap-8 overflow-x-auto pb-6 no-scrollbar touch-pan-x">
        {filtered.map((action, i) => (
          <div 
            key={i} 
            onClick={() => openModal(action.title)}
            className={`neo-card min-w-[180px] ${action.tint} ${action.accent} p-8 flex flex-col items-center justify-center gap-5 cursor-pointer transition-all duration-200 hover:-translate-y-2 ${action.shadow} group rounded-md`}
          >
            <div className="p-4 bg-card border-2 border-border rounded-md group-hover:rotate-6 transition-transform shadow-[3px_3px_0px_#000]">
              <action.icon size={32} className={action.color} />
            </div>
            <span className="font-black text-xs uppercase tracking-[0.2em] text-center opacity-70 group-hover:opacity-100">{action.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
