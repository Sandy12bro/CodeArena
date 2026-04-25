"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useDashboard } from "../../context/DashboardContext";
import { X } from "lucide-react";

export default function ModalContainer() {
  const { activeModal, modalData, closeModal } = useDashboard();

  if (!activeModal) return null;

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="neo-card bg-[#141414] text-white w-full max-w-2xl max-h-[80vh] flex flex-col relative"
        >
          {/* Header */}
          <div className="flex justify-between items-center p-4 border-b-2 border-[#333]">
            <h2 className="text-xl font-black uppercase">{activeModal}</h2>
            <button 
              onClick={closeModal}
              className="p-1 neo-card neo-card-red hover:-translate-y-1 transition-transform"
            >
              <X size={20} />
            </button>
          </div>
          
          {/* Content Body */}
          <div className="p-6 overflow-y-auto flex-1">
            {activeModal === "Visualizer" && (
              <div className="text-center py-12">
                <p className="text-brand-blue font-bold text-lg mb-2">Interactive Code Execution Visualizer</p>
                <p className="text-muted">Loading visualization engine...</p>
              </div>
            )}
            
            {activeModal === "Sandbox" && (
              <div className="h-64 bg-[#0a0a0a] border-2 border-[#333] rounded-md flex items-center justify-center">
                <p className="font-mono text-brand-green">print("Hello World")</p>
              </div>
            )}
            
            {activeModal === "Error Explainer" && (
              <div className="space-y-4">
                <textarea 
                  className="w-full h-32 bg-[#111] border-2 border-[#333] text-white p-3 font-mono text-sm focus:border-brand-red outline-none rounded-md"
                  placeholder="Paste your error trace here..."
                ></textarea>
                <button className="neo-button neo-button-red w-full">Explain Error</button>
              </div>
            )}

            {activeModal === "AI Mentor" && (
              <div className="h-64 flex flex-col justify-end">
                <div className="bg-[#111] p-3 rounded-md border-2 border-brand-blue self-start max-w-[80%] mb-4">
                  <p className="text-sm font-bold">Hello! What coding concept can I help you with today?</p>
                </div>
                <div className="flex gap-2">
                  <input type="text" className="flex-1 bg-[#111] border-2 border-[#333] px-3 py-2 text-white" placeholder="Ask anything..." />
                  <button className="neo-button neo-button-blue">Send</button>
                </div>
              </div>
            )}

            {activeModal === "Stat Details" && modalData && (
              <div>
                <h3 className="text-2xl font-black text-brand-yellow mb-4">{modalData.title} Analytics</h3>
                <p className="text-lg">Current Value: <span className="font-bold">{modalData.value}</span></p>
                <div className="mt-8 h-32 bg-[#111] border-2 border-[#333] flex items-center justify-center">
                  <p className="text-muted font-bold">[Detailed Graph Placeholder]</p>
                </div>
              </div>
            )}

            {activeModal === "Notifications" && (
              <div className="space-y-4">
                {[
                  { text: "New challenge available: Debugging Recursion", time: "5m ago", type: "info" },
                  { text: "You earned +100 XP for daily login!", time: "1h ago", type: "success" },
                  { text: "System update scheduled for 2 AM", time: "3h ago", type: "info" }
                ].map((notif, i) => (
                  <div key={i} className="p-4 bg-[#111] border-2 border-[#333] rounded-md flex justify-between items-center">
                    <div>
                      <p className="font-bold">{notif.text}</p>
                      <p className="text-xs text-muted font-bold">{notif.time}</p>
                    </div>
                    <div className={`w-2 h-2 rounded-full ${notif.type === "success" ? "bg-brand-green" : "bg-brand-blue"}`}></div>
                  </div>
                ))}
              </div>
            )}

            {activeModal === "User Profile" && (
              <div className="space-y-6">
                <div className="flex items-center gap-6 p-4 bg-[#111] border-2 border-[#333] rounded-md">
                  <div className="w-20 h-20 bg-brand-blue rounded-full border-4 border-black flex items-center justify-center text-3xl font-black">
                    U
                  </div>
                  <div>
                    <h3 className="text-2xl font-black">User Explorer</h3>
                    <p className="text-muted font-bold">explorer@example.com</p>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-[#111] border-2 border-[#333] rounded-md">
                    <p className="text-xs text-muted font-bold uppercase">Account Status</p>
                    <p className="font-black text-brand-green">PRO MEMBER</p>
                  </div>
                  <div className="p-4 bg-[#111] border-2 border-[#333] rounded-md">
                    <p className="text-xs text-muted font-bold uppercase">Member Since</p>
                    <p className="font-black">APRIL 2026</p>
                  </div>
                </div>

                <div className="flex flex-col gap-2 pt-4">
                  <button className="neo-button neo-button-white w-full text-left flex justify-between items-center">
                    Account Settings <span className="text-xs">→</span>
                  </button>
                  <button className="neo-button neo-button-red w-full">
                    Logout
                  </button>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
