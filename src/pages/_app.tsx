import { useEffect } from 'react';
import 'nprogress/nprogress.css';
import 'react-toastify/dist/ReactToastify.css';
import NProgress from 'nprogress';
import Router from 'next/router';
import { ToastContainer } from 'react-toastify';

import GlobalStyle from '../theme/globalStyles';

const App = ({ Component, pageProps }) => {
    useEffect(() => {
        const handleRouteStart = () => NProgress.start();
        const handleRouteDone = () => NProgress.done();

        Router.events.on('routeChangeStart', handleRouteStart);
        Router.events.on('routeChangeComplete', handleRouteDone);
        Router.events.on('routeChangeError', handleRouteDone);

        return () => {
            // Make sure to remove the event handler on unmount!
            Router.events.off('routeChangeStart', handleRouteStart);
            Router.events.off('routeChangeComplete', handleRouteDone);
            Router.events.off('routeChangeError', handleRouteDone);
        };
    }, []);

    return (
        <>
            <GlobalStyle />
            <ToastContainer />
            <Component {...pageProps} />
        </>
    );
};

export default App;
