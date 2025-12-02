import React, { children, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Protectedroues = ({children}) =>{
    const isAuthenticated = localStorage.getItem("isAuthenticated") === "true";

    const navigate = useNavigate();

useEffect(()=>{
    if((!isAuthenticated)) navigate ('/signup');
},[isAuthenticated, navigate]) 

  return( isAuthenticated ? children : null); 
}
export default Protectedroues;