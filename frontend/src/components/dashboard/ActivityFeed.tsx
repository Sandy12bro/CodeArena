"use client";

import { CheckCircle, Award, Terminal, Star } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

const IconMap: any = {
  CheckCircle, Award, Terminal, Star
};

export default function ActivityFeed() {
  const { activities } = useDashboard();

  return (
    <div className="neo-card bg-white p-6 h-full min-h-[400px]">
      <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-2">
        <span className="w-2 h-8 bg-brand-green inline-block"></span>
        Activity Log
      </h2>
      <div className="space-y-4">
        {activities.length === 0 && (
          <p className="text-muted text-sm font-black uppercase tracking-widest">No signals detected yet...</p>
        )}
        
        {activities.map((act, i) => {
          const Icon = IconMap[act.icon] || Star;
          const isLatest = i === 0;
          return (
            <div key={i} className={`group relative transition-all duration-300`}>
              <div className={`flex gap-5 p-4 border-2 border-transparent transition-all rounded-md ${isLatest ? 'bg-yellow-50 border-yellow-400 border-l-4 shadow-[2px_2px_0px_rgba(0,0,0,0.1)]' : 'hover:bg-gray-50'}`}>
                <div className={`w-10 h-10 rounded-md bg-white border-2 border-black flex items-center justify-center shrink-0 z-10 shadow-[2px_2px_0px_#000] ${act.color}`}>
                  <Icon size={20} />
                </div>
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-1">
                    <p className={`font-black text-sm uppercase tracking-tight ${isLatest ? 'text-black' : 'text-black/80'}`}>{act.text}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-black/20"></span>
                    <p className="text-[10px] font-black text-muted uppercase tracking-[0.2em]">{act.time}</p>
                  </div>
                </div>
              </div>
              {i !== activities.length - 1 && (
                <div className="ml-9 border-l-2 border-dashed border-black/10 h-4 my-1"></div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
