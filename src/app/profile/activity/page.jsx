"use client"
import React, { useContext, useEffect } from 'react';
import './activity.css';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import { PlayContext} from "/src/compnenets/Playlist/PLaylist";
import { useTranslation } from 'react-i18next';
import "/src/app/TVShow/[type]/TVShow.css";
import "/src/app/watchlist/watchlist.css";
//  import {ProfileContext} from "/src/compnenets/Profilestate"
const Activity = () => {
  const {t}=useTranslation();
  // const { profile,setProfile } = useContext(ProfileContext);
  const { play, setplay } = useContext(PlayContext);
  useEffect(()=>{
// console.log(profile)
  },[])
  return (
    <div className="activity">
      <span>
      <h2>Recent Activity</h2>
      <div className="cardsprofile">
        {play.map((e,index)=>{
return(
  <div key={index}>
  <Card className='card' style={{width:'18rem',padding:"10px", margin:'10px',boxShadow:` 0px 0px 10px 2px var(--profile-color)`, backgroundColor: "black" ,color:"white"}}>
      <Card.Img variant="top"  src={`https://image.tmdb.org/t/p/w500${e.poster_path}`}
              alt={e.backdrop_path} width={"100%"}/>
      <Card.Body className='card-dark'>
        <Card.Title>{e.name}</Card.Title>
        <Card.Text className='cardtext'>
         {e.overview.substring(0,20)+"..."}
        </Card.Text>
        <button onClick={() => window.open(`/TRALER/${e.id}`)}>
                    {t("Watch")}
                  </button>
      </Card.Body>
    </Card>
  </div>
)
        })}
      </div>
      </span>
      <span>
      <Link href="#more">View More</Link>
      </span>
    </div>
  );
};

export default Activity;

