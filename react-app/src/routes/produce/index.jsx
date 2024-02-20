import { useBasketContext } from "../../hooks/use-basket-context";
import styled from "styled-components";
import { useState } from "react";
import { ProduceCard } from "./components/produce-card";

const PageContainer = styled.div`
  max-width: 1440px;
  padding: 0 96px;
  margin: auto;
`;

const Title = styled.h1`
  font-feature-settings: "clig" off, "liga" off;
  font-family: Newsreader;
  font-size: 64px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%; /* 32px */
  letter-spacing: -0.32px;
  margin-right: 24px;
`;

const Hero = styled.div`
  padding-top: 56px;
  padding-bottom: 16px;
  display: flex;
  align-items: end;
  border-bottom: 1px solid #e6e6e6;
`;

const Subtitle = styled.h2`
  font-family: Inter;
  font-size: 20px;
  font-weight: 400;
  padding-bottom: 8px;
  strong {
    font-weight: 600;
  }
`;

const ButtonsWrapper = styled.div`
  display: flex;
  gap: 8px;
  padding-bottom: 8px;
  margin-left: auto;
`;

const Button = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid
    ${(props) => (props.selected ? props.theme.colors.primary : "#c2c2c2")};
  font-weight: bold;
  background-color: ${(props) =>
    props.selected ? props.theme.colors.primary : "transparent"};
  color: ${(props) => (props.selected ? "#fff" : "inherit")};
  font-size: 16px;
  cursor: pointer;
`;

const ProduceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(395px, 1fr));
  gap: 32px;
  margin-top: 40px;
  /* border: 1px solid red; */
  /* div {
    border: 1px solid blue;
    height: 444px;
    border-radius: 24px;
  } */
`;

const produceList = [
  {
    uid: "tomato",
    name: "Heirloom tomato",
    price: 5.99,
    information: "Grown in San Juan Capistrano, CA",
    imageUrl: "/tomato.png",
  },
  {
    uid: "organic-ginger",
    name: "Organic ginger",
    price: 12.99,
    information: "Grown in Huntington Beach, CA",
    imageUrl: "/ginger.png",
  },
  {
    uid: "onion",
    name: "Onion",
    price: 12.99,
    information: "Grown in Huntington Beach, CA",
    imageUrl: "/onion.png",
  },
];

const Produce = () => {
  const { addProduct, isInBasket } = useBasketContext();
  const [view, setView] = useState("grid");
  const viewButtonLabel = view === "grid" ? "List view" : "Grid view";
  const toggleView = () => setView(view === "grid" ? "list" : "grid");
  return (
    <PageContainer>
      <Hero>
        <Title>Produce</Title>
        <Subtitle>
          <strong>Fresh</strong> — August 21, 2023
        </Subtitle>
        <ButtonsWrapper>
          <Button selected={true}>Default</Button>
          <Button>A-Z</Button>
          <Button onClick={toggleView}>{viewButtonLabel}</Button>
        </ButtonsWrapper>
      </Hero>
      <ProduceGrid>
        {produceList.map((produce) => {
          const inBasket = isInBasket(produce);
          return (
            <ProduceCard
              key={produce.uid}
              {...produce}
              inBasket={inBasket}
              onClick={() => {
                addProduct(produce);
              }}
            />
          );
        })}
      </ProduceGrid>
    </PageContainer>
  );
};

export { Produce };
