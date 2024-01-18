import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from 'layouts/components/Header/Header.module.scss';
import { Container } from 'react-bootstrap';

const cx = classNames.bind(styles);

const TopBar = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Giá trị mặc định là 'en' (English)

    const handleLanguageChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedLanguage(selectedValue);
    };
    return (
        <Container>
            <div className={cx('top-bar-wrap')}>
                <ol className={cx('nav-feature')}>
                    <li className={cx('nav-feature-item')}>
                        Welcome to Little Whale，
                        <span className={cx('yellow')}> Please Log In </span>
                    </li>
                    <li className={cx('nav-feature-item')}>My Orders</li>
                    <li className={cx('nav-feature-item')}>My Messages</li>
                    <li className={cx('nav-feature-item')}>
                        <div className={cx('el-dropdown')}>
                            <select
                                id="languageSelect"
                                value={selectedLanguage}
                                onChange={handleLanguageChange}
                                className={cx('select-language')}
                            >
                                <option value="en">English</option>
                                <option value="vi">Tiếng Việt</option>
                                {/* Thêm các ngôn ngữ khác nếu cần */}
                            </select>
                        </div>
                        <i className={cx('el-icon')}></i>
                    </li>

                </ol>
            </div>
        </Container>

    );
}

export default TopBar;