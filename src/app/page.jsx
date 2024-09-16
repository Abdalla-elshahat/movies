"use client"
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebarrr from "../compnenets/sidebar/sidebar"
import Tvshow from "../compnenets/Tvshow/page";
import Cards from "../compnenets/cards/page";
import Nextside from "./(mainpage)/nextside/page";
import "./main.css"

// Import the initialized i18n instance
export default function Home() {
  return (
 <div className="all">
    <div className="side">
      <Sidebarrr/>
    </div>
    <div className="conten">
      <Tvshow/>
      <Cards/>
      </div>
      <div className="nextside">
        <Nextside/>
      </div>

    </div>
  
  );
}
