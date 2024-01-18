import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Image from 'react-bootstrap/Image';

import classNames from "classnames/bind";
import styles from 'page/Application/Home/HorPanel/HorPanel.module.scss';
import image1 from 'assets/img/hor-panel/1.webp';
import imageTitle from 'assets/img/hor-panel/编组 13.png';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

const HorPanel = () => {
    const slides = [
        {
            id: 1,
            image: image1,
            title: "Bigo Top-up 1"
        },
        {
            id: 2,
            image: image1,
            title: "Bigo Top-up 2"
        },
        {
            id: 3,
            image: image1,
            title: "Bigo Top-up 3"
        }
        , {
            id: 4,
            image: image1,
            title: "Bigo Top-up 4"
        }
        , {
            id: 5,
            image: image1,
            title: "Bigo Top-up 5"
        }
        , {
            id: 6,
            image: image1,
            title: "Bigo Top-up 6"
        }
        , {
            id: 7,
            image: image1,
            title: "Bigo Top-up 7"
        },
        {
            id: 8,
            image: image1,
            title: "Bigo Top-up 8"
        }
        ,
        {
            id: 9,
            image: image1,
            title: "Bigo Top-up 9"
        }
        ,
        {
            id: 10,
            image: image1,
            title: "Bigo Top-up 19"
        }
        ,
        {
            id: 11,
            image: image1,
            title: "Bigo Top-up 11"
        }
    ];

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
    };

    return (

        <div className={cx('hor-panel')}>
            <Image
                className={cx('hor-panel-title')}
                src={imageTitle}
            />
            <div className={cx('panel-goods')}>
                <Slider {...settings}>
                    {slides.map((slide) => (
                        <Link className={cx('panel-goods-item')} to="#" key={slide.id}>
                            <Image src={slide.image} className={cx('panel-goods__icon')} />
                            <span className={cx('panel-goods__title')}>{slide.title}</span>
                        </Link>

                    ))}
                </Slider>
            </div>


        </div>
    );
}

export default HorPanel;