import { Flame } from "lucide-react";

export default function StreakCard() {
  return (
    <div className="neo-card neo-card-yellow p-6 flex flex-col justify-between h-full hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000000]">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-2xl font-black uppercase tracking-widest">Current Streak</h2>
        <Flame size={32} className="text-brand-red animate-pulse" fill="#EF4444" />
      </div>
      <div className="flex items-end gap-2">
        <span className="text-7xl font-black leading-none tracking-tighter">12</span>
        <span className="text-xl font-bold mb-2">Days</span>
      </div>
      <div className="mt-6">
        <span className="neo-card neo-card-white px-3 py-1 text-sm font-bold shadow-[2px_2px_0px_#000000]">
          🔥 5 Day Streak Badge
        </span>
      </div>
    </div>
  );
}
