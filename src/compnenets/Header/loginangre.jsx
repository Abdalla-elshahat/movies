"use client"
import Link from "next/link";
import { useTranslation } from "react-i18next";
import "./header.css";
function LoginRE(){
    const {t}=useTranslation();
    return(
        <>
         <Link  href="/login">{t('Login')}</Link>
         <Link href="/rejester">{t('Register')}</Link>
        </>
    )
}
export default LoginRE;