import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Header from 'layouts/components/Header';
import Footer from 'layouts/components/Footer';
import styles from 'layouts/DefaultLayout/DefaultLayout.module.scss';

const cx = classNames.bind(styles);

function DefaultLayout({ children }) {
    return (
        <div className={cx('layout-default-wrapper')}>
            <Header />
            <div className={cx('layout-default-container')}>
                <div className={cx('layout-default-content')}>{children}</div>
                <Footer />
            </div>
        </div>
    );
}

DefaultLayout.propTypes = {
    children: PropTypes.node.isRequired,
};

export default DefaultLayout;
