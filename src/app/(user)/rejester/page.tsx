"use client"
import { useTranslation } from "react-i18next"
import "../sin.css"
import RegisterForm from "./RegisterForm"
const RegisterPage = () => {
  const {t}=useTranslation();
  return (
    <section className="fix-height container m-auto px-7 flex items-center justify-center">
      <div className="m-auto rounded-lg p-5 w-full md:w-2/3 maindiv">
        <h1 className="text-3xl font-bold text-gray-800 mb-5">
          {t("Create New Account")}
        </h1>
        <RegisterForm />
      </div>
    </section>
  )
}

export default RegisterPage