import React from 'react';
import { FaCarSide } from 'react-icons/fa';

const FourCards = () => {

    const cardData = [
        {
            id: 1,
            title: "Booking Pick & Drop",
            description:
                "From personal packages to business shipments - we deliver on time, every time",
        },
        {
            id: 2,
            title: "Cash On Delivery",
            description:
                "Secure and flexible payment options for every delivery service",
        },
        {
            id: 3,
            title: "Fast Delivery",
            description:
                "Quick and reliable shipping service across the country",
        },
        {
            id: 4,
            title: "Delivery Hub",
            description:
                "Manage all deliveries in one smart and centralized hub",
        },
    ];

    return (
        <div className="py-16 px-5 max-w-7xl mx-auto">

            {/* Title */}
            <h2 className="text-3xl md:text-4xl font-bold text-start mb-12 text-gray-800">
                How it Works
            </h2>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

                {cardData.map((singleCard) => (
                    <div
                        key={singleCard.id}
                        className="group bg-white border border-gray-100 p-6 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
                    >

                        {/* Icon */}
                        <div className="w-14 h-14 rounded-xl bg-[#caeb66]/20 flex items-center justify-center text-[#caeb66] text-2xl mb-5 group-hover:scale-110 transition">
                            <FaCarSide />
                        </div>

                        {/* Title */}
                        <h1 className="text-lg font-semibold text-gray-800 mb-2">
                            {singleCard.title}
                        </h1>

                        {/* Description */}
                        <p className="text-sm text-gray-500 leading-relaxed">
                            {singleCard.description}
                        </p>

                    </div>
                ))}

            </div>
        </div>
    );
};

export default FourCards;