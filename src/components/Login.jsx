import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const apiURL = import.meta.env.VITE_API_URL;
  const [passwordVisbility, setPasswordVisibility] = useState(false);
  const [passwordVisbilityIcon, setPasswordVisibilityIcon] = useState("fa-eye");
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleOnChange = (event) => {
    setCredentials({ ...credentials, [event.target.name]: event.target.value });
  };

  const handleOnSubmit = async (event) => {
    event.preventDefault();
    const response = await axios.post(`${apiURL}/auth/login`, {
      email: credentials.email,
      password: credentials.password,
    });
    console.log(response.data);
    const json = response.data;
    if (json.status) {
      localStorage.setItem('accessToken', json.accessToken);
      navigate("/home");
    } else {
      alert("internal server error")
    }
  };

  const handleSignUp = () => {
    navigate("/signup");
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
    <div className="border-2 border-black mx-auto md:mx-auto md:h-96 md:w-96 p-2 w-fit bg-sky-200 mt-12 rounded-lg">
      <form className="mx-auto p-12" onSubmit={handleOnSubmit}>
        <h1 className="text-xl font-bold md:text-2xl">Login</h1>
        <div className="mt-4 bg-white border-black border-l-2 w-fit">
          <i className="fa-regular fa-envelope mx-1"></i>
          <input
            type="email"
            className=""
            value={credentials.email}
            name="email"
            id="email"
            aria-describedby="emailHelp"
            onChange={handleOnChange}
            placeholder="Email"
          />
        </div>
        <div className="mt-4 bg-white border-black border-l-2 w-fit">
          <i className="fa-solid fa-lock mx-1"></i>
          <input
            type={passwordVisbility === true ? "text" : "password"}
            className=""
            value={credentials.password}
            name="password"
            id="password"
            onChange={handleOnChange}
            placeholder="Password"
            autoComplete="on"
          />
          <i
            className={`fa-regular ${passwordVisbilityIcon} hover:bg-slate-300 rounded-full h-fit w-fit`}
            onClick={togglePasswordVisibility}
          ></i>
        </div>
        <button
          type="submit"
          className="border-2 border-black my-2 md:my-4 lg:my-6 py-1 px-4 hover:bg-black hover:text-white rounded-xl"
        >
          Login
        </button>
        <h1 className="font-semibold">
          New user? Sign up{" "}
          <span
            className="text-blue-600 hover:border-blue-900 hover:border-b-2 cursor-pointer"
            onClick={handleSignUp}
          >
            here
          </span>
        </h1>
      </form>
    </div>
  );
};

export default Login;
