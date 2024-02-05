import React, { useState, useEffect } from "react";
import { useNavigate, useLocation,Link } from "react-router-dom";

const Dashboard = (props) => {
  const {element}=props;
  const token = localStorage.getItem("accessToken");
  let location = useLocation();
  const navigate = useNavigate();


  useEffect(() => {
    if (token) {
     
    } else {
      navigate("/login");
    }
    //eslint-disable-next-line
  }, []);

  return <div>
    <h1 className="mx-auto w-fit mt-6 text-xl md:text-2xl lg:lext-3xl font-semibold">My Courses</h1>
    <div className="flex justify-center flex-col my-4 mx-3 md:mx-5 lg:mx-12">
            <ul className="flex border-b justify-around max-w-sm md:max-w-lg lg:max-w-max mx-auto lg:mx-0">
              <li className="mb-px mr-1">
                <Link className={`inline-block md:text-lg lg:text-xl rounded-t py-2 px-4 font-semibold ease-in-out duration-300 ${location.pathname !== '/dashboard/purchased_courses' ? 'border-b-4 border-black pointer-events-none' : ''}`} to='/dashboard/wishlist'>Wishlist</Link>
              </li>
              <li className="mr-1">
                <Link className={`inline-block md:text-lg lg:text-xl py-2 px-4 font-semibold ease-in-out duration-300 ${location.pathname === '/dashboard/purchased_courses' ? 'border-b-4 border-black pointer-events-none' : ''}`} to='/dashboard/purchased_courses' >Purchased Courses</Link>
              </li>
            </ul>
            <h1>
              {element}
            </h1>

          </div>
  </div>;
};

export default Dashboard;
