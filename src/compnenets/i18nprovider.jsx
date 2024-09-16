"use client"
import { useEffect, } from "react"
import I18napp from "/src/compnenets/change"
import { I18nextProvider } from "react-i18next";
function I18nprovider(){
useEffect(()=>{
   
},[])
return(
   <>
         <I18nextProvider>
   <I18napp/>
   </I18nextProvider>
   </>
)
}
export default I18nprovider;