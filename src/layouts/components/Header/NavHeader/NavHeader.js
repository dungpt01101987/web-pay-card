import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import classNames from "classnames/bind";
import styles from 'layouts/components/Header/Header.module.scss';

const cx = classNames.bind(styles);


const NavHeader = () => {
    return (
        <Navbar className={cx('nav-header-wrapper')}>
            <Navbar.Brand href="#home" className={cx('nav-header-wrapper-item')}>Home</Navbar.Brand>
            <Navbar.Brand href="#home" className={cx('nav-header-wrapper-item active')}>Douyin Top up</Navbar.Brand>
            <Navbar.Brand href="#home" className={cx('nav-header-wrapper-item')}>Apple Top up</Navbar.Brand>
            <Navbar.Brand href="#home" className={cx('nav-header-wrapper-item')}>Honkai: Star Rail (International Server)</Navbar.Brand>
            <Navbar.Brand href="#home" className={cx('nav-header-wrapper-item')}>Kuaishou Top up</Navbar.Brand>
            <Navbar.Brand href="#home" className={cx('nav-header-wrapper-item')}>PUBG MOBILE (International Server)</Navbar.Brand>
        </Navbar>

    )
}

export default NavHeader;