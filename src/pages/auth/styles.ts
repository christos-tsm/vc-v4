import styled from 'styled-components';
import { theme } from '../../theme';

export const AuthContentContainer = styled.section`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    padding: 50px 0 20px 50px;
    align-items: flex-start;
`;

export const AuthContent = styled.div`
    & > p {
        margin: 25px 0 0;
    }

    a {
        color: ${theme.colors.primary};
        font-weight: 600;
    }

    form {
        margin: 20px 0;

        button {
            width: fit-content;
        }
    }
`;

export const CheckboxesContainer = styled.div`
    margin: 20px 0;
    display: flex;
    flex-direction: column;
    gap: 15px;
`;

export const InputCheckboxContainer = styled.div`
    input[type='checkbox'] {
        accent-color: ${theme.colors.primary};
        margin-right: 5px;
    }

    label {
        font-size: 14px;
        cursor: pointer;
        line-height: 1;
        display: flex;
        align-items: center;
    }
`;

export const AuthImageContainer = styled.div`
    flex: 1;
    position: relative;
    height: calc(100% - 40px);
    margin: 20px;

    img {
        object-fit: cover;
    }
`;

export const AuthImageOverlay = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(255, 255, 255, 0.85);
`;

export const AuthImageContent = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    max-width: 80%;
    margin: auto;

    p {
        margin-top: 50px;
        line-height: 35px;
        text-align: center;
    }
`;
