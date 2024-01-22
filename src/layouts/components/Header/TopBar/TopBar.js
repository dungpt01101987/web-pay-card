import React, { useState } from "react";
import classNames from "classnames/bind";
import styles from 'layouts/components/Header/Header.module.scss';

const cx = classNames.bind(styles);

const TopBar = () => {
    const [selectedLanguage, setSelectedLanguage] = useState('en'); // Giá trị mặc định là 'en' (English)

    const handleLanguageChange = (event) => {
        const selectedValue = event.target.value;
        setSelectedLanguage(selectedValue);
    };
    return (
        <div className={cx('top-bar-wrap')}>
            <div className={cx('nav-feature-item')}>
                <span className={cx('yellow')}> Please Log In </span>
            </div>
            <div className={cx('nav-feature-item')}>
                My Orders
            </div>
            <div className={cx('nav-feature-item')}>
                <div className={cx('el-dropdown')}>
                    <select
                        id="languageSelect"
                        value={selectedLanguage}
                        onChange={handleLanguageChange}
                        className={cx('select-language')}
                    >
                        <option value="en">English</option>
                        <option value="vi">Tiếng Việt</option>
                    </select>
                </div>
                <i className={cx('el-icon')}></i>
            </div>
            {/* <ol className={cx('nav-feature')}>
                <li className={cx('nav-feature-item')}>
                    <span className={cx('yellow')}> Please Log In </span>
                </li>
                <li className={cx('nav-feature-item')}>My Orders</li>
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
                        </select>
                    </div>
                    <i className={cx('el-icon')}></i>
                </li>

            </ol> */}
        </div>

    );
}

export default TopBar;