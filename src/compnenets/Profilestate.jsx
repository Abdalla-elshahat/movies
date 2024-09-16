"use client";
import { createContext, useEffect, useState } from 'react';
export const ProfileContext = createContext();
 function ProfileProvider  ({ children })  {
  const [profile, setProfile] = useState(() => {
    if (typeof window !== "undefined") {
      const savedprofile = localStorage.getItem("profile");
      return savedprofile ? JSON.parse(savedprofile) : [];
    }
    return [];
  });
  useEffect(() => {
    // Save play state to local storage whenever it changes
    if (typeof window !== "undefined") {
      localStorage.setItem("profile", JSON.stringify(profile));
    }
  }, [profile]);
  return (
    <ProfileContext.Provider value={{ profile, setProfile }}>
      {children}
    </ProfileContext.Provider>
  );
};
export default ProfileProvider;
