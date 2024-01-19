import { useState, createContext } from "react";

const BasketContext = createContext(null);

// eslint-disable-next-line react/prop-types
const BasketContextProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addItem = (item) => {
    console.log("add", item);
    setItems((items) => [...items, item]);
  };

  const removeItem = (item) => {
    console.log("remove", item);
    setItems((items) => items.filter((i) => i.id !== item.id));
  };

  return (
    <BasketContext.Provider value={{ items, addItem, removeItem }}>
      {children}
    </BasketContext.Provider>
  );
};

export { BasketContextProvider, BasketContext };
