import React from "react";
import { LinkStyled } from "./styled";

const Link = ({ text, to, size }) => {
    return (
        <LinkStyled to={to} fontSize={size}>
            {text}
        </LinkStyled>
    );
};

export default Link;