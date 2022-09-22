import React from 'react';
import AppLayout from '../components/Layouts/AppLayout';
import Head from 'next/head';

const Dashboard = () => {
    return (
        <AppLayout header={<h2>Dashboard</h2>}>
            <Head>
                <title>Laravel - Dashboard</title>
            </Head>

            <div>
                <h1>You&apos;re logged in!</h1>
            </div>
        </AppLayout>
    );
};

export default Dashboard;
