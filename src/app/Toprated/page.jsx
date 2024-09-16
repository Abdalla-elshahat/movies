"use client"
import { API_key} from "@/utels/consts";
import Link from "next/link";
import { useEffect, useState } from "react";
import "/src/app/populerpeople/populer.css";
import "/src/app/TVShow/[type]/TVShow.css"
import { IoChevronBackOutline } from "react-icons/io5";
import { useTranslation } from "react-i18next";
import { Pagination } from "react-bootstrap";
function Toprated(){
  const {t}=useTranslation();
   const [data,setdata]=useState([]);
   const [numpage, setNumpage] = useState(1);
   const [totalPages, setTotalPages] = useState(1); // Set initial value to avoid undefined
   async function getall(page){
    const options = {
      method: 'GET',
      headers: {
        accept: 'application/json',
        Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZDA5OTNhMTcwOWZlMDdhNjFhNGI5YTMwZGU3MWIzMiIsIm5iZiI6MTcyNjIzMjgyMS44NjUzMDUsInN1YiI6IjY2OWY5YzljNTJkZTFjZDU4ZGE3MTdkYyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.im1-JhmB91ZIa15pIwMMz-BnJmTWW5i_8pTGKLfkbfg'
      }
    };
    
    fetch(`https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=${page}`, options)
      .then(response => response.json())
      .then(response => {
        setdata(response.results);
        setTotalPages(response.total_pages); 
        setpage(page);
      })
      .catch(err => console.error(err));
   }
     useEffect(()=>{
       getall(numpage);
     },[numpage])


     function handlePageChange(pageNumber) {
      if (pageNumber > 0 && pageNumber <= totalPages) {
        setNumpage(pageNumber);
      }
    }
    return(
        <div className="cont">
           <span className="back">
      <Link  href={"/"}><IoChevronBackOutline className="iconback"/></Link>
      <p>{t("Back Home")}</p>
    </span>
    <h1>{t("TOP RATED")}</h1>
      <div className="cards">
      { data.map((e, index) =>{
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
    )
}
export default Toprated;