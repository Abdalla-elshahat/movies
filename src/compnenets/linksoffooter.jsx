"use client"
import Link from "next/link";
import { useTranslation } from "react-i18next";
import './Footer.css';
function Linksfooter({payload}){
    const {t}=useTranslation();
    return(
        <>
          <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <img src="/images/Logo.png" alt="logo" />
          <div className="footer-greeting">
            <p>{t("Hi")} <Link href="/profile">{payload?.username}</Link></p>
          </div>
        </div>
        <div className="footer-section">
          <h3>{t("THE BASICS")}</h3>
          <ul>
            <li><Link href={"https://www.themoviedb.org/about"}>{t("About Tmdb")}</Link></li>
            <li><Link href={"/contectus"}>{t("Contact Us")}</Link></li>
            <li>{t("Support Forums")}</li>
            <li><Link href={"https://developer.themoviedb.org/docs/getting-started"}>{t("API")}</Link></li>
            <li><Link href={"https://status.themoviedb.org/"}>{t("System Status")}</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>{t("GET INVOLVED")}</h3>
          <ul>
            <li><Link href={"/Bible"}>{t("Contribution Bible")}</Link></li>
            <li><Link href={"https://www.themoviedb.org/movie/new"}>{t("Add New Movie")}</Link></li>
            <li><Link href={"https://www.themoviedb.org/tv/new"}>{t("Add New TV Show")}</Link></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>{t("COMMUNITY")}</h3>
          <ul>
            <li><Link href={"./contectus"}>{t("Guidelines")}</Link></li>
            <li>{t("Discussions")}</li>
            <li>{t("Leaderboard")}</li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>{t("LEGAL")}</h3>
          <ul>
            <li><Link href={"/Term"}>{t("Terms of Use")}</Link></li>
            <li><Link href={"/Temsapi"}>{t("API Terms of Use")}</Link></li>
            <li>{t("Privacy Policy")}</li>
            <li>{t("DMCA Policy")}</li>
          </ul>
        </div>
      </div>
    </footer>
        </>
    )
}
export default Linksfooter;