import React, { useState } from 'react';
import Image from 'react-bootstrap/Image';

import classNames from "classnames/bind";
import styles from 'page/Application/Home/FastCharge/FastCharge.module.scss';

import imageTab1 from 'assets/img/FastChange/product.webp';
import imageTab2 from 'assets/img/FastChange/tab2.webp';
import imageTab3 from 'assets/img/FastChange/tab3.webp';
import imageTab4 from 'assets/img/FastChange/tab4.webp';
import imageTab5 from 'assets/img/FastChange/tab5.webp';
import imageTab6 from 'assets/img/FastChange/tab6.webp';

// import Tabs from 'components/Tabs';
// import Tab from 'components/Tab';
// import DetailCategory from 'page/Application/Home/FastCharge/DetailCategory';



const cx = classNames.bind(styles);

const listCategory = [
    {
        label: "Star Products",
        content: "Star Products Content",
        image: imageTab1,
        key: 'tab1'
    },
    {
        label: "Popular Live Broadcasts",
        content: "Popular Live Broadcasts Content",
        image: imageTab2,
        key: 'tab2'
    },
    {
        label: "Mobile Game Zone",
        content: "Mobile Game Zone Content",
        image: imageTab3,
        key: 'tab3'
    },
    {
        label: "Server Zone",
        content: "International Server Zone",
        image: imageTab4,
        key: 'tab4'
    },
    {
        label: "Gaming Companion",
        content: "Socializing and Gaming Companion",
        image: imageTab5,
        key: 'tab5'
    },
    {
        label: "Popular Games",
        content: "Popular Games",
        image: imageTab6,
        key: 'tab6'
    },
];


const FastCharge = () => {
    const [activeTab, setActiveTab] = useState('tab1');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return (
        <>
            <div className={cx('charge-header')}>
                {listCategory.map((category) => (
                    <div key={category.key} className={cx('charge-header__item', 'active')} onClick={() => handleTabClick(category.key)}>
                        <div className={cx('charge-header__wrap')}>
                            <Image className={cx('charge-header__icon')} src={category.image} />
                            <span className={cx('charge-header__name')}>{category.label}</span>
                        </div>
                    </div>
                ))}
            </div>
            <div className={cx('charge-main')}>
                {listCategory.map((categoryContent) => {
                    if (activeTab === categoryContent.key) {
                        return (
                            <div key={categoryContent.key}>{categoryContent.content}</div>
                        )
                    }
                    return null;
                })}
            </div>
        </>

    );
}

export default FastCharge;