"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    // If auth state resolved and no user present, bounce them automatically
    if (!loading && !user) {
      router.replace("/");
    }
  }, [user, loading, router]);

  // Loading wrapper to prevent a sudden layout flash while checking the Firebase token
  if (loading || !user) {
    return (
      <div className="min-h-screen bg-background flex justify-center items-center font-black text-white uppercase tracking-widest text-2xl drop-shadow-[2px_2px_0px_#EF4444]">
        Securing connection...
      </div>
    );
  }

  return <>{children}</>;
}
