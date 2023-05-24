import { useEffect } from "react";
import Cart from "./components/Cart/Cart";
import Layout from "./components/Layout/Layout";
import Products from "./components/Shop/Products";
import { useSelector } from "react-redux";

function App() {
  const { cartIsVisible } = useSelector((state) => state.ui);
  const { selectedItems } = useSelector((state) => state.cart);

  useEffect(() => {
    console.log(selectedItems);
    fetch(
      "https://redux-advanced-a5c8f-default-rtdb.firebaseio.com/cart.json",
      { method: "PUT", body: JSON.stringify(selectedItems) }
    );
  }, [selectedItems]);
  return (
    <Layout>
      {cartIsVisible && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
