import React from 'react';
import { ButtonEl } from './styles';

const Button = ({ type, variation = '', disabled, text, ...props }) => {
    return (
        <ButtonEl disabled={disabled} type={type} variation={variation}>
            {text}
        </ButtonEl>
    );
};

export default Button;
