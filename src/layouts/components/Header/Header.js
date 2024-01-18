import React from "react";
import classNames from "classnames/bind";
import styles from './Header.module.scss';
import TopBar from "./TopBar";
import MidPanel from "./MidPanel";
import NavHeader from "./NavHeader";

const cx = classNames.bind(styles);

function Header() {
    return (
        <div className={cx('header-wrapper')}>
            <div className={cx('top-bar')}>
                <TopBar />
            </div>
            <div className={cx('mid-panel')}>
                <MidPanel />
            </div>
            <div className={cx('nav-wrapper')}>
                <NavHeader />
            </div>
        </div>
    );
}

export default Header;