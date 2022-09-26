import { InputEL } from './styles';

const Input = ({ disabled = false, ...props }) => (
    <InputEL disabled={disabled} {...props} />
);

export default Input;
