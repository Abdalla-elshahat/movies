"use client";  // Ensure this component is client-side rendered

import { useEffect, useState } from 'react';
import { API_key } from "@/utels/consts";
import { Button, Card } from 'react-bootstrap';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import "/src/app/TVShow/[type]/TVShow.css";
import "./person.css";
import "/src/app/profile/activity/activity.css";
import { IoChevronBackOutline } from 'react-icons/io5';
import Link from 'next/link';
import { useTranslation } from "react-i18next";

export default function ActorPage({ params }) {
  const { id } = params;
  const { t } = useTranslation();  // Use the t function for translations
  const [actor, setActor] = useState(null);
  const [info, setInfo] = useState(false);
  const [knowsFor, setKnowsFor] = useState([]);
  const [personinfo, setPersonInfo] = useState([]);

  function checkInfo(info, actor) {
    const infoElem = document.querySelector(".information");
    const buttonElem = document.querySelector(".chick");

    if (info) {
      infoElem.innerHTML = actor.biography;
      buttonElem.innerHTML = t("Back");
    } else {
      infoElem.innerHTML = actor.biography.substring(0, 100) + "...";
      buttonElem.innerHTML = t("Read more");
    }
  }

  useEffect(() => {
    if (id) {
      async function fetchActor() {
        const response = await fetch(`https://api.themoviedb.org/3/person/${id}?api_key=${API_key}&language=en-US`);
        const data = await response.json();
        setActor(data);
        setPersonInfo([data]);

        if (data.name) {
          const knownForResponse = await fetch(`https://api.themoviedb.org/3/search/person?query=${encodeURIComponent(data.name)}&api_key=${API_key}&include_adult=false&language=en-US`);
          const knownForData = await knownForResponse.json();
          if (knownForData.results.length > 0) {
            setKnowsFor(knownForData.results[0].known_for || []);
          }
        }
      }
      fetchActor();
    }
  }, [id]);

  if (!actor) return <div>{t("Loading...")}</div>;

  return (
    <div className="cont person">
      <span className="back">
        <IoChevronBackOutline className="iconback" onClick={() => window.history.back()} />
        <p>{t("Back")}</p>
      </span>
      <div className="topperson">
        <div className="left">
          <img src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`} alt={actor.name} />
          <div className="personal-info">
            <div className="social-icons">
              <FaFacebook className="icon face" />
              <FaTwitter className="icon twi" />
              <FaInstagram className="icon ins" />
              <FaYoutube className="icon you" />
            </div>
            <h2>{t("Personal Info")}</h2>
            {personinfo.map((e, index) => (
              <ul key={index}>
                <li><strong>{t("Known For")}</strong><span>{e.known_for_department}</span></li>
                <li><strong>{t("Known Credits")}</strong><span>140</span></li>
                <li><strong>{t("Gender")}</strong><span>{e.gender === 2 ? t("Male") : t("Female")}</span></li>
                <li><strong>{t("Birthday")}</strong><span>{e.birthday}</span></li>
                <li><strong>{t("Place of Birth")}</strong><span>{e.place_of_birth}</span></li>
                <li><strong>{t("Also Known As")}</strong>
                  <span>{e.also_known_as.map((o, idx) => (<p key={idx}>{o}</p>))}</span>
                </li>
              </ul>
            ))}
          </div>
        </div>
        <div className="right">
          <h1>{actor.name}</h1>
          <h2>{t("Biography")}</h2>
          <p className="information">{actor.biography.substring(0, 100) + "..."}</p>
          <button className="chick" onClick={() => { setInfo(!info); checkInfo(info, actor); }}>
            {t("Read more")}
          </button>
          <div className="activity">
            <span>
              <h2>{t("Known For")}</h2>
              <div className="cardsprofile">
                {knowsFor.map((k) => (
                  <div key={k.id} className="card">
                    <Link href={k.media_type === "tv" ? `/InfoTV/${k.id}` : `/Info/${k.id}`}>
                      <Card style={{ width: '18rem', boxShadow: '1px 1px 5px #F8B319', padding: "10px" }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${k.backdrop_path}`} />
                        <Card.Body>
                          <Card.Title>{k.title || k.name}</Card.Title>
                          <Card.Text className="cardtext">{k.overview}</Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </div>
                ))}
              </div>
            </span>
          </div>
        </div>
      </div>
      <div className="bottomperson"></div>
    </div>
  );
}