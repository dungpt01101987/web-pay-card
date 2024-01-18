import React from 'react';
import Image from 'react-bootstrap/Image';
import classNames from "classnames/bind";
import styles from 'layouts/components/Footer/Footer.module.scss';
import { Link } from 'react-router-dom';

import biaoti2 from 'assets/img/biaoti2.png';

const cx = classNames.bind(styles);

const DownloadFooter = () => {
    return (
        <div className={cx('keywords-bar')}>
            <h2 className={cx('bar-title')}>Hot gate recommendation</h2>
            <div className={cx('bar-list')}>
                <Link to="#" className={cx('bar-item')}>Momo pay</Link>
                <Link to="#" className={cx('bar-item')}>Momo pay</Link>
                <Link to="#" className={cx('bar-item')}>Momo pay</Link>
                <Link to="#" className={cx('bar-item')}>Momo pay</Link>
                <Link to="#" className={cx('bar-item')}>Momo pay</Link>
                <Link to="#" className={cx('bar-item')}>Momo pay</Link>
                <Link to="#" className={cx('bar-item')}>Momo pay</Link>
                <Link to="#" className={cx('bar-item')}>Momo pay</Link>
                <Link to="#" className={cx('bar-item')}>Momo pay</Link>
                <Link to="#" className={cx('bar-item')}>Momo pay</Link>
                <Link to="#" className={cx('bar-item')}>Momo pay</Link>
                <Link to="#" className={cx('bar-item')}>Momo pay</Link>
                <Link to="#" className={cx('bar-item')}>Momo pay</Link>
            </div>
            <Image
                className={cx('bar-img')}
                src={biaoti2}
                alt="Little Whale"
            />
        </div>
    );
}

export default DownloadFooter;