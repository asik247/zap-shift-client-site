import React from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

const ReviewsCard = ({ singleReview }) => {

    const {
        userName,
        review,
        user_photoURL,
        ratings
    } = singleReview;

    return (
        <div>
            
            <div className='border border-gray-200 rounded-2xl p-6  bg-white shadow-md h-full'>



                <FaQuoteLeft className='text-3xl text-lime-400 mb-4' />

                <p className='text-gray-600 mb-5'>
                    {review}
                </p>

                <div className='border-t pt-4 flex items-center gap-4'>

                    <img
                        src={user_photoURL}
                        alt=""
                        className='w-14 h-14 rounded-full object-cover'
                    />

                    <div>
                        <h2 className='font-bold text-lg'>
                            {userName}
                        </h2>

                        <p className='text-sm text-gray-500'>
                            Rating: {ratings}
                        </p>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default ReviewsCard;