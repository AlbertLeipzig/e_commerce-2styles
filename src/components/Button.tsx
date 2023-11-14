interface IProps {
  text: string;
  action: () => void;
}

export const Button: React.FC<IProps> = ({ text, action }) => {
  return <button onClick={action}>{text}</button>;
};
