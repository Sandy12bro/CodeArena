"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronUp } from "lucide-react";
import ProtectedRoute from "../../components/ProtectedRoute";
import { useAuth } from "../../context/AuthContext";
import { DashboardProvider } from "../../context/DashboardContext";

// Components
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

// Overlays
import ToastContainer from "../../components/dashboard/Toast";
import ModalContainer from "../../components/dashboard/Modal";

function DashboardContent() {
  const { user } = useAuth();
  const userName = user?.displayName?.split(" ")[0] || "Maker";
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 400);
      
      // Update active section based on scroll position
      const sections = ["welcome", "learning", "actions", "challenge", "mentor", "social"];
      const current = sections.findIndex(id => {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          return rect.top >= -100 && rect.top <= 300;
        }
        return false;
      });
      if (current !== -1) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string | number) => {
    if (typeof id === "number") {
      const sectionIds = ["welcome", "learning", "actions", "challenge", "mentor", "social"];
      id = sectionIds[id];
    }
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  const sections = [
    { 
      id: "welcome", 
      content: (
        <div className="max-w-7xl mx-auto">
          <HeroWelcome userName={userName} />
          <div className="mt-12">
            <StatsGrid />
          </div>
        </div>
      )
    },
    { 
      id: "learning", 
      content: (
        <div className="max-w-7xl mx-auto flex flex-col gap-12">
          <ProgressTracker />
          <ContinueLearning />
        </div>
      )
    },
    { 
      id: "actions", 
      content: (
        <div className="max-w-7xl mx-auto">
          <QuickActions />
        </div>
      )
    },
    { 
      id: "challenge", 
      content: (
        <div className="max-w-5xl mx-auto">
          <DailyChallenge />
        </div>
      )
    },
    { 
      id: "mentor", 
      content: (
        <div className="max-w-7xl mx-auto">
          <MentorSuggestions />
        </div>
      )
    },
    { 
      id: "social", 
      content: (
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-1">
            <ActivityFeed />
          </div>
          <div className="lg:col-span-1">
            <FeedbackSection />
          </div>
          <div className="lg:col-span-1 neo-card p-8 h-full">
            <h2 className="text-xl font-black uppercase mb-8 flex items-center gap-3">
              <span className="w-3 h-8 bg-brand-blue inline-block"></span>
              Top Performers
            </h2>
            <Leaderboard />
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="flex min-h-screen bg-background text-foreground font-sans selection:bg-brand-yellow selection:text-black">
      <Sidebar activeSection={activeSection} scrollTo={(idx) => scrollTo(idx)} />
      
      <main className="flex-1 flex flex-col min-w-0 relative">
        {/* Sticky Header */}
        <header className="sticky top-0 z-40 bg-background/80 backdrop-blur-md border-b-2 border-black/5 dark:border-white/5 p-6 md:p-8">
          <div className="max-w-7xl mx-auto">
            <TopNavbar />
          </div>
        </header>

        {/* Scrollable Content */}
        <div className="flex flex-col space-y-24 py-16">
          {sections.map((section) => (
            <motion.section
              key={section.id}
              id={section.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="w-full px-6 md:px-12"
            >
              {section.content}
            </motion.section>
          ))}
        </div>

        {/* Footer Area */}
        <footer className="py-20 border-t-2 border-border mt-20 bg-card/30">
          <div className="max-w-7xl mx-auto px-8 text-center">
            <p className="font-black uppercase tracking-widest opacity-40 text-xs">CodeArena // Next-Gen Learning Engine</p>
          </div>
        </footer>

        {/* Back to Top Button */}
        <AnimatePresence>
          {showBackToTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.5, y: 20 }}
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="fixed bottom-10 right-10 z-50 neo-button bg-brand-yellow text-black w-14 h-14 flex items-center justify-center p-0 rounded-full shadow-[4px_4px_0px_#000]"
            >
              <ChevronUp size={28} />
            </motion.button>
          )}
        </AnimatePresence>
      </main>

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
