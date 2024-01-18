import React from 'react';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import classNames from "classnames/bind";
import styles from 'page/Application/Home/MainLayout/MainLayout.module.scss';

import imgItemEntry1 from 'assets/img/side-entry/1.webp';
import imgItemEntry2 from 'assets/img/side-entry/2.webp';
import imgItemEntry3 from 'assets/img/side-entry/3.webp';

const cx = classNames.bind(styles);

const PaymentOptions = () => {
    return (
        <div className={cx('payment-options')}>
            <Link className={cx('side-entry-item')} to="#">
                <Image
                    className={cx('item-img')}
                    src={imgItemEntry1}
                />
            </Link>

            <Link className={cx('side-entry-item')} to="#">
                <Image
                    className={cx('item-img')}
                    src={imgItemEntry2}
                />
            </Link>

            <Link className={cx('side-entry-item')} to="#">
                <Image
                    className={cx('item-img')}
                    src={imgItemEntry3}
                />
            </Link>
        </div>
    );
}

export default PaymentOptions;