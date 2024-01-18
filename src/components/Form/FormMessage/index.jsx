import React from 'react';
import { FormMessageStyled } from 'components/Form/FormMessage/styled';
import isPropValid from '@emotion/is-prop-valid';
import { StyleSheetManager } from 'styled-components';

//text1, text2 === string only
const FormMessage = ({ text1, text2, marginBottom }) => {
    // This implements the default behavior from styled-components v5
    function shouldForwardProp(propName, target) {
        if (typeof target === 'string') {
            // For HTML elements, forward the prop if it is a valid HTML attribute
            return isPropValid(propName);
        }
        // For other elements, forward all props
        return true;
    }

    return (
        <StyleSheetManager shouldForwardProp={shouldForwardProp}>
            <FormMessageStyled marginBottom={marginBottom}>
                <p>{text1}</p>
                {text2 ? <p>{text2}</p> : <></>}
            </FormMessageStyled>
        </StyleSheetManager>
    );
};

export default FormMessage;
