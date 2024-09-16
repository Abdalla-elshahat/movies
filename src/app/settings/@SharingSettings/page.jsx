
"use client"
import React, { useState } from 'react';
import '../@NotificationSettings/NotificationSettings.css'; // Create this CSS file for styles

const SharingSettings = () => {
  const [settings, setSettings] = useState({
    Favourite: false,
    Rated:false,
    watchlist: false,
    Automatically:true
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
      <h2>Sharing Settings</h2>
      <form onSubmit={handleSubmit}>
        <div className="section">
          <h3>Favorite List Settings</h3>
          <label>
            <input
              type="checkbox"
              name="Favorite"
              checked={settings.Favourite}
              onChange={handleCheckboxChange}
            />
            Share this list publicly?
          </label>
        </div>

        <div className="section">
          <h3>Rated List Settings</h3>
          <label>
            <input
              type="checkbox"
              name="Rated"
              checked={settings.Rated}
              onChange={handleCheckboxChange}
            />
           Share this list publicly?
          </label>
        </div>

        <div className="section">
          <h3>Watchlist Settings</h3>
          <label>
            <input
              type="checkbox"
              name="watchlist"
              checked={settings.watchlist}
              onChange={handleCheckboxChange}
            />
            Share this list publicly?
          </label>
          <label>
            <input 
              type="checkbox"
              name="Automatically"
              checked={settings.Automatically}
              onChange={handleCheckboxChange}
            />
            Automatically remove items when they are rated?
          </label>
        </div>

        <button type="submit" className="save">Save</button>
      </form>
    </div>
  );
};

export default SharingSettings;
