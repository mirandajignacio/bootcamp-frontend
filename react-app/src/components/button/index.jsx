import PropTypes from "prop-types";
import { ButtonElement } from "./styles";

const Button = ({ children, ...rest }) => {
  return (
    <ButtonElement {...rest} variant="secondary" size="s">
      {children}
    </ButtonElement>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
};

export { Button };
