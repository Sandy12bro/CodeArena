"use client";

import { CheckCircle, Award, Terminal, Star } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

const IconMap: any = {
  CheckCircle, Award, Terminal, Star
};

export default function ActivityFeed() {
  const { activities } = useDashboard();

  return (
    <div className="neo-card p-6 h-full min-h-[400px]">
      <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-2">
        <span className="w-2 h-8 bg-brand-green inline-block"></span>
        Activity Log
      </h2>
      <div className="space-y-4">
        {activities.length === 0 && (
          <p className="opacity-50 text-sm font-black uppercase tracking-widest text-center py-10">No signals detected yet...</p>
        )}
        
        {activities.map((act, i) => {
          const Icon = IconMap[act.icon] || Star;
          const isLatest = i === 0;
          return (
            <div key={i} className={`group relative transition-all duration-300`}>
              <div className={`flex gap-5 p-4 border-2 border-transparent transition-all rounded-md ${isLatest ? 'bg-brand-yellow/10 border-brand-yellow/50 border-l-4' : 'hover:bg-foreground/5'}`}>
                <div className={`w-10 h-10 rounded-md bg-background border-2 border-border flex items-center justify-center shrink-0 z-10 shadow-[2px_2px_0px_#000] ${act.color}`}>
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className={`font-black text-sm uppercase tracking-tight`}>{act.text}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-foreground/20"></span>
                    <p className="text-[10px] font-black opacity-50 uppercase tracking-[0.2em]">{act.time}</p>
                  </div>
                </div>
              </div>
              {i !== activities.length - 1 && (
                <div className="ml-9 border-l-2 border-dashed border-border/20 h-4 my-1"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
