import { useContext } from "react";
import { BasketContext } from "../context/basket-context";

const useBasketContext = () => {
  const { produce, addProduct, removeProduct, isInBasket } =
    useContext(BasketContext);

  const length = produce.length;
  return { produce, addProduct, removeProduct, length, isInBasket };
};

export { useBasketContext };
