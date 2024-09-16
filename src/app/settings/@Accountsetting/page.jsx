"use client"; // To ensure the component runs on the client side

import React, { useState } from 'react';
import Select from 'react-select';
import "./Accountsetting.css";
import { country } from "/public/counters/country"; // Assuming 'country' is an array of country objects

function AccountSettings() {
  // State to hold form values
  const [settings, setSettings] = useState({
    defaultLanguage: 'English (en-US)',
    fallbackLanguage: 'None (Don\'t Fallback)',
    country: 'Egypt',
    timezoneAutoDetect: true,
    includeAdultItems: false,
    filterProfanity: true,
    enableKeyboardShortcuts: true,
  });

  const [selectedCountry, setSelectedCountry] = useState(null);

  // Handle input change
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSettings((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle country change
  const handleCountryChange = (selectedOption) => {
    setSelectedCountry(selectedOption);
    setSettings((prev) => ({
      ...prev,
      country: selectedOption.label
    }));
  };

  // Custom rendering for options in the Select dropdown
  const customOption = (props) => {
    const { data, innerRef, innerProps } = props;
    return (
      <div ref={innerRef} {...innerProps} style={{ display: 'flex', alignItems: 'center',cursor:"pointer" }}>
        <img
          src={`https://flagsapi.com/${data.code}/flat/32.png`}
          alt={`Flag of ${data.label}`}
          style={{ marginRight: 10, width: 24, height: 24 }}
        />
        {data.label}
      </div>
    );
  };

  // Custom rendering for the selected value
  const customSingleValue = ({ data }) => (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      <img
        src={`https://flagsapi.com/${data.code}/flat/32.png`}
        alt={`Flag of ${data.label}`}
        style={{ marginRight: 10, width: 24, height: 24 }}
      />
      {data.label}
    </div>
  );

  return (
    <div className="account-settings">
      <h2>Account Settings</h2>
      <form>
        <div className="form-group">
          <label>Default Language</label>
          <select name="defaultLanguage" value={settings.defaultLanguage} onChange={handleInputChange}>
            <option value="English (en-US)">English (en-US)</option>
            <option value="Arabic (ar-EG)">Arabic (ar-EG)</option>
            {/* Add more languages */}
          </select>
        </div>

        <div className="form-group">
          <label>Fallback Language</label>
          <select name="fallbackLanguage" value={settings.fallbackLanguage} onChange={handleInputChange}>
            <option value="None">None (Dont Fallback)</option>
            <option value="English (en-US)">English (en-US)</option>
            {/* Add more fallback languages */}
          </select>
        </div>

        <div className="form-group">
          <label>Country</label>
          <Select
            options={country.map((c) => ({
              value: c.code,
              label: c.country,
              code: c.code
            }))}
            value={selectedCountry}
            onChange={handleCountryChange}
            components={{
              Option: customOption,
              SingleValue: customSingleValue,
            }}
          />
        </div>

        <div className="form-group">
          <label>Timezone - Auto detect?</label>
          <input
            type="checkbox"
            name="timezoneAutoDetect"
            checked={settings.timezoneAutoDetect}
            onChange={handleInputChange}
          />
        </div>

        <div className="form-group">
          <label>Include Adult Items in Search?</label>
          <select name="includeAdultItems" value={settings.includeAdultItems} onChange={handleInputChange}>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
        </div>

        <div className="form-group">
          <label>Filter Profanity?</label>
          <select name="filterProfanity" value={settings.filterProfanity} onChange={handleInputChange}>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
        </div>

        <div className="form-group">
          <label>Enable Keyboard Shortcuts?</label>
          <select name="enableKeyboardShortcuts" value={settings.enableKeyboardShortcuts} onChange={handleInputChange}>
            <option value="YES">YES</option>
            <option value="NO">NO</option>
          </select>
        </div>

        <button type="submit" className="save">Save</button>
      </form>
    </div>
  );
}

export default AccountSettings;
