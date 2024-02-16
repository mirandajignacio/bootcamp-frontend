import { PageContainer } from "../components/page-container";
import { useBasketContext } from "../hooks/use-basket-context";

const Basket = () => {
  const { produce } = useBasketContext();
  return (
    <PageContainer>
      <h1>Basket Page</h1>
      <p>Products in basket: {produce.length}</p>
      <p>produce: {JSON.stringify(produce)}</p>
      {/* Add your product list or other components here */}
    </PageContainer>
  );
};

export { Basket };
