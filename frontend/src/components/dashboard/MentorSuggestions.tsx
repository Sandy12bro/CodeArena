"use client";

import { Sparkles, ArrowRight } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

export default function MentorSuggestions() {
  const { openModal } = useDashboard();

  const suggestions = [
    { title: "Practice loops today", desc: "You struggled slightly with while loops yesterday.", type: "Focus", modal: "Sandbox" },
    { title: "You are ready for functions", desc: "Your basic syntax knowledge is solid enough to move on.", type: "Next Step", modal: "AI Mentor" },
    { title: "Improve debugging speed", desc: "Try using the Error Explainer on your next bug.", type: "Tip", modal: "Error Explainer" },
  ];

  return (
    <div className="mb-8">
      <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-2">
        <span className="w-3 h-3 bg-brand-blue rounded-full inline-block"></span>
        AI Mentor Insights
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {suggestions.map((sug, i) => (
          <div 
            key={i} 
            onClick={() => openModal(sug.modal)}
            className="neo-card neo-card-dark p-5 border-brand-blue/30 relative overflow-hidden group hover:border-brand-blue hover:-translate-y-1 cursor-pointer"
          >
            <div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-30 transition-opacity text-brand-blue">
              <Sparkles size={48} />
            </div>
            <div className="relative z-10">
              <span className="text-xs font-bold text-brand-blue uppercase border border-brand-blue px-2 py-0.5 rounded-sm inline-block mb-3 bg-black">
                {sug.type}
              </span>
              <h3 className="font-black text-lg mb-2">{sug.title}</h3>
              <p className="text-sm text-muted font-bold">{sug.desc}</p>
              
              <div className="mt-4 flex items-center gap-1 text-brand-blue font-bold text-sm opacity-0 group-hover:opacity-100 transition-opacity transform -translate-x-2 group-hover:translate-x-0">
                Take Action <ArrowRight size={14} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
