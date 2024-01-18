import React from 'react';
import logo from '../../assets/logo/logo.png';

const Logo = ({ color, width, height }) => {
    return (
        <svg
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 891.71 230.41"
            fill={color ? color : 'none'}
            width={width ? width : '300'}
            height={height ? height : '300'}
        >
            <image href={logo} />
        </svg>
    );
};

export default Logo;
