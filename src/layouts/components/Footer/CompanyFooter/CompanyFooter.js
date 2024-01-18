import React from 'react';
import classNames from "classnames/bind";
import styles from 'layouts/components/Footer/Footer.module.scss';
import { Link } from 'react-router-dom';
import Image from 'react-bootstrap/Image';

import qrCode from 'assets/img/wechat_code.png';
import socialFace from 'assets/img/social/socials_face.png';
import socialYoutube from 'assets/img/social/socials_youtube.png';
import socialInstagram from 'assets/img/social/socials_instagram.png';
import socialTiktok from 'assets/img/social/socials_tiktok.png';

import imageLink1 from 'assets/img/footer-link/foot_banner_1.png';
import imageLink2 from 'assets/img/footer-link/foot_banner_2.png';
import imageLink3 from 'assets/img/footer-link/foot_banner_3.png';
import imageLink4 from 'assets/img/footer-link/foot_banner_4.png';


const cx = classNames.bind(styles);

const CompanyFooter = () => {
    return (
        <>
            <div className={cx('company-footer__wrap')}>
                <div className={cx('article-list')}>
                    <span className={cx('article-list__label')}>About Xiaohaijing</span>
                    <Link to="#" className={cx('article-list__item')}>Contact Us</Link>
                    <Link to="#" className={cx('article-list__item')}>Delivery Process</Link>
                    <Link to="#" className={cx('article-list__item')}>Refund Process</Link>
                    <Link to="#" className={cx('article-list__item')}>About Us</Link>
                </div>
                <div className={cx('article-list')}>
                    <span className={cx('article-list__label')}>Service and Agreement</span>
                    <Link to="#" className={cx('article-list__item')}>Privacy Policy</Link>
                    <Link to="#" className={cx('article-list__item')}>Payment method</Link>
                    <Link to="#" className={cx('article-list__item')}>Service Agreement</Link>
                    <Link to="#" className={cx('article-list__item')}>KYC</Link>
                </div>
                <div className={cx('article-list')}>
                    <span className={cx('article-list__label')}>Help center</span>
                    <Link to="#" className={cx('article-list__item')}>Membership level</Link>
                    <Link to="#" className={cx('article-list__item')}>Frequently Asked Questions</Link>
                    <Link to="#" className={cx('article-list__item')}>Business Cooperation</Link>
                </div>
                <div className={cx('article-list')}>
                    <span className={cx('article-list__label')}>Follow us</span>
                    <Image src={qrCode} className={cx('qrcode-img')} />
                    <span className={cx('article-list__label')}>WeChat Official Account</span>
                </div>
            </div>

            <div className={cx('footer-addr')}>
                <span>Wuhan Haikuo Fast Recharge Technology Co., Ltd. All rights reserved</span>
                <span>Copyright © 2021 - 2023 Wuhan Haike All Rights Reserved</span>
                <span>Company Address: Room 501, 5th Floor, Commercial Skirt Building, Block B, Zunrong International, No. 1 Youyi Road, Jianghan District, Wuhan</span>

                <div className={cx('footer-addr__wrap')}>
                    <Link className={cx('footer-addr__item')} to="#">
                        <Image className={cx('footer-addr__icon')} src={socialFace} />
                        <span>Facebook</span>
                    </Link>
                    <Link className={cx('footer-addr__item')} to="#">
                        <Image className={cx('footer-addr__icon')} src={socialYoutube} />
                        <span>Youtube</span>
                    </Link>
                    <Link className={cx('footer-addr__item')} to="#">
                        <Image className={cx('footer-addr__icon')} src={socialInstagram} />
                        <span>Instagram</span>
                    </Link>
                    <Link className={cx('footer-addr__item')} to="#">
                        <Image className={cx('footer-addr__icon')} src={socialTiktok} />
                        <span>Douyin</span>
                    </Link>
                </div>

                <div className={cx('footer-link')}>
                    <Image className={cx('footer-link__item')} src={imageLink1} />
                    <Image className={cx('footer-link__item')} src={imageLink2} />
                    <Image className={cx('footer-link__item')} src={imageLink3} />
                    <Image className={cx('footer-link__item')} src={imageLink4} />
                </div>
            </div>
        </>
    );
}

export default CompanyFooter;