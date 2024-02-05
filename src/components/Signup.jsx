import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = (props) => {
  const apiURL = import.meta.env.VITE_API_URL;
  const [credentials, setCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [passwordVisbility, setPasswordVisibility] = useState(false);
  const [passwordVisbilityIcon, setPasswordVisibilityIcon] = useState("fa-eye");
  const navigate = useNavigate();

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(
      `${apiURL}/auth/signup``${apiURL}/auth/login`,
      {
        name: credentials.name,
        email: credentials.email,
        password: credentials.password,
      }
    );
    const json = await response.json();
    console.log(json);

    if (json.status) {
      navigate("/login");
    } else {
      alert("Internal server error");
    }
  };
  const handleOnChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };
  const togglePasswordVisibility = () => {
    if (passwordVisbility == true) {
      setPasswordVisibility(false);
      setPasswordVisibilityIcon("fa-eye");
    } else {
      setPasswordVisibility(true);
      setPasswordVisibilityIcon("fa-eye-slash");
    }
  };
  return (
    <div className="border-2 border-black mx-4 md:mx-auto p-2 w-fit bg-sky-200 mt-12 rounded-lg">
      <form className="mx-auto p-12" onSubmit={handleOnSubmit}>
        <h1 className="text-2xl mb-2 font-bold">Create Account</h1>
        <div className="mb-3 flex flex-col">
          <label htmlFor="name" className="font-semibold">
            Name
          </label>
          <div className="bg-white rounded-md overflow-hidden py-1 pl-2">
            <i class="fa-regular fa-user "></i>
            <input
              type="text"
              className="mx-1"
              name="name"
              id="name"
              aria-describedby="emailHelp"
              onChange={handleOnChange}
              placeholder="Username"
              required
            />
          </div>
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="email" className="font-semibold">
            Email address
          </label>
          <div className="bg-white rounded-md overflow-hidden py-1">
            <i className="fa-regular fa-envelope mx-1"></i>
            <input
              type="email"
              className="ml-1 font-se"
              name="email"
              id="email"
              aria-describedby="emailHelp"
              onChange={handleOnChange}
              placeholder="Email"
              required
              autoComplete="off"
            />
          </div>
        </div>
        <div className="mb-3 flex flex-col">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <div className="bg-white rounded-md overflow-hidden py-1 md:pl-2">
            <i className="fa-solid fa-lock mx-1"></i>
            <input
              type={passwordVisbility === true ? "text" : "password"}
              className=""
              name="password"
              id="password"
              onChange={handleOnChange}
              placeholder="Password"
              required
              autoComplete="off"
            />
            <i
              className={`fa-regular ${passwordVisbilityIcon} hover:bg-slate-300 rounded-full h-4 w-4 mr-1 md:mr-2`}
              onClick={togglePasswordVisibility}
            ></i>
          </div>
        </div>
        <button
          type="submit"
          className="border-2 border-black my-2 px-2 hover:bg-black hover:text-white rounded-md"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Signup;
