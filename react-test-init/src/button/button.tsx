type Props = {
  label: string;
  onClick?: () => void;
};

const Button = ({ label, onClick }: Props) => {
  return (
    <button data-testid="button" onClick={onClick}>
      {label}
    </button>
  );
};

export { Button };
