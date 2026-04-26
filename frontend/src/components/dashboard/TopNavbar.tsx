"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Search, Bell, Sun, Moon, User, LayoutDashboard, Terminal } from "lucide-react";
import { useDashboard } from "../../context/DashboardContext";
import { useTheme } from "../../context/ThemeContext";
import { useAuth } from "../../context/AuthContext";

export default function TopNavbar() {
  const pathname = usePathname();
  const { searchQuery, setSearchQuery, openModal, xp, level } = useDashboard();
  const { theme, toggleTheme } = useTheme();
  const { profilePic } = useAuth();

  const nextLevelXP = 1000;
  const currentLevelXP = xp % nextLevelXP;
  const progressPercent = (currentLevelXP / nextLevelXP) * 100;

  const navItems = [
    { href: "/dashboard", icon: LayoutDashboard, label: "Dashboard", color: "text-brand-blue" },
    { href: "/playground", icon: Terminal, label: "Playground", color: "text-brand-yellow" },
  ];

  return (
    <div className="w-full flex items-center justify-between mb-8 pb-4 border-b-4 border-black dark:border-white/20 sticky top-0 bg-background/80 backdrop-blur-md z-30 pt-4">
      {/* Left: Logo and Branding */}
      <Link href="/dashboard" className="flex items-center gap-3 group mr-8">
        <div className="w-10 h-10 bg-brand-yellow border-2 border-black flex items-center justify-center font-black text-xl shadow-[3px_3px_0px_#000] text-black group-hover:rotate-6 transition-transform">
          CA
        </div>
        <h1 className="text-2xl font-black tracking-tighter uppercase italic hidden lg:block">CodeArena</h1>
      </Link>

      {/* Middle-Left: Navigation Links */}
      <nav className="flex items-center gap-2 mr-auto">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link 
              key={item.href}
              href={item.href} 
              className={`flex items-center gap-2 px-4 py-2 neo-card transition-all hover:-translate-y-1 ${
                isActive 
                  ? `bg-foreground text-background border-primary scale-105` 
                  : `bg-card border-border opacity-70 hover:opacity-100`
              }`}
            >
              <item.icon size={16} className={isActive ? "" : item.color} />
              <span className="font-black text-[10px] uppercase tracking-widest hidden md:block">{item.label}</span>
            </Link>
          );
        })}
      </nav>

      {/* Middle-Right: Global Search */}
      <div className="flex-1 max-w-xs mx-4 hidden xl:block">
        <div className="relative">
          <input 
            type="text" 
            placeholder="Search resources..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-card border-2 border-border text-foreground px-4 py-2 pl-10 rounded-md focus:outline-none focus:border-brand-blue transition-colors shadow-[2px_2px_0px_#000] dark:shadow-none"
          />
          <Search className="absolute left-3 top-2.5 text-muted" size={18} />
        </div>
      </div>

      {/* Right: Stats, Actions & Profile */}
      <div className="flex items-center gap-3">
        {/* Progress Stats */}
        <div className="hidden sm:flex flex-col gap-1 min-w-[120px] mr-2">
          <div className="flex justify-between items-end">
            <span className="text-[8px] font-black uppercase tracking-tighter opacity-60">LVL: {level}</span>
            <span className="text-[8px] font-black uppercase tracking-tighter opacity-60">{xp} XP</span>
          </div>
          <div className="w-full h-2 bg-muted/20 border border-border rounded-full overflow-hidden">
            <div 
              className="bg-brand-blue h-full transition-all duration-1000" 
              style={{ width: `${progressPercent}%` }}
            ></div>
          </div>
        </div>

        <button 
          onClick={() => openModal("Notifications")}
          className="p-2 neo-card hover:-translate-y-1 transition-all bg-card border-border"
        >
          <Bell size={18} className="text-foreground" />
        </button>
        <button 
          onClick={toggleTheme}
          className="p-2 neo-card hover:-translate-y-1 transition-all bg-card border-border"
        >
          {theme === "dark" ? <Sun size={18} className="text-brand-yellow" /> : <Moon size={18} className="text-brand-blue" />}
        </button>
        <div 
          onClick={() => openModal("User Profile")}
          className="flex items-center gap-3 neo-card px-3 py-1.5 cursor-pointer hover:-translate-y-1 transition-all bg-brand-blue text-white border-black shadow-[3px_3px_0px_#000]"
        >
          <div className="w-7 h-7 bg-white border-2 border-black rounded-md overflow-hidden flex items-center justify-center">
            {profilePic ? (
              <img src={profilePic} alt="P" className="w-full h-full object-cover" />
            ) : (
              <User size={14} className="text-black" />
            )}
          </div>
          <span className="font-black text-[10px] uppercase tracking-widest leading-none hidden lg:block">Profile</span>
        </div>
      </div>
    </div>
  );
}
