import Head from 'next/head';

const GuestLayout = ({ children }) => {
    return (
        <div>
            <Head>
                <title>Guest layout here</title>
            </Head>

            <div>{children}</div>
        </div>
    );
};

export default GuestLayout;
