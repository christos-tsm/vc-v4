import { createGlobalStyle } from 'styled-components';
import { theme } from '.';

const GlobalStyle = createGlobalStyle`

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        font-family: 'Manrope', -apple-system;
        color: ${theme.colors.black}
    }

    button,
    input {
        font-family: 'Manrope', sans-serif;
        font-weight: 400;
    }

    a {
        text-decoration: none;
    }

    input[type="password"]::placeholder,
    input[type="password"] {
        letter-spacing: 2px;
    }

    input::placeholder {
        font-family: ceraGR, -apple-system;
        letter-spacing: 1px;
        font-weight: 300;
        color: #c9c9c9;
    }

    
    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active{
        -webkit-box-shadow: 0 0 0 30px white inset !important;
    }

`;

export default GlobalStyle;
