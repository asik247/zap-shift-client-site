import React from 'react';
import Banner from '../Banner/Banner';
import FourCards from './FourCards/FourCards';

const HomePage = () => {
    return (
        <div className='mt-4'>
            <Banner></Banner>
            <div>
                <FourCards></FourCards>
            </div>
        </div>
    );
};

export default HomePage;