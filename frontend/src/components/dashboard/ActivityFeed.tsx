"use client";

import { CheckCircle, Award, Terminal, Star } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

const IconMap: any = {
  CheckCircle, Award, Terminal, Star
};

export default function ActivityFeed() {
  const { activities } = useDashboard();

  return (
    <div className="neo-card neo-card-dark p-6 h-full min-h-[300px]">
      <h2 className="text-xl font-black uppercase mb-6 border-b-2 border-[#333] pb-2">
        Recent Activity
      </h2>
      <div className="space-y-6">
        {activities.length === 0 && (
          <p className="text-muted text-sm font-bold">No activity yet. Start learning!</p>
        )}
        
        {activities.map((act, i) => {
          const Icon = IconMap[act.icon] || Star;
          return (
            <div key={i} className="flex gap-4 relative">
              {i !== activities.length - 1 && (
                <div className="absolute left-[11px] top-8 bottom-[-24px] w-[2px] bg-[#333]"></div>
              )}
              <div className={`w-6 h-6 rounded-full bg-[#111] border-2 border-black flex items-center justify-center z-10 ${act.color}`}>
                <Icon size={12} />
              </div>
              <div>
                <p className="font-bold">{act.text}</p>
                <p className="text-xs font-bold text-muted mt-1">{act.time}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
