"use client"
import "./header.css"
import Link from "next/link";
import { useEffect, useState } from "react";
import { NavDropdown } from "react-bootstrap";
import { FaSearchengin } from "react-icons/fa6";
import { IoEaselSharp } from "react-icons/io5";
import { GiFilmSpool } from "react-icons/gi";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/compnenets/buttonlang"

const Navbar = ({ isAdmin }) => {
    const { t } = useTranslation();
 function handlescroll(){
        window.scroll({left:0,top:650,behavior:"smooth"})
    }

    const [dat,setdat]=useState([]);
    const [search,setsearch]=useState("");
    useEffect(() => {
const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkMjNmYTE3YjliMWE4NjhkNjRjNzM1YjAzZmUxZmQxYiIsIm5iZiI6MTcyMjc3MTQwMy41OTc2NzcsInN1YiI6IjY2YTBlOTA3NTMwMWQxN2Y4ZGRkNzlmNCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.CjY28lvUUIJu7Z95a_oqVSMFtVTmOd98omOtquLuUVc'
    }
  };
  
  fetch('https://api.themoviedb.org/3/genre/tv/list?language=en', options)
    .then(response => response.json())
    .then(response => setdat(response.genres))
    .catch(err => console.error(err));
    }, []);
    return (<>
    <IoEaselSharp className='iconselect' onClick={()=>{
  document.querySelector(".navbarh")?.classList.toggle("active")
}}/>
 <GiFilmSpool className='iconselect' onClick={()=>{
            document.querySelector(".sidebar")?.classList.toggle("sef")
        }}/>
      <nav className="navbarh">
                <ul >
                    <i><Link  href="/" onClick={handlescroll}>{t("movies")}</Link></i>
                    <i >
                    <NavDropdown title={t("TV Show")}  id="basic-nav-dropdown" className="z-5">
                        {
                        dat.map((e)=>{
                            return(
                                <div key={e.id}>
                                    <NavDropdown.Item href={`/TVShow/${e.name}`} className="tvv">{t(e.name)}</NavDropdown.Item>
                                </div>
                            )
                        })}
            </NavDropdown>
                    </i>
                    <i><Link  href="/populerpeople">{t("People")}</Link></i>
                    <i>{isAdmin && (<Link  href="/admin">{t("Admin")}</Link>)}</i>
                    <i> <LanguageSwitcher name={"en"}/> </i>
                </ul>
                <div className="search">
                    <input type="text" id="search" placeholder="Search"   onChange={(e)=>setsearch(e.target.value)}/>
                    <label htmlFor="search"><Link href={`/searchbyname/${search}`}><FaSearchengin className="searchicon"/></Link></label>
                    </div>
        </nav>
    </>
    )
}

export default Navbar;