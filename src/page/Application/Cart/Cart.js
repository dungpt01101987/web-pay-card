import React from "react";
import classNames from "classnames/bind";
import styles from 'page/Application/Cart/Cart.module.scss';

const cx = classNames.bind(styles);

const Cart = () => {
    return (
        <div className={cx('index-container')}>
            Giỏ hàng
        </div>
    );
}

export default Cart;