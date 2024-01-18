import React from 'react';
import PropTypes from 'prop-types';
import Card from 'page/Application/Home/FastCharge/Card';

const cardData = [
    {
        id: 1,
        image: 'image1.png',
        title: 'card1'
    },
    {
        id: 2,
        image: 'image2.png',
        title: 'card2'
    },
    {
        id: 3,
        image: 'image3.png',
        title: 'card3'
    }

];

const CardList = ({ onCardClick }) => {
    return (
        <div className="cardList">
            {cardData.map((data) => (
                <Card key={data.id} data={data} onClick={() => onCardClick(data)} />
            ))}
        </div>
    );
};

CardList.propTypes = {
    onCardClick: PropTypes.func.isRequired
};

export default CardList;