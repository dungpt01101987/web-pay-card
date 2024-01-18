import React from 'react';
import { Carousel as ResponsiveCarousel } from 'react-responsive-carousel';

import classNames from "classnames/bind";
import styles from 'page/Application/Home/MainLayout/MainLayout.module.scss';

import image1 from 'assets/img/slide/1.webp';
import image2 from 'assets/img/slide/2.webp';
import image3 from 'assets/img/slide/3.webp';

const cx = classNames.bind(styles);

const Carousel = () => {

    const slides = [
        image1,
        image2,
        image3
        // Add more images or content here
    ];

    return (
        <div className={cx('carousel')}>
            <ResponsiveCarousel autoPlay interval={3000} infiniteLoop>
                {slides.map((slide, index) => (
                    <div key={index}>
                        <img src={slide} alt={`Slide ${index}`} />
                    </div>
                ))}
            </ResponsiveCarousel>
        </div>
    );
}

export default Carousel;