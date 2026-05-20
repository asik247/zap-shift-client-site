import React from 'react';
import { Link } from 'react-router';

const AboutPage = () => {
    return (
        <div className="max-w-5xl mx-auto px-4 py-10">

            {/* Header */}
            <div className="mb-10 text-left">
                <h1 className="text-3xl md:text-4xl font-bold mb-4">
                    About Us
                </h1>

                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                    Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
                    From personal packages to business shipments — we deliver on time, every time.
                </p>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-300 my-8"></div>

            {/* Tabs */}
            <div className="flex flex-wrap gap-3 mb-10 justify-start">
                <Link className="px-4 py-2 rounded-full border text-sm md:text-base hover:bg-black hover:text-white transition">
                    Story
                </Link>
                <Link className="px-4 py-2 rounded-full border text-sm md:text-base hover:bg-black hover:text-white transition">
                    Mission
                </Link>
                <Link className="px-4 py-2 rounded-full border text-sm md:text-base hover:bg-black hover:text-white transition">
                    Success
                </Link>
                <Link className="px-4 py-2 rounded-full border text-sm md:text-base hover:bg-black hover:text-white transition">
                    Team & Others
                </Link>
            </div>

            {/* Content */}
            <div className="bg-white border rounded-xl p-5 md:p-8 shadow-sm space-y-5 text-left">

                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    We started with a simple promise — to make parcel delivery fast, reliable, and stress-free.
                    Over the years, our commitment to real-time tracking, efficient logistics, and customer-first service
                    has made us a trusted partner for thousands.
                </p>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Whether it's a personal gift or a time-sensitive business delivery, we ensure it reaches its destination —
                    on time, every time.
                </p>

                <p className="text-gray-700 text-sm md:text-base leading-relaxed">
                    Our mission is to combine technology and logistics to build a smarter delivery experience for everyone.
                </p>

            </div>
        </div>
    );
};

export default AboutPage;