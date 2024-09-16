"use client"
import LoginForm from "./LoginForm";
import "../sin.css"
import { useTranslation } from "react-i18next";
const LoginPage = () => {
  const {t}=useTranslation();
  return (
    <section className="fix-height container m-auto px-7 flex items-center justify-center">
      <div className="m-auto  rounded-lg p-5 w-full md:w-2/3 maindiv">
        <h1 className="text-3xl font-bold  mb-5">{t("Login")}</h1>
        <LoginForm />
      </div>
    </section>
  )
}

export default LoginPage