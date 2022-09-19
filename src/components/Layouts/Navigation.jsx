import ApplicationLogo from '@/components/ApplicationLogo';
import Link from 'next/link';
import NavLink from '@/components/NavLink';

import { useAuth } from '@/hooks/auth';
import { useRouter } from 'next/router';

const Navigation = ({ user }) => {
    const router = useRouter();

    const { logout } = useAuth();

    return (
        <nav>
            {/* Primary Navigation Menu */}

            <div>
                {/* Logo */}
                <div>
                    <Link href="/dashboard">
                        <a>
                            <ApplicationLogo />
                        </a>
                    </Link>
                </div>

                {/* Navigation Links */}
                <div>
                    <NavLink
                        href="/dashboard"
                        active={router.pathname === '/dashboard'}>
                        Dashboard
                    </NavLink>
                    <p>
                        {user?.firstName} {user?.lastName}
                    </p>
                    <button onClick={logout}>Logout</button>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
