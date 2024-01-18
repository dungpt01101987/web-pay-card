import React from 'react';
import Image from 'react-bootstrap/Image';

import classNames from "classnames/bind";
import styles from 'layouts/components/Footer/Footer.module.scss';
import image1 from 'assets/img/characteristic/1.png';
import image2 from 'assets/img/characteristic/2.png';
import image3 from 'assets/img/characteristic/3.png';

const cx = classNames.bind(styles);

const CharacteristicFooter = () => {
    return (
        <>
            <div className={cx('char-item')}>
                <Image
                    src={image3}
                    className={cx('char-image')}
                />
                <div className={cx('char-wrap')}>
                    <div className={cx('char-lable')}>Quality assurance</div>
                    <span>Quality escort, worry-free shopping</span>
                </div>
            </div>
            <div className={cx('char-item')}>
                <Image
                    src={image2}
                    className={cx('char-image')}
                />
                <div className={cx('char-wrap')}>
                    <div className={cx('char-lable')}>Unique service experience</div>
                    <span>Presenting you with a different kind of service</span>
                </div>
            </div>
            <div className={cx('char-item')}>
                <Image
                    src={image1}
                    className={cx('char-image')}
                />
                <div className={cx('char-wrap')}>
                    <div className={cx('char-lable')}>Help center</div>
                    <span>Your shopping guide</span>
                </div>
            </div>
        </>

    );
}

export default CharacteristicFooter;