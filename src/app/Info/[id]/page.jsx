"use client"
import { IoChevronBackOutline } from "react-icons/io5";
import "./info.css";
import { FiPlus } from "react-icons/fi";
import { useContext, useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import Link from "next/link";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { Pageinfo } from "@/compnenets/changepage/changepage";
import { Procontext } from "@/compnenets/watchliststate/watchlist";
import { useTranslation } from "react-i18next";

function Info({ params }) {
  const {t}=useTranslation();
  const { id } = params;
  const infoElement = document.querySelector('.info');

  const { watchlist, setwatch } = useContext(Procontext);
  const { pageNumber, setpage } = useContext(Pageinfo);

  const [dat, setdat] = useState([]);
  const [color, changecolor] = useState(false);
  
  async function getAll(page) {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDA5OTNhMTcwOWZlMDdhNjFhNGI5YTMwZGU3MWIzMiIsIm5iZiI6MTcyNTk4ODYyNi42Njc5MzIsInN1YiI6IjY2OWY5YzljNTJkZTFjZDU4ZGE3MTdkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mAM24YVNe8P2WZbHRTlqXMI7ikvYPM9tgECLxI5JlMI'
      }
    };

    fetch(`https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=${page}&sort_by=popularity.desc`, options)
      .then(response => response.json())
      .then(response => {
        setdat(response.results);
      })
      .catch(err => console.error(err));
  }
  useEffect(() => {
    getAll(pageNumber);
    console.log(pageNumber)

    // Retrieve the color state from localStorage when the component mounts
    const savedColorState = localStorage.getItem(`color-${id}`);
    if (savedColorState) {
      changecolor(JSON.parse(savedColorState));
    }
  }, [id]);

  function check(obj) {
    if (watchlist && Array.isArray(watchlist)) {
      if (watchlist.length === 0) {
        setwatch([...watchlist, obj]);
      } else {
        let checkItem = watchlist.find((it) => it?.id == obj.id);
        if (checkItem == undefined) {
          setwatch([...watchlist, obj]);
        } else {
          setwatch(watchlist.filter((it) => it.id != obj.id));
        }
      }
    }
    console.log(watchlist);
  }

  function handleButtonClick(e) {
    const newColor = !color;
    changecolor(newColor);
    check(e);
    document.querySelector(".watchlist").classList.toggle("changecolor")

    // Save the color state to localStorage
    localStorage.setItem(`color-${id}`, JSON.stringify(newColor));
  }
  return (
    <>
      {dat.map((e) => {
        if (e.id == id) {
          return (
            <div className="Info" key={e.id} style={{ '--backdrop-image': `url(https://image.tmdb.org/t/p/w500${e.backdrop_path})` }}>
              <div className="left">
                <span className="back">
                  <Link href={"/"}>
                    <IoChevronBackOutline className="iconback" />
                  </Link>
                  <p>{t("Back Home")}</p>
                </span>
                <span className="someinfo">
                  <h1>{e.original_title} {`(${e.release_date.substring(0,4)})`}</h1>
                  <section>
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </section>
                  <h5>{e.vote_count} {t("views")}</h5>
                  <img
                    src="/images/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png"
                    className="smallimg"
                  />
                  <p>{e.overview}</p>
                  <div className="buttons">
                    <button
                      onClick={() => handleButtonClick(e)}
                      className="watchlist"
                    >
                      {color ? (
                        <IoCheckmarkDoneCircle className="done" />
                      ) : (
                        <FiPlus />
                      )}
                      {t("Watch List")}
                    </button>
                   <button className="watchnow" onClick={()=>window.open(`/TRALER/${e.id}`,"_blank")}>{t("Watch Now")}</button>
                  </div>
                </span>
              </div>
              <div className="right">
                <span>
                  {e.vote_average >= 7 && <h1>{t("Top")}</h1>}
                  <img
                    src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
                    alt="Top rated"
                  />
                </span>
              </div>
            </div>
          );
        }
      })}
    </>
  );
}

export default Info;
