/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
"use client"
import { API_key} from "@/utels/consts";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";
import "./TVShow.css";
import { IoChevronBackOutline } from "react-icons/io5";
import { Procontext } from "@/compnenets/watchliststate/watchlist";
import { useTranslation } from "react-i18next";
function TVShow({params}){
  const {t}=useTranslation();
   const {type}=params;  
   const {watchlist}=useContext(Procontext);
   console.log(watchlist,"context type")
   const [data,setdata]=useState([]);
   async function getall(){
    const feth=await fetch(`https://api.themoviedb.org/3/search/tv?query=${type}&include_adult=false&language=en-US&page=1&api_key=${API_key}`);
    const res=await feth.json();
    console.log(res.results)
    return setdata(res.results);
   }
     useEffect(()=>{
       getall();
     },[])
    return(
        <div className="cont">
           <span className="back">
      <Link  href={"/"}><IoChevronBackOutline className="iconback"/></Link>
      <p>{t("Back Home")}</p>
    </span>
    <h1>{type}</h1>
      <div className="cards">
        {data.map((e, index) => (
          <div className="card" key={index}>
            <img src={`https://image.tmdb.org/t/p/w500${e.poster_path}`} alt={`${e.backdrop_path}`} />
            {e.poster_path&& <div className="card-dark">
              <h2 className="name">{e.name}</h2>
              <button >{t("Download")}</button>
              <button onClick={()=>window.open(`/TRALER/${e.id}`,"_blank")}>{t("Watch")}</button>
            </div>}
          </div>
        ))}
      </div>
    </div>
    )
}
export default TVShow;