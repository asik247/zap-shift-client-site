import React, { useEffect, useState } from 'react';
import Banner from '../Banner/Banner';
import FourCards from './FourCards/FourCards';
import OurService from './OurServices/OurService';
import Brand from './Brands/Brand';
import Reviews from './Reviews/Reviews';
const HomePage = () => {
    const [revewData,setReviewData] = useState([])
    useEffect(()=>{
        fetch('/reviews.json')
        .then(res=>res.json())
        .then(data=>setReviewData(data))
    },[])
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
            <div>
                <Reviews revewData={revewData}></Reviews>
            </div>
        </div>
    );
};

export default HomePage;