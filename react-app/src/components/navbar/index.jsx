import { Link } from "react-router-dom";
import { Button } from "../button";
import { Content, LinkList, LinkListItem, NavElement, Title } from "./styles";

const links = [
  {
    name: "Shop",
    url: "#",
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
  return (
    <NavElement>
      <Content className="content">
        <Link to="/">
          <Title> World Peas</Title>
        </Link>

        <LinkList>
          {links.map((link) => (
            <LinkListItem key={link.name}>
              <a href={link.url}>{link.name}</a>
            </LinkListItem>
          ))}
        </LinkList>
        <Link to="/basket">
          <Button>Basket(3)</Button>
        </Link>
      </Content>
    </NavElement>
  );
};

export { Navbar };
