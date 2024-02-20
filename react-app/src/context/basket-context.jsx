import { useState, createContext } from "react";
import PropTypes from "prop-types";

const BasketContext = createContext(null);

const BasketContextProvider = ({ children }) => {
  const [produce, setProduce] = useState([]);

  const isInBasket = (item) => {
    return !!produce.find((i) => i.uid === item.uid);
  };

  const addProduct = (item) => {
    if (isInBasket(item)) {
      removeProduct(item);
      return;
    }
    setProduce((items) => [...items, item]);
  };

  const removeProduct = (item) => {
    setProduce((items) => items.filter((i) => i.uid !== item.uid));
  };

  return (
    <BasketContext.Provider
      value={{ produce, addProduct, removeProduct, isInBasket }}
    >
      {children}
    </BasketContext.Provider>
  );
};

BasketContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BasketContextProvider, BasketContext };
