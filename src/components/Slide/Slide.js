import React from 'react';
import Image from 'react-bootstrap/Image';
import PropTypes from 'prop-types';

const Slide = ({ image, caption }) => {
    return (
        <div>
            <Image src={image} alt={caption} />
            <p>{caption}</p>
        </div>
    );
};

Slide.propTypes = {
    image: PropTypes.string.isRequired,
    caption: PropTypes.string.isRequired,
};

export default Slide;