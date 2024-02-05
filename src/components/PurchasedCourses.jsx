import React,{useState,useEffect} from 'react'
import axios from "axios";

const PurchasedCourses = () => {
  const apiURL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("accessToken");
  const [purchasedCourses,setPurchasedCourses] = useState(null);

  const getUserCourses = async ()=>{
    const response = await axios.get(`${apiURL}/actions/get-purchased`, {
      headers: {
        'Authorization': 'Bearer '+ token
      }
    });
  }
  
  return (
    <div>
      
    </div>
  )
}

export default PurchasedCourses
