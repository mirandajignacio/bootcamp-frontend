import { useState, createContext } from "react";
import PropTypes from "prop-types";

const BasketContext = createContext(null);

const BasketContextProvider = ({ children }) => {
  const [produce, setProduce] = useState([]);

  const addProduct = (item) => {
    console.log("add", item);
    setProduce((items) => [...items, item]);
  };

  const removeProduct = (item) => {
    console.log("remove", item);
    setProduce((items) => items.filter((i) => i.uid !== item.uid));
  };

  return (
    <BasketContext.Provider value={{ produce, addProduct, removeProduct }}>
      {children}
    </BasketContext.Provider>
  );
};

BasketContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { BasketContextProvider, BasketContext };
