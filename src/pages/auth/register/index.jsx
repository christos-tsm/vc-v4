import ApplicationLogo from '@/components/ApplicationLogo';

import Input from '@/components/Input';
import InputError from '@/components/InputError';
import Label from '@/components/Label';
import Link from 'next/link';
import { useAuth } from '@/hooks/auth';
import { useState } from 'react';
import AuthLayout from '@/components/Layouts/AuthLayout';
import { AuthContentContainer, AuthImageContainer } from '../styles';

const Register = () => {
    const { register } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    });

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [passwordConfirmation, setPasswordConfirmation] = useState('');
    const [errors, setErrors] = useState([]);

    const submitForm = event => {
        event.preventDefault();

        register({
            firstName,
            lastName,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        });
    };

    return (
        <AuthLayout>
            <AuthContentContainer>
                <form onSubmit={submitForm}>
                    {/* Name */}
                    <div>
                        <Label htmlFor="firstName">First Name</Label>

                        <Input
                            id="firstName"
                            type="text"
                            value={firstName}
                            onChange={event => setFirstName(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.name} />
                    </div>

                    <div>
                        <Label htmlFor="lastName">Last Name</Label>

                        <Input
                            id="lastName"
                            type="text"
                            value={lastName}
                            onChange={event => setLastName(event.target.value)}
                            required
                            autoFocus
                        />

                        <InputError messages={errors.name} />
                    </div>

                    {/* Email Address */}
                    <div>
                        <Label htmlFor="email">Email</Label>

                        <Input
                            id="email"
                            type="email"
                            value={email}
                            onChange={event => setEmail(event.target.value)}
                            required
                        />

                        <InputError messages={errors.email} />
                    </div>

                    {/* Password */}
                    <div>
                        <Label htmlFor="password">Password</Label>

                        <Input
                            id="password"
                            type="password"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                            required
                            autoComplete="new-password"
                        />

                        <InputError messages={errors.password} />
                    </div>

                    {/* Confirm Password */}
                    <div>
                        <Label htmlFor="passwordConfirmation">
                            Confirm Password
                        </Label>

                        <Input
                            id="passwordConfirmation"
                            type="password"
                            value={passwordConfirmation}
                            onChange={event =>
                                setPasswordConfirmation(event.target.value)
                            }
                            required
                        />

                        <InputError messages={errors.password_confirmation} />
                    </div>

                    <div>
                        <Link href="/login">
                            <a>Already registered?</a>
                        </Link>

                        <button>Register</button>
                    </div>
                </form>
            </AuthContentContainer>
            <AuthImageContainer>Eikona</AuthImageContainer>
        </AuthLayout>
    );
};

export default Register;
