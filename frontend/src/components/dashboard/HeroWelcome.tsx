"use client";

import { Flame } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

export default function HeroWelcome({ userName }: { userName: string }) {
  const { xp, level, streak, topics } = useDashboard();
  
  // Find the first unfinished topic to recommend
  const nextTopic = topics.find(t => t.progress < 100 && !t.locked) || topics[0];

  return (
    <div className="neo-card-blue p-8 relative overflow-hidden mb-8">
      {/* Decorative brutalist background element (hard shadows/shapes, no blur) */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-brand-yellow border-l-4 border-b-4 border-black -translate-y-1/4 translate-x-1/4 rotate-12"></div>
      
      <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <h1 className="text-4xl md:text-5xl font-black uppercase tracking-wider drop-shadow-[4px_4px_0px_#000000] mb-2 text-white">
            Welcome back, {userName} 👋
          </h1>
          <p className="text-xl font-bold mb-6 text-white uppercase tracking-wide">
            Ready to conquer your next coding challenge?
          </p>
          <a href="#continue-learning" className="neo-button neo-button-yellow text-lg px-8 py-3 inline-block">
            Continue {nextTopic.title}
          </a>
        </div>
        
        <div className="flex gap-4">
          <div className="neo-card-dark p-4 text-center min-w-[100px]">
            <p className="text-brand-yellow font-black text-xs mb-1 uppercase tracking-tighter">Level</p>
            <p className="text-3xl font-black">{level}</p>
          </div>
          <div className="neo-card-dark p-4 text-center min-w-[100px]">
            <p className="text-brand-blue font-black text-xs mb-1 uppercase tracking-tighter">XP</p>
            <p className="text-3xl font-black">{xp}</p>
          </div>
          <div className="neo-card-red p-4 text-center min-w-[100px] flex flex-col items-center">
            <p className="text-white font-black text-xs mb-1 uppercase tracking-tighter flex items-center gap-1">
              Streak <Flame size={14} />
            </p>
            <p className="text-3xl font-black text-white">{streak}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
