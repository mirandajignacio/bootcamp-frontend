import PropTypes from "prop-types";

const Navbar = ({ name }) => {
  return (
    <nav>
      <ul>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/about">About</a>
        </li>
      </ul>
      <div>{name}</div>
    </nav>
  );
};

Navbar.propTypes = {
  name: PropTypes.string.isRequired,
};

export { Navbar };
