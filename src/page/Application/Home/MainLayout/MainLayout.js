import React from 'react';
import Sidebar from './Sidebar';
import Carousel from './Carousel';
import PaymentOptions from './PaymentOptions';

import classNames from "classnames/bind";
import styles from 'page/Application/Home/MainLayout/MainLayout.module.scss';

const cx = classNames.bind(styles);

const MainLayout = () => {
    return (
        <div className={cx('main-layout')}>
            <Sidebar />
            <Carousel />
            <PaymentOptions />
        </div>
    );
};

export default MainLayout;