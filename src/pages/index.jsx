import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';

export default function Home() {
    const { user } = useAuth({ middleware: 'guest' });

    return (
        <>
            <Head>
                <title>Laravel</title>
            </Head>

            <div>
                <div>
                    {user ? (
                        <Link href="/dashboard">
                            <a className="ml-4 text-sm text-gray-700 underline">
                                Dashboard
                            </a>
                        </Link>
                    ) : (
                        <>
                            <Link href="/auth/login">
                                <a className="text-sm text-gray-700 underline">
                                    Login
                                </a>
                            </Link>

                            <Link href="/auth/register">
                                <a className="ml-4 text-sm text-gray-700 underline">
                                    Register
                                </a>
                            </Link>
                        </>
                    )}
                </div>
            </div>
        </>
    );
}
