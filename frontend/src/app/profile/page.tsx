"use client";

import React, { useRef } from "react";
import ProtectedRoute from "../../components/ProtectedRoute";
import TopNavbar from "../../components/dashboard/TopNavbar";
import { useAuth } from "../../context/AuthContext";
import { User, Upload, Trash2 } from "lucide-react";

export default function ProfilePage() {
  const { user, logout, profilePic, updateProfilePic } = useAuth();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        alert("Image must be less than 2MB");
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        updateProfilePic(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const triggerUpload = () => {
    fileInputRef.current?.click();
  };

  const removePic = () => {
    if (confirm("Remove profile picture?")) {
      updateProfilePic(null);
    }
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-background text-foreground font-sans transition-colors duration-500 overflow-x-hidden">
        <main className="w-full p-4 md:p-10">
          <div className="max-w-7xl mx-auto relative content-animate">
            <TopNavbar />
            <div className="max-w-4xl mx-auto space-y-8">
            <header className="mb-8 border-b-2 border-border pb-6">
              <h1 className="text-4xl font-black uppercase tracking-widest text-foreground drop-shadow-[2px_2px_0px_#EF4444]">
                YOUR PROFILE
              </h1>
            </header>

            <div className="neo-card p-8">
              <div className="flex flex-col md:flex-row gap-10 items-center md:items-start">
                {/* Profile Picture Section */}
                <div className="space-y-4 flex flex-col items-center">
                  <div className="w-48 h-48 bg-card border-4 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_#000] relative group">
                    {profilePic ? (
                      <img 
                        src={profilePic} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center bg-brand-blue/10">
                        <User size={80} className="text-brand-blue opacity-50" />
                      </div>
                    )}
                  </div>
                  
                  <div className="flex gap-2">
                    <input 
                      type="file" 
                      ref={fileInputRef}
                      onChange={handleFileChange}
                      accept="image/*"
                      className="hidden"
                    />
                    <button 
                      onClick={triggerUpload}
                      className="p-2 neo-card bg-brand-yellow hover:-translate-y-1 transition-all flex items-center gap-2"
                      title="Upload Picture"
                    >
                      <Upload size={18} />
                      <span className="font-black text-[10px] uppercase">Upload</span>
                    </button>
                    {profilePic && (
                      <button 
                        onClick={removePic}
                        className="p-2 neo-card bg-brand-red hover:-translate-y-1 transition-all flex items-center gap-2"
                        title="Remove Picture"
                      >
                        <Trash2 size={18} />
                        <span className="font-black text-[10px] uppercase text-white">Remove</span>
                      </button>
                    )}
                  </div>
                </div>

                {/* Profile Details Section */}
                <div className="flex-1 space-y-6 w-full">
                  <div>
                    <h3 className="opacity-60 font-black text-xs uppercase tracking-widest">Operator Name</h3>
                    <p className="text-xl font-black mt-1 bg-background border-2 border-border p-4">
                      {user?.displayName || "Anonymous User"}
                    </p>
                  </div>
                  <div>
                    <h3 className="opacity-60 font-black text-xs uppercase tracking-widest">Signal Endpoint</h3>
                    <p className="text-xl font-black mt-1 bg-background border-2 border-border p-4">
                      {user?.email || "No Email linked"}
                    </p>
                  </div>
                  
                  <div className="pt-6 border-t-2 border-border mt-8">
                    <button 
                      onClick={logout}
                      className="neo-button neo-card-red py-3 px-8 text-lg font-black tracking-widest hover:-translate-y-1 block"
                    >
                      LOG OUT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </ProtectedRoute>
  );
}
