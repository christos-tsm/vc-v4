import styled from 'styled-components';

export const AuthContentContainer = styled.section`
    flex: 1;
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
