"use client";  // This must be at the top

import { useContext } from "react";
import Link from "next/link";
import { IoChevronBackOutline } from "react-icons/io5";
import "/src/app/TVShow/[type]/TVShow.css";
import "/src/app/watchlist/watchlist.css";
import { useTranslation } from "react-i18next";
import { PlayContext} from "/src/compnenets/Playlist/PLaylist";

function Playlist() {
  const { t } = useTranslation();
  const { play, setplay } = useContext(PlayContext);

  return (
    <div className="cont">
      <span className="back">
        <Link href={"/"}>
          <IoChevronBackOutline className="iconback" />
        </Link>
        <p>{t("Back Home")}</p>
      </span>

      <h1>{t("play_list")}</h1>

      <div className="cards">
        {play.length > 0 ? (
          play.map((e, index) => (
            <div className="card" key={index}>
              <img
                src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
                alt={e.backdrop_path}
              />
              {e.poster_path && (
                <div className="card-dark">
                  <h2 className="name">{e.name}</h2>
                  <button>{t("Download")}</button>
                  <button onClick={() => window.open(`/TRALER/${e.id}`)}>
                    {t("Watch")}
                  </button>
                </div>
              )}
            </div>
          ))
        ) : (
          <p className="empty">{t("play_list_empty")}</p>
        )}
      </div>
    </div>
  );
}

export default Playlist;
