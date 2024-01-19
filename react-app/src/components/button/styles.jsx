import styled, { css } from "styled-components";

const primary = css`
  background: #426b1f;
`;

const secondary = css`
  background: blue;
`;

const danger = css`
  background: red;
`;

const Text = styled.span``;

const getVariant = (variant) => {
  switch (variant) {
    case "primary":
      return primary;
    case "secondary":
      return secondary;
    case "danger":
      return danger;
    default:
      return primary;
  }
};

const getSize = (size) => {
  switch (size) {
    case "s":
      return "12px";
    case "m":
      return "16px";
    case "l":
      return "20px";
    default:
      return "16px";
  }
};
const ButtonElement = styled.button`
  border: none;
  padding: 13.5px 23px;
  background-color: #426b1f;
  height: fit-content;
  width: fit-content;
  border-radius: 8px;
  color: #fff;
  font-size: 16px;
  cursor: pointer;
`;

const ButtonFullWidth = styled(ButtonElement)`
  width: 100%;
`;

export { ButtonElement, Text, ButtonFullWidth };
