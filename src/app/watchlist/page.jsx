"use client";
import { useContext } from "react";
import { Procontext } from "@/compnenets/watchliststate/watchlist";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import "/src/app/TVShow/[type]/TVShow.css"
import "./watchlist.css"
import { useTranslation } from "react-i18next";
function Watchlist() {
  const {t}=useTranslation();
  const { watchlist } = useContext(Procontext);

  return (
<div className="cont">
           <span className="back">
      <Link  href={"/"}><IoChevronBackOutline className="iconback"/></Link>
      <p>{t("Back Home")}</p>
    </span>
    <h1>{t("Watch List")}</h1>
      <div className="cards">
        {watchlist.length>0?(watchlist.map((e, index) => (
          <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt={`${e.backdrop_path}`} />
            {e.poster_path&& <div className="card-dark">
              <h2 className="name">{e.name}</h2>
              <button >{t("Download")}</button>
              <button onClick={(()=>window.open(`/TRALER/${e.id}`))}>{t("Watch")}</button>
            </div>}
          </div>
        ))):<p className="empty">
        {t("Watch List is Empty")}
          </p>}
      </div>
    </div>
  );
}

export default Watchlist;
