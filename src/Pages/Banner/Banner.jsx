import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

import bannerImg1 from '../../assets/banner/banner1.png';
import bannerImg2 from '../../assets/banner/banner2.png';
import bannerImg3 from '../../assets/banner/banner3.png';

const Banner = () => {
    return (
        <div className="w-full rounded-2xl overflow-hidden">
            <Carousel
                // autoPlay
                infiniteLoop
                stopOnHover={false}
                interval={3500}
                transitionTime={800}
                swipeable
                emulateTouch
                showArrows={true}
                showStatus={true}
                showIndicators={true}
                showThumbs={false}
                useKeyboardArrows
            >
                <div className="relative">
                    <img
                        src={bannerImg1}
                        alt="Banner 1"
                        className="w-full h-[220px] sm:h-[300px] md:h-[450px] lg:h-[550px] object-cover"
                    />
                   
                </div>

                <div className="relative">
                    <img
                        src={bannerImg2}
                        alt="Banner 2"
                        className="w-full h-[220px] sm:h-[300px] md:h-[450px] lg:h-[550px] object-cover"
                    />
                </div>

                <div className="relative">
                    <img
                        src={bannerImg3}
                        alt="Banner 3"
                        className="w-full h-[220px] sm:h-[300px] md:h-[450px] lg:h-[550px] object-cover"
                    />
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;