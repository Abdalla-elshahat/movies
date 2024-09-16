/* eslint-disable react/prop-types */
/* eslint-disable react/react-in-jsx-scope */
"use client"; // Ensures this component is treated as a client-side component

import { useEffect, useState } from "react";
import { API_key } from "/src/utels/consts";
import "./traler.css"
function TRALER({ params }) {
  const { id } = params;
  const [trailerKey, setTrailerKey] = useState(null);
  async function getTrailer() {
    try {
      const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US&api_key=${API_key}`);
      const data = await response.json();
      console.log(data.results)
      const trailer = data.results.find(video => video.site === "YouTube" && video.type === "Trailer");

      if (trailer) {
        setTrailerKey(trailer.key);
      }
      else{
        console.log("no found")
      }
    } catch (err) {
      console.error(err);
    }
  }

  useEffect(() => {
    getTrailer();
  }, []);

  return (
    <div className="vedio">
      {trailerKey ? (
        <iframe
          width="560"
          height="315"
          src={`https://www.youtube.com/embed/${trailerKey}`}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ) : (
        <p>No trailer available</p>
      )}
    </div>
  );
}

export default TRALER;
