"use client"
import React, { useContext, useEffect, useState } from 'react';
import './header.css';
import Link from 'next/link';
import { ProfileContext } from "/src/compnenets/Profilestate";
const Header = () => {
  const [username, setUsername] = useState(null);
  const { profile, setProfile } = useContext(ProfileContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleImageClick = () => {
    setIsOpen(true);
  };

  const handleCloseClick = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    // Fetch the username from the API route
    const fetchUserData = async () => {
      try {
        const response = await fetch(`${DOMAIN}/api/get-cookie`);
        if (response.ok) {
          const data = await response.json();
          setUsername(data.username);
          console.log(data)
        } else {
          console.error("Failed to fetch user data");
        }
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    fetchUserData();
  }, []);
  return (
    <div className="headerprofile">
      <div className="profile-picture">
        <div className="color-circle">
          <span className="initial">{profile.avatar?<img src={profile.avatar} alt=""  onClick={handleImageClick}/> :username[0]}</span>
          {isOpen && (
        <div className="popup">
          <div className="popup-content">
            <button className="close-btn" onClick={handleCloseClick}>X</button>
            <img src={profile.avatar} alt={""} className="popup-image" />
          </div>
        </div>
      )}
        </div>
      </div>
      <div className="profile-info">
      <h1> {profile.name}</h1>
        <p>Member since July 2024</p>
      </div>
      <div className="scores">
        <div className="score">
          <span>65%</span>
          <p>Average Movie Score</p>
        </div>
        <div className="score">
          <span>24%</span>
          <p>Average TV Score</p>
        </div>
      </div>
    </div>
  );
};

export default Header;
