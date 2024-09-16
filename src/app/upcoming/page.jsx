"use client"; // Ensure this component is client-side rendered

import { API_key } from "@/utels/consts";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaChevronDown } from "react-icons/fa"; // Import a down arrow icon for rotation
import "/src/app/TVShow/[type]/TVShow.css";
import "/src/app/populerpeople/populer.css";
import { IoChevronBackOutline } from "react-icons/io5";
import Pagination from 'react-bootstrap/Pagination';
import { useTranslation } from "react-i18next";

function Upcoming() {
  const {t}=useTranslation();
  const [movies, setMovies] = useState([]);
  const [numpage, setNumpage] = useState(1);
  const [totalPages, setTotalPages] = useState(); // Total pages from the API response
  const [expandedCards, setExpandedCards] = useState({}); // Track expanded cards

  // Fetch upcoming movies data based on current page number
  async function getAll(page) {
    const response = await fetch(`https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=${page}&api_key=${API_key}`);
    const data = await response.json();
    console.log(data.results)
    setMovies(data.results);
    setTotalPages(data.total_pages);
  }

  useEffect(() => {
    getAll(numpage); // Call the API whenever `numpage` changes
  }, [numpage]);

  // Handle page change
  function handlePageChange(pageNumber) {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setNumpage(pageNumber);
    }
  }

  // Toggle the overview for each card and rotate the icon
  function toggleCard(index) {
    setExpandedCards(prevState => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  }

  return (
    <div className="cont">
      <span className="back">
        <Link href={"/"}>
          <IoChevronBackOutline className="iconback" />
        </Link>
        <p>{t("Back Home")}</p>
      </span>

      {/* Popularity at the top */}
      <h1>{t("Upcoming Movies")}</h1>
      <div className="cards">
        {movies.map((movie, index) => (
          <div className="card cardpeople" key={index}>
            <h2 className="name">{movie.release_date.substring(0, 4)}</h2>
            <Link href={`/TRALER/${movie.id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={`${movie.backdrop_path}`}
            />
            </Link>
            <div className="card-dark">
              <h2 className="name">{movie.original_title}</h2>
              {/* Overview toggle */}
              <div className="icon-row" onClick={() => {toggleCard(index);}}>
                <FaChevronDown
                  className={`chevron-icon ${expandedCards[index] ? 'rotated' : ''}`}
                />
              </div>
              {/* Overview content */}
              {expandedCards[index] && (
                <p className="overview">{movie.overview}</p>
              )}
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

      <style jsx>{`
        .popularity-section {
          margin-bottom: 20px;
          font-size: 1.5rem;
          font-weight: bold;
        }

        .icon-row {
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;
          margin-top: 10px;
        }

        .chevron-icon {
          transition: transform 0.3s ease;
        }

        .chevron-icon.rotated {
          transform: rotate(180deg);
        }

        .overview {
          padding: 10px;
          background-color:#444444;;
          border-radius: 5px;
          margin-top: 10px;
        }

        .card {
          position: relative;
          margin-bottom: 20px;
        }

        .card-dark {
          padding: 10px;
          background-color: rgba(0, 0, 0, 0.6);
          color: white;
        }
          .rotated{
          transition-duration: 0.5s;
    transform: rotate(180deg);
          }
      `}</style>
    </div>
  );
}

export default Upcoming;
