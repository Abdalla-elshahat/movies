"use client";

import { API_key } from "@/utels/consts";
import Link from "next/link";
import { useEffect, useState } from "react";
import "/src/app/TVShow/[type]/TVShow.css";
import "./populer.css";
import { IoChevronBackOutline } from "react-icons/io5";
import Pagination from 'react-bootstrap/Pagination';
import { useTranslation } from "react-i18next";
function Popularpeople() {
  const {t}=useTranslation();
  const [people, setPeople] = useState([]);
  const [numpage, setNumpage] = useState(1);
  const [totalPages, setTotalPages] = useState(); // Total pages from the API response

  // Fetch popular people data based on current page number
  async function getAll(page) {
    const response = await fetch(`https://api.themoviedb.org/3/person/popular?language=en-US&page=${page}&api_key=${API_key}`);
    const data = await response.json();
    setPeople(data.results);
    setTotalPages(data.total_pages);
  }

  useEffect(() =>{
    getAll(numpage); // Call the API whenever `numpage` changes
  }, [numpage]);

  // Handle page change
  function handlePageChange(pageNumber) {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setNumpage(pageNumber);
    }
  }
  return (
    <div className="cont">
      <span className="back">
        <Link href={"/"}>
          <IoChevronBackOutline className="iconback" />
        </Link>
        <p>{t("Back Home")}</p>
      </span>
      <h1>{t("Popular People")}</h1>
      <div className="cards">
        {people.map((person, index) => (
          <div className="card cardpeople" key={index}>
            <Link href={`/populerpeople/${person.id}`}>
              <img
                src={`https://image.tmdb.org/t/p/w500${person.profile_path}`}
                alt={`${person.name}`}
              />
              <div className="card-dark">
                <h2 className="name">{person.original_name}</h2>
              </div>
            </Link>
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
          <button
            disabled
            className="disabled"
          >
            {numpage > 1 ? numpage - 1 : ""}
          </button>
          <button className="actives" active>
            {numpage}
          </button>
          <button
            disabled
            className="disabled"
          >
            {numpage < totalPages ? numpage + 1 : ""}
          </button>
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

export default Popularpeople;
