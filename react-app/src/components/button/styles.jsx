import styled from "styled-components";

const Text = styled.span``;

const ButtonElement = styled.button`
  border: none;
  padding: 13.5px 23px;
  background-color: ${(props) => props.theme.colors.primary};
  height: fit-content;
  width: fit-content;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;

  @media (max-width: ${(props) => props.theme.breakPoints.tablet}) {
    background: red;
  }

  @media (max-width: ${(props) => props.theme.breakPoints.mobile}) {
    background: blue;
  }
`;

const ButtonFullWidth = styled(ButtonElement)`
  width: 100%;
`;

export { ButtonElement, Text, ButtonFullWidth };
