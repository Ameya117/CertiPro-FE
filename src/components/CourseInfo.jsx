import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const CourseInfo = () => {
  const params = useParams();
  const { id } = params;
  const navigate = useNavigate();
  const apiURL = import.meta.env.VITE_API_URL;
  const token = localStorage.getItem("accessToken");
  const [course, setCourse] = useState(null);

  // {
  //   title: "Blockchain",
  //   email: "siddhant@gmail.com",
  //   description: "BlockChain and its uses",
  //   price: 1000,
  //   author: "Siddhant Gupta",
  //   category: "Business",
  // }

  //get course by id  USING GET:`${apiURL}/course/${id}`

  useEffect(() => {
    if (token) {
    } else {
      navigate("/login");
    }
  }, []);

  return (
    <div>
      <div>
        <img src="" alt="" />
        <div>-</div>
      </div>
    </div>
  );
};

export default CourseInfo;
