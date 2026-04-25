import { Trophy } from "lucide-react";

const LEADERBOARD_DATA = [
  { rank: 1, name: "Alex Chen", xp: 1250, badge: "Grandmaster" },
  { rank: 2, name: "Sarah J.", xp: 1100, badge: "Master" },
  { rank: 3, name: "Mike T.", xp: 950, badge: "Diamond" },
  { rank: 4, name: "You", xp: 450, badge: "Explorer", isUser: true },
];

export default function Leaderboard() {
  return (
    <div className="flex flex-col gap-4">
      {LEADERBOARD_DATA.map((user) => (
        <div 
          key={user.rank} 
          className={`flex items-center justify-between p-4 border-2 border-border rounded-md transition-all hover:scale-[1.02] ${
            user.isUser ? "bg-brand-yellow text-black border-black shadow-[4px_4px_0px_#000]" : "bg-background/50"
          }`}
        >
          <div className="flex items-center gap-4">
            <span className={`font-black text-lg w-6 flex justify-center ${user.rank === 1 ? 'text-brand-red text-2xl' : 'opacity-40'}`}>
              {user.rank}
            </span>
            <div className="w-10 h-10 rounded-md border-2 border-border bg-card flex justify-center items-center font-black text-xs">
              {user.name.charAt(0)}
            </div>
            <div>
              <p className="font-black uppercase tracking-tight text-sm">{user.name}</p>
              <p className="text-[9px] font-black opacity-50 uppercase tracking-widest">{user.badge}</p>
            </div>
          </div>
          <div className="font-black text-right">
            {user.xp} <span className="text-[10px] opacity-60">XP</span>
          </div>
        </div>
      ))}
    </div>
  );
}
