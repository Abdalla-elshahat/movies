"use client";  // Ensure client-side rendering
import { useState } from "react";
import { useTranslation } from "react-i18next";
import "./buttonlang.css"
const LanguageSwitcher = () => {
  const { i18n } = useTranslation();
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  // List of languages with their codes and display names
  const languages = [
    { code: "en", name: "English (en-US)" },
    { code: "ar", name: "Arabic (ar-SA)" },
    { code: "es", name: "Spanish (es-ES)" },
    { code: "fr", name: "French (fr-FR)" },
    { code: "de", name: "German (de-DE)" },
    { code: "it", name: "Italian (it-IT)" },
    { code: "ch", name: "Chinese (ch-CH)" },
    // Add more languages here...
  ];

  // Filter languages based on the search term
  const filteredLanguages = languages.filter((lang) =>
    lang.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const changeLanguage = (code) => {
    i18n.changeLanguage(code);
    setShowDropdown(false);
  };

  return (
    <div className="language-switcher">
      <button className="language-switcher-button"  onClick={() => setShowDropdown(!showDropdown)}>
        {i18n.language.toUpperCase()}
      </button>
      {showDropdown && (
        <div className="dropdownss">
          <input className="dropdowninput"
            type="text"
            placeholder="Search language..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <div className="language-list">
            {filteredLanguages.length > 0 ? (
              filteredLanguages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => changeLanguage(lang.code)}
                >
                  {lang.name}
                </button>
              ))
            ) : (
              <p>No results found</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSwitcher;
