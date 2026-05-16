import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Nav&Footer/Navbar';
import Footer from '../Components/Nav&Footer/Footer';

const RootLayout = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;