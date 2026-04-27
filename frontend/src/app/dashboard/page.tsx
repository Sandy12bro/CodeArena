"use client";

import { useRef, useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ProtectedRoute from "../../components/ProtectedRoute";
import { useAuth } from "../../context/AuthContext";
import { DashboardProvider } from "../../context/DashboardContext";

// New Dashboard Components
import TopNavbar from "../../components/dashboard/TopNavbar";
import HeroWelcome from "../../components/dashboard/HeroWelcome";
import StatsGrid from "../../components/dashboard/StatsGrid";
import ProgressTracker from "../../components/dashboard/ProgressTracker";
import ContinueLearning from "../../components/dashboard/ContinueLearning";
import QuickActions from "../../components/dashboard/QuickActions";
import DailyChallenge from "../../components/dashboard/DailyChallenge";
import MentorSuggestions from "../../components/dashboard/MentorSuggestions";
import ActivityFeed from "../../components/dashboard/ActivityFeed";
import Leaderboard from "../../components/Leaderboard";
import Sidebar from "../../components/Sidebar";
import FeedbackSection from "../../components/dashboard/FeedbackSection";

// Modals and Toasts
import ToastContainer from "../../components/dashboard/Toast";
import ModalContainer from "../../components/dashboard/Modal";

function DashboardContent() {
  const { user } = useAuth();
  const userName = user?.displayName?.split(" ")[0] || "Maker";
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    { 
      id: "welcome", 
      title: "Home",
      content: (
        <div className="max-w-6xl w-full mx-auto">
          <HeroWelcome userName={userName} />
          <div className="mt-8">
            <StatsGrid />
          </div>
        </div>
      )
    },
    { 
      id: "learning", 
      title: "Learning",
      content: (
        <div className="max-w-6xl w-full mx-auto flex flex-col gap-10">
          <ProgressTracker />
          <ContinueLearning />
        </div>
      )
    },
    { 
      id: "actions", 
      title: "Actions",
      content: (
        <div className="max-w-6xl w-full mx-auto">
          <QuickActions />
        </div>
      )
    },
    { 
      id: "challenge", 
      title: "Daily",
      content: (
        <div className="max-w-4xl w-full mx-auto">
          <DailyChallenge />
        </div>
      )
    },
    { 
      id: "mentor", 
      title: "Mentor",
      content: (
        <div className="max-w-6xl w-full mx-auto">
          <MentorSuggestions />
        </div>
      )
    },
    { 
      id: "social", 
      title: "Social",
      content: (
        <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
          <div className="lg:col-span-1">
            <ActivityFeed />
          </div>
          <div className="lg:col-span-1">
            <FeedbackSection />
          </div>
          <div className="lg:col-span-1 neo-card p-7 h-full">
            <h2 className="text-xl font-black uppercase mb-6 flex items-center gap-2">
              <span className="w-2 h-8 bg-brand-blue inline-block"></span>
              Top Performers
            </h2>
            <Leaderboard />
          </div>
        </div>
      )
    }
  ];

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    const onWheel = (e: WheelEvent) => {
      if (e.deltaY === 0) return;
      // Prevent default to control scrolling behavior
      const isHorizontalScrollable = e.shiftKey || Math.abs(e.deltaX) > Math.abs(e.deltaY);
      if (!isHorizontalScrollable) {
        e.preventDefault();
        el.scrollLeft += e.deltaY * 2;
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        scrollTo(Math.min(activeSection + 1, sections.length - 1));
      } else if (e.key === "ArrowLeft") {
        scrollTo(Math.max(activeSection - 1, 0));
      }
    };

    const onScroll = () => {
      const sectionWidth = el.offsetWidth;
      const current = Math.round(el.scrollLeft / sectionWidth);
      if (current !== activeSection) setActiveSection(current);
    };

    el.addEventListener("wheel", onWheel, { passive: false });
    el.addEventListener("scroll", onScroll);
    window.addEventListener("keydown", handleKeyDown);
    
    return () => {
      el.removeEventListener("wheel", onWheel);
      el.removeEventListener("scroll", onScroll);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [activeSection, sections.length]);

  const scrollTo = (index: number) => {
    if (scrollRef.current) {
      scrollRef.current.scrollTo({
        left: index * scrollRef.current.offsetWidth,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="flex h-screen overflow-hidden bg-background text-foreground font-sans transition-colors duration-500">
      <Sidebar activeSection={activeSection} scrollTo={scrollTo} />
      
      <main className="flex-1 relative flex flex-col min-w-0">
        <div className="absolute top-0 left-0 right-0 z-30 p-10 pointer-events-none">
          <div className="max-w-7xl mx-auto pointer-events-auto">
            <TopNavbar />
          </div>
        </div>

        {/* Scroll Progress Bar */}
        <div className="absolute top-0 left-0 w-full h-1 z-50 bg-border/20">
          <motion.div 
            className="h-full bg-brand-yellow shadow-[0_0_10px_#facc15]"
            initial={{ width: 0 }}
            animate={{ width: `${((activeSection + 1) / sections.length) * 100}%` }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        </div>

        {/* Horizontal Scroll Container */}
        <div 
          ref={scrollRef}
          className="flex-1 flex overflow-x-auto overflow-y-hidden snap-x snap-mandatory scroll-smooth no-scrollbar touch-pan-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {sections.map((section, idx) => (
            <section 
              key={section.id}
              className="min-w-full h-full snap-start flex flex-col justify-center px-10 pt-32 pb-24 shrink-0 transition-opacity duration-500"
              style={{ 
                opacity: activeSection === idx ? 1 : 0.2,
                transform: `scale(${activeSection === idx ? 1 : 0.95})`,
                transition: "all 0.8s cubic-bezier(0.16, 1, 0.3, 1)"
              }}
            >
              <div className="w-full flex-1 flex flex-col justify-center">
                <AnimatePresence mode="wait">
                  {activeSection === idx && (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
                      animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
                      exit={{ opacity: 0, y: -40, filter: "blur(10px)" }}
                      transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                      className="w-full h-full flex flex-col justify-center"
                    >
                      {section.content}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </section>
          ))}
        </div>

        {/* Scroll Hint Indicator */}
        <div className="absolute bottom-10 right-10 z-40 flex items-center gap-4 pointer-events-none">
          <span className="text-[10px] font-black uppercase tracking-[0.3em] text-foreground/40">Scroll to explore</span>
          <div className="w-20 h-[2px] bg-border/30 relative overflow-hidden">
            <motion.div 
              className="absolute inset-0 bg-brand-yellow"
              animate={{ x: [-80, 80] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
            />
          </div>
        </div>
      </main>

      {/* Global Interactive Overlays */}
      <ToastContainer />
      <ModalContainer />
    </div>
  );
}

export default function Dashboard() {
  return (
    <ProtectedRoute>
      <DashboardProvider>
        <DashboardContent />
      </DashboardProvider>
    </ProtectedRoute>
  );
}
