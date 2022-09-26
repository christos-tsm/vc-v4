import styled from 'styled-components';
import { theme } from '../../theme';

export const InputEL = styled.input`
    padding: 15px;
    border: none;
    outline: none;
    width: 100%;
    background-color: transparent;
    border: 1px solid ${theme.colors.gray_light};
    border-radius: 5px;
    transition: all ease-in-out 250ms;

    &:focus {
        border-left-color: ${theme.colors.primary};
        border-left-width: 3px;
        border-right-color: ${theme.colors.primary};
        border-right-width: 3px;
    }
`;

export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
`;
