"use client"
import React, { useContext } from 'react';
import './descion.css';
import { FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { ProfileContext } from "/src/compnenets/Profilestate";

const Discussions = () => { 
  const { profile } = useContext(ProfileContext); 

  return (
    <div className="discussions">
      <h2>DATA:</h2>
      <div className="blod">
        <p>Email: <span>{profile.email}</span></p>
        <p>Gender: <span>{profile.gender}</span></p>
        <p>Name: <span>{profile.name}</span></p>
        <p>Description: <span>{profile.description}</span></p>
      </div>

      <div className="blod">
        <h2>Socials:</h2>
        <p><FaFacebook className='fa'/><a href={profile.socials.facebook} target="_blank" rel="noopener noreferrer"><span>{profile.socials.facebook}</span></a></p>
        <p><FaInstagram className='in'/><a href={profile.socials.instagram} target="_blank" rel="noopener noreferrer"><span>{profile.socials.instagram}</span></a></p>
        <p><FaTwitter className='tw'/><a href={profile.socials.twitter} target="_blank" rel="noopener noreferrer"><span>{profile.socials.twitter}</span></a></p>
        <p><FaGithub className='gi'/><a href={profile.socials.github} target="_blank" rel="noopener noreferrer"><span>{profile.socials.github}</span></a></p>
        <p><FaTiktok className='ti'/><a href={profile.socials.tiktok} target="_blank" rel="noopener noreferrer"><span>{profile.socials.tiktok}</span></a></p>
        <p><FaYoutube className='yo'/><a href={profile.socials.youtube} target="_blank" rel="noopener noreferrer"><span>{profile.socials.youtube}</span></a></p>
        <p><FaLinkedin className='li'/><a href={profile.socials.linkedin} target="_blank" rel="noopener noreferrer"><span>{profile.socials.linkedin}</span></a></p>
      </div>
    </div>
  );
};

export default Discussions;
