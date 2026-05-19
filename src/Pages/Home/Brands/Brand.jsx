import React from 'react';

import amazon from '../../../assets/brands/amazon.png';
import amazon_vector from '../../../assets/brands/amazon_vector.png';
import casio from '../../../assets/brands/casio.png';
import moonstar from '../../../assets/brands/moonstar.png';
import randstad from '../../../assets/brands/randstad.png';
import star from '../../../assets/brands/star.png';
import start_people from '../../../assets/brands/start_people.png';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';

const brandLogos = [
    amazon,
    amazon_vector,
    casio,
    moonstar,
    randstad,
    star,
    start_people
];

const Brand = () => {
    return (
        <div className="py-5">

            <div className="text-center mb-6">
                <p className="text-primary font-semibold uppercase tracking-widest text-xs sm:text-sm">
                    We've helped thousands of sales teams
                </p>
            </div>

            <Swiper
                slidesPerView={2}
                spaceBetween={10}
                loop={true}
                autoplay={{
                    delay: 1200,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {brandLogos.map((logo, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex justify-center items-center">
                            <img
                                src={logo}
                                alt="brand"
                                className="w-20 sm:w-28 md:w-32 h-12 sm:h-14 md:h-16 object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

        </div>
    );
};

export default Brand;