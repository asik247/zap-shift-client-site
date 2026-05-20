import React from 'react';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'
import Logo from '../Shared/Logo';
const AuthLayout = () => {
    return (
        <div>
           <Logo></Logo>
            <div className='flex items-center gap-4'>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex1'>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;