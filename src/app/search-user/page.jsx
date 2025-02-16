'use client';
import SearchUser from '@/Components/SearchUser'
import React, {useEffect} from 'react'
import jwt from jsonwebtoken;

const page = () => {

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      console.log("Token is not available");
      return (window.location.href = "/login");
    }

    try {
      const decoded = jwt.decode(token);
      console.log("Decoded token data:", decoded);
      if(!decoded || !decoded.exp){
        console.log("Token or Exp Missing");
        localStorage.removeItem("token");
        window.location.href = "/login";
      }  
      if(decoded.exp * 1000 < Date.now()){
        console.log("Now Going to Redirect on Login Page");
        localStorage.removeItem("token");
        window.location.href="/login";
      }
    } catch (err) {
      console.log("Invalid Token:", err);
      localStorage.removeItem("token");
      return (window.location.href = "/login");
    }
  }, []);
  
  return (
    <div className='m-20 text-4xl'>
        <SearchUser />
        
    </div>
  )
}

export default page
