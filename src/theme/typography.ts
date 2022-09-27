import styled from 'styled-components';

interface IProps {
    font900?: boolean;
    fontSize?: string;
}

export const PageTitle = styled.h1`
    font-size: 30px;
    font-weight: ${({ font900 }: IProps) => (font900 ? '900' : '600')};
`;

export const Paragraph = styled.p`
    font-size: ${({ fontSize }: IProps) =>
        fontSize === 'big' ? '25px' : fontSize === 'medium' ? '18px' : '16px'};
    line-height: 30px;
`;

export const RowUL = styled.ul`
    display: flex;
    gap: ${({ gap }: { gap?: number }) => (gap ? gap + 'px' : '0px')};
`;
