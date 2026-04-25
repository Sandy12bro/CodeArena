export default function ProgressTracker() {
  return (
    <div className="neo-card p-6">
      <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-2">
        <span className="w-2 h-8 bg-brand-blue inline-block"></span>
        Learning Progress
      </h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Concepts Completion Bar */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <p className="font-black text-xs uppercase tracking-widest opacity-60">Overall Path Progress</p>
            <p className="text-brand-blue font-black text-2xl">48%</p>
          </div>
          <div className="w-full h-5 bg-background border-2 border-border rounded-full overflow-hidden">
            <div className="h-full bg-brand-blue w-[48%] relative">
              <div className="absolute inset-0 opacity-20" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)" }}></div>
            </div>
          </div>
          <p className="text-[10px] opacity-50 font-black uppercase tracking-widest text-right">Keep going! You are almost halfway there.</p>
        </div>

        {/* Weekly Heatmap Placeholder */}
        <div>
          <p className="font-black text-xs uppercase tracking-widest opacity-60 mb-4">Weekly Heatmap</p>
          <div className="grid grid-cols-7 gap-2">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
              <div key={i} className="text-center font-black text-[10px] opacity-40 mb-1">{day}</div>
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <div 
                key={`d-${i}`} 
                className={`aspect-square border-2 border-border rounded-sm transition-all hover:scale-110 cursor-pointer ${i < 4 ? "bg-brand-green" : i === 4 ? "bg-brand-green/30" : "bg-background"}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
