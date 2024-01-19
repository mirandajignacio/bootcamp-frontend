import { useBasketContext } from "../hooks/use-basket-context";

const Products = () => {
  const { addItem, removeItem } = useBasketContext();
  return (
    <div>
      <h1>Products Page</h1>
      <button
        onClick={() =>
          addItem({
            id: 1,
            name: "Product 1",
            price: 100,
          })
        }
      >
        Add Product 1
      </button>
      <button
        onClick={() =>
          addItem({
            id: 2,
            name: "Product 2",
            price: 100,
          })
        }
      >
        Add Product 2
      </button>
      <button
        onClick={() =>
          removeItem({
            id: 1,
          })
        }
      >
        Remove Product 1
      </button>
      <button
        onClick={() =>
          removeItem({
            id: 2,
          })
        }
      >
        Remove Product 2
      </button>
    </div>
  );
};

export { Products };
