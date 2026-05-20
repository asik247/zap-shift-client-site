import React from 'react';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png'
import Logo from '../Shared/Logo';
const AuthLayout = () => {
    return (
        <div className='w-11/12 mx-auto'>
            <div>
                <Logo></Logo>
            </div>
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