import { useContext } from "react";
import { BasketContext } from "../context/basket-context";

const useBasketContext = () => {
  const { items, addItem, removeItem } = useContext(BasketContext);
  return { items, addItem, removeItem };
};

export { useBasketContext };
