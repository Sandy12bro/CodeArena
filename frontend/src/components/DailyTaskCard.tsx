import { CheckSquare, Code, Brain } from "lucide-react";

export default function DailyTaskCard() {
  return (
    <div className="neo-card neo-card-blue p-6 flex flex-col justify-between h-full hover:-translate-y-2 hover:shadow-[8px_8px_0px_#000000]">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-black uppercase tracking-widest">Daily Target</h2>
        <CheckSquare size={32} />
      </div>

      <div className="space-y-4 flex-1">
        <div className="neo-card neo-card-dark p-4 flex items-start gap-4">
          <div className="bg-brand-yellow p-2 neo-border rounded-md text-black mt-1">
            <Brain size={20} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-brand-yellow mb-1">Aptitude Task</h3>
            <p className="text-sm font-medium text-white/90">Solve 5 Probability Problems from Level 2</p>
          </div>
        </div>

        <div className="neo-card neo-card-dark p-4 flex items-start gap-4">
          <div className="bg-brand-red p-2 neo-border rounded-md text-white mt-1">
            <Code size={20} />
          </div>
          <div>
            <h3 className="font-bold text-lg text-brand-red mb-1">Coding Task</h3>
            <p className="text-sm font-medium text-white/90">Implement Quick Sort in Python</p>
          </div>
        </div>
      </div>

      <button className="neo-button neo-button-yellow w-full mt-6 py-4 text-lg hidden sm:block">
        Mark as DONE
      </button>
      <button className="neo-button neo-button-yellow w-full mt-6 py-3 text-base sm:hidden">
        DONE
      </button>
    </div>
  );
}
