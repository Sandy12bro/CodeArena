"use client";

import { Flame } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

export default function HeroWelcome({ userName }: { userName: string }) {
  const { xp, level, streak, topics } = useDashboard();
  
  // Find the first unfinished topic to recommend
  const nextTopic = topics.find(t => t.progress < 100 && !t.locked) || topics[0];

  return (
    <div className="neo-card bg-brand-blue p-8 relative overflow-hidden mb-8">
      <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full -translate-y-1/2 translate-x-1/4 blur-2xl"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider drop-shadow-[2px_2px_0px_#000000] mb-2">
            Welcome back, {userName} 👋
          </h1>
          <p className="text-xl font-bold mb-6">
            Ready to conquer your next coding challenge?
          </p>
          <a href="#continue-learning" className="neo-button neo-button-yellow text-lg px-8 py-3 inline-block">
            Continue {nextTopic.title}
          </a>
        </div>
        
        <div className="flex gap-4">
          <div className="neo-card bg-card p-4 text-center min-w-[100px] border-border">
            <p className="text-brand-yellow font-bold text-sm mb-1">LEVEL</p>
            <p className="text-2xl font-black">{level}</p>
          </div>
          <div className="neo-card bg-card p-4 text-center min-w-[100px] border-border">
            <p className="text-brand-blue font-bold text-sm mb-1">XP</p>
            <p className="text-2xl font-black">{xp}</p>
          </div>
          <div className="neo-card bg-[#1a1a1a] p-4 text-center min-w-[100px] border-black flex flex-col items-center">
            <p className="text-brand-red font-bold text-sm mb-1 flex items-center gap-1">
              STREAK <Flame size={14} />
            </p>
            <p className="text-2xl font-black">{streak}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
