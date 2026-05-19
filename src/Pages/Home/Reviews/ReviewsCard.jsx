import React from 'react';
import { FaQuoteLeft, FaStar } from 'react-icons/fa';

const ReviewsCard = ({ singleReview }) => {
    const {
        userName,
        review,
        user_photoURL,
        ratings
    } = singleReview;

    return (
        <div className="h-full">
            <div className="border border-gray-100 rounded-2xl p-6 bg-white shadow-sm hover:shadow-xl transition-all duration-300 h-full flex flex-col">

                {/* Quote icon */}
                <FaQuoteLeft className="text-3xl text-lime-400 mb-4" />

                {/* Review text */}
                <p className="text-gray-600 mb-6 leading-relaxed flex-grow">
                    {review}
                </p>

                {/* Footer */}
                <div className="border-t pt-4 flex items-center gap-4">

                    {/* Avatar */}
                    <img
                        src={user_photoURL}
                        alt={userName}
                        className="w-12 h-12 rounded-full object-cover ring-2 ring-lime-200"
                    />

                    <div className="flex-1">
                        <h2 className="font-semibold text-gray-800">
                            {userName}
                        </h2>

                        {/* Rating stars */}
                        <div className="flex items-center gap-1 text-lime-400 text-sm">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <FaStar
                                    key={i}
                                    className={i < ratings ? "text-lime-400" : "text-gray-300"}
                                />
                            ))}
                            <span className="ml-2 text-gray-500">
                                ({ratings}/5)
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;