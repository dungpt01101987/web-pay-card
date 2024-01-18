import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './DetailCard.module.scss';

const cx = classNames.bind(styles);

const DetailCard = ({ cardData }) => {
    if (!cardData) return <div className={cx('detailView')}>Select a card to see the details</div>;

    return (
        <div className={cx('detailView')}>
            <h2>{cardData.title}</h2>
            {/* Render other details here */}
        </div>
    );
};

DetailCard.propTypes = {
    cardData: PropTypes.object
};

export default DetailCard;