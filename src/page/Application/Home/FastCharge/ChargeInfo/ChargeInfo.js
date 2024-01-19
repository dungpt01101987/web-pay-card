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
        denomination: 100,
        type: "yuan"
    },
    {
        denominationId: 2,
        denomination: 200,
        type: "yuan"
    },
    {
        denominationId: 3,
        denomination: 300,
        type: "yuan"
    },
];
const listProductDenominationViet = [
    {
        denominationId: 1,
        denomination: 100,
        type: "VNĐ"
    },
    {
        denominationId: 2,
        denomination: 200,
        type: "VNĐ"
    },
    {
        denominationId: 3,
        denomination: 300,
        type: "VNĐ"
    },
]


const ChargeInfo = ({ title }) => {
    const [selectedProductSpecification, setSelectedProductSpecification] = useState(1);
    const [selectedProductDenomination, setselectedProductDenomination] = useState(
        {
            denominationId: 1,
            denomination: 100,
            type: "yuan"
        }
    );
    const [value, setValue] = useState(1);

    const handleIconClick = (productId) => {
        setSelectedProductSpecification(productId);
    };

    const handleIconClickDenomination = (denomination) => {
        setselectedProductDenomination(denomination);
    };



    const handleIncrease = () => {
        setValue(prevValue => prevValue + 1);
    };

    const handleDecrease = () => {
        setValue(prevValue => prevValue - 1);
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
                            onClick={() => handleIconClickDenomination(denomiation)}
                            className={cx('info-options__item', { active: denomiation.denominationId === selectedProductDenomination.denominationId })}
                        >
                            {denomiation.denomination}
                        </div>
                    ))}
                    {selectedProductSpecification && selectedProductSpecification === 2 && listProductDenominationViet.map((denomiation) => (
                        <div
                            key={denomiation.id}
                            onClick={() => handleIconClickDenomination(denomiation)}
                            className={cx('info-options__item', { active: denomiation.denominationId === selectedProductDenomination.denominationId })}
                        >
                            {denomiation.denomination}
                        </div>
                    ))}
                </div>
            </div>
            <div className={cx('info-num')}>
                Quantity:
                <div className={cx('info-num__cmp')}>
                    <button
                        onClick={handleDecrease}
                        className={cx('el-input-number__decrease', { disabled: value <= 1 })}
                    >
                        <i className={cx('el-icon')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M128 544h768a32 32 0 1 0 0-64H128a32 32 0 0 0 0 64z"></path></svg>
                        </i>
                    </button>
                    <button onClick={handleIncrease} className={cx('el-input-number__increase')}>
                        <i className={cx('el-icon')}>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"><path fill="currentColor" d="M480 480V128a32 32 0 0 1 64 0v352h352a32 32 0 1 1 0 64H544v352a32 32 0 1 1-64 0V544H128a32 32 0 0 1 0-64h352z"></path></svg>
                        </i>
                    </button>
                    <input type="text" value={value} readOnly className={cx('el-input')} />
                </div>
            </div>

            <div className={cx('info-footer')}>
                <h5 className={cx('info-footer__title')}>Total Price</h5>
                <div className={cx('info-footer__wrap')}>
                    <span className={cx('info-footer__price')}>{selectedProductDenomination.denomination * value} ({selectedProductDenomination.type}) </span>
                    <button className={cx('info-footer__btn')}>Buy Now</button>
                </div>
                <p className={cx('info-footer__sub')}>98% of Orders Guaranteed Delivered within one minute Completed!</p>
            </div>
        </div >
    );
}

ChargeInfo.propTypes = {
    title: PropTypes.object
};

export default ChargeInfo;