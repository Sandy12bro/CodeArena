export default function ProgressTracker() {
  return (
    <div className="neo-card neo-card-dark p-6 mb-8">
      <h2 className="text-2xl font-black uppercase mb-6 flex items-center gap-2">
        <span className="w-3 h-3 bg-brand-blue rounded-full inline-block"></span>
        Learning Progress
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Concepts Completion Bar */}
        <div className="space-y-4">
          <div className="flex justify-between items-end">
            <p className="font-bold">Overall Course Progress</p>
            <p className="text-brand-blue font-black text-xl">48%</p>
          </div>
          <div className="w-full h-6 bg-[#111] neo-border rounded-full overflow-hidden">
            <div className="h-full bg-brand-blue w-[48%] relative">
              <div className="absolute inset-0 bg-white/20" style={{ backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(0,0,0,0.1) 10px, rgba(0,0,0,0.1) 20px)" }}></div>
            </div>
          </div>
          <p className="text-sm text-muted font-bold text-right">Keep going! You are almost halfway there.</p>
        </div>

        {/* Weekly Heatmap Placeholder */}
        <div>
          <p className="font-bold mb-4">Weekly Heatmap</p>
          <div className="grid grid-cols-7 gap-2">
            {["M", "T", "W", "T", "F", "S", "S"].map((day, i) => (
              <div key={i} className="text-center font-bold text-xs text-muted mb-1">{day}</div>
            ))}
            {Array.from({ length: 7 }).map((_, i) => (
              <div 
                key={`d-${i}`} 
                className={`aspect-square neo-border rounded-sm ${i < 4 ? "bg-brand-green" : i === 4 ? "bg-brand-green/50" : "bg-[#111]"}`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
