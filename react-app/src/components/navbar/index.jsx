import { Link } from "react-router-dom";
import { Button } from "../button";
import { Content, LinkList, LinkListItem, NavElement, Title } from "./styles";
import PropTypes from "prop-types";
import { useBasketContext } from "../../hooks/use-basket-context";

const links = [
  {
    name: "Shop",
    url: "/produce",
  },
  {
    name: "New Stand",
    url: "#",
  },
  {
    name: "Who we are",
    url: "#",
  },
  {
    name: "My Profile",
    url: "#",
  },
];

const Navbar = () => {
  const { length } = useBasketContext();

  return (
    <NavElement>
      <Content className="content">
        <Link to="/">
          <Title> World Peas</Title>
        </Link>

        <LinkList>
          {links.map((link) => (
            <LinkListItem key={link.name}>
              <Link to={link.url}>{link.name}</Link>
            </LinkListItem>
          ))}
        </LinkList>
        <Link to="/basket">
          <Button>Basket{length ? ` (${length})` : ""}</Button>
        </Link>
      </Content>
    </NavElement>
  );
};

Navbar.propTypes = {
  onClickToggleTheme: PropTypes.func.isRequired,
};

export { Navbar };
