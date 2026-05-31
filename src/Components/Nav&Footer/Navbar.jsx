import React from 'react';
import { Link, NavLink } from 'react-router';
import Logo from '../../Shared/Logo';
import useAuth from '../../Hooks/useAuth';

const Navbar = () => {
    //?user get AuthProvider;
    const { user, logOutUsers } = useAuth();
    // console.log('currentUser',user);
    const links = <>
        <li><NavLink to={'/services'}>Services</NavLink></li>
        <li><NavLink to={'/coverage'}>Coverage</NavLink></li>
        <li><NavLink to={'/percelSend'}>Send A Percel</NavLink></li>
        <li><NavLink to={'/rider'}>Be A Rider</NavLink></li>
        {
            user && <>
                <li><NavLink to={'/dashboard/mypercels'}>My Parcels</NavLink></li>
                
              

            </>
        }
        <li><NavLink to={'/aboutus'}>About Us</NavLink></li>
        <li><NavLink to={'/pricing'}>Pricing</NavLink></li>
        <li><NavLink to={'/blog'}>Blog</NavLink></li>
        <li><NavLink to={'/contact'}>Contace</NavLink></li>
    </>
    //!LogOut code here;
    const handleLogOut = () => {
        logOutUsers()
            .then(() => {

            }).catch(error => {
                console.log(error);
            })
    }
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
                {/* logo */}
                <Logo></Logo>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end">
                {/* cheack user in then show logOut user out show singIn */}
                {
                    user ? <a onClick={handleLogOut} className="btn btn-accent">Log Out</a> : <Link className='btn btn-primary' to={'/login'}>Sign In</Link>
                }

            </div>
        </div>
    );
};

export default Navbar;