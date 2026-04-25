"use client";

import { Play } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";

export default function ContinueLearning() {
  const { topics, updateTopicProgress, searchQuery } = useDashboard();

  // Filter based on global search
  const filteredTopics = topics.filter(t => t.title.toLowerCase().includes(searchQuery.toLowerCase()));

  return (
    <div className="mb-8" id="continue-learning">
      <h2 className="text-2xl font-black uppercase mb-4 flex items-center gap-2">
        <span className="w-3 h-3 bg-brand-yellow rounded-full inline-block"></span>
        Continue Learning
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {filteredTopics.map((topic, i) => (
          <div key={i} className={`neo-card neo-card-dark p-5 flex flex-col justify-between ${topic.locked ? "opacity-50 grayscale" : "hover:-translate-y-1 transition-transform"}`}>
            <div>
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-black text-lg">{topic.title}</h3>
                <span className="font-bold text-sm text-muted">{topic.progress}%</span>
              </div>
              <div className="w-full h-3 bg-background neo-border rounded-full overflow-hidden mb-6">
                <div 
                  className={`h-full ${topic.color} transition-all duration-500`} 
                  style={{ width: `${topic.progress}%` }}
                ></div>
              </div>
            </div>
            <button 
              onClick={() => updateTopicProgress(topic.title, 20)}
              className={`neo-button w-full flex items-center justify-center gap-2 ${
                topic.locked ? "bg-card text-muted cursor-not-allowed border-border" : 
                topic.progress === 100 ? "bg-brand-green text-black" : "neo-button-white text-sm py-1.5"
              }`}
              disabled={topic.locked || topic.progress === 100}
            >
              {topic.locked ? "Locked" : topic.progress === 100 ? "Completed" : "Resume"} 
              {!topic.locked && topic.progress < 100 && <Play size={14} />}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
