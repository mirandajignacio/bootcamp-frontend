import styled from "styled-components";

const NavElement = styled.nav`
  width: 100vw;
  position: sticky;
  top: 0;
  background-color: #fff;
  a {
    text-decoration: none;
    color: inherit;
  }
`;

const Content = styled.div`
  height: 112px;
  max-width: 1440px;
  margin: auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 48px;
  padding: 32px 96px;
  width: 100vw;
`;

const Title = styled.span`
  color: #426b1f;
  font-feature-settings: "clig" off, "liga" off;
  font-family: Newsreader;
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 32px */
  letter-spacing: -0.32px;
`;

const LinkList = styled.ul`
  margin-left: auto;
  display: flex;
  list-style-type: none;
  gap: 48px;
  a {
    text-decoration: none;
  }
`;

const LinkListItem = styled.li``;

export { NavElement, Content, Title, LinkList, LinkListItem };
