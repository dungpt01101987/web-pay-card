import React from "react";
import classNames from "classnames/bind";
import styles from 'layouts/components/Header/Header.module.scss';
import Image from 'react-bootstrap/Image';
import logo from 'assets/logo/logo.png';
import kefu from 'assets/img/kefu.png';
import weixin from 'assets/img/weixin.png';
import Nav from 'react-bootstrap/Nav';


const cx = classNames.bind(styles);

const MidPanel = () => {
    return (
        <div className={cx('mid-panel-container')}>
            <div className={cx('mid-panel-logo')}>
                <Image
                    className={cx('logo-image')}
                    src={logo}
                />
            </div>
            <div className={cx('search-bar')}>
                <div className={cx('search-bar-wrap')}>
                    <input
                        type="search"
                        placeholder="Please enter the name of the product or game"
                        aria-label="Search"
                        className={cx('search-bar-cmp')}
                    />
                    <button className={cx('search-bar-btn')} type="submit">
                        <i className={cx('el-icon')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="m795.904 750.72 124.992 124.928a32 32 0 0 1-45.248 45.248L750.656 795.904a416 416 0 1 1 45.248-45.248zM480 832a352 352 0 1 0 0-704 352 352 0 0 0 0 704z"></path></svg>
                        </i>
                    </button>
                </div>
                <div className={cx('search-keywords')}>
                    <Nav.Link href="#link" className={cx('search-keywords-item')}>Momo</Nav.Link>
                    <Nav.Link href="#link" className={cx('search-keywords-item')}>Momo</Nav.Link>
                    <Nav.Link href="#link" className={cx('search-keywords-item')}>Momo</Nav.Link>
                    <Nav.Link href="#link" className={cx('search-keywords-item')}>Momo</Nav.Link>
                    <Nav.Link href="#link" className={cx('search-keywords-item')}>Momo</Nav.Link>
                    <Nav.Link href="#link" className={cx('search-keywords-item')}>Momo</Nav.Link>
                    <Nav.Link href="#link" className={cx('search-keywords-item')}>Momo</Nav.Link>
                    <Nav.Link href="#link" className={cx('search-keywords-item')}>Momo</Nav.Link>
                    <Nav.Link href="#link" className={cx('search-keywords-item')}>Momo</Nav.Link>
                </div>
            </div>
            <div className={cx('marketing-service')}>
                <div className={cx('marketing-service-item')}>
                    <Image
                        src={kefu}
                    />
                    <span>7×24hours</span>
                    <span>Online customer service</span>
                </div>
                <div className={cx('marketing-service-item')}>
                    <Image
                        src={weixin}
                    />
                    <span>Follow official account</span>
                    <span>Get early access to promotions</span>
                </div>

            </div>

        </div>
    );
}

export default MidPanel;