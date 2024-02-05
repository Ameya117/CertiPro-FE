import React, { useState } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
    const [icon, setIcon] = useState("menu-outline");
    const token = localStorage.getItem("accessToken");
    let navigate = useNavigate();

    const handleMenu = () => {
        let list = document.querySelector('ul');
        icon === 'menu-outline' ? (setIcon("close-outline"), list.classList.add("top-[80px]"), list.classList.add('opacity-100'), list.classList.add('bg-orange-200'), list.classList.add("h-full"), list.classList.add('z-10')) : (setIcon("menu-outline"), list.classList.remove("top-[80px]"), list.classList.remove('opacity-100'), list.classList.remove('bg-orange-200'), list.classList.remove("h-full"), list.classList.remove('z-10'), list.classList.remove('fixed'))
    }

    const handleMenuItem = () => {
        let list = document.querySelector('ul');
        icon === 'menu-outline' ? (setIcon("menu-outline")) : (setIcon("menu-outline"), list.classList.remove("top-[80px]"), list.classList.remove('opacity-100'), list.classList.remove("h-full"), list.classList.remove('z-10'), list.classList.remove('fixed'))
    }

    const handleLogout = () => {
        let list = document.querySelector('ul');
        icon === 'menu-outline' ? (setIcon("menu-outline")) : (setIcon("menu-outline"), list.classList.remove("top-[80px]"), list.classList.remove('opacity-100'), list.classList.remove("h-full"), list.classList.remove('z-10'), list.classList.remove('fixed'));
        localStorage.removeItem('accessToken');
        navigate('/login');

    }
    return (
        <>

            <nav className='p-5 shadow font-bold md:flex md:items-center md:justify-between border-b-4 border-indigo-500'>
                <div className="flex justify-between items-center bg-b">

                    <span className="flex items-center justify-center cursor-pointer">
                        <Link className='mx-4 my-auto text-xl md:text-2xl lg:text-3xl' to="/home" onClick={handleMenuItem}>CertiPro</Link>
                    </span>
                    <span className="text-3xl mx-2 cursor-pointer md:hidden">
                        <ion-icon name={icon} onClick={handleMenu}></ion-icon>
                    </span>

                </div>
                <div>
                    <ul className='md:flex md:items-center md:z-auto md:static absolute w-full left-0  md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-9 top-[-400px] transition-all ease-in duration-500 '>
                        <li className="mx-4 my-6 md:my-0">
                            <Link to="/home" className={`group ${token? 'block' : 'hidden'} text-lg flex justify-center text-black-600 transition duration-300 md:text-lg lg:text-2xl`} onClick={handleMenuItem}>
                                Home
                            </Link>
                        </li>
                        <li className="mx-4 my-6 md:my-0">
                            <Link to="/dashboard" className={`group ${token? 'block' : 'hidden'} text-lg flex justify-center text-black-600 transition duration-300 md:text-lg lg:text-2xl`} onClick={handleMenuItem}>
                                Dashboard
                            </Link>
                        </li>


                        <li className="mx-4 my-6 md:my-0 md:hidden">

                            {token? <Link to="/viewprofile" className="group text-lg flex justify-center text-dark-600 transition duration-300 md:text-lg lg:text-2xl" onClick={handleMenuItem}>
                                Profile
                            </Link>
                                :
                                <div className="flex flex-col md:hidden">
                                    <Link className="group text-lg flex justify-center text-black-600 transition duration-300 md:text-lg lg:text-2xl" type="submit" role="button" to="/signup" onClick={handleMenuItem}>Sign up</Link>

                                </div>}
                        </li>
                        <li className="mx-4 my-6 md:my-0 md:hidden">

                            {token ? <button className="group text-lg flex justify-center text-black-600 transition duration-300 md:text-lg lg:text-2xl mx-auto" onClick={handleLogout}>
                                Logout
                            </button>
                                :
                                <div className="flex flex-col md:hidden">
                                    <Link className="group text-lg flex justify-center text-black-600 transition duration-300 md:text-lg lg:text-2xl" type="submit" role="button" to="/login" onClick={handleMenuItem}>Login</Link>

                                </div>}
                        </li>
                    </ul>
                </div>
                <div>
                    {localStorage.getItem('accessToken') ? <div> <Link to="/home" className="mx-2 py-1 px-4 hidden md:inline hover:bg-purple-400 hover:text-white " >Profile</Link><button  className="border-2 border-black mx-2 py-1 px-4 hidden md:inline hover:bg-black hover:text-white rounded-xl" onClick={handleLogout}>Logout</button> </div>
                        :
                        <div className="d-flex hidden md:block">
                            <Link className="border-2 border-black mx-2 py-1 px-4 hover:bg-black hover:text-white rounded-xl" type="submit" role="button" to="/signup">Sign up</Link>
                            <Link className="border-2 border-black mx-2 py-1 px-4 hover:bg-black hover:text-white rounded-xl" type="submit" role="button" to="/login">Login</Link>
                        </div>}
                </div>
            </nav>

        </>
    )
}

export default Navbar
