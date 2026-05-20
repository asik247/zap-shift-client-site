import React from 'react';
import { Outlet } from 'react-router';
import authImage from '../assets/authImage.png';
import Logo from '../Shared/Logo';

const AuthLayout = () => {
    return (
        <div className='min-h-screen bg-gray-50'>
            
            {/* Navbar / Logo */}
            <div className='w-11/12 mx-auto py-5 flex items-center'>
                <Logo />
            </div>

            {/* Main Section */}
            <div className='w-11/12 mx-auto'>
                <div className='grid grid-cols-1 lg:grid-cols-2 items-center bg-white rounded-3xl shadow-xl overflow-hidden'>

                    {/* Form Side */}
                    <div className='p-8 md:p-14 flex items-center justify-center'>
                        <div className='w-full max-w-md'>
                            <Outlet />
                        </div>
                    </div>

                    {/* Image Side */}
                    <div className='hidden lg:flex items-center justify-center bg-gradient-to-br from-[#CAEB66] to-[#b7df3f] h-full p-10'>
                        <img
                            src={authImage}
                            alt="Auth"
                            className='w-full max-w-lg object-contain'
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default AuthLayout;