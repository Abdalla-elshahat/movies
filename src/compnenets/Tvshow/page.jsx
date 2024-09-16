"use client"
import { API_key } from "@/utels/consts";
import "./tvshow.css"
import { Carousel } from "react-bootstrap";
import {  useEffect, useState } from "react";
function Tvshow(){
  const [tvshow, setTvshow] = useState([]);
  async function getall(){
   const feth=await fetch(`https://api.themoviedb.org/3/discover/movie?api_key=${API_key}`)
   const response=await feth.json()
   const data=response.results;
   setTvshow(data)
   return console.log(tvshow)
 }
useEffect(()=>{
getall();
},[])
    return(

          <Carousel data-bs-theme="dark" className="slide">
            {tvshow.map((e,indxe)=>{
              return(
                <Carousel.Item key={indxe} interval={3000} className="card">
                <img className="d-block w-100"src={`https://image.tmdb.org/t/p/w500${e.backdrop_path}`} alt="First slide"/>
                <Carousel.Caption>
                  <h1>{e.original_title}</h1>
                  <p>{e.overview}</p>
                </Carousel.Caption>
              </Carousel.Item>
              )
            })}
          </Carousel>
        );
      }
export default Tvshow;

