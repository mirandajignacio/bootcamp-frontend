import { useContext } from "react";
import { BasketContext } from "../context/basket-context";

const useBasketContext = () => {
  const { produce, addProduct, removeProduct } = useContext(BasketContext);
  return { produce, addProduct, removeProduct };
};

export { useBasketContext };
