import React from 'react';
import PropTypes from 'prop-types';
// import Image from 'react-bootstrap/Image';
import classNames from 'classnames/bind';
import styles from './Card.module.scss';

const cx = classNames.bind(styles);

const Card = ({ data, onClick }) => {
    return (
        <div className={cx('card')} onClick={onClick}>
            abc
            {/* <Image src={data.image} alt={data.title} /> */}
            {/* <div>{data.title}</div> */}
        </div>
    );
};

Card.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func.isRequired
};

export default Card;