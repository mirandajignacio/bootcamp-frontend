import { Outlet } from "react-router-dom";
import { Navbar } from "../navbar";
import PropTypes from "prop-types";

const Layout = ({ onClickToggleTheme }) => {
  return (
    <>
      <Navbar onClickToggleTheme={onClickToggleTheme} />
      <Outlet />
    </>
  );
};

Layout.propTypes = {
  onClickToggleTheme: PropTypes.func.isRequired,
};

export { Layout };
