"use client"
import { MdNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import "./Dashbord.css";
import { useContext, useEffect, useState } from "react";
import { API_key, API_url, movie_url } from "@/utels/consts";
import Link from "next/link";
import { IoSettingsOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { PlayContext } from "/src/compnenets/Playlist/PLaylist";
import { FaHeart, FaRegHeart } from "react-icons/fa6";

const Dashboard = () => {
  const {t}=useTranslation();
  const [Continue, setContinue] = useState([]);
  const [Rated, setRated] = useState([]);
  const [Genres, setGenres] = useState([]);
  const [rotateDegree, setRotateDegree] = useState(0);
  const [intervalId, setIntervalId] = useState(null);
  const [currentIndex, setCurrentIndex] = useState({
    Continue: 0,
    Rated: 0,
    Genres: 0,
  });

  async function getRated() {
    const fetchRes = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_key}`);
    const res = await fetchRes.json();
    return setRated(res.results);
  }

  async function getGenres() {
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNmYTE3YjliMWE4NjhkNjRjNzM1YjAzZmUxZmQxYiIsIm5iZiI6MTcyMjc3MTQwMy41OTc2NzcsInN1YiI6IjY2YTBlOTA3NTMwMWQxN2Y4ZGRkNzlmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CjY28lvUUIJu7Z95a_oqVSMFtVTmOd98omOtquLuUVc'
      }
    };
    
    fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options)
      .then(response => response.json())
      .then(response => setGenres(response.genres))
      .catch(err => console.error(err));
  }

  async function getContinue() {
    const fetchRes = await fetch(`${API_url}${movie_url}?api_key=${API_key}`);
    const res = await fetchRes.json();
    return setContinue(res.results);
  }

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



  useEffect(() => {
    getContinue();
    getRated();
    getGenres();
  }, []);
  console.log(Genres)
  const handleNext = (section) => {
    setCurrentIndex((prevState) => ({
      ...prevState,
      [section]: (prevState[section] + 1) % eval(section).length,
    }));
  };

  const handlePrevious = (section) => {
    setCurrentIndex((prevState) => ({
      ...prevState,
      [section]: (prevState[section] - 1 + eval(section).length) % eval(section).length,
    }));
  };

  function updateProgressBar(percentage) {
    const progressFill = document.querySelector('.progress-fill');
    progressFill.style.width = percentage + '%';
  }

  const handleMouseOver = () => {
    const id = setInterval(() => {
      setRotateDegree((prevDegree) => prevDegree + 45);
    }, 100);
    setIntervalId(id);
  };

  const handleMouseOut = () => {
    clearInterval(intervalId);
    setIntervalId(null);
  };
  return (
    <div className="dashboard">
      <div class="toggle">
       <IoSettingsOutline className="icon" style={{ transform: `rotate(${rotateDegree}deg)` }}
          onMouseUpCapture={handleMouseOver}
          onMouseOut={handleMouseOut}
          onClick={()=>{
            document.querySelector(".dashboard").classList.toggle("ax")
          }}/>
    </div>
      <div className="section">
        <div className="section-header">
          <h3>{t("Continue")}</h3>
          <button className="prev-btn" onClick={() => handlePrevious("Continue")}><GrFormPrevious/></button>
          <button className="next-btn" onClick={() => handleNext("Continue")}><MdNavigateNext/></button>
          <Link href="/">{t("See More")}</Link>
        </div>
        {Continue.length > 0 && (
          <div className="section-content">
            <div className="media-card">
              <div className="media-info">
                <span><img src={`https://image.tmdb.org/t/p/w500${Continue[currentIndex.Continue].backdrop_path}`} alt="" /></span>
                <span>
                  <h4>{Continue[currentIndex.Continue].original_title}</h4>
                  <p>{(Continue[currentIndex.Continue].overview).substr(0, 15)} ...</p>
                  <div className="progress-bar">
                    <div className="progress-fill" onLoad={() => updateProgressBar(parseInt(Continue[currentIndex.Continue].popularity) * 2)}></div>
                  </div>
                </span>
              </div>
              <div className="media-actions">
                <button className="drop-btn">{t("Drop")}</button>
                <button className="watch-btn" onClick={()=>window.open(`/TRALER/${Continue[currentIndex.Continue].id}`)}>{t("Watch")}</button>
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="section">
        <div className="section-header">
          <h3>{t("Top Rated")}</h3>
          <button className="prev-btn" onClick={() => handlePrevious("Rated")}><GrFormPrevious/></button>
          <button className="next-btn" onClick={() => handleNext("Rated")}><MdNavigateNext/></button>
          <Link href="/Toprated">{t("See More")}</Link>
        </div>
        {Rated.length > 0 && (
          <div className="section-content">
            <div className="media-card">
            <span><img src={`https://image.tmdb.org/t/p/w500${Rated[currentIndex.Rated].backdrop_path}`} alt="" /></span>
              <div className="media-info">
                <span>
                  <h4>{Rated[currentIndex.Rated].original_title}</h4>
                  <p>{(Rated[currentIndex.Rated].overview).substr(0, 15)} ...</p>
                  <div className="progress-bar">
                    <div className="progress-fill" onLoad={() => updateProgressBar(parseInt(Rated[currentIndex.Rated].popularity) * 2)}></div>
                  </div>
                </span>
              </div>
              <div className="media-actions">
                <button className="plusicon" onClick={()=>check(Rated[currentIndex.Rated])}>
                {play.find((m) => Rated[currentIndex.Rated].id === m.id) ? (
                      <FaHeart className="plusicon" style={{color:"red"}}/>
                    ) : (
                      <FaRegHeart className="plusicon" />
                    )}
                </button>
                <button className="watch-btn" onClick={()=>window.open(`/TRALER/${Rated[currentIndex.Rated].id}`)}>{t("Watch")}</button>
              </div>
            </div>
          </div>
        )}
      </div>
      <div className="section">
        <div className="section-header">
          <h3>{t("Genres")}</h3>
          <button className="prev-btn" onClick={() => handlePrevious("Genres")}><GrFormPrevious/></button>
          <button className="next-btn" onClick={() => handleNext("Genres")}><MdNavigateNext/></button>
          <a href="#">{t("See More")}</a>
        </div>
        {Genres.length > 0 && (
          <div className="section-content">
            <div className="media-card">
              <div className="media-info lastimg">
                <span className="oppo"><Link href={`/TVShow/${Genres[currentIndex.Genres].name}`}>{Genres[currentIndex.Genres].name}</Link></span>
              </div>
            </div>
          </div>)}
      </div>
    </div>
  );
};

export default Dashboard;
