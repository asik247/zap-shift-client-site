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
        <div className='w-full py-16 px-4'>

            {/* Header Image */}
            <div className='flex justify-center'>
                <img src={customer_top} alt="" className='w-40' />
            </div>

            {/* Title */}
            <h1 className='text-3xl md:text-4xl font-bold text-center mt-4'>
                What our customers are saying
            </h1>

            {/* Description */}
            <p className='text-center text-gray-500 max-w-2xl mx-auto mt-3'>
                Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                Achieve proper alignment, reduce pain, and strengthen your body with ease!
            </p>

            {/* Swiper */}
            <div className='mt-10'>

                <Swiper
                    effect={'coverflow'}
                    loop={true}
                    grabCursor={true}
                    centeredSlides={true}

                    slidesPerView={3}
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

                    modules={[EffectCoverflow, Pagination, Autoplay]}
                    className="mySwiper"
                >

                    {
                        revewData?.map((singleReview, index) => (
                            <SwiperSlide
                                key={singleReview.id || index}
                            >
                                <ReviewsCard singleReview={singleReview} />
                            </SwiperSlide>
                        ))
                    }

                </Swiper>

            </div>

        </div>
    );
};

export default Reviews;