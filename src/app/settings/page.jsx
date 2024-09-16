/* eslint-disable react/jsx-no-undef */
"use client";
import React, { useState } from 'react';
import "./setting.css"
import ProfileEdit from './@Profileedite/page';
import Accountsetting from './@Accountsetting/page';
import NotificationSettings from './@NotificationSettings/page';
import SharingSettings from './@SharingSettings/page';
function Mainpagesettings() {
  const [selectedSetting, setSelectedSetting] = useState("AccountSettings");

  const renderContent = () => {
    switch (selectedSetting) {
      case "ProfileEdit":
        return <ProfileEdit />;
      case "AccountSettings":
        return <Accountsetting />;
      case "NotificationSettings":
        return <NotificationSettings />;
      case "SharingSettings":
        return <SharingSettings />;
      default:
        return "not found now"; // Default component
    }
  };

  return (
    <>
      <div className="account-settings-container">
        
        {/* Sidebar */}
        <div className="sidebarsetting">
          <h2>Settings</h2>
          <ul>
            <li onClick={() => setSelectedSetting("ProfileEdit")} className={selectedSetting === "ProfileEdit" ? "active" : ""}>
              Edit Profile
            </li>
            <li onClick={() => setSelectedSetting("AccountSettings")} className={selectedSetting === "AccountSettings" ? "active" : ""}>
              Account Settings
            </li>
            <li onClick={() => setSelectedSetting("StreamingServices")} className={selectedSetting === "StreamingServices" ? "active" : ""}>
              Streaming Services
            </li>
            <li onClick={() => setSelectedSetting("NotificationSettings")} className={selectedSetting === "NotificationSettings" ? "active" : ""}>
              Notification Settings
            </li>
            <li onClick={() => setSelectedSetting("SharingSettings")} className={selectedSetting === "SharingSettings" ? "active" : ""}>
              Sharing Settings
            </li>
            <li>Delete Account</li>
          </ul>
        </div>

        {/* Main Content */}
        <div className="main-content">
          {renderContent()}
        </div>
      </div>
    </>
  );
}

export default Mainpagesettings;
