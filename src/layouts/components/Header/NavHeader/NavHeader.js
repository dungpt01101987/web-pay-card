import React from 'react';
import { Navbar } from 'react-bootstrap';
import classNames from "classnames/bind";
import styles from 'layouts/components/Header/Header.module.scss';

const cx = classNames.bind(styles);


const NavHeader = () => {
    return (
        <Navbar expand="lg" className={cx('nav-header-wrapper')}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
                <Navbar.Brand href="#home" className={cx('nav-header-wrapper-item', 'active')}>Home</Navbar.Brand>
                <Navbar.Brand href="#home" className={cx('nav-header-wrapper-item')}>Douyin Top up</Navbar.Brand>
                <Navbar.Brand href="#home" className={cx('nav-header-wrapper-item')}>Apple Top up</Navbar.Brand>
                <Navbar.Brand href="#home" className={cx('nav-header-wrapper-item')}>Honkai: Star Rail (International Server)</Navbar.Brand>
                <Navbar.Brand href="#home" className={cx('nav-header-wrapper-item')}>Kuaishou Top up</Navbar.Brand>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default NavHeader;