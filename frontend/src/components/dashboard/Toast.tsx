"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useDashboard } from "../../context/DashboardContext";
import { CheckCircle, AlertTriangle, Info } from "lucide-react";

export default function ToastContainer() {
  const { toasts } = useDashboard();

  return (
    <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, x: 50, scale: 0.9 }}
            animate={{ opacity: 1, x: 0, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
            className={`neo-card px-4 py-3 flex items-center gap-3 font-bold text-sm min-w-[250px] shadow-[4px_4px_0px_#000000]
              ${toast.type === "success" ? "bg-brand-green text-black" : 
                toast.type === "error" ? "bg-brand-red text-white" : "bg-white text-black"}`}
          >
            {toast.type === "success" && <CheckCircle size={18} />}
            {toast.type === "error" && <AlertTriangle size={18} />}
            {toast.type === "info" && <Info size={18} />}
            {toast.message}
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
