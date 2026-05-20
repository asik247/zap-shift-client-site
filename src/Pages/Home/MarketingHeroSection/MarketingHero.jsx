import React from 'react';
import locationMmerchant from '../../../assets/location-merchant.png';
import beAMerchant from '../../../assets/be-a-merchant-bg.png';

const MarketingHero = () => {
    return (
        <section className="relative w-full max-w-6xl mx-auto bg-[#003c3f] text-white overflow-hidden rounded-2xl">

            {/* Background image */}
            <img
                src={beAMerchant}
                alt=""
                className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
            />

            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 p-6 md:p-12">

                {/* Text Content */}
                <div className="flex-1 space-y-5 text-center md:text-left">
                    <h2 className="text-2xl md:text-4xl font-bold leading-snug">
                        Merchant and Customer Satisfaction is Our First Priority
                    </h2>

                    <p className="text-sm md:text-base text-gray-200">
                        We offer the lowest delivery charge with the highest value along with 100% safety of your product. Pathao courier delivers your parcels in every corner of Bangladesh right on time.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-2">

                        <button className="px-5 py-2 rounded-full bg-[#caeb66] text-black font-semibold hover:bg-lime-300 transition">
                            Become a Merchant
                        </button>

                        <button className="px-5 py-2 rounded-full border border-[#caeb66] text-[#caeb66] hover:bg-[#caeb66] hover:text-black transition">
                            Earn with ZapShift Courier
                        </button>

                    </div>
                </div>

                {/* Image */}
                <div className="flex-1 flex justify-center">
                    <img
                        src={locationMmerchant}
                        alt="merchant"
                        className="w-full max-w-xs md:max-w-md"
                    />
                </div>

            </div>
        </section>
    );
};

export default MarketingHero;