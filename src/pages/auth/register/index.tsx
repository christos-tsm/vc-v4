import LogoSolid from '../../../../public/images/logo-solid.svg';
import AuthImage from '../../../../public/images/default.jpg';
import Logo from '../../../../public/images/logo.svg';

import Input from '../../../components/Input';
import InputError from '../../../components/InputError';
import Link from 'next/link';
import { useAuth } from '../../../hooks/auth';
import { useState } from 'react';
import AuthLayout from '../../../components/Layouts/AuthLayout';
import {
    AuthContent,
    AuthContentContainer,
    AuthImageContainer,
    AuthImageContent,
    AuthImageOverlay,
    CheckboxesContainer,
    InputCheckboxContainer,
} from '../styles';
import { ErrorsProps } from '../../../interfaces';
import Image from 'next/image';
import { Form, InputRow } from '../../../theme/forms';
import { InputContainer } from '../../../components/Input/styles';
import Button from '../../../components/Button';
import { PageTitle, Paragraph } from '../../../theme/typography';

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
    const [errors, setErrors] = useState<ErrorsProps>();
    const [loading, setLoading] = useState(false);

    const submitForm = async e => {
        e.preventDefault();
        setLoading(true);

        await register({
            firstName,
            lastName,
            email,
            password,
            password_confirmation: passwordConfirmation,
            setErrors,
        });

        setLoading(false);
    };

    return (
        <AuthLayout>
            <AuthContentContainer>
                <Image src={Logo} width={165} height={124} />

                <AuthContent>
                    <PageTitle font900>Δημιουργία λογαριασμού</PageTitle>
                    <Paragraph>
                        Συμπληρώστε την παρακάτω φόρμα, για να δημιουργήσετε τον
                        λογαριασμό σας.
                        <br />
                        Εάν έχετε ήδη λογαριασμό, πατήστε{' '}
                        <Link href="/auth/login">εδώ</Link>
                    </Paragraph>

                    <Form onSubmit={submitForm}>
                        {/* Name */}
                        <InputRow>
                            <InputContainer>
                                <Input
                                    id="firstName"
                                    type="text"
                                    value={firstName}
                                    onChange={event =>
                                        setFirstName(event.target.value)
                                    }
                                    required
                                    placeholder="Όνομα"
                                />

                                <InputError messages={errors?.name} />
                            </InputContainer>

                            <InputContainer>
                                <Input
                                    id="lastName"
                                    type="text"
                                    value={lastName}
                                    onChange={event =>
                                        setLastName(event.target.value)
                                    }
                                    required
                                    placeholder="Επίθετο"
                                />

                                <InputError messages={errors?.name} />
                            </InputContainer>
                        </InputRow>

                        {/* Email Address */}
                        <InputContainer>
                            <Input
                                id="email"
                                type="email"
                                value={email}
                                onChange={event => setEmail(event.target.value)}
                                required
                                placeholder="Email"
                            />

                            <InputError messages={errors?.email} />
                        </InputContainer>
                        <InputRow>
                            {/* Password */}
                            <InputContainer>
                                <Input
                                    id="password"
                                    type="password"
                                    value={password}
                                    onChange={event =>
                                        setPassword(event.target.value)
                                    }
                                    required
                                    autoComplete="new-password"
                                    placeholder="Κωδικός"
                                />

                                <InputError messages={errors?.password} />
                            </InputContainer>

                            {/* Confirm Password */}
                            <InputContainer>
                                <Input
                                    id="passwordConfirmation"
                                    type="password"
                                    value={passwordConfirmation}
                                    onChange={event =>
                                        setPasswordConfirmation(
                                            event.target.value,
                                        )
                                    }
                                    required
                                    placeholder="Επιβεβαίωση κωδικού"
                                />

                                <InputError
                                    messages={errors?.password_confirmation}
                                />
                            </InputContainer>
                        </InputRow>
                        <CheckboxesContainer>
                            <InputCheckboxContainer>
                                <label htmlFor="terms">
                                    <input
                                        id="terms"
                                        type="checkbox"
                                        name="terms"
                                        required
                                    />

                                    <span>
                                        Συμφωνώ με τους{' '}
                                        <Link href="#!">όρους χρήσης</Link> και
                                        την{' '}
                                        <Link href="#!">
                                            πολιτική απορρήτου
                                        </Link>
                                    </span>
                                </label>
                            </InputCheckboxContainer>
                        </CheckboxesContainer>

                        <div>
                            <Button
                                disabled={loading}
                                text={
                                    loading ? 'Γίνεται εγγραφή...' : 'Εγγραφή'
                                }
                                variation="primary"
                                type="submit"
                            />
                        </div>
                    </Form>
                </AuthContent>
                <ul>
                    <li>
                        <Link href="#!">Πολιτική απορρήτου</Link>
                        <Link href="#!">Όροι χρήσης</Link>
                    </li>
                </ul>
            </AuthContentContainer>
            <AuthImageContainer>
                <Image layout="fill" src={AuthImage} priority />
                <AuthImageOverlay>
                    <AuthImageContent>
                        <Image
                            src={LogoSolid}
                            width={130}
                            height={160}
                            objectFit="contain"
                            priority
                        />
                        <p>
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Cum, fuga ipsam nulla optio accusantium alias
                            ut hic iste molestiae consequuntur saepe ullam quo,
                            dolor perferendis delectus quasi nemo vero quae?
                        </p>
                    </AuthImageContent>
                </AuthImageOverlay>
            </AuthImageContainer>
        </AuthLayout>
    );
};

export default Register;
