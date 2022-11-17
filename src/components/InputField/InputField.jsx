import { Input } from './styles';

const InputField = ({ type, name, value, onChange }) => (
  <Input type={type} name={name} value={value} onChange={onChange} />
);

export default InputField;
