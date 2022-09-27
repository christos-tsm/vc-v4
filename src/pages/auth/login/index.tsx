import Image from 'next/image';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

import AuthSessionStatus from '../../../components/AuthSessionStatus';
import Logo from '../../../../public/images/logo.svg';
import LogoSolid from '../../../../public/images/logo-solid.svg';
import AuthImage from '../../../../public/images/default.jpg';

import Input from '../../../components/Input';
import InputError from '../../../components/InputError';
import Link from 'next/link';
import { useAuth } from '../../../hooks/auth';
import { useEffect, useState } from 'react';
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
import { PageTitle, Paragraph, RowUL } from '../../../theme/typography';
import { Form } from '../../../theme/forms';
import { InputContainer } from '../../../components/Input/styles';
import Button from '../../../components/Button';

const Login = () => {
    const router = useRouter();

    const { login } = useAuth({
        middleware: 'guest',
        redirectIfAuthenticated: '/dashboard',
    });

    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [shouldRemember, setShouldRemember] = useState<boolean>(false);
    const [errors, setErrors] = useState<ErrorsProps>();
    const [status, setStatus] = useState(null);
    const [loading, setLoading] = useState<boolean>(false);

    useEffect(() => {
        if (
            router.query.reset?.length > 0 &&
            Object.keys(errors)?.length === 0
        ) {
            // @ts-ignore
            setStatus(atob(router.query.reset));
        } else {
            setStatus(null);
        }
    });

    const submitForm = async e => {
        e.preventDefault();

        setLoading(true);

        await login({
            email,
            password,
            remember: shouldRemember,
            setErrors,
            setStatus,
        });

        setLoading(false);
    };

    return (
        <AuthLayout>
            <AuthContentContainer>
                <Image src={Logo} width={165} height={124} />

                <AuthContent>
                    <PageTitle font900>Σύνδεση</PageTitle>
                    <Paragraph>
                        Συμπληρώστε την παρακάτω φόρμα, για να συνδεθείτε στον
                        λογαριασμό σας.
                        <br />
                        Δεν έχετε λογαριασμό; Πατήστε{' '}
                        <Link href="/auth/register">εδώ</Link>
                    </Paragraph>

                    <Form onSubmit={submitForm}>
                        <InputError messages={errors?.email} />

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
                        </InputContainer>

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
                                placeholder="******"
                            />

                            <InputError messages={errors?.password} />
                        </InputContainer>

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

                            {/* Remember Me */}
                            <InputCheckboxContainer>
                                <label htmlFor="remember_me">
                                    <input
                                        id="remember_me"
                                        type="checkbox"
                                        name="remember"
                                        onChange={event =>
                                            setShouldRemember(
                                                event.target.checked,
                                            )
                                        }
                                    />

                                    <span>
                                        Αυτόματη είσοδος σε κάθε επίσκεψη
                                    </span>
                                </label>
                            </InputCheckboxContainer>
                        </CheckboxesContainer>

                        <Button
                            variation="primary"
                            type="submit"
                            text={loading ? 'Γίνεται σύνδεση...' : 'Είσοδος'}
                            disabled={loading}
                        />

                        <div>
                            <Link href="/forgot-password">
                                <a>Ξεχάσατε τον κωδικό σας;</a>
                            </Link>
                        </div>
                    </Form>
                </AuthContent>

                <RowUL gap={20}>
                    <li>
                        <Link href="#!">Πολιτική απορρήτου</Link>
                    </li>
                    <li>
                        <Link href="#!">Όροι χρήσης</Link>
                    </li>
                </RowUL>
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

export default Login;
