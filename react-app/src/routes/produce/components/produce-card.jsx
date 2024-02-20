import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.div`
  background: #fafaf5;
  border: 2px solid
    ${(props) =>
      props.inbasket === "true" ? props.theme.colors.primary : "#e6e6e6"};
  height: 444px;
  border-radius: 24px;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;
  &:hover {
    transform: scale(1.01);
  }
`;

const Description = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
`;

const Image = styled.img`
  width: 100%;
  height: 296px;
  object-fit: cover;
  border-top-left-radius: 24px;
  border-top-right-radius: 24px;
`;

const Name = styled.h2`
  font-family: Inter;
  font-size: 20px;
  font-weight: 600;
  color: #000000;
  margin-bottom: 4px;
`;

const Price = styled(Name)`
  color: ${(props) => props.theme.colors.primary};
  margin-bottom: 16px;
`;

const Information = styled.p`
  font-family: Inter;
  font-size: 16px;
  font-weight: 400;
  margin-bottom: 8px;
  color: #6d6d6d;
`;

const ProduceCard = ({
  onClick,
  price,
  information,
  inBasket,
  imageUrl,
  name,
}) => {
  return (
    <Container onClick={onClick} inbasket={String(inBasket)}>
      <Image src={imageUrl} />
      <Description>
        <Name>{name}</Name>
        <Price>{`$ ${price} / lb`}</Price>
        <Information>{information}</Information>
      </Description>
    </Container>
  );
};

ProduceCard.propTypes = {
  name: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  price: PropTypes.number.isRequired,
  information: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
  inBasket: PropTypes.bool.isRequired,
};

export { ProduceCard };
