export default function ProgressBar() {
  return (
    <div className="neo-card neo-card-dark p-6 w-full">
      <div className="flex justify-between items-end mb-4">
        <div>
          <h2 className="text-xl font-black uppercase tracking-widest text-brand-yellow">Level Progress</h2>
          <p className="text-sm font-bold text-muted mt-1">Next rank: Master (1000 XP)</p>
        </div>
        <div className="text-2xl font-black text-white">450 <span className="text-brand-yellow text-lg">XP</span></div>
      </div>
      
      <div className="w-full bg-[#111] h-8 neo-border rounded-lg relative overflow-hidden">
        {/* Animated stripes background using CSS linear-gradient */}
        <div 
          className="h-full bg-brand-blue border-r-2 border-black w-[45%] transition-all duration-1000 ease-out" 
        >
          {/* Add a subtle shine effect entirely in Tailwind */}
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%,transparent_100%)] bg-[length:2rem_2rem] animate-[progress-move_1s_linear_infinite]"
               style={{ width: "45%" }}
          ></div>
        </div>
      </div>
    </div>
  );
}
