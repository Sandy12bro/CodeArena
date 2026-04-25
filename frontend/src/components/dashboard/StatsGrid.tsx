"use client";

import { CheckCircle, Trophy, Clock, Star, Target, Calendar } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

export default function StatsGrid() {
  const { rank, accuracy, topics, openModal } = useDashboard();
  
  const conceptsCompleted = topics.filter(t => t.progress === 100).length;

  const stats = [
    { title: "Concepts", value: `${conceptsCompleted}/${topics.length}`, icon: CheckCircle, color: "text-brand-green", bg: "neo-card-dark" },
    { title: "Challenges", value: "142", icon: Trophy, color: "text-brand-yellow", bg: "neo-card-dark" },
    { title: "Hours", value: "38.5", icon: Clock, color: "text-brand-blue", bg: "neo-card-dark" },
    { title: "Rank", value: `#${rank}`, icon: Star, color: "text-brand-red", bg: "neo-card-dark" },
    { title: "Accuracy", value: `${accuracy}%`, icon: Target, color: "text-brand-green", bg: "neo-card-dark" },
    { title: "Weekly", value: "+12%", icon: Calendar, color: "text-brand-yellow", bg: "neo-card-dark" },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8">
      {stats.map((stat, i) => (
        <div 
          key={i} 
          onClick={() => openModal("Stat Details", stat)}
          className={`neo-card ${stat.bg} p-4 flex items-center gap-4 hover:-translate-y-1 transition-transform cursor-pointer group`}
        >
          <div className="p-3 bg-background rounded-lg border-2 border-border neo-shadow group-hover:bg-card">
            <stat.icon size={24} className={stat.color} />
          </div>
          <div>
            <p className="text-muted text-sm font-bold uppercase">{stat.title}</p>
            <p className="text-2xl font-black text-foreground">{stat.value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
