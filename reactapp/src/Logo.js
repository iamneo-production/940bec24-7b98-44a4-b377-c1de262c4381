import React from 'react'
import './Logo.css';
import  { useEffect } from "react";
import { useHistory } from "react-router-dom";


const Logo = () => {
  const navigate = useHistory();

  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      navigate.push("/Login");
    }, 2000);

    return () => clearTimeout(redirectTimer);
  }, [navigate]);

  return (
    <>
    <div className="bb">
      </div>
     <div className="logo">
    </div>
    </>
  )
}

export default Logo