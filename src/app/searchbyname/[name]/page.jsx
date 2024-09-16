"use client"
import { IoChevronBackOutline } from "react-icons/io5";
import "/src/app/TVShow/[type]/TVShow.css"
import { useEffect, useState } from "react"
import { API_key,  } from "@/utels/consts";
import Link from "next/link";
import { useTranslation } from "react-i18next";
function Searchbyname({params}) {
  const {t}=useTranslation();
  const {name}=params
  const [dat,setdat]=useState([]);
  async function getAll() {
    const fetchResult = await fetch(`https://api.themoviedb.org/3/search/multi?query=${name}&include_adult=false&language=en-US&page=1&api_key=${API_key}`);
    const response = await fetchResult.json();
    const data = response.results;
    setdat(data);
  }
  useEffect(() => {
    getAll();
  }, []);
   return(
    <div className="cont">
   <span className="back">
<Link  href={"/"}><IoChevronBackOutline className="iconback"/></Link>
<p>{t("Back Home")}</p>
</span>
<h1>{name}</h1>
<div className="cards">
{ dat.map((e, index) =>{
  return(
    <> 
    {e.poster_path&&<div className="card" key={index}>
    <span className="voteaverage">{parseFloat((e.vote_average)).toFixed(1)}</span>
    <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt={`${e.backdrop_path}`} />
    {e.poster_path&& <div className="card-dark">
      <h2 className="name">{e.name}</h2>
      <button >{t("Download")}</button>
      <button onClick={()=>window.open(`/TRALER/${e.id}`,"_blank")}>{t("Watch")}</button>
    </div>}
  </div>}
    </>
  )
})}
</div>
</div>
   )
}

export default Searchbyname;