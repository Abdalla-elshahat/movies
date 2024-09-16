"use client";
import { API_key } from "@/utels/consts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { IoChevronBackOutline } from "react-icons/io5";
import "./Certifications.css";
import "/src/app/TVShow/[type]/TVShow.css";
import { useTranslation } from "react-i18next";

function Certifications() {
  const { t } =useTranslation();  // Initialize the translation function
  const [data, setData] = useState([]);
  const [cat, setCat] = useState(""); // This state holds the selected category
  const [type, setType] = useState("movie");
  const [AU, setAU] = useState("");
  const [BG, setBG] = useState("");
  const [BR, setBR] = useState("");
  const [CA, setCA] = useState("");
  const [CAQC, setCAQC] = useState("");

  async function getAll() {
    const fetchResult = await fetch(
      `https://api.themoviedb.org/3/certification/${type}/list?api_key=${API_key}`
    );
    const res = await fetchResult.json();
    console.log([res.certifications]);
    setData(res.certifications);
    setAU(res.certifications.AU);
    setBG(res.certifications.BG);
    setBR(res.certifications.BR);
    setCA(res.certifications.CA);
    setCAQC(res.certifications["CA-QC"]);
  }

  useEffect(() => {
    getAll();
  }, [type]);

  const handleCategoryClick = (category) => {
    setCat(category);
    console.log(`Selected category: ${category}`);
  };

  return (
    <>
      <div className="cont">
        <div className="coo">
          <span className="back">
            <Link href={"/"}>
              <IoChevronBackOutline className="iconback" />
            </Link>
            <p>{t("Back Home")}</p>
          </span>
          <span>
            <label htmlFor="selecttrend">{t("Certifications")}: </label>
            <select id="selecttrend" onChange={(e) => setType(e.target.value)}>
              <option value={"movie"}>{t("Movies")}</option>
              <option value={"tv"}>{t("TV Shows")}</option>
            </select>
          </span>
        </div>
        <h1>{t("Selected Category")}: {cat}</h1>
        <div className="cards">
          {Object.keys(data).map((countryCode, index) => {
            return (
              <div key={index}>
                {data[countryCode].map((certification, idx) => (
                  <button
                    className="bac"
                    key={idx}
                    value={certification.certification}
                    onClick={() => handleCategoryClick(certification.certification)}
                  >
                    {certification.certification}
                  </button>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default Certifications;
