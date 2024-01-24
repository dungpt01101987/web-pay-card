import React, { useState } from 'react';

import Image from 'react-bootstrap/Image';
import { isMobile } from 'react-device-detect';

import classNames from 'classnames/bind';
import styles from './ChargeMain.module.scss';

import imgLook from 'assets/img/category/look.webp';
import ChargeInfo from 'page/Application/Home/FastCharge/ChargeInfo';

const cx = classNames.bind(styles);

const ChargeMain = ({ title }) => {
    const [selectedProduct, setSelectedProduct] = useState(1);

    const handleIconClick = (productId) => {
        setSelectedProduct(productId);
    };

    const products = [
        {
            id: 1,
            icon: imgLook,
            name: 'Look live 1'
        },
        {
            id: 2,
            icon: imgLook,
            name: 'Look live 2'
        },
        {
            id: 3,
            icon: imgLook,
            name: 'Look live 3'
        },
        {
            id: 4,
            icon: imgLook,
            name: 'Look live 4'
        },
        {
            id: 5,
            icon: imgLook,
            name: 'Look live 5'
        },
        {
            id: 6,
            icon: imgLook,
            name: 'Look live 1'
        },
        {
            id: 7,
            icon: imgLook,
            name: 'Look live 2'
        },
        {
            id: 8,
            icon: imgLook,
            name: 'Look live 3'
        },
        {
            id: 9,
            icon: imgLook,
            name: 'Look live 4'
        },
        {
            id: 10,
            icon: imgLook,
            name: 'Look live 5'
        },
        {
            id: 11,
            icon: imgLook,
            name: 'Look live 5'
        },
        {
            id: 12,
            icon: imgLook,
            name: 'Look live 5'
        },
        {
            id: 13,
            icon: imgLook,
            name: 'Look live 5'
        },
        {
            id: 14,
            icon: imgLook,
            name: 'Look live 5'
        }
    ];

    let limit = 14;
    if (isMobile) {
        limit = 6;
    }

    return (
        <div className={cx('charge-container')}>
            <div className={cx('charge-goods')}>
                {products.filter((product, index) => index < limit).map((product, index) => (
                    <div
                        key={product.id}
                        onClick={() => handleIconClick(product.id)}
                        className={cx('charge-goods__item', { active: product.id === selectedProduct })}
                    >
                        <Image src={product.icon} alt={product.name} className={cx('charge-goods__icon')} />
                        <div
                            className={cx('charge-goods__info', { active: product.id === selectedProduct })}
                        >
                            <h2 className={cx('charge-goods__title', { active: product.id === selectedProduct })}>LOOK Live</h2>
                            <p className={cx('charge-goods__desc')}>
                                daily specials <br />
                                8% off
                            </p>
                        </div>
                    </div>
                ))}
            </div>
            {selectedProduct && (
                <ChargeInfo title={products.name} />
            )}
        </div>
    );
}

export default ChargeMain;