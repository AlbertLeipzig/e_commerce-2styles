import { IButton } from '../utils/interfaces';

export const Button: React.FC<IButton> = ({ text, action }) => {
  return <button onClick={action}>{text}</button>;
};
