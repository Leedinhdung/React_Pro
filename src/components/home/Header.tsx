import React, { useState } from 'react'
import { HiChevronDown, HiPhone } from 'react-icons/hi'
import { HiEnvelope } from 'react-icons/hi2'
import { FaBars, FaBorderAll, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";

import { Link, NavLink } from 'react-router-dom';
import logo from "../../../public/images/logo.png"

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };
    const Menu = [
        {
            title: "Home",
            path: "/home"
        },
        {
            title: "Page",
            path: "/home"
        },
        {
            title: "User Account",
            path: "/home"
        },
        {
            title: "Vendor Account",
            path: "/home"
        },
        {
            title: "Track My Order",
            path: "/home"
        },
        {
            title: "Contact",
            path: "/home"
        }

    ]

    window.addEventListener('scroll', function () {
        const header = this.document.querySelector(".header")
        header?.classList.toggle("active", this.window.scrollY > 100)
    })


    return (
        <main className='shadow '>
            <section className='bg-[#0f3460] py-[10px] text-white '>
                <div className="container flex justify-between items-center ">

                    <div className='flex items-center'>
                        <HiPhone className='me-[10px]' />
                        <label className='me-[30px] text-[13px]' htmlFor=""> +84 876 543 21</label>
                        <HiEnvelope className='me-[10px]' />
                        <label className='me-[30px] text-[13px]' htmlFor="">example@gmail.com</label>
                    </div>
                    <div>
                        <label className='me-[30px] text-[13px]' htmlFor="">Theme FAQ's</label>
                        <label className='me-[30px] text-[13px]' htmlFor="">Need Helps</label>

                    </div>

                </div>
            </section>
            <section className='header py-[10px]'>
                <div className='container flex justify-between items-center '>
                    <div>
                        <img src={logo} className="w-24" alt="" />
                    </div>
                    <div className='w-[50%] relative hidden md:block'>
                        <FaSearch
                            className='absolute  top-3 right-3 ms-1 ' />
                        <input type="text" className='w-full pe-10 ps-5 rounded-full' placeholder='Search' />
                    </div>

                    <div className='flex items-center justify-between gap-5 '>

                        <Link to="/login" className='bg-slate-200 p-4 rounded-full '><FaUser fontSize={24} /></Link>
                        <div className='relative bg-slate-200 p-4 rounded-full'>
                            <Link to="/cart" className=' '><FaShoppingBag fontSize={24} /></Link>
                            <span className='absolute top-2 right-1 w-5 h-5 rounded-[50%] text-center bg-[#e94560] text-white text-xs leading-5'>0</span>
                        </div>


                        <div className='sm:hidden'>
                            <button onClick={toggleMenu}>
                                {
                                    isMenuOpen ? <FaTimes className='w-5 h-5 ' /> : <FaBars className='w-5 h-5 ' />
                                }
                            </button>
                        </div>


                    </div>
                </div>
            </section>
            <section className='md:pt-3 py-2'>
                <header className=''>
                    <div className='container flex justify-between'>
                        <div className='flex items-center gap-4 shadow px-5 rounded-lg'>
                            <FaBorderAll fontSize={30} />
                            <h4 className='flex items-center text-xl font-medium'>Categories <HiChevronDown /></h4>
                        </div>
                        <div>
                            <div className="pt-4">
                                <ul className="lg:flex items-center gap-10 hidden">
                                    {Menu.map(({ title, path }) => (
                                        <li key={title} className=" hover:text-orange-500 font-medium">
                                            <NavLink
                                                to={path}
                                                className={({ isActive }) => (isActive ? "active" : "")}
                                            >
                                                {title}
                                            </NavLink>
                                        </li>
                                    ))}
                                </ul>

                                {/* Mobile */}
                                <div>
                                    <ul
                                        className={`absolute top-[24%] w-full right-0 bg-white shadow-md  px-4 py-2 rounded z-10000 sm:hidden ${isMenuOpen ? "" : "hidden"
                                            }`}
                                    >
                                        {Menu.map(({ title, path }) => (
                                            <li
                                                key={title}
                                                className=" hover:text-orange-500 py-2 cursor-pointer border-b-2 hover:bg-slate-300 uppercase  px-3"
                                            >
                                                <Link to={path} onClick={toggleMenu}>
                                                    {title}
                                                </Link>
                                            </li>

                                        ))}
                                        <div className='w-full relative mt-3'>
                                            <FaSearch
                                                className='absolute  top-3 right-3 ms-1 ' />
                                            <input type="text" className='w-full pe-10 ps-5 rounded-full' placeholder='Search' />
                                        </div>

                                    </ul>

                                </div>

                            </div>

                        </div>



                    </div>

                </header>
            </section>

        </main>

    )
}

export default Header
