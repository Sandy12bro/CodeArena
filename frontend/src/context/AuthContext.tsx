"use client";

import React, { createContext, useContext, useEffect, useState } from "react";
import { onAuthStateChanged, User, signOut } from "firebase/auth";
import { auth } from "../lib/firebase";
import { useRouter } from "next/navigation";

interface AuthContextType {
  user: User | null;
  loading: boolean;
  profilePic: string | null;
  updateProfilePic: (pic: string | null) => void;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType>({ 
  user: null, 
  loading: true,
  profilePic: null,
  updateProfilePic: () => {},
  logout: async () => {} 
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);
  const [profilePic, setProfilePic] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setLoading(false);
      
      // Load profile pic from localStorage if it exists
      if (firebaseUser) {
        const savedPic = localStorage.getItem(`profilePic_${firebaseUser.uid}`);
        setProfilePic(savedPic);
      } else {
        setProfilePic(null);
      }
    });

    return () => unsubscribe();
  }, []);

  const updateProfilePic = (pic: string | null) => {
    if (user) {
      if (pic) {
        localStorage.setItem(`profilePic_${user.uid}`, pic);
      } else {
        localStorage.removeItem(`profilePic_${user.uid}`);
      }
      setProfilePic(pic);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  return (
    <AuthContext.Provider value={{ user, loading, profilePic, updateProfilePic, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
