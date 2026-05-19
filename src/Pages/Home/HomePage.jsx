import React from 'react';
import Banner from '../Banner/Banner';
import FourCards from './FourCards/FourCards';
import OurService from './OurServices/OurService';
import Brand from './Brands/Brand';

const HomePage = () => {
    return (
        <div className='mt-4'>
            <Banner></Banner>
            <div>
                <FourCards></FourCards>
            </div>
            <div>
                <OurService></OurService>
            </div>
            <div>
                <Brand></Brand>
            </div>
        </div>
    );
};

export default HomePage;