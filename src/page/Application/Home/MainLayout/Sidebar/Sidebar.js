import React from 'react';
import Image from 'react-bootstrap/Image';

import classNames from "classnames/bind";
import styles from 'page/Application/Home/MainLayout/MainLayout.module.scss';
import { Link } from 'react-router-dom';
import iconProduct from 'assets/img/side-bar/product.webp';

const cx = classNames.bind(styles);

const Sidebar = () => {
    return (
        <div className={cx('side-bar')}>
            <div className={cx('side-bar-containner')}>
                <div className={cx('category-item')}>
                    <h3 className={cx('item-title')}>
                        <Image
                            className={cx('title-icon')}
                            src={iconProduct}
                        />
                        Best-selling products
                    </h3>
                    <div className={cx('category-item-container')}>
                        <Link className={cx('item-link')} to="#">
                            Douyin Top up
                        </Link>
                        <Link className={cx('item-link')} to="#">
                            Douyin Top up
                        </Link>
                        <Link className={cx('item-link')} to="#">
                            Douyin Top up
                        </Link>
                    </div>
                </div>

                <div className={cx('category-item')}>
                    <h3 className={cx('item-title')}>
                        <Image
                            className={cx('title-icon')}
                            src={iconProduct}
                        />
                        Best-selling products
                    </h3>
                    <div className={cx('category-item-container')}>
                        <Link className={cx('item-link')} to="#">
                            Douyin Top up
                        </Link>
                        <Link className={cx('item-link')} to="#">
                            Douyin Top up
                        </Link>
                        <Link className={cx('item-link')} to="#">
                            Douyin Top up
                        </Link>
                    </div>
                </div>

                <div className={cx('category-item')}>
                    <h3 className={cx('item-title')}>
                        <Image
                            className={cx('title-icon')}
                            src={iconProduct}
                        />
                        Best-selling products
                    </h3>
                    <div className={cx('category-item-container')}>
                        <Link className={cx('item-link')} to="#">
                            Douyin Top up
                        </Link>
                        <Link className={cx('item-link')} to="#">
                            Douyin Top up
                        </Link>
                        <Link className={cx('item-link')} to="#">
                            Douyin Top up
                        </Link>
                    </div>
                </div>

                <div className={cx('category-item')}>
                    <h3 className={cx('item-title')}>
                        <Image
                            className={cx('title-icon')}
                            src={iconProduct}
                        />
                        Best-selling products
                    </h3>
                    <div className={cx('category-item-container')}>
                        <Link className={cx('item-link')} to="#">
                            Douyin Top up
                        </Link>
                        <Link className={cx('item-link')} to="#">
                            Douyin Top up
                        </Link>
                        <Link className={cx('item-link')} to="#">
                            Douyin Top up
                        </Link>
                    </div>
                </div>
            </div>
            <Link to="#" className={cx('category-slider-btn-wrap')}>
                <button className={cx('category-slider-btn')}>
                    View All Categories
                </button>
            </Link>
        </div>
    );
}

export default Sidebar;