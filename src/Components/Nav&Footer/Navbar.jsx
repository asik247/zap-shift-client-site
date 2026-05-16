import React from 'react';
import { NavLink } from 'react-router';
import Logo from '../../Shared/Logo';

const Navbar = () => {
    const links = <>
        <li>
            <NavLink
                to="/services"
                className={({ isActive }) =>
                    `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${isActive
                        ? "bg-[#caeb66] text-black shadow-md"
                        : "text-gray-700 hover:bg-[#caeb66]/30 hover:text-black"
                    }`
                }
            >
                Services
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/coverage"
                className={({ isActive }) =>
                    `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${isActive
                        ? "bg-[#caeb66] text-black shadow-md"
                        : "text-gray-700 hover:bg-[#caeb66]/30 hover:text-black"
                    }`
                }
            >
                Coverage
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/aboutus"
                className={({ isActive }) =>
                    `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${isActive
                        ? "bg-[#caeb66] text-black shadow-md"
                        : "text-gray-700 hover:bg-[#caeb66]/30 hover:text-black"
                    }`
                }
            >
                About Us
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/pricing"
                className={({ isActive }) =>
                    `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${isActive
                        ? "bg-[#caeb66] text-black shadow-md"
                        : "text-gray-700 hover:bg-[#caeb66]/30 hover:text-black"
                    }`
                }
            >
                Pricing
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/blog"
                className={({ isActive }) =>
                    `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${isActive
                        ? "bg-[#caeb66] text-black shadow-md"
                        : "text-gray-700 hover:bg-[#caeb66]/30 hover:text-black"
                    }`
                }
            >
                Blog
            </NavLink>
        </li>

        <li>
            <NavLink
                to="/contact"
                className={({ isActive }) =>
                    `px-4 py-2 rounded-xl font-medium transition-all duration-300 ${isActive
                        ? "bg-[#caeb66] text-black shadow-md"
                        : "text-gray-700 hover:bg-[#caeb66]/30 hover:text-black"
                    }`
                }
            >
                Contact
            </NavLink>
        </li>
    </>
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                {/* Logo Components */}
                <Logo></Logo>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                <a className="primaryBtn">Button</a>
            </div>
        </div>
    );
};

export default Navbar;