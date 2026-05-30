import React from 'react';
import ReviewsCard from './ReviewsCard';
import customer_top from '../../../assets/customer-top.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';

const Reviews = ({ revewData }) => {
    return (
        <div className='w-full py-16 px-4 bg-gray-50'>

            {/* Header Image */}
            <div className='flex justify-center'>
                <img src={customer_top} alt="customers" className='w-36 md:w-40' />
            </div>

            {/* Title */}
            <h1 className='text-2xl md:text-4xl font-bold text-center mt-4 text-gray-800'>
                What our customers are saying
            </h1>

            {/* Description */}
            <p className='text-center text-gray-500 max-w-2xl mx-auto mt-3 text-sm md:text-base'>
                Real feedback from real users who trust our service for fast, safe and reliable delivery experience.
            </p>

            {/* Swiper */}
            <div className='mt-12 max-w-6xl mx-auto'>

                <Swiper
                    effect={'coverflow'}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}

                    slidesPerView={1}   

                    spaceBetween={30}
                    speed={800}

                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}

                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 100,
                        modifier: 1,
                        slideShadows: true,
                    }}

                    pagination={{
                        clickable: true,
                        dynamicBullets: true,
                    }}

                    breakpoints={{
                        640: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 },
                    }}

                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >
                    {revewData?.map((singleReview, index) => (
                        <SwiperSlide key={singleReview.id || index}>
                            <div className="h-full px-2">
                                <ReviewsCard singleReview={singleReview} />
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>
        </div>
    );
};

export default Reviews;