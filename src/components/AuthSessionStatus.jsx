const AuthSessionStatus = ({ status, ...props }) => (
    <>{status && <div {...props}>{status}</div>}</>
);

export default AuthSessionStatus;
