import { useEffect, useState } from "react";

const UseEffect = () => {
  const [products, setProducts] = useState([]);

  

  useEffect(() => {
    console.log("useEffect");
    setProducts(["apple", "banana", "orange", "pear"]);

  }, []);

  useEffect(() => {
    console.log("products", products);
  }, [products]);


  return (
    <div>
      {products.map((product, index) => (
        <div key={index}>{product}</div>
      ))}
    </div>
  );
};

export { UseEffect };
