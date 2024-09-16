"use client"; // Ensures this component is client-side

import { createContext, useEffect, useState } from "react";

export const Procontext = createContext();

function Watchlist({ children }) {
  const [watchlist, setwatch] = useState(() => {
    // Retrieve initial state from local storage or set to an empty array
    if (typeof window !== "undefined") {
      const savedWatchlist = localStorage.getItem("watchlist");
      return savedWatchlist ? JSON.parse(savedWatchlist) : [];
    }
    return [];
  });

  useEffect(() => {
    // Save watchlist state to local storage whenever it changes
    if (typeof window !== "undefined") {
      localStorage.setItem("watchlist", JSON.stringify(watchlist));
    }
  }, [watchlist]);

  return (
    <Procontext.Provider value={{ watchlist, setwatch }}>
      {children}
    </Procontext.Provider>
  );
}

export default Watchlist;
