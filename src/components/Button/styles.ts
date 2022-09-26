import styled from 'styled-components';
import { theme } from '../../theme';

interface BtnProps {
    variation: string;
}

const handleButtonType = (variation: string) => {
    switch (variation) {
        case 'primary':
            return `background-color: ${theme.colors.primary}; color: #fff`;
            break;

        case 'danger':
            return `background-color: ${theme.colors.red}; color: #fff`;
            break;

        default:
            break;
    }
};

export const ButtonEl = styled.button`
    padding: 10px 50px;
    outline: none;
    border: none;
    border-radius: 10px;
    font-size: 16px;
    font-weight: 400;
    cursor: pointer;
    transition: all ease-in-out 250ms;
    ${({ variation }: BtnProps) => handleButtonType(variation)};
`;
