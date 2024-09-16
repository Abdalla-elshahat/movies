"use client"; // Ensure this component is treated as a client-side component

import React, { useContext, useEffect } from 'react';
import './stats.css';
import {ProfileContext} from "/src/compnenets/Profilestate";

const Stats = () => {
  const { profile } = useContext(ProfileContext);

  useEffect(() => {
    if (profile.accentColor) {
      document.documentElement.style.setProperty("--profile-color", profile.accentColor);
    }
  }, [profile.accentColor]);

  return (
    <div className="stats">
      <div className="stat-item">
        <h3>Total Edits</h3>
        <p>1</p>
      </div>
      <div className="stat-item">
        <h3>Total Ratings</h3>
        <p>0</p>
      </div>
      <div className="rating-overview">
        <h3>Rating Overview</h3>
        <div className="chart-placeholder">
          
        </div>
      </div>
    </div>
  );
};

export default Stats;
