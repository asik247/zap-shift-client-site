import React from 'react';
import liveTracking from '../../../assets/live-tracking.png';
import safeDelivery from '../../../assets/safe-delivery.png';
import tinyDeliveryMan from '../../../assets/tiny-deliveryman.png';

const features = [
    {
        id: 1,
        title: "Live Parcel Tracking",
        desc: "Stay updated in real-time with our live parcel tracking feature. From pick-up to delivery, monitor your shipment's journey with instant status updates.",
        img: liveTracking,
    },
    {
        id: 2,
        title: "Safe Delivery",
        desc: "We ensure your parcels are handled with care and delivered safely with our trusted delivery network and secure handling system.",
        img: safeDelivery,
    },
    {
        id: 3,
        title: "Fast & Reliable Service",
        desc: "Our delivery system is optimized for speed and reliability, ensuring your parcel reaches its destination on time, every time.",
        img: tinyDeliveryMan,
    },
];

const LiveParcel = () => {
    return (
        <div className="max-w-5xl mx-auto py-12 space-y-8">
            {features.map((item) => (
                <div
                    key={item.id}
                    className="flex flex-col md:flex-row items-center gap-6 bg-white shadow-md rounded-2xl p-5 hover:shadow-xl transition-all duration-300"
                >
                    {/* Image */}
                    <div className="w-20 h-20 flex-shrink-0">
                        <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-contain"
                        />
                    </div>

                    <div className="flex flex-row lg:flex-col items-center my-4 text-gray-400">
                        <span className="w-1 h-1 bg-gray-400 rounded-full my-1"></span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full my-1"></span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full my-1"></span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full my-1"></span>
                        <span className="w-1 h-1 bg-gray-400 rounded-full my-1"></span>
                    </div>

                    {/* Content */}
                    <div className="text-center md:text-left">
                        <h2 className="text-xl font-semibold text-gray-800">
                            {item.title}
                        </h2>
                        <p className="text-gray-600 mt-2 leading-relaxed">
                            {item.desc}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default LiveParcel;