import React from "react";
import classNames from "classnames/bind";
import styles from 'layouts/components/Footer/Footer.module.scss';

import DownloadFooter from "layouts/components/Footer/DownloadFooter";
import CharacteristicFooter from "layouts/components/Footer/CharacteristicFooter";
import CompanyFooter from "layouts/components/Footer/CompanyFooter";

const cx = classNames.bind(styles);

function Footer() {
    return (
        <div className={cx('home-footer')}>
            <div className={cx('download-footer')}>
                <DownloadFooter />
            </div>
            <div className={cx('characteristic-footer')}>
                <CharacteristicFooter />
            </div>
            <div className={cx('company-footer')}>
                <CompanyFooter />
            </div>
        </div>
    );
}

export default Footer;