import { InputErrorEl } from './styles';

const InputError = ({ messages }) => (
    <>
        {messages?.length > 0 && (
            <>
                {messages?.map((message, index) => (
                    <InputErrorEl key={index}>{message}</InputErrorEl>
                ))}
            </>
        )}
    </>
);

export default InputError;
