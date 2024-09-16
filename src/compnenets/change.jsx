import React, { useEffect } from "react";
import i18n from "i18next";
import {  initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import HttpApi from "i18next-http-backend";
import cookies from "js-cookie";
import Lang from "./buttonlang";

// Define the i18nextOptions object with necessary configuration
const i18nextOptions = {
  fallbackLng: "en", // Default language if no language is detected
  detection: {
    order: [
      "cookie",
      "htmlTag",
      "querystring",
      "localStorage",
      "sessionStorage",
      "navigator",
      "path",
      "subdomain",
    ], // How to detect the language
    caches: ["cookie"], // Save the selected language in cookies
  },
  backend: {
    loadPath: "/locales/{{lng}}/translation.json", // Path to translation files
  },
  interpolation: {
    escapeValue: false, // React handles XSS automatically, no need for escaping
  },
};

// Initialize i18next using the i18nextOptions
i18n
  .use(initReactI18next) // Pass i18next instance to react-i18next
  .use(LanguageDetector) // Detects user language
  .use(HttpApi) // Load translation files via HTTP
  .init(i18nextOptions); // Pass the options

function I18napp() {
  const currentLang = cookies.get("i18next") || "en"; // Get the current language from cookies or default to "en"

  // UseEffect to update document direction based on language
  useEffect(() => {
    document.documentElement.dir = i18n.dir(); // Update the 'dir' attribute based on the language direction
  }, [currentLang]); // Trigger effect when current language changes

  return (
    <>   
    </>
  );
}

export default I18napp;
