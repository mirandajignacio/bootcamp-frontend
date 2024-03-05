import { useState, createContext, useReducer } from "react";
import PropTypes from "prop-types";

const BasketContext = createContext(null);

const BasketContextProvider = ({ children, defaultValue }) => {
  const [produce, setProduce] = useState([]);
  console.log(defaultValue);
  useReducer((state, action) => {
    switch (action.type) {
      case "add":
        return { ...state, produce: [...state.produce, action.payload] };
      case "remove":
        return {
          ...state,
          produce: state.produce.filter((i) => i.uid !== action.payload.uid),
        };
      default:
        return state;
    }
  });
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
