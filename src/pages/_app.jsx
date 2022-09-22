import GlobalStyle from '../theme/globalStyles';

const App = ({ Component, pageProps }) => (
    <>
        <GlobalStyle />
        <Component {...pageProps} />
    </>
);

export default App;
