"use client";
import { API_key } from "@/utels/consts";
import Link from "next/link";
import { useEffect, useState } from "react";
import "/src/app/TVShow/[type]/TVShow.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";

function Trend() {
  const { t } = useTranslation();
  const [data, setdata] = useState([]);
  const [time, settime] = useState("day");

  async function getall(time) {
    const fetchRes = await fetch(
      `https://api.themoviedb.org/3/trending/all/${time}?language=en-US&api_key=${API_key}`
    );
    const res = await fetchRes.json();
    console.log(res.results);
    setdata(res.results);
  }

  // Update the API call whenever `time` changes
  useEffect(() => {
    getall(time);
  }, [time]); // depend on time

  return (
    <div className="cont">
      <div className="selecttrend">
        <label htmlFor="selecttrend">{t("TREND last")}:</label>
        <select
          id="selecttrend"
          value={time}
          onChange={(e) => settime(e.target.value)} // Update time on selection change
        >
          <option value="day">{t("Day")}</option>
          <option value="week">{t("Week")}</option>
        </select>
      </div>

      <span className="back">
        <Link href="/">
          <IoChevronBackOutline className="iconback" />
        </Link>
        <p>{t("Back Home")}</p>
      </span>

      <h1></h1>

      <div className="cards">
        {data &&
          data.map((e, index) => {
            return (
              <>
                {e.poster_path && (
                  <div className="card" key={index}>
                    <span className="voteaverage">
                      {parseFloat(e.vote_average).toFixed(1)}
                    </span>
                    <img
                      src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                      alt={`${e.backdrop_path}`}
                    />
                    {e.poster_path && (
                      <div className="card-dark">
                        <h2 className="name">{e.name}</h2>
                        <button>{t("Download")}</button>
                        <button
                          onClick={() =>
                            window.open(`/TRALER/${e.id}`, "_blank")
                          }
                        >
                          {t("Watch")}
                        </button>
                      </div>
                    )}
                  </div>
                )}
              </>
            );
          })}
      </div>
    </div>
  );
}

export default Trend;
