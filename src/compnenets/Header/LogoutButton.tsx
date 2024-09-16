"use client";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import "./header.css"
import { useTranslation } from "react-i18next";
const LogoutButton = () => {
  const {t}=useTranslation();
  const router = useRouter();
  const logoutHandler = async () => {
    try {
        await axios.get(`/api/logout`);
        router.push("/");
        router.replace("/");
        router.refresh();
    } catch (error) {
        toast.warning("Something went wrong");
        console.log(error);
    }
  }

  return (
    <div className="sin">
 <button onClick={logoutHandler} className="bg-gray-700 text-gray-200 px-1 rounded ptnlogout">
    {t("Logout")}
    </button>
    </div>
  )
}

export default LogoutButton