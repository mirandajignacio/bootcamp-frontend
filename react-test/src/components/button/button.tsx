type Props = {
  children: React.ReactNode;
  onClick?: () => void;
};

const Button = ({ children, onClick }: Props) => {
  return (
    <button data-testid="button" onClick={onClick}>
      {children}
    </button>
  );
};

export { Button };
