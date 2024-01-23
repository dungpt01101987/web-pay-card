import React, { useState, useRef, useEffect } from 'react';
import { Navbar } from 'react-bootstrap';
import { useSpring, animated } from 'react-spring';
import classNames from "classnames/bind";
import styles from 'layouts/components/Header/NavHeader/NavHeader.module.scss';
import styles1 from 'layouts/components/Header/Header.module.scss';

const cx = classNames.bind(styles);
const cx1 = classNames.bind(styles1);


const NavHeader = () => {
    const [isOpen, setIsOpen] = useState(false);

    const slideAnimation = useSpring({
        transform: isOpen ? 'translateX(0%)' : 'translateX(-100%)',
    });

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const menuRef = useRef();

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                closeMenu();
            }
        };

        document.addEventListener('mousedown', handleClickOutside);

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);
    return (
        <>
            <div className={cx('navbar')}>
                <button className={cx('menu-button')} onClick={toggleMenu}>
                    ☰
                </button>
                <animated.div className={cx('menu')} style={slideAnimation} ref={menuRef}>
                    <ul>
                        <li>Home</li>
                        <li>Douyin Top up</li>
                        <li>Apple Top up</li>
                        <li>Honkai: Star Rail</li>
                        <li>Apple Top up</li>
                    </ul>
                </animated.div>
                {isOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
            </div>
            <Navbar expand="lg" className={cx1('nav-header-wrapper')}>
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Navbar.Brand href="#home" className={cx1('nav-header-wrapper-item', 'active')}>Home</Navbar.Brand>
                    <Navbar.Brand href="#home" className={cx1('nav-header-wrapper-item')}>Douyin Top up</Navbar.Brand>
                    <Navbar.Brand href="#home" className={cx1('nav-header-wrapper-item')}>Apple Top up</Navbar.Brand>
                    <Navbar.Brand href="#home" className={cx1('nav-header-wrapper-item')}>Honkai: Star Rail (International Server)</Navbar.Brand>
                    <Navbar.Brand href="#home" className={cx1('nav-header-wrapper-item')}>Kuaishou Top up</Navbar.Brand>
                </Navbar.Collapse>
            </Navbar>
        </>

    )
}

export default NavHeader;