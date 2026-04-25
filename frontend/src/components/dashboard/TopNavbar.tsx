"use client";

import { Search, Bell, Sun, Moon, User } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";
import { useTheme } from "../../context/ThemeContext";

export default function TopNavbar() {
  const { searchQuery, setSearchQuery, openModal } = useDashboard();
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="w-full flex items-center justify-between mb-8 pb-4 border-b-2 border-border">
      <div className="flex-1">
        <div className="relative w-64">
          <input 
            type="text" 
            placeholder="Search resources..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card border-2 border-border text-foreground px-4 py-2 pl-10 rounded-md focus:outline-none focus:border-brand-blue transition-colors"
          />
          <Search className="absolute left-3 top-2.5 text-muted" size={18} />
        </div>
      </div>
      <div className="flex items-center gap-4">
        <button 
          onClick={() => openModal("Notifications")}
          className="p-2 neo-card hover:-translate-y-1 transition-all"
        >
          <Bell size={20} className="text-foreground" />
        </button>
        <button 
          onClick={toggleTheme}
          className="p-2 neo-card hover:-translate-y-1 transition-all"
        >
          {theme === "dark" ? <Sun size={20} className="text-brand-yellow" /> : <Moon size={20} className="text-brand-blue" />}
        </button>
        <div 
          onClick={() => openModal("User Profile")}
          className="flex items-center gap-3 neo-card px-4 py-1.5 cursor-pointer hover:-translate-y-1 transition-all"
        >
          <div className="w-8 h-8 bg-brand-blue border-2 border-black rounded-md flex items-center justify-center shadow-[2px_2px_0px_#000]">
            <User size={16} className="text-white" />
          </div>
          <span className="font-black text-xs uppercase tracking-widest leading-none">Profile</span>
        </div>
      </div>
    </div>
  );
}
