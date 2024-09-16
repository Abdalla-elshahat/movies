"use client";
import "./cards.css";
import "/src/app/populerpeople/populer.css";
import { FaStar } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import { Pagination } from "react-bootstrap";
import { Pageinfo } from "@/compnenets/changepage/changepage";
import { PlayContext } from "/src/compnenets/Playlist/PLaylist";

function Cards() {
  const { t } = useTranslation();

  const [all, setAll] = useState([]);
  const [numpage, setNumpage] = useState(1);
  const [totalPages, setTotalPages] = useState(1); // Set initial value to avoid undefined

  const { pageNumber, setpage } = useContext(Pageinfo);
  const { play, setplay } = useContext(PlayContext);
  
    function check(obj) {
    if (play && Array.isArray(play)) {
      if (play.length === 0) {
        setplay([...play, obj]);
      } else {
        let checkItem = play.find((it) => it?.id == obj.id);
        if (checkItem == undefined) {
          setplay([...play, obj]);
        } else {
          setplay(play.filter((it) => it.id != obj.id));
        }
      }
    }
    console.log(play);
  }
  function Stars(e, index) {
    const stars = [];
    for (let i = 0; i < parseInt(e.vote_average); i++) {
      stars.push(
        <li className="list-unstyled" key={i}>
          <FaStar color={"#FFD700"} />
        </li>
      );
    }
    return stars;
  }

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
        setAll(response.results);
        setTotalPages(response.total_pages); 
        setpage(page);
      })
      .catch(err => console.error(err));
  }

  useEffect(() => {
    getAll(numpage);
    console.log(play);
  }, [numpage]);

  function handlePageChange(pageNumber) {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setNumpage(pageNumber);
    }
  }

  return (
    <div className="cont">
      <h1>{t("Popular on Honey Movies")}</h1>
      <div className="cards">
        {all.map((e, index) => (
          <div className="card" key={index}>
            <img
              src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`}
              alt={e.original_title}
            />
            <div className="card-body">
              <div className="card-body-top">
                <div className="left">
                  <h3>{e.original_title}</h3>
                  <span>{Stars(e, index)}</span>
                </div>
                <div className="right">
                  <span className="numr">{parseFloat(e.vote_average).toFixed(1)}</span>
                  <FaStar className="bigstar" />
                </div>
              </div>
              <div className="card-body-bottom">
                <div className="left">
                  <span className="price">{e.original_language}</span>
                  <span className="iconplus" onClick={() =>check(e)}>
                    {play.find((m) => e.id === m.id) ? (
                      <FaHeart className="plusicon" style={{color:"red"}}/>
                    ) : (
                      <FaRegHeart className="plusicon" />
                    )}
                  </span>
                </div>
                <div className="right">
                  <button>
                    <Link href={`/Info/${e.id}`}>
                      {t("more info")}
                    </Link>
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="pagination">
        <Pagination>
          <button
            onClick={() => handlePageChange(numpage - 1)}
            disabled={numpage === 1}
          >
            {"<<"}
          </button>
          {numpage > 1 && (
            <button onClick={() => handlePageChange(numpage - 1)}>
              {numpage - 1}
            </button>
          )}
          <button className="actives" active="true">
            {numpage}
          </button>
          {numpage < totalPages && (
            <button onClick={() => handlePageChange(numpage + 1)}>
              {numpage + 1}
            </button>
          )}
          <button
            onClick={() => handlePageChange(numpage + 1)}
            disabled={numpage === totalPages}
          >
            {">>"}
          </button>
        </Pagination>
      </div>
    </div>
  );
}

export default Cards;
