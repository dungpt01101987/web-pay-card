import React from "react";

import MainLayout from "page/Application/Home/MainLayout";
import HorPanel from "page/Application/Home/HorPanel";
import FastCharge from "page/Application/Home/FastCharge";
import RecommendGoods from "page/Application/Home/RecommendGoods";

import classNames from "classnames/bind";
import styles from 'page/Application/Home/Home.module.scss';

const cx = classNames.bind(styles);

function Home() {
    return (
        <div className={cx('index-container')}>
            <MainLayout />
            <HorPanel />
            <FastCharge />
            <RecommendGoods />
        </div>
    );
}

export default Home;