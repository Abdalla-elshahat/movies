"use client"; // Ensure this component is treated as a client-side component
import React, { useContext, useEffect, useState } from "react";
import "./editeprofile.css";
import { FaInstagram, FaTwitter, FaTiktok, FaYoutube, FaGithub, FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { MdDone } from "react-icons/md";
import { ProfileContext } from "/src/compnenets/Profilestate";
import { BsFillCloudUploadFill } from "react-icons/bs";
import { GoDesktopDownload } from "react-icons/go";
import { DOMAIN } from "@/utels/consts";
import Link from "next/link";

const ProfileEdit = () => {
  const { profile, setProfile } = useContext(ProfileContext);

  // Initialize state with profile values
  const [email, setEmail] = useState(profile?.email || "@abdallaelshaht");
  const [avatar, setAvatar] = useState(profile?.avatar || "");
  const [bg, setBg] = useState(profile?.bg || "");
  const [accentColor, setAccentColor] = useState(profile?.accentColor || "#ff0055");
  const [gender, setGender] = useState(profile?.gender || "");
  const [name, setName] = useState(profile?.name || "");
  const [description, setDescription] = useState(profile?.description || "");
  const [socials, setSocials] = useState(profile?.socials || {
    facebook: "",
    instagram: "",
    twitter: "",
    tiktok: "",
    youtube: "",
    linkedin: "",
    github: "",
  });


  const [username, setUsername] = useState(null);

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


  // Handle file input changes
  const handleFileChange = (setter) => (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setter(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };
  // Handle save button click
  const handleSave = () => {
    setProfile({ email, avatar, bg, accentColor, gender, name, description, socials });
    console.log("Profile updated:", { email, avatar, bg, accentColor, gender, name, description, socials });
  };

  return (
    <div className="profile-edit">
      <h2>Edit Profile</h2>
      <form action="">
        <div className="profile-actions">
          <button className="btn">Change Password</button>
          <button className="btn">Change Email</button>
        </div>

        <div className="profile-section">
          <label>Email</label>
          <input type="email" value={username} readOnly className="profile-input" />

          <div className="avatar-section">
            <p>Current Avatar</p>
            <span className="avatar">{avatar ? <img src={avatar} alt="Avatar" /> : "No avatar found."}</span>
            <a>
              <label htmlFor="avatarload" className="iconload"><BsFillCloudUploadFill/></label>
              <input type="file" id="avatarload" onChange={handleFileChange(setAvatar)} />
              Upload Your Own?
            </a>
            <span> • </span>
          </div>

          <div className="background-section">
            <p>Background Image</p>
            <span className="avatar">{bg ? <img src={bg} alt="bg" /> : "No background found."}</span>
            <a>
            <label htmlFor="bgload"  className="iconload"><GoDesktopDownload/></label>
              <input type="file" id="bgload" onChange={handleFileChange(setBg)} />
              Set a background image?
            </a>
          </div>

          <div className="accent-color-section">
            <p>Accent Color</p>
            <div className="color-options">
              {[
                "#007bff",
                "#00c7ff",
                "#00ffd1",
                "#00ff80",
                "#aa55ff",
                "#7f7f7f",
                "#ffb500",
                "#ff0055",
                "#ff00ff",
              ].map((color) => (
                <div
                  key={color}
                  className={`color-circle ${color === accentColor ? "selected" : ""}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setAccentColor(color)}
                >
                  {color === accentColor && <MdDone className="done-icon" />}
                </div>
              ))}
            </div>
          </div>

          <div className="form-row border-1">
            <label>Gender</label>
            <select value={gender} onChange={(e) => setGender(e.target.value)}>
              <option value="">-</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
            </select>

            <label>Name</label>
            <input
              type="text"
              value={name}
              placeholder="Enter your name..."
              onChange={(e) => setName(e.target.value)}
              className="profile-input"
            />
          </div>

          <div className="form-row">
            <label>Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="profile-textarea"
            />
          </div>

          <div className="social-section">
            <div>
              <label>
                <FaFacebook /> Facebook
              </label>
              <input
                type="text"
                value={socials.facebook}
                placeholder="Your Facebook..."
                onChange={(e) => setSocials({ ...socials, facebook: e.target.value })}
                className="profile-input"
              />
            </div>
            <div>
              <label>
                <FaInstagram /> Instagram
              </label>
              <input
                type="text"
                value={socials.instagram}
                placeholder="Your Instagram..."
                onChange={(e) => setSocials({ ...socials, instagram: e.target.value })}
                className="profile-input"
              />
            </div>
            <div>
              <label>
                <FaGithub /> Git & GitHub
              </label>
              <input
                type="text"
                value={socials.github}
                placeholder="Your GitHub..."
                onChange={(e) => setSocials({ ...socials, github: e.target.value })}
                className="profile-input"
              />
            </div>
            <div>
              <label>
                <FaTwitter /> Twitter
              </label>
              <input
                type="text"
                value={socials.twitter}
                placeholder="Your Twitter..."
                onChange={(e) => setSocials({ ...socials, twitter: e.target.value })}
                className="profile-input"
              />
            </div>
            <div>
              <label>
                <FaTiktok /> TikTok
              </label>
              <input
                type="text"
                value={socials.tiktok}
                placeholder="Your TikTok..."
                onChange={(e) => setSocials({ ...socials, tiktok: e.target.value })}
                className="profile-input"
              />
            </div>
            <div>
              <label>
                <FaLinkedin /> LinkedIn
              </label>
              <input
                type="text"
                value={socials.linkedin}
                placeholder="Your LinkedIn..."
                onChange={(e) => setSocials({ ...socials, linkedin: e.target.value })}
                className="profile-input"
              />
            </div>
            <div>
              <label>
                <FaYoutube /> YouTube
              </label>
              <input
                type="text"
                value={socials.youtube}
                placeholder="Your YouTube..."
                onChange={(e) => setSocials({ ...socials, youtube: e.target.value })}
                className="profile-input"
              />
            </div>
          </div>
        </div>
      </form>
      <p>
      <Link href={"/profile"}><button className="save" onClick={handleSave}>Save</button></Link> 
      </p>
    </div>
  );
};

export default ProfileEdit;
