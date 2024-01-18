import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Image from 'react-bootstrap/Image';

import classNames from 'classnames/bind';
import styles from './ChargeInfo.module.scss';

import iosInfo from 'assets/img/category/ios_info.webp';

const cx = classNames.bind(styles);

const listProductSpecification = [
    {
        id: 1,
        title: 'China code'
    },
    {
        id: 2,
        title: 'VietNam code'
    },
    {
        id: 3,
        title: 'USA code'
    },
    {
        id: 4,
        title: 'Canada code'
    },
    {
        id: 5,
        title: 'Japan code'
    },
    {
        id: 6,
        title: 'Korea code'
    },
];

const listProductDenominationChina = [
    {
        denominationId: 1,
        denomination: '100 yuan'
    },
    {
        denominationId: 2,
        denomination: '200 yuan'
    },
    {
        denominationId: 3,
        denomination: '200 yuan'
    },
];
const listProductDenominationViet = [
    {
        denominationId: 1,
        denomination: '1000 VND'
    },
    {
        denominationId: 2,
        denomination: '1000 VND'
    },
    {
        denominationId: 3,
        denomination: '1000 VND'
    },
]


const ChargeInfo = ({ title }) => {
    const [selectedProductSpecification, setSelectedProductSpecification] = useState(null);
    const [selectedProductDenomination, setselectedProductDenomination] = useState(null);

    const handleIconClick = (productId) => {
        setSelectedProductSpecification(productId);
    };

    const handleIconClickDenomination = (denominationId) => {
        setselectedProductDenomination(denominationId);
    };

    return (
        <div className={cx('charge-info')}>
            {title}
            <div className={cx('info-header')}>
                <Image
                    className={cx('info-header__icon')}
                    src={iosInfo}
                />
                <div className={cx('info-header__wrap')}>
                    <h2 className={cx('info-header__title')}>[Direct 13% discount] App Store card code recharge</h2>
                    <p className={cx('info-header__desc')}>Product Specification</p>
                </div>
            </div>
            <div className={cx('info-options')}>
                <h5 className={cx('info-options__title')}>Product Specification</h5>
                <div className={cx('info-options__wrap')}>
                    {listProductSpecification.map((productSpecification) => (
                        <div
                            key={productSpecification.id}
                            onClick={() => handleIconClick(productSpecification.id)}
                            className={cx('info-options__item', { active: productSpecification.id === selectedProductSpecification })}
                        >
                            {productSpecification.title}
                        </div>
                    ))}
                </div>
            </div>
            <div className={cx('info-options')}>
                <h5 className={cx('info-options__title')}>Product Denomination</h5>
                <div className={cx('info-options__wrap')}>
                    {selectedProductSpecification && selectedProductSpecification === 1 && listProductDenominationChina.map((denomiation) => (
                        <div
                            key={denomiation.id}
                            onClick={() => handleIconClickDenomination(denomiation.id)}
                            className={cx('info-options__item', { active: denomiation.id === selectedProductDenomination })}
                        >
                            {denomiation.denomination}
                        </div>
                    ))}
                    {selectedProductSpecification && selectedProductSpecification === 2 && listProductDenominationViet.map((denomiation) => (
                        <div
                            key={denomiation.id}
                            onClick={() => handleIconClickDenomination(denomiation.id)}
                            className={cx('info-options__item', { active: denomiation.id === selectedProductDenomination })}
                        >
                            {denomiation.denomination}
                        </div>
                    ))}
                </div>
            </div>
            <div className={cx('info-num')}>

            </div>
        </div >
    );
}

ChargeInfo.propTypes = {
    title: PropTypes.object
};

export default ChargeInfo;