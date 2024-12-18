'use client'
import React, { useState } from "react";
import { GiSteeringWheel } from "react-icons/gi"
import { AiOutlineClose } from "react-icons/ai"
import { RiMenuUnfoldFill } from "react-icons/ri"
import Link from "next/link";


const Navbar = () => {
    const [menu, setMenu] = useState(false);

    const handleChange = () => {
        setMenu(!menu);
    }
    return (
        <header className="bg-gray-900 text-white py-4">
            <nav className="container flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <GiSteeringWheel size={35} className="text-orange-400" />
                    <a href="/" className="font-bold text-2xl">Planet Wheels</a>
                </div>
                <div className="hidden md:flex items-center gap-8 font-medium text-xl">
                    <Link href="/" className="hover:text-orange-400 duration-200 ease-linear">Home</Link>
                    <Link href="/about" className="hover:text-orange-400 duration-200 ease-linear">About us</Link>
                    <Link href="/cars" className="hover:text-orange-400 duration-200 ease-linear">Our Cars</Link>
                    <Link href="/services" className="hover:text-orange-400 duration-200 ease-linear">Services</Link>
                    <Link href="/signin">
                    <button className="hidden lg:flex border-2 border-orange-400 text-lg px-4 rounded-md hover:bg-orange-400 transition duration-200 ease-linear">Sign In</button>
                    </Link>
                </div>
                <div>
                    {menu ? (
                        <AiOutlineClose size={25} onClick={handleChange} />
                    ) : (
                        <RiMenuUnfoldFill size={25} onClick={handleChange} />
                    )}

                </div>
            </nav>
            <div className={`${menu ? "translate-x-0" : "-translate-x-full"} md:hidden flex flex-col absolute bg-gray-900 text-white left-0 top-16 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-3/4 h-fit rounded-br-xl transition-transform duration-300 ease-in-out z-40`}>
                <a href="/" className="hover:text-orange-400 duration-200 ease-linear">Home</a>
                <a href="/about" className="hover:text-orange-400 duration-200 ease-linear">About us</a>
                <a href="/cars" className="hover:text-orange-400 duration-200 ease-linear">Our Cars</a>
                <a href="/services" className="hover:text-orange-400 duration-200 ease-linear">Services</a>
                <div>
                <a href="/signin" className="border-2 border-orange-400 py-1 px-4 rounded-md">Sign In</a>
                
                </div>
            </div>

        </header>

    )
};

export default Navbar;