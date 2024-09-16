"use client"
import React, { useState } from 'react';
import './NotificationSettings.css'; // Create this CSS file for styles

const NotificationSettings = () => {
  const [settings, setSettings] = useState({
    newsUpdates: true,
    apiUpdates: true,
    repliesToThreads: true,
    autoWatchThreads: false,
    watchlistReleases: true,
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setSettings((prevSettings) => ({
      ...prevSettings,
      [name]: checked,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here (e.g., save settings to API or local storage)
    console.log('Settings saved:', settings);
  };

  return (
    <div className="notifications-settings">
      <h2>Notifications</h2>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <h3>General</h3>
          <label>
            <input
              type="checkbox"
              name="newsUpdates"
              checked={settings.newsUpdates}
              onChange={handleCheckboxChange}
            />
            Email me about news & product updates
          </label>
          <label>
            <input
              type="checkbox"
              name="apiUpdates"
              checked={settings.apiUpdates}
              onChange={handleCheckboxChange}
            />
            Email me about API changes and updates
          </label>
        </div>

        <div className="section">
          <h3>Discussions</h3>
          <label>
            <input
              type="checkbox"
              name="repliesToThreads"
              checked={settings.repliesToThreads}
              onChange={handleCheckboxChange}
            />
            Email me about new replies for threads that I am watching?
          </label>
          <label>
            <input
              type="checkbox"
              name="autoWatchThreads"
              checked={settings.autoWatchThreads}
              onChange={handleCheckboxChange}
            />
            Automatically watch threads I create or reply to?
          </label>
        </div>

        <div className="section">
          <h3>Watchlist</h3>
          <label>
            <input
              type="checkbox"
              name="watchlistReleases"
              checked={settings.watchlistReleases}
              onChange={handleCheckboxChange}
            />
            Email me about new releases on my watchlist? <span className="coming-soon">(coming soon!)</span>
          </label>
        </div>

        <button type="submit" className="save">Save</button>
      </form>
    </div>
  );
};

export default NotificationSettings;
