import React from 'react';
import serviceImg from '../../../assets/service.png';

const OurService = () => {

    const servicesData = [
        {
            id: 1,
            image: serviceImg,
            title: "Express & Standard Delivery",
            description:
                "We deliver parcels within 24–72 hours across Bangladesh with fast service.",
        },
        {
            id: 2,
            image: serviceImg,
            title: "Same Day Delivery",
            description:
                "Fast same-day delivery inside Dhaka city for urgent needs.",
        },
        {
            id: 3,
            image: serviceImg,
            title: "Cash on Delivery",
            description:
                "Secure COD system for trusted online business support.",
        },
        {
            id: 4,
            image: serviceImg,
            title: "Parcel Tracking",
            description:
                "Real-time tracking from pickup to delivery.",
        },
        {
            id: 5,
            image: serviceImg,
            title: "Corporate Logistics",
            description:
                "Business-friendly warehouse and logistics solutions.",
        },
        {
            id: 6,
            image: serviceImg,
            title: "Parcel Return Service",
            description:
                "Easy return and exchange system for customers.",
        },
    ];

    return (
        <div className="py-16 px-5 max-w-7xl mx-auto">

            {/* Rounded Background Wrapper */}
            <div className="bg-[#03373D] rounded-3xl py-14 px-6 md:px-10">

                {/* Title */}
                <h2 className="text-3xl md:text-4xl font-bold text-center text-white">
                    Our Services
                </h2>

                {/* Subtitle */}
                <p className="text-center text-gray-300 mt-3 mb-12 max-w-2xl mx-auto">
                    Fast, secure and reliable delivery service across Bangladesh.
                </p>

                {/* Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

                    {servicesData.map((service) => (
                        <div
                            key={service.id}
                            className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm 
                            hover:bg-[#CAEB66] hover:text-black 
                            transition-all duration-300 hover:-translate-y-2 group text-center"
                        >

                            {/* Image */}
                            <div className="w-16 h-16 mb-5 rounded-xl bg-gray-100 flex items-center justify-center group-hover:bg-white/40 transition mx-auto">
                                <img
                                    src={service.image}
                                    alt={service.title}
                                    className="w-10 h-10 object-contain"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-lg font-semibold mb-2">
                                {service.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm text-gray-500 group-hover:text-black/80 leading-relaxed">
                                {service.description}
                            </p>

                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
};

export default OurService; 