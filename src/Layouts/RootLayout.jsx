import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Nav&Footer/Navbar';
import Footer from '../Components/Nav&Footer/Footer';

const RootLayout = () => {
    return (
        <div className='w-11/12 mx-auto mt-4 min-h-screen flex flex-col overflow-x-hidden'>
            <Navbar></Navbar>
            <div className='flex-1'>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;