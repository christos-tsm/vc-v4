import styled from 'styled-components';

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const InputRow = styled.div`
    display: flex;
    gap: 20px;
    & > div {
        flex: 1;
    }
`;
