import { PageContainer } from "../components/page-container";
import { useBasketContext } from "../hooks/use-basket-context";
import styled from "styled-components";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  gap: 12px;
  width: 420px;
`;
const ButtonContainer = styled.div`
  grid-row: 1 / 3;
  grid-column: 1 / 3;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.button`
  align-self: center;
`;

const Children = styled.div`
  width: 32px;
  height: 32px;
  border: 1px solid;
`;
const Basket = () => {
  return (
    <Container>
      <ButtonContainer>
        <Button>Submit</Button>
      </ButtonContainer>
      <Children />
      <Children />
      <Children />
      <Children />
    </Container>
  );
};

export { Basket };
