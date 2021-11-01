import Input from './Input';
import TextArea from './TextArea';
import Password from './Password';

export type { InputProps } from './Input';
export type { TextAreaProps } from './TextArea';
export type { PasswordProps } from './Password';

Input.TextArea = TextArea;
Input.Password = Password;

export default Input;
