"use client"
import React, { useContext } from 'react';
import '../activity/activity.css';
import Link from 'next/link';
import { Button, Card } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import "/src/app/TVShow/[type]/TVShow.css";
import "/src/app/watchlist/watchlist.css";
import { Procontext } from '@/compnenets/watchliststate/watchlist';
const  Watchlist = () => {
  const {t}=useTranslation();
  const {watchlist, setwatch}=useContext(Procontext)
  return (
    <div className="activity">
      <span>
      <h2>Upcoming From Watchlist</h2>
      <div className="cardsprofile">
        {watchlist.map((e,index)=>{
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
      <Link href="/watchlist">Go to Watchlist</Link>
      </span>
    </div>
  );
};

export default  Watchlist;

