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
        color: ${theme.colors.black};
        transition: all ease-in-out 250ms;
        font-weight: 600;
        &:hover {
            color: ${theme.colors.primary};
        }
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

    ul,ol {
        list-style: none;
    }

        
    #nprogress .bar {
        background: ${theme.colors.primary};

        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;

        width: 100%;
        height: 2px;
    }

    /* Fancy blur effect */
    #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px ${theme.colors.primary}, 0 0 5px ${theme.colors.primary};
        opacity: 1.0;

        -webkit-transform: rotate(3deg) translate(0px, -4px);
            -ms-transform: rotate(3deg) translate(0px, -4px);
                transform: rotate(3deg) translate(0px, -4px);
    }


    #nprogress .spinner-icon {
        width: 18px;
        height: 18px;
        box-sizing: border-box;

        border: solid 2px transparent;
        border-top-color: ${theme.colors.primary};
        border-left-color: ${theme.colors.primary};
        border-radius: 50%;

        -webkit-animation: nprogress-spinner 400ms linear infinite;
                animation: nprogress-spinner 400ms linear infinite;
    }


    .Toastify__toast-container,
    .Toastify__toast-container--top-right  {
        min-width: max-content;
    }
`;

export default GlobalStyle;
