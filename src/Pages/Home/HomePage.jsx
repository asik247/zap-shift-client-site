import React from 'react';
import Banner from '../Banner/Banner';
import FourCards from './FourCards/FourCards';
import OurService from './OurServices/OurService';

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
        </div>
    );
};

export default HomePage;