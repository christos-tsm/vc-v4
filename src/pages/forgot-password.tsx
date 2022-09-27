import ApplicationLogo from '../components/ApplicationLogo';
import AuthSessionStatus from '../components/AuthSessionStatus';
import GuestLayout from '../components/Layouts/GuestLayout';
import Input from '../components/Input';
import InputError from '../components/InputError';
import Link from 'next/link';
import { useAuth } from '../hooks/auth';
import { useState } from 'react';
import { ErrorsProps } from '../interfaces';

interface AuthProps {
    middleware: string;
}

const ForgotPassword = () => {
    const { forgotPassword } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    });

    const [email, setEmail] = useState('');
    const [errors, setErrors] = useState<ErrorsProps>();
    const [status, setStatus] = useState(null);

    const submitForm = event => {
        event.preventDefault();

        forgotPassword({ email, setErrors, setStatus });
    };

    return (
        <GuestLayout>
            <div>
                <div>
                    Forgot your password? No problem. Just let us know your
                    email address and we will email you a password reset link
                    that will allow you to choose a new one.
                </div>

                {/* Session Status */}
                <AuthSessionStatus status={status} />

                <form onSubmit={submitForm}>
                    {/* Email Address */}
                    <div>
                        <label htmlFor="email">Email</label>
                        <Input
                            id="email"
                            type="email"
                            name="email"
                            value={email}
                            className="block mt-1 w-full"
                            onChange={event => setEmail(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors?.email} />
                    </div>

                    <div>
                        <button>Email Password Reset Link</button>
                    </div>
                </form>
            </div>
        </GuestLayout>
    );
};

export default ForgotPassword;
