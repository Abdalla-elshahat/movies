"use client"
import { createContext, useState } from "react";
export const Pageinfo=createContext();
function Changepage({children}){
    const [pageNumber,setpage]=useState(1);
    return(
        <>
        <Pageinfo.Provider value={{pageNumber,setpage}}>
            {children}
        </Pageinfo.Provider>
        </>
    )
}
export  default Changepage;