import React, { useState } from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../Shared/Logo';
import { FaArrowUp, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [open, setOpen] = useState(false);

    const links = (
        <>
            {[
                { to: "/services", label: "Services" },
                { to: "/coverage", label: "Coverage" },
                { to: "/aboutus", label: "About Us" },
                { to: "/pricing", label: "Pricing" },
                { to: "/blog", label: "Blog" },
                { to: "/contact", label: "Contact" },
            ].map((item) => (
                <li key={item.to}>
                    <NavLink
                        to={item.to}
                        onClick={() => setOpen(false)}
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-xl font-medium transition-all duration-300 block
                            ${isActive
                                ? "bg-[#caeb66] text-black shadow-md"
                                : "text-gray-700 hover:bg-[#caeb66]/30 hover:text-black"
                            }`
                        }
                    >
                        {item.label}
                    </NavLink>
                </li>
            ))}
        </>
    );

    return (
        <div className="w-full bg-white shadow-sm sticky top-0 z-50">
            <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">

                {/* Logo */}
                <Logo />

                {/* Desktop Menu */}
                <div className="hidden lg:flex">
                    <ul className="flex items-center gap-2">
                        {links}
                    </ul>
                </div>

                {/* Right Actions */}
                <div className="flex items-center gap-3">

                    <Link to={'/login'}
                        className="hidden sm:inline-flex items-center justify-center px-6 py-2 rounded-full bg-white text-black border border-gray-200 hover:bg-[#caeb66] hover:scale-105 transition-all duration-300"
                    >
                        Sign In
                    </Link>

                    <Link
                        className="hidden sm:inline-flex items-center justify-center px-6 py-2 rounded-full bg-[#caeb66] text-black hover:bg-lime-300 hover:scale-105 transition-all duration-300"
                    >
                        Be a rider
                    </Link>

                    <button
                        className="w-11 h-11 rounded-full bg-black text-white flex items-center justify-center hover:bg-[#caeb66] hover:text-black hover:rotate-12 transition-all duration-300"
                    >
                        <FaArrowUp className="text-lg rotate-45" />
                    </button>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setOpen(!open)}
                        className="lg:hidden w-11 h-11 flex items-center justify-center rounded-full border border-gray-200"
                    >
                        {open ? <FaTimes /> : <FaBars />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="lg:hidden bg-white border-t shadow-md">
                    <ul className="flex flex-col gap-2 p-4">
                        {links}
                    </ul>

                    {/* Mobile buttons */}
                    <div className="flex flex-col gap-2 p-4 border-t">
                        <Link to={'/login'} className="btn rounded-full bg-white border border-gray-200">
                            Sign In
                        </Link>

                        <Link className="btn rounded-full bg-[#caeb66] text-black">
                            Be a rider
                        </Link>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Navbar;