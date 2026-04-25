"use client";

import ProtectedRoute from "../../components/ProtectedRoute";
import Sidebar from "../../components/Sidebar";
import { useAuth } from "../../context/AuthContext";

export default function ProfilePage() {
  const { user, logout } = useAuth();

  return (
    <ProtectedRoute>
      <div className="flex min-h-screen bg-background">
        <Sidebar />
        <main className="flex-1 p-8 overflow-y-auto">
          <div className="max-w-4xl mx-auto space-y-8">
            <header className="mb-8 border-b-2 border-[#333] pb-6">
              <h1 className="text-4xl font-black uppercase tracking-widest text-white drop-shadow-[2px_2px_0px_#EF4444]">
                YOUR PROFILE
              </h1>
            </header>

            <div className="neo-card bg-[#1f1f1f] border-brand-yellow p-8">
              <div className="space-y-6">
                <div>
                  <h3 className="text-muted font-bold text-sm uppercase tracking-widest">Name</h3>
                  <p className="text-xl font-black text-white mt-1 bg-background neo-border p-4">
                    {user?.displayName || "Anonymous User"}
                  </p>
                </div>
                <div>
                  <h3 className="text-muted font-bold text-sm uppercase tracking-widest">Email</h3>
                  <p className="text-xl font-black text-white mt-1 bg-background neo-border p-4">
                    {user?.email || "No Email linked"}
                  </p>
                </div>
                
                <div className="pt-6 border-t-2 border-[#333] mt-8">
                  <button 
                    onClick={logout}
                    className="neo-button neo-card-red py-3 px-8 text-lg font-black tracking-widest hover:-translate-y-1 block shadow-[4px_4px_0px_#000]"
                  >
                    LOG OUT
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </ProtectedRoute>
  );
}
