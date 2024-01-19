import PropTypes from "prop-types";
import { ButtonElement } from "./styles";

const Button = ({ children }) => {
  return (
    <ButtonElement variant="secondary" size="s">
      {children}
    </ButtonElement>
  );
};

Button.propTypes = {
  children: PropTypes.node,
};

export { Button };
