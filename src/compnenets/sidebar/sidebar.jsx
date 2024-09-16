"use client";  // Required for useTranslation hook in Next.js client components
import "./sidebar.css";
import { FaHome } from "react-icons/fa";
import { RiCompassDiscoverFill } from "react-icons/ri";
import { FaAward } from "react-icons/fa6";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { IoMdTimer } from "react-icons/io";
import { FaRegStar } from "react-icons/fa";
import { MdOutlineDownloading } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";
import { CiSquarePlus } from "react-icons/ci";
import { IoIosCloudDone } from "react-icons/io";
import { IoIosSettings } from "react-icons/io";
import { FiLogOut } from "react-icons/fi";
import LogoutButton from "../Header/LogoutButton";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function Sidebarrr() {
  const { t } = useTranslation();

  return (
    <div className="sidebar">
      <h1>{t("menu")}</h1>
      <span><FaHome className="icon" /> {t("Home")}</span>
      <span><RiCompassDiscoverFill className="icon" /> <Link href={"/upcoming"}>{t("Discover")}</Link></span>
      <span><FaAward className="icon" /> <Link href={"/Certifications"}>{t("Certifications")}</Link></span>
      <span><HiOutlineBadgeCheck className="icon" /> {t("Celebrities")}</span>

      <h1>{t("Library")}</h1>
      <span><IoMdTimer className="icon" /> <Link href={"/Trend"}>{t("Trending")}</Link></span>
      <span><FaRegStar className="icon" /> <Link href={"/Toprated"}>{t("Top Rated")}</Link></span>
      <span><MdOutlineDownloading className="icon" /> {t("Download")}</span>
      <span><FaRegHeart className="icon" /><Link href={"/playlist"}>{t("Playlists")}</Link></span>
      <span><CiSquarePlus className="icon" /> <Link href={"/watchlist"}>{t("Watch List")}</Link></span>

      <h1>{t("General")}</h1>
      <span><IoIosSettings className="icon" /><Link href={"/settings"}>{t("Settings")}</Link></span>
      <span><FiLogOut className="icon" /> <LogoutButton /></span>
    </div>
  );
}

export default Sidebarrr;
