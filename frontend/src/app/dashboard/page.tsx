"use client";

import ProtectedRoute from "../../components/ProtectedRoute";
import Sidebar from "../../components/Sidebar";
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

// Modals and Toasts
import ToastContainer from "../../components/dashboard/Toast";
import ModalContainer from "../../components/dashboard/Modal";

function DashboardContent() {
  const { user } = useAuth();
  const userName = user?.displayName?.split(" ")[0] || "Maker";

  return (
    <div className="flex min-h-screen bg-background text-foreground">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        <div className="max-w-7xl mx-auto relative">
          <TopNavbar />
          
          <HeroWelcome userName={userName} />
          
          <StatsGrid />
          
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 flex flex-col gap-8">
              <ProgressTracker />
              <ContinueLearning />
              <QuickActions />
              <DailyChallenge />
              <MentorSuggestions />
            </div>
            
            <div className="lg:col-span-1 flex flex-col gap-8">
              <ActivityFeed />
              <div className="neo-card neo-card-dark p-6">
                <h2 className="text-xl font-black uppercase mb-6 border-b-2 border-border pb-2">
                  Top Performers
                </h2>
                <Leaderboard />
              </div>
            </div>
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
