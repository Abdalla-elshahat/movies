"use client"; // Ensures this component is client-side

import { createContext, useEffect, useState } from "react";

export const PlayContext = createContext();

function Playlist({ children }) {
  const [play, setplay] = useState(() => {
    // Retrieve initial state from local storage or set to an empty array
    if (typeof window !== "undefined") {
      const savedPlay = localStorage.getItem("play");
      return savedPlay ? JSON.parse(savedPlay) : [];
    }
    return [];
  });

  useEffect(() => {
    // Save play state to local storage whenever it changes
    if (typeof window !== "undefined") {
      localStorage.setItem("play", JSON.stringify(play));
    }
  }, [play]);

  return (
    <PlayContext.Provider value={{ play, setplay }}>
      {children}
    </PlayContext.Provider>
  );
}

export default Playlist;
