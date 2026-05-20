import React from 'react';
import locationMmerchant from '../../../assets/location-merchant.png'
import beAMerchant from '../../../assets/be-a-merchant-bg.png'
const MarketingHero = () => {
    return (
        <div className='bg-[#003c3f] p-10 relative'>
            {/* <p>Marketing Hero Section</p> */}
            <div className='absolute top-0 left-0 w-full h-40 object-cover'>
                <img src={beAMerchant} alt="" />
            </div>
            {/* Right Site text */}
            <div className='flex justify-baseline items-center'>
                <div>
                    <h2>Merchant and Customer Satisfaction is Our First Priority</h2>
                    <p>We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.</p>
                    <div>
                        <button className='btn btn-ghost'>Become a Merchant</button>
                        <button className='btn btn-ghost'>Earn with ZapShift Courier</button>
                    </div>
                </div>
                {/* Left site img */}
                <div>
                    <img src={locationMmerchant} alt="" />
                </div>
            </div>
        </div>
    );
};

export default MarketingHero;