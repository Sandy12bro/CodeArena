import { Trophy } from "lucide-react";

const LEADERBOARD_DATA = [
  { rank: 1, name: "Alex Chen", xp: 1250, badge: "Grandmaster" },
  { rank: 2, name: "Sarah J.", xp: 1100, badge: "Master" },
  { rank: 3, name: "Mike T.", xp: 950, badge: "Diamond" },
  { rank: 4, name: "You", xp: 450, badge: "Explorer", isUser: true },
];

export default function Leaderboard() {
  return (
    <div className="neo-card neo-card-white p-6 h-full flex flex-col hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000000]">
      <div className="flex items-center gap-3 mb-6 pb-4 border-b-2 border-border">
        <Trophy size={28} className="text-brand-yellow drop-shadow-[2px_2px_0px_rgba(0,0,0,1)]" />
        <h2 className="text-2xl font-black uppercase tracking-widest text-foreground">Top Performers</h2>
      </div>

      <div className="flex flex-col gap-3 flex-1">
        {LEADERBOARD_DATA.map((user) => (
          <div 
            key={user.rank} 
            className={`flex items-center justify-between p-3 neo-border rounded-md ${
              user.isUser ? "bg-brand-yellow shadow-[2px_2px_0px_#000000]" : "bg-card"
            }`}
          >
            <div className="flex items-center gap-3">
              <span className={`font-black text-lg w-6 flex justify-center ${user.rank === 1 ? 'text-brand-red text-xl' : 'text-foreground'}`}>
                {user.rank}
              </span>
              <div className="w-8 h-8 rounded-full neo-border bg-muted/20 flex justify-center items-center font-bold text-xs text-foreground">
                {user.name.charAt(0)}
              </div>
              <div>
                <p className="font-bold text-foreground text-sm">{user.name}</p>
                <p className="text-xs font-bold text-muted uppercase tracking-wider">{user.badge}</p>
              </div>
            </div>
            <div className="font-black text-foreground">
              {user.xp} <span className="text-xs">XP</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
