
import React from 'react';
import "./profile.css"
import Header from "./header/page";
import Stats from "./stats/page";
import Watchlist from "./watchlist/page";
import Discussions from "./descion/page";
import Activity  from "./activity/page";
import Link from 'next/link';
import { IoChevronBackOutline } from 'react-icons/io5';
function Glopalprofile() {
  return (
    <div className="Glopalprofile cont">
       <span className="back mb-4">
      <Link  href={"/settings"}><IoChevronBackOutline className="iconback"/></Link>
      <p>{("Back Settings")}</p>
    </span>
      <Header />
      <Stats />
      <Watchlist />
      <Discussions />
      <Activity />
    </div>
  );
}

export default Glopalprofile;
