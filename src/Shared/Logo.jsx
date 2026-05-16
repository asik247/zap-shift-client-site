import React from 'react';
// import logo from '../../public/'
import logo from "../assets/logo.png"
import { Link } from 'react-router';
const Logo = () => {
    return (

        <Link to={'/'} className='flex justify-between items-center cursor-pointer'>
            <img src={logo} alt="" />
            <h2 className='text-2xl font-extrabold'>Zap Shift</h2>
        </Link>

    );
};

export default Logo;