import React from 'react';
import { AuthLayoutContainer } from './styles';

// eslint-disable-next-line react/prop-types
const AuthLayout = ({ children }) => {
    return <AuthLayoutContainer>{children}</AuthLayoutContainer>;
};

export default AuthLayout;
