const InputError = ({ messages }) => (
    <>
        {messages.length > 0 && (
            <>
                {messages.map((message, index) => (
                    <p key={index}>{message}</p>
                ))}
            </>
        )}
    </>
);

export default InputError;
